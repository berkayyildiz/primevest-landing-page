"use client";

import { useState } from "react";
import { Loader2, CheckCircle, MessageCircle } from "lucide-react";
import { COMPANY, GENERAL_INTEREST_ID } from "@/app/_lib/data";
import type { Dictionary } from "@/app/_lib/dictionaries";

type ContactFormDict = Dictionary["contactForm"];

interface ServiceOption {
  id: string;
  title: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

function buildWhatsAppUrl(
  data: FormData,
  interestLabel: string,
  dict: ContactFormDict
) {
  const lines = [
    dict.whatsappIntro,
    ``,
    `${dict.whatsappName}: ${data.name}`,
    `${dict.whatsappPhone}: ${data.phone}`,
  ];
  if (data.email) lines.push(`${dict.whatsappEmail}: ${data.email}`);
  if (interestLabel) lines.push(`${dict.whatsappInterest}: ${interestLabel}`);
  if (data.message) lines.push(`${dict.whatsappMessage}: ${data.message}`);

  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

const inputClasses =
  "w-full px-4 py-3.5 border border-line bg-paper text-sm text-text rounded-none placeholder:text-text-muted focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-colors";

export function ContactForm({
  dict,
  services = [],
  variant = "default",
}: {
  dict: ContactFormDict;
  // Localized service options for the interest select (default variant only);
  // pass dict.services.items. The submitted value is the locale-independent id.
  services?: ServiceOption[];
  variant?: "default" | "compact";
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError(dict.error);
    } finally {
      setLoading(false);
    }
  }

  const interestLabel =
    formData.interest === GENERAL_INTEREST_ID
      ? dict.generalInfo
      : services.find((s) => s.id === formData.interest)?.title ?? "";

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-16 h-16 border border-gold/50 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-7 h-7 text-gold-dark" strokeWidth={1.5} />
        </div>
        <h3 className="font-display text-2xl text-ink mb-2">
          {dict.successTitle}
        </h3>
        <p className="text-text-light text-sm">{dict.successText}</p>

        <div className="mt-7 pt-7 border-t border-line">
          <p className="text-text-muted text-sm mb-4">{dict.whatsappPrompt}</p>
          <a
            href={buildWhatsAppUrl(formData, interestLabel, dict)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-6 py-3.5 text-sm font-medium tracking-wide transition-colors w-full"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            {dict.whatsappContinue}
          </a>
        </div>
      </div>
    );
  }

  const isCompact = variant === "compact";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div
        className={
          isCompact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"
        }
      >
        <input
          type="text"
          name="name"
          placeholder={dict.namePlaceholder}
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClasses}
        />
        <input
          type="tel"
          name="phone"
          placeholder={dict.phonePlaceholder}
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClasses}
        />
        {!isCompact && (
          <input
            type="email"
            name="email"
            placeholder={dict.emailPlaceholder}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={inputClasses}
          />
        )}
        {!isCompact && (
          <select
            name="interest"
            value={formData.interest}
            onChange={(e) =>
              setFormData({ ...formData, interest: e.target.value })
            }
            className={`${inputClasses} text-text-light`}
          >
            <option value="">{dict.interestPlaceholder}</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
            <option value={GENERAL_INTEREST_ID}>{dict.generalInfo}</option>
          </select>
        )}
      </div>

      {!isCompact && (
        <textarea
          name="message"
          placeholder={dict.messagePlaceholder}
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className={`${inputClasses} resize-none`}
        />
      )}

      {error && <p className="text-red-600 text-sm text-center">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-ink hover:bg-gold text-paper hover:text-ink py-4 text-sm font-medium tracking-wide transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {dict.sending}
          </>
        ) : (
          <>{isCompact ? dict.submitCompact : dict.submit}</>
        )}
      </button>

      <p className="text-xs text-text-muted text-center">{dict.privacyNote}</p>
    </form>
  );
}
