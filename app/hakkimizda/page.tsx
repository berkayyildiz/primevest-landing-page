import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Heart, Eye, Users } from "lucide-react";
import { TEAM, getWhatsAppLink } from "@/app/_lib/data";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Primevest Investment ekibini tanıyın. 21 yıllık finans deneyimi ve Kuzey Kıbrıs'taki derin yerel bilgiyle güvenilir gayrimenkul danışmanlığı.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Hakkımızda
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
            Güvene dayalı danışmanlık modelimizle Kuzey Kıbrıs&apos;ta doğru
            yatırımın adresi.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-divider mb-6" />
              <h2 className="text-3xl font-bold text-primary">
                Primevest Investment Hikayesi
              </h2>
              <p className="text-text-light mt-4 leading-relaxed">
                Primevest Investment, 21 yıllık bankacılık kariyerinde Garanti
                BBVA, ING Bank ve Türk Ekonomi Bankası gibi sektörün önde gelen
                kurumlarında görev yapmış Gülay Yıldız tarafından kurulmuştur.
              </p>
              <p className="text-text-light mt-4 leading-relaxed">
                Yılların birikimini gayrimenkul ve yatırım danışmanlığına
                dönüştüren Gülay Yıldız, Kuzey Kıbrıs&apos;taki 8 yılı aşkın
                deneyimi, hem KKTC hem TC vatandaşlığı, geniş yerel ağı ve
                derin sektör bilgisiyle Primevest&apos;i sektörde güçlü bir
                konuma taşımıştır.
              </p>
              <p className="text-text-light mt-4 leading-relaxed">
                Bizi farklı kılan; yalnızca satış yapmak değil, birebir, güvene
                dayalı ve stratejik danışmanlık sunarak yatırımcıya doğru
                zamanda, doğru lokasyonda, doğru proje seçimini sağlamamızdır.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/projects/aloha-beach-resort/1.jpg"
                alt="Kuzey Kıbrıs manzarası"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary">Değerlerimiz</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-7 h-7" />,
                title: "Güven",
                desc: "Müşterilerimizle güvene dayalı, şeffaf ilişkiler kuruyoruz. Her adımda dürüst ve açık iletişim.",
              },
              {
                icon: <Target className="w-7 h-7" />,
                title: "Strateji",
                desc: "21 yıllık finans deneyimimizi stratejik yatırım danışmanlığına dönüştürüyoruz.",
              },
              {
                icon: <Eye className="w-7 h-7" />,
                title: "Vizyon",
                desc: "Teknolojiyi yatırım dünyasıyla buluşturan yenilikçi yaklaşımımızla geleceğe bakıyoruz.",
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "Birebir İlgi",
                desc: "Her yatırımcıya özel, kişiye özel danışmanlık modeli ile yanındayız.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-7 text-center hover:shadow-lg transition-all border border-transparent hover:border-accent/20"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mt-4">
                  {value.title}
                </h3>
                <p className="text-text-light text-sm mt-2">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary">Ekibimiz</h2>
            <p className="text-text-light mt-4 max-w-2xl mx-auto">
              Finans, teknoloji ve gayrimenkul alanlarında uzman kadromuzla size
              en doğru yönlendirmeyi sunuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-surface rounded-2xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="relative h-64 bg-primary-light overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary to-accent">
                      <span className="text-5xl font-bold text-white/30">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium">
                    {member.title}
                  </p>
                  <p className="text-text-light text-sm mt-3 line-clamp-4 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Birlikte Çalışalım
          </h2>
          <p className="text-white/80 mt-4 text-lg">
            Kuzey Kıbrıs&apos;ta doğru yatırım için uzman ekibimizle tanışın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 bg-white text-accent hover:bg-surface px-8 py-4 rounded-xl font-semibold transition-all"
            >
              İletişime Geçin
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              WhatsApp ile Yazın
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
