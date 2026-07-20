"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import type { Dictionary } from "@/app/_lib/dictionaries";

export function WhatsAppFAB({
  dict,
  contactPerson,
  whatsappUrl,
}: {
  dict: Dictionary["whatsappFab"];
  contactPerson: string;
  whatsappUrl: string;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white border border-line shadow-xl p-5 max-w-[280px] animate-fade-in-up">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-ink">
              {contactPerson}
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-text-muted hover:text-text p-1"
              aria-label={dict.close}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-text-light leading-relaxed mb-4">
            {dict.tooltipText}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-4 py-3 text-sm font-medium tracking-wide transition-colors w-full"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            {dict.cta}
          </a>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setShowTooltip(!showTooltip)}
        className="bg-[#25D366] hover:bg-[#1fb855] text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        aria-label={dict.open}
      >
        <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
      </button>
    </div>
  );
}
