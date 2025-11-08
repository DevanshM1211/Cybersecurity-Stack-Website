"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, User, Building, MessageSquare, Check } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { fetchJsonWithRetry } from "@/lib/fetch-with-retry";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    website: "", // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Execute reCAPTCHA if available; gracefully degrade if not configured
      const recaptchaToken = executeRecaptcha
        ? await executeRecaptcha("contact_form")
        : undefined;

      const data = await fetchJsonWithRetry(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formState,
            recaptchaToken,
          }),
        },
        {
          maxRetries: 2,
          initialDelay: 1000,
        }
      );

      setIsSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          company: "",
          message: "",
          website: "",
        });
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-dark opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-cyber-purple/10 border border-cyber-purple/30 rounded-full text-cyber-purple text-sm font-semibold mb-4"
            >
              Get in Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink">
                Transform
              </span>{" "}
              Your Security?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Get in touch to learn how the Resonance Protocol can protect your
              infrastructure with ransomware-resistant, integrity-first
              architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyber-blue/20 rounded-lg">
                  <Mail className="w-6 h-6 text-cyber-blue" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Email Us</div>
                  <a
                    href="mailto:contact@cybersecuritystack.com"
                    className="text-gray-400 hover:text-cyber-blue transition-colors"
                  >
                    contact@cybersecuritystack.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-cyber-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue focus:ring-2 focus:ring-cyber-blue/50 transition-colors"
                      placeholder="John Doe"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-cyber-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue focus:ring-2 focus:ring-cyber-blue/50 transition-colors"
                      placeholder="john@company.com"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company Name
                  </label>
                  <div className="relative">
                    <Building
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-cyber-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue focus:ring-2 focus:ring-cyber-blue/50 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Honeypot field - hidden from users */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formState.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-4 top-4 w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-cyber-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue focus:ring-2 focus:ring-cyber-blue/50 transition-colors resize-none"
                      placeholder="Tell us about your security needs..."
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                    role="alert"
                    aria-live="polite"
                  >
                    {error}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyber-blue/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label={isSubmitting ? "Sending message" : "Send message"}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} aria-hidden="true" />
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
                role="status"
                aria-live="polite"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex p-4 bg-green-500/20 rounded-full mb-4"
                >
                  <Check
                    className="w-12 h-12 text-green-400"
                    aria-hidden="true"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
