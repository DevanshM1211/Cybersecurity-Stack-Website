"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
    else setAccepted(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setAccepted(true);
    setVisible(false);
  };

  if (!visible || accepted) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center gap-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-primary-500/30 shadow-lg rounded-xl px-6 py-4 max-w-xl w-full">
        <Cookie className="w-6 h-6 text-primary-500 flex-shrink-0" />
        <div className="flex-1 text-gray-200 text-sm">
          We use cookies to improve your experience and analyse site usage. By
          clicking "Accept", you consent to our use of cookies. Read our{" "}
          <Link
            href="/cookies"
            className="underline text-primary-500 hover:text-primary-400"
          >
            Cookie Policy
          </Link>
          .
        </div>
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all flex-shrink-0"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
