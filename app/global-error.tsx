"use client";

import { useEffect } from "react";
import { AlertTriangle, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-cyber-dark">
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-2xl w-full text-center">
            <div className="bg-cyber-darker border border-red-500/20 rounded-2xl p-12">
              {/* Error Icon */}
              <div className="inline-flex p-6 bg-red-500/10 rounded-full mb-6">
                <AlertTriangle className="w-16 h-16 text-red-500" />
              </div>

              {/* Error Message */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Critical Error
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                We encountered a critical error. Please refresh the page or
                return to the home page.
              </p>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === "development" && error.message && (
                <div className="mb-8 p-4 bg-cyber-dark rounded-lg text-left">
                  <p className="text-sm text-red-400 font-mono break-words">
                    {error.message}
                  </p>
                  {error.digest && (
                    <p className="text-xs text-gray-500 mt-2">
                      Error ID: {error.digest}
                    </p>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg text-white font-semibold hover:opacity-90 transition-all"
                >
                  Try Again
                </button>

                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyber-dark border border-gray-700 rounded-lg text-white font-semibold hover:border-cyber-blue transition-all"
                >
                  <Home size={20} />
                  Go Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
