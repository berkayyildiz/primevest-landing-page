"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, MessageCircle } from "lucide-react";
import { COMPANY } from "@/app/_lib/data";

interface FormData {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

function buildWhatsAppUrl(data: FormData) {
  const lines = [
    `Merhaba, web siteniz üzerinden iletişime geçmek istiyorum.`,
    ``,
    `Ad Soyad: ${data.name}`,
    `Telefon: ${data.phone}`,
  ];
  if (data.email) lines.push(`E-posta: ${data.email}`);
  if (data.interest) lines.push(`İlgilenilen Proje: ${data.interest}`);
  if (data.message) lines.push(`Mesaj: ${data.message}`);

  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function ContactForm({ variant = "default" }: { variant?: "default" | "compact" }) {
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
      setError("Bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp ile ulaşın.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">
          Mesajınız Gönderildi
        </h3>
        <p className="text-text-light text-sm">
          En kısa sürede sizinle iletişime geçeceğiz.
        </p>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-text-muted text-sm mb-3">
            Hemen yanıt almak ister misiniz?
          </p>
          <a
            href={buildWhatsAppUrl(formData)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all w-full"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp ile Devam Edin
          </a>
        </div>
      </div>
    );
  }

  const isCompact = variant === "compact";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={isCompact ? "space-y-3" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <input
          type="text"
          name="name"
          placeholder="Adınız Soyadınız *"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefon Numaranız *"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
        />
        {!isCompact && (
          <input
            type="email"
            name="email"
            placeholder="E-posta Adresiniz"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          />
        )}
        {!isCompact && (
          <select
            name="interest"
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          >
            <option value="">İlgilendiğiniz Proje</option>
            <option value="Grand Sapphire Blu">Grand Sapphire Blu</option>
            <option value="Querencia">Querencia</option>
            <option value="D-Point">D-Point</option>
            <option value="Phuket Wellness">Phuket Wellness</option>
            <option value="Aloha Beach Resort">Aloha Beach Resort</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Casa Del Mare">Casa Del Mare</option>
            <option value="Courtyard Platinum">Courtyard Platinum</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Ocean Life Residence">Ocean Life Residence</option>
            <option value="Genel Bilgi">Genel Bilgi</option>
          </select>
        )}
      </div>

      {!isCompact && (
        <textarea
          name="message"
          placeholder="Mesajınız"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
        />
      )}

      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-accent hover:bg-accent-dark text-white py-3.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {isCompact ? "Hemen Bilgi Alın" : "Mesaj Gönderin"}
          </>
        )}
      </button>

      <p className="text-xs text-text-muted text-center">
        Bilgileriniz gizli tutulur ve üçüncü şahıslarla paylaşılmaz.
      </p>
    </form>
  );
}
