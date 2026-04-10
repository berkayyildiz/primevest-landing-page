import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Globe,
  PiggyBank,
  Sun,
  MapPin,
  Building2,
  Shield,
  Users,
  Award,
  Phone,
} from "lucide-react";
import {
  getFeaturedProjects,
  WHY_NORTH_CYPRUS,
  COMPANY,
  getWhatsAppLink,
} from "@/app/_lib/data";
import { ProjectCard } from "@/app/_components/project-card";
import { ContactForm } from "@/app/_components/contact-form";

const ICON_MAP: Record<string, React.ReactNode> = {
  "trending-up": <TrendingUp className="w-7 h-7" />,
  globe: <Globe className="w-7 h-7" />,
  "piggy-bank": <PiggyBank className="w-7 h-7" />,
  sun: <Sun className="w-7 h-7" />,
  "map-pin": <MapPin className="w-7 h-7" />,
  "building-2": <Building2 className="w-7 h-7" />,
};

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* ====== HERO ====== */}
      <section className="relative min-h-[90vh] flex items-center">
        <Image
          src="/images/projects/grand-sapphire-blu/1.webp"
          alt="Kuzey Kıbrıs gayrimenkul yatırımı"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white/90 text-sm mb-6">
              <MapPin className="w-4 h-4" />
              Kuzey Kıbrıs&apos;ın Güvenilir Yatırım Ortağı
            </div>
            <h1 className="hero-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Akdeniz&apos;in Yükselen Değerinde{" "}
              <span className="gradient-text">Doğru Yatırım</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-2xl leading-relaxed">
              21 yıllık finans deneyimi ve Kuzey Kıbrıs&apos;taki derin yerel
              bilgiyle, size özel stratejik gayrimenkul danışmanlığı sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/projeler"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:shadow-xl"
              >
                Projeleri Keşfedin
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                Hemen Arayın
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
            {[
              { value: "10+", label: "Premium Proje" },
              { value: "21", label: "Yıl Finans Deneyimi" },
              { value: "8+", label: "Yıl KKTC Tecrübesi" },
              { value: "%100", label: "Güvenilir Danışmanlık" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-4 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ABOUT PREVIEW ====== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-divider mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Neden Primevest?
              </h2>
              <p className="text-text-light mt-4 leading-relaxed text-lg">
                Primevest Investment, bankacılık sektöründe 21 yılı aşkın
                deneyime sahip Gülay Yıldız tarafından kurulan, Kuzey
                Kıbrıs&apos;a özel gayrimenkul yatırım danışmanlığı
                şirketidir.
              </p>
              <p className="text-text-light mt-4 leading-relaxed">
                Satış odaklı değil, güvene dayalı birebir danışmanlık
                modelimizle yatırımcılarımıza doğru zamanda, doğru lokasyonda,
                doğru proje seçimini sağlıyoruz. Hem KKTC hem TC vatandaşlığı,
                geniş yerel ağ ve derin sektör bilgimizle sektörde güçlü bir
                konumdayız.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { icon: <Shield className="w-6 h-6" />, label: "Güvenilir" },
                  { icon: <Users className="w-6 h-6" />, label: "Birebir Danışmanlık" },
                  { icon: <Award className="w-6 h-6" />, label: "Uzman Ekip" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-primary">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold mt-8 group"
              >
                Ekibimizi Tanıyın
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/projects/querencia/1.webp"
                alt="Kuzey Kıbrıs lüks yaşam"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURED PROJECTS ====== */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Öne Çıkan Projeler
            </h2>
            <p className="text-text-light mt-4 max-w-2xl mx-auto text-lg">
              Kuzey Kıbrıs&apos;ın en prestijli lokasyonlarında, özenle
              seçilmiş gayrimenkul yatırım fırsatları.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projeler"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
            >
              Tüm Projeleri Görüntüleyin
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== WHY NORTH CYPRUS ====== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Neden Kuzey Kıbrıs&apos;a Yatırım Yapmalısınız?
            </h2>
            <p className="text-text-light mt-4 max-w-2xl mx-auto text-lg">
              Akdeniz&apos;in doğusundaki bu cennet adası, gayrimenkul
              yatırımcıları için eşsiz fırsatlar sunuyor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_NORTH_CYPRUS.map((item) => (
              <div
                key={item.title}
                className="bg-surface rounded-2xl p-7 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-accent/20 group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  {ICON_MAP[item.icon]}
                </div>
                <h3 className="text-lg font-bold text-primary mt-5">
                  {item.title}
                </h3>
                <p className="text-text-light text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA / CONTACT ====== */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/projects/phuket-wellness/1.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Yatırımınıza Bugün Başlayın
              </h2>
              <p className="text-white/70 mt-4 text-lg leading-relaxed">
                Kuzey Kıbrıs gayrimenkul yatırımı hakkında sorularınız mı var?
                Size özel danışmanlık için hemen iletişime geçin. İlk
                görüşmemiz ücretsizdir.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-6 py-3.5 rounded-xl font-semibold transition-all"
                >
                  WhatsApp ile Yazın
                </a>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-6 py-3.5 rounded-xl font-semibold transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {COMPANY.phone}
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-primary mb-1">
                Ücretsiz Danışmanlık
              </h3>
              <p className="text-text-light text-sm mb-6">
                Bilgilerinizi bırakın, uzman ekibimiz sizi arasın.
              </p>
              <ContactForm variant="compact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
