import { type Locale, defaultLocale } from "./i18n";

export interface TeamMember {
  name: string;
  title: string;
  image: string | null;
  bio: string;
}

export const COMPANY = {
  name: "Primevest Investment",
  phone: "+90 533 886 07 37",
  email: "gulay@primevestinvestment.com",
  website: "www.primevestinvestment.com",
  instagram: "@primevestinvestment",
  whatsapp: "905338860737",
  whatsappMessage: {
    tr: "Merhaba, yatırım ve finansal danışmanlık hizmetleriniz hakkında bilgi almak istiyorum.",
    en: "Hello, I would like to get information about your investment and financial advisory services.",
  } satisfies Record<Locale, string>,
  address: {
    street: "Prof. Dr. Serdar Saydam Caddesi, Bereket Sokak No: 2/3",
    city: { tr: "İskele", en: "Iskele" } satisfies Record<Locale, string>,
    country: {
      tr: "Kuzey Kıbrıs (KKTC)",
      en: "North Cyprus (TRNC)",
    } satisfies Record<Locale, string>,
  },
  contactPerson: "Gülay Yıldız",
};

// The contact form's "general information" choice, alongside the service ids
// from the dictionaries. The API route maps these ids back to Turkish labels
// for the notification email.
export const GENERAL_INTEREST_ID = "genel-bilgi";

export function getWhatsAppLink(
  locale: Locale = defaultLocale,
  message?: string
): string {
  const msg = message || COMPANY.whatsappMessage[locale];
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`;
}

interface TeamL10n {
  title: string;
  bio: string;
}

const TEAM_BASE = [
  { key: "gulay", name: "Gülay Yıldız", image: "/images/team/gulay-yildiz.jpeg" },
  { key: "berkay", name: "Berkay Yıldız", image: "/images/team/berkay-yildiz.jpeg" },
  { key: "yagmur", name: "Yağmur Güzel", image: "/images/team/yagmur-guzel.jpeg" },
] as const;

const TEAM_L10N: Record<Locale, Record<string, TeamL10n>> = {
  tr: {
    gulay: {
      title: "Kurucu Ortak & Direktör",
      bio: "Ekonomi ve finans dünyasında 22 yılı aşkın deneyime sahip olan Gülay Yıldız, bireysel yatırımcılara yönelik yatırım ve finansal danışmanlık hizmeti sunan Primevest Investment'ın kurucusudur. Kariyeri boyunca Garanti BBVA, ING Bank ve Türk Ekonomi Bankası gibi sektörün önde gelen kurumlarında özel bankacılık, ticari bankacılık ve şube müdürlüğü gibi kritik görevlerde bulunmuş; binlerce bireysel ve kurumsal müşterinin birikim, kredi ve yatırım süreçlerini yönetmiştir. 22 yıllık bankacılık kariyerinin son 8 yılını Kuzey Kıbrıs'ta şube müdürü olarak geçiren Gülay Yıldız; KKTC ekonomisine, yerel bankacılık sistemine, mevzuata ve piyasa dinamiklerine sahada edinilmiş derin bir hâkimiyete sahiptir. Türkiye Cumhuriyeti ve Kuzey Kıbrıs Türk Cumhuriyeti vatandaşlığına sahip olması; her iki ekonomiyi eş zamanlı okuyabilme ve yatırımcının beklentilerini doğru analiz edebilme avantajı sunar. Bu çift perspektif, finansal kararlarda stratejik bir fark yaratmaktadır. Gülay Yıldız yatırımı; kısa vadeli kazanç arayışı olarak değil, doğru yapılandırıldığında uzun vadeli ve sürdürülebilir değer üreten bir finansal planlama süreci olarak ele alır. Bugün Primevest Investment çatısı altında; satış odaklı değil, güvene dayalı birebir danışmanlık modeliyle, yatırımcılarına hedeflerine ve risk profillerine uygun stratejilerle doğru zamanda, doğru araçlarla konumlanma imkânı sunmaktadır.",
    },
    berkay: {
      title: "Kurucu Ortak",
      bio: "Galatasaray Üniversitesi Bilgisayar Mühendisliği mezunudur. Teknolojiye olan tutkusu ile kendi markası FARAVA'yı kurmuş, geliştirdiği mobil uygulamaları farklı ülkelere başarıyla pazarlayarak uluslararası girişimcilik deneyimi kazanmıştır. Primevest Investment'ın kurucu ortağı olarak teknolojiyi yatırım ve finans dünyasıyla buluşturan yenilikçi projelere liderlik etmekte ve şirketin stratejik büyümesine katkı sağlamaktadır.",
    },
    yagmur: {
      title: "Dijital Stratejist",
      bio: "Mustafa Kemal Üniversitesi Bilişim Güvenliği bölümünden mezun olmuştur. Primevest Investment'ta markanın dijital kimliğini tasarlıyor ve bilişim bilgisini finans ile yatırım bilgisiyle birleştirerek yenilikçi çözümler üretiyor. Teknoloji ve yatırım danışmanlığını birleştiren yaklaşımıyla fark yaratmayı hedeflemektedir.",
    },
  },
  en: {
    gulay: {
      title: "Founder & Director",
      bio: "With more than 22 years of experience in economics and finance, Gülay Yıldız is the founder of Primevest Investment, an investment and financial advisory firm serving individual investors. Throughout her career she held key roles — private banking, commercial banking and branch management — at leading institutions such as Garanti BBVA, ING Bank and Türk Ekonomi Bankası, guiding the savings, credit and investment decisions of thousands of individual and corporate clients. Having spent the last 8 years of her 22-year banking career as a branch manager in North Cyprus, she has deep, first-hand command of the TRNC economy, its local banking system, regulations and market dynamics. Holding citizenship of both the Republic of Türkiye and the Turkish Republic of Northern Cyprus gives her the advantage of reading both economies simultaneously and accurately analysing investors' expectations. This dual perspective creates a strategic edge in financial decisions. Gülay Yıldız treats investing not as a pursuit of short-term gains, but as a financial planning process that — when structured correctly — generates long-term, sustainable value. Today, under the Primevest Investment umbrella, she offers investors the opportunity to position themselves at the right time, with the right instruments, through strategies matched to their goals and risk profiles — with a trust-based, one-on-one advisory model rather than a sales-driven one.",
    },
    berkay: {
      title: "Co-Founder",
      bio: "A Computer Engineering graduate of Galatasaray University. Driven by his passion for technology, he founded his own brand, FARAVA, and gained international entrepreneurship experience by successfully marketing the mobile apps he developed to different countries. As co-founder of Primevest Investment, he leads innovative projects that bring technology into the world of investment and finance and contributes to the company's strategic growth.",
    },
    yagmur: {
      title: "Digital Strategist",
      bio: "A graduate of the Information Security programme at Mustafa Kemal University. At Primevest Investment she designs the brand's digital identity and creates innovative solutions by combining her IT expertise with finance and investment knowledge. She aims to make a difference with an approach that unites technology and investment advisory.",
    },
  },
};

export function getTeam(locale: Locale): TeamMember[] {
  return TEAM_BASE.map((member) => ({
    name: member.name,
    image: member.image,
    ...TEAM_L10N[locale][member.key],
  }));
}

// The founder's team entry — the JSON-LD blocks read name/title/photo from
// here so those facts live in one place.
export function getFounder(locale: Locale): TeamMember {
  const team = getTeam(locale);
  return team.find((member) => member.name === COMPANY.contactPerson) ?? team[0];
}
