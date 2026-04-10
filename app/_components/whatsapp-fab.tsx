"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { COMPANY, getWhatsAppLink } from "@/app/_lib/data";

export function WhatsAppFAB() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-[280px] animate-fade-in-up border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-primary">
              {COMPANY.contactPerson}
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-text-muted hover:text-text p-1"
              aria-label="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-text-light mb-3">
            Kuzey Kıbrıs gayrimenkul yatırımı hakkında sorularınız mı var?
            Hemen yazın, size yardımcı olalım.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors w-full"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp ile Yazın
          </a>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setShowTooltip(!showTooltip)}
        className="bg-[#25D366] hover:bg-[#1fb855] text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="WhatsApp ile iletişime geçin"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
