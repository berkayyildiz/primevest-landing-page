import { Resend } from "resend";
import trDict from "@/app/_lib/dictionaries/tr.json";
import enDict from "@/app/_lib/dictionaries/en.json";
import { GENERAL_INTEREST_ID } from "@/app/_lib/data";

// User input is rendered inside the notification email's HTML body, so every
// field must be escaped to keep attacker-controlled markup out of it.
function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// The form submits a locale-independent service id; the email always shows
// the Turkish service title since its recipient reads Turkish. Both locales'
// ids map positionally onto the Turkish titles.
const INTEREST_LABELS: Record<string, string> = Object.fromEntries([
  ...trDict.services.items.map((item) => [item.id, item.title]),
  ...enDict.services.items.map((item, i) => [
    item.id,
    trDict.services.items[i].title,
  ]),
  [GENERAL_INTEREST_ID, trDict.contactForm.generalInfo],
]);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, interest, message } = body;

    if (typeof name !== "string" || typeof phone !== "string" || !name || !phone) {
      return Response.json(
        { error: "Ad ve telefon zorunludur." },
        { status: 400 }
      );
    }

    const fields = {
      name,
      phone,
      email: typeof email === "string" ? email : "",
      interest:
        typeof interest === "string"
          ? INTEREST_LABELS[interest] ?? interest
          : "",
      message: typeof message === "string" ? message : "",
    };
    const safe = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => [key, escapeHtml(value)])
    ) as Record<keyof typeof fields, string>;

    // Instantiated per-request: the constructor throws without an API key,
    // which would otherwise crash the whole build/server at import time.
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Primevest Website <onboarding@resend.dev>",
      to: "gulay@primevestinvestment.com",
      subject: `Yeni İletişim Talebi: ${name.replace(/[\r\n]+/g, " ")}`,
      html: `
        <h2>Yeni İletişim Talebi</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Ad Soyad</td><td style="padding:8px;border-bottom:1px solid #eee">${safe.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Telefon</td><td style="padding:8px;border-bottom:1px solid #eee">${safe.phone}</td></tr>
          ${safe.email ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">E-posta</td><td style="padding:8px;border-bottom:1px solid #eee">${safe.email}</td></tr>` : ""}
          ${safe.interest ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">İlgilenilen Hizmet</td><td style="padding:8px;border-bottom:1px solid #eee">${safe.interest}</td></tr>` : ""}
          ${safe.message ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Mesaj</td><td style="padding:8px;border-bottom:1px solid #eee">${safe.message}</td></tr>` : ""}
        </table>
        <p style="color:#888;font-size:12px;margin-top:20px">Bu mesaj primevestinvestment.com iletişim formundan gönderilmiştir.</p>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Mesaj gönderilemedi. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
