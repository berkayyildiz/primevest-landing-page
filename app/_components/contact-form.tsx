"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

export function ContactForm({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">
          Talebiniz Alındı
        </h3>
        <p className="text-text-light">
          En kısa sürede sizinle iletişime geçeceğiz.
        </p>
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
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefon Numaranız *"
          required
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
        />
        {!isCompact && (
          <input
            type="email"
            name="email"
            placeholder="E-posta Adresiniz"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          />
        )}
        {!isCompact && (
          <select
            name="interest"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          >
            <option value="">İlgilendiğiniz Proje</option>
            <option value="grand-sapphire-blu">Grand Sapphire Blu</option>
            <option value="querencia">Querencia</option>
            <option value="d-point">D-Point</option>
            <option value="phuket-wellness">Phuket Wellness</option>
            <option value="aloha-beach-resort">Aloha Beach Resort</option>
            <option value="bahamas">Bahamas</option>
            <option value="casa-del-mare">Casa Del Mare</option>
            <option value="courtyard-platinum">Courtyard Platinum</option>
            <option value="hawaii">Hawaii</option>
            <option value="ocean-life-residence">Ocean Life Residence</option>
            <option value="genel">Genel Bilgi</option>
          </select>
        )}
      </div>

      {!isCompact && (
        <textarea
          name="message"
          placeholder="Mesajınız"
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
        />
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
