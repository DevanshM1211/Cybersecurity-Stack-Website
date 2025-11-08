"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ReactNode } from "react";

export function RecaptchaProvider({ children }: { children: ReactNode }) {
  // Use environment variable for reCAPTCHA site key
  // For development, you can use a test key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  if (!recaptchaKey) {
    console.warn(
      "NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set. CAPTCHA will not work."
    );
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
