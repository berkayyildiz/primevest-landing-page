import type { Metadata } from "next";
import { MapPin, Phone, Mail, Globe, Clock, MessageCircle } from "lucide-react";
import { COMPANY, getWhatsAppLink } from "@/app/_lib/data";
import { ContactForm } from "@/app/_components/contact-form";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Primevest Investment ile iletişime geçin. Kuzey Kıbrıs gayrimenkul yatırımı için ücretsiz danışmanlık randevusu alın.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            İletişim
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
            Kuzey Kıbrıs gayrimenkul yatırımı hakkında sorularınız mı var?
            Hemen bize ulaşın.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="section-divider mb-4" />
                <h2 className="text-2xl font-bold text-primary">
                  Bize Ulaşın
                </h2>
                <p className="text-text-light mt-2">
                  Size özel danışmanlık için hemen iletişime geçin. İlk
                  görüşmemiz ücretsizdir.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">Telefon</div>
                    <div className="font-semibold text-primary">
                      {COMPANY.phone}
                    </div>
                    <div className="text-sm text-text-light">
                      {COMPANY.contactPerson}
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">WhatsApp</div>
                    <div className="font-semibold text-primary">
                      Hemen Yazın
                    </div>
                    <div className="text-sm text-text-light">
                      Hızlı yanıt garantisi
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">E-posta</div>
                    <div className="font-semibold text-primary">
                      {COMPANY.email}
                    </div>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">Ofis Adresi</div>
                    <div className="font-semibold text-primary">
                      {COMPANY.address.street}
                    </div>
                    <div className="text-sm text-text-light">
                      {COMPANY.address.city}, {COMPANY.address.country}
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">Çalışma Saatleri</div>
                    <div className="font-semibold text-primary">
                      Pazartesi - Cumartesi
                    </div>
                    <div className="text-sm text-text-light">
                      09:00 - 18:00
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <a
                  href="https://instagram.com/primevestinvestment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">Instagram</div>
                    <div className="font-semibold text-primary">
                      {COMPANY.instagram}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-1">
                  Bilgi Talep Formu
                </h3>
                <p className="text-text-light text-sm mb-6">
                  Formu doldurun, uzman ekibimiz en kısa sürede size dönüş
                  yapsın.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] bg-surface-dark relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.5!2d33.9!3d35.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE4JzAwLjAiTiAzM8KwNTQnMDAuMCJF!5e0!3m2!1str!2s!4v1"
          className="w-full h-full border-0 grayscale"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Primevest Investment Ofis Konumu"
        />
      </section>
    </>
  );
}
