import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key from environment variables (optional for build)
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Simple in-memory rate limiting (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3; // Max requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          code: "RATE_LIMIT_EXCEEDED",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, company, message, recaptchaToken, website } = body;

    // Honeypot check - if website field is filled, it's likely a bot
    if (website) {
      console.warn("Honeypot triggered:", { ip, email });
      // Return success to avoid tipping off bots
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    }

    // Verify reCAPTCHA token
    if (recaptchaToken) {
      try {
        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
        if (recaptchaSecret) {
          const recaptchaResponse = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
            }
          );

          const recaptchaData = await recaptchaResponse.json();

          if (!recaptchaData.success || recaptchaData.score < 0.5) {
            console.warn("reCAPTCHA verification failed:", {
              ip,
              score: recaptchaData.score,
            });
            return NextResponse.json(
              {
                error:
                  "Spam detection triggered. Please try again or contact us directly.",
                code: "CAPTCHA_FAILED",
              },
              { status: 400 }
            );
          }
        }
      } catch (captchaError) {
        console.error("reCAPTCHA verification error:", captchaError);
        // Continue even if CAPTCHA verification fails (fallback to other checks)
      }
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Missing required fields. Please fill in all required fields.",
          code: "MISSING_FIELDS",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error: "Invalid email address format.",
          code: "INVALID_EMAIL",
        },
        { status: 400 }
      );
    }

    // Basic spam detection - check for suspicious patterns
    const spamPatterns = [
      /\b(viagra|cialis|casino|lottery|prize)\b/i,
      /\b(click here|buy now|limited time)\b/i,
      /(http|https):\/\/[^\s]+/gi, // Multiple URLs
    ];

    const combinedText = `${name} ${email} ${company} ${message}`.toLowerCase();
    const urlCount = (combinedText.match(/(http|https):\/\/[^\s]+/gi) || [])
      .length;

    if (
      spamPatterns.some((pattern) => pattern.test(combinedText)) ||
      urlCount > 2
    ) {
      return NextResponse.json(
        {
          error:
            "Message flagged as potential spam. Please contact us directly at contact@cybersecuritystack.com",
          code: "SPAM_DETECTED",
        },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend) {
      console.error("Resend API key not configured");
      return NextResponse.json(
        {
          error:
            "Email service is currently unavailable. Please contact us directly at contact@cybersecuritystack.com",
          code: "SERVICE_UNAVAILABLE",
        },
        { status: 503 }
      );
    }

    // Resolve sender/recipient from env with safe defaults
    const FROM =
      process.env.CONTACT_FROM ||
      "Cyber Security Stack <no-reply@cybersecuritystack.co.uk>";
    const TO = process.env.CONTACT_TO || "contact@cybersecuritystack.com";

    // Send email using Resend (resend is guaranteed to be non-null here)
    const data = await resend!.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #1e3a8a 0%, #6366f1 100%); padding: 30px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="color: #1e3a8a; margin-top: 0;">Contact Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
                  </tr>
                  ${
                    company
                      ? `
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Company:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${company}</td>
                  </tr>
                  `
                      : ""
                  }
                </table>
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px;">
                <h2 style="color: #1e3a8a; margin-top: 0;">Message</h2>
                <p style="white-space: pre-wrap; margin: 0;">${message}</p>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-left: 4px solid #1e3a8a; border-radius: 4px;">
                <p style="margin: 0; font-size: 14px; color: #1e3a8a;">
                  <strong>💡 Tip:</strong> Click reply to respond directly to ${name}
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                This email was sent from the Cyber Security Stack website contact form
              </p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Determine error type and provide appropriate message
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json(
      {
        error: "Failed to send email. Please try again later.",
        code: "INTERNAL_ERROR",
        details:
          process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
