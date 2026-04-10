import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, interest, message } = body;

    if (!name || !phone) {
      return Response.json(
        { error: "Ad ve telefon zorunludur." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Primevest Website <onboarding@resend.dev>",
      to: "berkay.yildiz@frava.app",
      subject: `Yeni İletişim Talebi: ${name}`,
      html: `
        <h2>Yeni İletişim Talebi</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Ad Soyad</td><td style="padding:8px;border-bottom:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Telefon</td><td style="padding:8px;border-bottom:1px solid #eee">${phone}</td></tr>
          ${email ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">E-posta</td><td style="padding:8px;border-bottom:1px solid #eee">${email}</td></tr>` : ""}
          ${interest ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">İlgilenilen Proje</td><td style="padding:8px;border-bottom:1px solid #eee">${interest}</td></tr>` : ""}
          ${message ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Mesaj</td><td style="padding:8px;border-bottom:1px solid #eee">${message}</td></tr>` : ""}
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
