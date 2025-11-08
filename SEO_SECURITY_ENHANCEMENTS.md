# SEO & Security Enhancements Documentation

This document outlines the SEO enhancements, CAPTCHA integration, error handling improvements, and retry mechanisms implemented for the Cyber Security Stack website.

## 📈 SEO Enhancements

### Structured Data (JSON-LD)

Implemented comprehensive structured data across the website to improve search engine visibility and rich snippet display.

#### Organization Schema (Root Layout)

- Organization details with founding information
- Contact information and social media links
- Service offerings and expertise areas
- Located in: `app/layout.tsx`

#### Breadcrumb Navigation

Added breadcrumb structured data to all major pages:

- `/protocol` - Resonance Protocol page
- `/whitepapers` - Whitepapers collection page
- `/contact` - Contact page

#### Collection Page Schema

- Whitepapers page includes `CollectionPage` and `ItemList` schema
- Each whitepaper is marked up as `ScholarlyArticle`
- Includes publication dates, page counts, and authors

### Enhanced Metadata

#### Global Improvements

- Enhanced Open Graph tags for better social sharing
- Twitter Card metadata for rich previews
- Comprehensive keyword optimization
- Canonical URLs for all pages
- British English keywords and descriptions

#### Page-Specific Metadata

Each major page now includes:

- Unique, descriptive titles
- SEO-optimized descriptions
- Relevant keywords
- Open Graph data
- Canonical URLs

### Google Analytics Integration

- Environment variable-based configuration
- Only loads when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
- IP anonymization enabled for privacy compliance
- Located in: `app/layout.tsx`

**Setup:**

```bash
# Add to .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🛡️ CAPTCHA Integration

### Google reCAPTCHA v3

Implemented invisible reCAPTCHA v3 for spam protection on the contact form.

#### Features

- Invisible verification (no user interaction required)
- Score-based bot detection (threshold: 0.5)
- Graceful degradation if CAPTCHA is not configured
- Server-side verification in API route

#### Setup

1. Get reCAPTCHA keys from [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)

2. Add environment variables:

```bash
# .env.local
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

3. The implementation is in:
   - Context Provider: `contexts/RecaptchaContext.tsx`
   - Contact Form: `components/ContactForm.tsx`
   - API Validation: `app/api/contact/route.ts`

#### Development/Testing

For local development, you can use Google's test keys:

- Site Key: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`
- Secret Key: `6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe`

### Honeypot Field

Additional spam protection with a hidden field:

- Field name: `website`
- Hidden from real users
- If filled, submission is silently discarded
- No feedback to bots to avoid tipping them off

## 🔧 Error Handling

### Custom Error Pages

#### Client-Side Error Page (`app/error.tsx`)

- Catches errors in page components
- Displays user-friendly error messages
- Includes "Try Again" and "Go Home" actions
- Shows error details in development mode
- Error digest/ID for tracking

#### Global Error Page (`app/global-error.tsx`)

- Catches critical application-wide errors
- Minimal design for reliability
- Fallback when main layout fails
- Basic recovery options

### Features

- 🎨 Consistent design with the rest of the site
- 🔍 Error logging for debugging
- 💪 Recovery mechanisms (reset, navigate home)
- 🛠️ Development mode shows error details
- 🎭 Production mode hides sensitive information

## 🔄 Retry Mechanisms

### Fetch with Retry Utility

Implemented automatic retry logic for failed API requests with exponential backoff.

**Location:** `lib/fetch-with-retry.ts`

#### Features

- **Exponential backoff** - Progressive delay between retries
- **Jitter** - Randomization to prevent thundering herd
- **Configurable retries** - Customize max attempts and delays
- **Status-based retries** - Only retry on specific HTTP statuses
- **Type-safe** - Full TypeScript support

#### Usage

```typescript
import { fetchWithRetry, fetchJsonWithRetry } from "@/lib/fetch-with-retry";

// Basic usage
const response = await fetchWithRetry("/api/endpoint", {
  method: "POST",
  body: JSON.stringify(data),
});

// With custom options
const data = await fetchJsonWithRetry(
  "/api/data",
  {
    method: "GET",
  },
  {
    maxRetries: 3,
    initialDelay: 1000, // 1 second
    maxDelay: 10000, // 10 seconds
    backoffMultiplier: 2,
    retryableStatuses: [408, 429, 500, 502, 503, 504],
  }
);
```

#### Default Configuration

- **Max Retries:** 3
- **Initial Delay:** 1000ms (1 second)
- **Max Delay:** 10000ms (10 seconds)
- **Backoff Multiplier:** 2x
- **Retryable Statuses:** 408, 429, 500, 502, 503, 504

#### Contact Form Integration

The contact form now uses `fetchJsonWithRetry` to automatically retry failed submissions:

- Up to 2 retry attempts
- 1-second initial delay
- Provides better user experience during temporary network issues

## 🚨 Improved API Error Messages

### Contact API Route

Enhanced error responses with:

- **Error Codes** - Machine-readable error identifiers
- **Detailed Messages** - Clear, actionable error descriptions
- **Honeypot Detection** - Silent handling of bot submissions
- **CAPTCHA Verification** - Score-based spam detection
- **Input Validation** - Comprehensive field validation
- **Rate Limiting** - Protection against abuse

#### Error Response Format

```json
{
  "error": "Human-readable error message",
  "code": "MACHINE_READABLE_CODE",
  "details": "Additional context (development only)"
}
```

#### Error Codes

| Code                  | Description                   | Status |
| --------------------- | ----------------------------- | ------ |
| `RATE_LIMIT_EXCEEDED` | Too many requests from IP     | 429    |
| `CAPTCHA_FAILED`      | reCAPTCHA verification failed | 400    |
| `MISSING_FIELDS`      | Required fields not provided  | 400    |
| `INVALID_EMAIL`       | Email format is invalid       | 400    |
| `SPAM_DETECTED`       | Content flagged as spam       | 400    |
| `SERVICE_UNAVAILABLE` | Email service not configured  | 503    |
| `INTERNAL_ERROR`      | Server error occurred         | 500    |

### LinkedIn API Routes

Enhanced error handling in LinkedIn feed endpoints:

- **Authentication Errors** - Clear messaging for credential issues
- **Rate Limit Detection** - Specific handling for API limits
- **Graceful Degradation** - Returns empty array instead of errors
- **Detailed Logging** - Server-side error tracking
- **Error Classification** - Categorized error responses

#### LinkedIn Error Codes

| Code             | Description                  |
| ---------------- | ---------------------------- |
| `NOT_CONFIGURED` | LinkedIn credentials not set |
| `AUTH_ERROR`     | Authentication failed        |
| `RATE_LIMIT`     | API rate limit exceeded      |
| `FETCH_ERROR`    | General fetch failure        |

## 📝 Environment Variables

All required environment variables are documented in `.env.example`:

```bash
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google reCAPTCHA v3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key

# Resend Email API
RESEND_API_KEY=re_xxxxx

# LinkedIn OAuth (optional)
LINKEDIN_CLIENT_ID=your_client_id
LINKEDIN_CLIENT_SECRET=your_client_secret
LINKEDIN_REDIRECT_URI=https://your-domain.com/api/linkedin/oauth/callback

# Google Sheets (optional)
GOOGLE_SHEETS_API_KEY=your_api_key
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
```

## 🧪 Testing

### Build Verification

```bash
npm run build
```

Expected: Clean build with no errors

### Development Testing

```bash
npm run dev
```

### Test CAPTCHA

1. Set up reCAPTCHA keys (or use test keys)
2. Navigate to `/contact`
3. Submit the form
4. Check browser console and server logs for verification

### Test Error Pages

1. Navigate to any page
2. Add `?error=test` to URL
3. Verify error page displays correctly

### Test Retry Mechanism

1. Set up network throttling
2. Submit contact form
3. Check console for retry attempts

## 🚀 Deployment Checklist

- [ ] Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in production
- [ ] Configure reCAPTCHA keys for production domain
- [ ] Set up Resend API key and verified domain
- [ ] Test contact form in production
- [ ] Verify structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor error logs for issues
- [ ] Test error pages in production

## 📊 SEO Verification Tools

Use these tools to verify the SEO enhancements:

1. **Google Rich Results Test**

   - URL: https://search.google.com/test/rich-results
   - Test all pages for structured data

2. **Schema Markup Validator**

   - URL: https://validator.schema.org/
   - Validate JSON-LD markup

3. **Google Search Console**

   - Submit sitemap
   - Monitor search performance
   - Check for structured data errors

4. **Open Graph Debugger**
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

## 🔐 Security Considerations

1. **Environment Variables**

   - Never commit `.env` or `.env.local` files
   - Use different keys for development and production
   - Rotate API keys periodically

2. **CAPTCHA**

   - Monitor reCAPTCHA score threshold
   - Adjust score requirement based on spam levels
   - Keep secret key secure

3. **Rate Limiting**

   - Current implementation uses in-memory storage
   - Consider Redis for production/multi-server deployments
   - Monitor for abuse patterns

4. **Error Messages**
   - Production mode hides detailed errors
   - Error details only shown in development
   - Sensitive information never exposed to clients

## 📚 Additional Resources

- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google reCAPTCHA v3 Docs](https://developers.google.com/recaptcha/docs/v3)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Resend Documentation](https://resend.com/docs)

## 🆘 Troubleshooting

### CAPTCHA Not Working

- Check environment variables are set
- Verify domain is registered in reCAPTCHA console
- Check browser console for errors
- Ensure site key is public, secret key is server-side only

### Contact Form Errors

- Verify Resend API key is valid
- Check email address is verified in Resend
- Monitor server logs for detailed errors
- Test with development error details enabled

### Structured Data Not Showing

- Use Google Rich Results Test
- Allow time for Google to reindex (can take days)
- Verify JSON-LD syntax is valid
- Check for JavaScript errors blocking rendering

### Build Warnings

- "CAPTCHA not configured" is expected without keys
- Set `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` to remove warning
- Safe to deploy - CAPTCHA gracefully degrades
