import { type Locale, defaultLocale } from "./i18n";

export interface Project {
  slug: string;
  name: string;
  location: string;
  region: "girne" | "iskele";
  sizeRange: string;
  bedrooms: string;
  totalUnits: number;
  unitTypes: string[];
  completion: string;
  features: string[];
  description: string;
  shortDescription: string;
  images: string[];
  imageExtension: string;
  imageCount: number;
  status: "sale" | "presale";
  featured: boolean;
}

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
    tr: "Merhaba, Kuzey Kıbrıs projeleri ve yatırım fırsatları hakkında bilgi almak istiyorum.",
    en: "Hello, I would like to get information about your North Cyprus projects and investment opportunities.",
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
      bio: "Bankacılık ve finans sektöründe 22 yılı aşkın deneyime sahip olup, Kuzey Kıbrıs'a odaklı gayrimenkul yatırım danışmanlığı hizmeti sunan Primevest Investment'ın kurucusudur. Kariyeri boyunca Garanti BBVA, ING Bank ve Türk Ekonomi Bankası gibi sektörün önde gelen kurumlarında özel bankacılık, ticari bankacılık ve şube müdürlüğü gibi kritik görevlerde bulunmuştur. 22 yıllık bankacılık kariyerinin son 8 yılını Kuzey Kıbrıs'ta şube müdürü olarak geçiren Gülay Yıldız; yatırım finansmanı, yerel mevzuat ve piyasa dinamiklerine hâkimiyetiyle, yatırım süreçlerini yöneten tarafta yer almıştır. Türkiye Cumhuriyeti ve Kuzey Kıbrıs Türk Cumhuriyeti vatandaşlığına sahip olması; yatırımcının beklentilerini doğru analiz edebilme ve yerel sistemin işleyişini eş zamanlı değerlendirebilme avantajı sunar. Bu çift perspektif, yatırım kararlarında stratejik bir fark yaratmaktadır. Gülay Yıldız, gayrimenkulü yalnızca alınıp satılan bir varlık olarak değil; doğru yapılandırıldığında uzun vadeli ve sürdürülebilir değer üreten bir finansal enstrüman olarak ele alır. Bugün Primevest Investment çatısı altında; satış odaklı değil, güvene dayalı birebir danışmanlık modeliyle, yatırımcılarına doğru zamanda, doğru lokasyonda ve doğru projede konumlanma imkânı sunmaktadır.",
    },
    berkay: {
      title: "Kurucu Ortak",
      bio: "Galatasaray Üniversitesi Bilgisayar Mühendisliği mezunudur. Teknolojiye olan tutkusu ile kendi markası FARAVA'yı kurmuş, geliştirdiği mobil uygulamaları farklı ülkelere başarıyla pazarlayarak uluslararası girişimcilik deneyimi kazanmıştır. Primevest Investment'ın kurucu ortağı olarak teknolojiyi yatırım dünyasıyla buluşturan yenilikçi projelere liderlik etmekte ve şirketin stratejik büyümesine katkı sağlamaktadır.",
    },
    yagmur: {
      title: "Dijital Stratejist",
      bio: "Mustafa Kemal Üniversitesi Bilişim Güvenliği bölümünden mezun olmuştur. Primevest Investment'ta markanın dijital kimliğini tasarlıyor ve bilişim bilgisini gayrimenkul ile yatırım bilgisiyle birleştirerek yenilikçi çözümler üretiyor. Teknoloji ve yatırım danışmanlığını birleştiren yaklaşımıyla fark yaratmayı hedeflemektedir.",
    },
  },
  en: {
    gulay: {
      title: "Founder & Director",
      bio: "With more than 22 years of experience in banking and finance, she is the founder of Primevest Investment, a real estate investment advisory focused on North Cyprus. Throughout her career she held key roles — private banking, commercial banking and branch management — at leading institutions such as Garanti BBVA, ING Bank and Türk Ekonomi Bankası. Having spent the last 8 years of her 22-year banking career as a branch manager in North Cyprus, Gülay Yıldız sat on the side of the table that manages investment processes, with deep command of investment financing, local regulations and market dynamics. Holding citizenship of both the Republic of Türkiye and the Turkish Republic of Northern Cyprus gives her the advantage of accurately analysing investors' expectations while simultaneously assessing how the local system works. This dual perspective creates a strategic edge in investment decisions. Gülay Yıldız treats real estate not merely as an asset to be bought and sold, but as a financial instrument that — when structured correctly — generates long-term, sustainable value. Today, under the Primevest Investment umbrella, she offers investors the opportunity to position themselves in the right project, at the right time and in the right location, through a trust-based, one-on-one advisory model rather than a sales-driven one.",
    },
    berkay: {
      title: "Co-Founder",
      bio: "A Computer Engineering graduate of Galatasaray University. Driven by his passion for technology, he founded his own brand, FARAVA, and gained international entrepreneurship experience by successfully marketing the mobile apps he developed to different countries. As co-founder of Primevest Investment, he leads innovative projects that bring technology into the world of investment and contributes to the company's strategic growth.",
    },
    yagmur: {
      title: "Digital Strategist",
      bio: "A graduate of the Information Security programme at Mustafa Kemal University. At Primevest Investment she designs the brand's digital identity and creates innovative solutions by combining her IT expertise with real estate and investment knowledge. She aims to make a difference with an approach that unites technology and investment advisory.",
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

function generateImages(folder: string, count: number, ext: string): string[] {
  return Array.from(
    { length: count },
    (_, i) => `/images/projects/${folder}/${i + 1}.${ext}`
  );
}

interface ProjectBase {
  slug: string;
  name: string;
  region: "girne" | "iskele";
  bedrooms: string;
  totalUnits: number;
  imageExtension: string;
  imageCount: number;
  status: "sale" | "presale";
  featured: boolean;
}

interface ProjectL10n {
  location: string;
  sizeRange: string;
  unitTypes: string[];
  completion: string;
  features: string[];
  description: string;
  shortDescription: string;
}

const PROJECT_BASES: ProjectBase[] = [
  {
    slug: "aloha-beach-resort",
    name: "Aloha Beach Resort",
    region: "girne",
    bedrooms: "1 - 2",
    totalUnits: 124,
    imageExtension: "jpg",
    imageCount: 14,
    status: "presale",
    featured: true,
  },
  {
    slug: "bahamas",
    name: "Bahamas PH 1, 2 & 3",
    region: "girne",
    bedrooms: "1 - 4",
    totalUnits: 720,
    imageExtension: "jpg",
    imageCount: 13,
    status: "sale",
    featured: true,
  },
  {
    slug: "casa-del-mare",
    name: "Casa Del Mare",
    region: "girne",
    bedrooms: "1 - 4",
    totalUnits: 0,
    imageExtension: "webp",
    imageCount: 8,
    status: "sale",
    featured: false,
  },
  {
    slug: "courtyard-platinum",
    name: "Courtyard Platinum",
    region: "iskele",
    bedrooms: "1 - 3",
    totalUnits: 0,
    imageExtension: "webp",
    imageCount: 7,
    status: "sale",
    featured: false,
  },
  {
    slug: "d-point",
    name: "D-Point",
    region: "iskele",
    bedrooms: "1 - 2",
    totalUnits: 405,
    imageExtension: "webp",
    imageCount: 14,
    status: "presale",
    featured: true,
  },
  {
    slug: "grand-sapphire-blu",
    name: "Grand Sapphire Blu",
    region: "iskele",
    bedrooms: "1 - 3",
    totalUnits: 0,
    imageExtension: "webp",
    imageCount: 11,
    status: "sale",
    featured: true,
  },
  {
    slug: "hawaii",
    name: "Hawaii",
    region: "girne",
    bedrooms: "1 - 3",
    totalUnits: 490,
    imageExtension: "jpg",
    imageCount: 12,
    status: "sale",
    featured: false,
  },
  {
    slug: "ocean-life-residence",
    name: "Ocean Life Residence",
    region: "iskele",
    bedrooms: "1 - 2",
    totalUnits: 0,
    imageExtension: "jpg",
    imageCount: 5,
    status: "presale",
    featured: false,
  },
  {
    slug: "phuket-wellness",
    name: "Phuket Health & Wellness Resort",
    region: "girne",
    bedrooms: "1 - 3",
    totalUnits: 111,
    imageExtension: "jpg",
    imageCount: 14,
    status: "presale",
    featured: true,
  },
  {
    slug: "querencia",
    name: "Querencia",
    region: "iskele",
    bedrooms: "1 - 3",
    totalUnits: 705,
    imageExtension: "webp",
    imageCount: 11,
    status: "presale",
    featured: true,
  },
];

const PROJECT_L10N: Record<Locale, Record<string, ProjectL10n>> = {
  tr: {
    "aloha-beach-resort": {
      location: "Tatlısu, Girne",
      sizeRange: "90 - 100 m²",
      unitTypes: ["1+1", "2+1", "Penthouse", "Bungalov", "Villa"],
      completion: "Aralık 2026",
      features: [
        "Özel plaj",
        "Spa & Wellness",
        "Kapalı ve açık yüzme havuzu",
        "Türk hamamı & Sauna",
        "Fitness merkezi",
        "Tenis kortları",
        "Restoran & Kafe",
        "Çocuk oyun alanı",
        "Concierge hizmeti",
        "Otopark",
        "Jeneratör sistemi",
      ],
      description:
        "Aloha Beach Resort, Tatlısu'nun muhteşem deniz ve dağ manzaralarına sahip huzurlu kıyı yaşamı sunar. Spektaküler deniz manzaralı rezidanslar, ısıtmalı havuz, hamam, masaj, sauna içeren spa tesisleri, spor salonları, tenis kortları, restoran ve özel plajıyla konforlu bir yaşam deneyimi vaat eder. Su ve ışık şovlarına sahip yüzme havuzları ile benzersiz bir atmosfer yaratır.",
      shortDescription:
        "Tatlısu sahilinde huzurlu kıyı yaşamı, muhteşem deniz ve dağ manzaraları.",
    },
    bahamas: {
      location: "Esentepe, Girne",
      sizeRange: "43 - 298 m²",
      unitTypes: ["Stüdyo", "1+1", "2+1", "Penthouse", "4+1 Villa"],
      completion: "Aralık 2025 - Haziran 2026",
      features: [
        "8 büyük ortak havuz",
        "Spa & Hamam",
        "Sauna & Masaj",
        "Fitness & Güzellik merkezi",
        "Şnorkel alanı",
        "Restoranlar",
        "Yoga & Pilates",
        "Mini golf",
        "Bisiklet kulübü",
        "Çocuk oyun alanı",
        "Eczane",
        "Güvenlik",
        "Market",
      ],
      description:
        "Bahamas, Esentepe'nin sahil kasabasında 720 üniteden oluşan kapsamlı bir komplekstir. 3 fazda inşa edilen proje, stüdyo dairelerden 4+1 villalara kadar geniş bir seçenek sunar. Doğrudan deniz manzarası, 8 büyük ortak havuz, spa tesisleri, restoranlar ve çok sayıda sosyal aktivite alanıyla zengin bir yaşam deneyimi sağlar.",
      shortDescription:
        "Esentepe sahilinde 720 üniteli kapsamlı kompleks, doğrudan deniz manzarası.",
    },
    "casa-del-mare": {
      location: "Esentepe, Girne",
      sizeRange: "48 - 347 m²",
      unitTypes: [
        "Stüdyo",
        "1+1",
        "2+1",
        "3+1 Villa",
        "4+1 Villa",
        "Loft",
        "Penthouse",
      ],
      completion: "2025",
      features: [
        "Açık ve kapalı yüzme havuzları",
        "Lagün havuz",
        "Padel tenis",
        "FitPlus spor merkezi",
        "Yürüyüş parkurları",
        "Doğal plajlar",
        "Restoranlar",
        "Su sporları",
        "Jeneratör sistemi",
        "Otopark",
      ],
      description:
        "Casa Del Mare, Esentepe'nin eşsiz deniz manzaralarına sahip benzersiz bir yaşam deneyimi sunar. Stüdyo dairelerden 4+1 lüks villalara kadar geniş seçenekler, lüks ve tatil yaşamının uyumlu birleşimi. Doğada yürüyüş parkurları, açık ve kapalı havuzlar, Lagün, Padel tenis gibi zengin sosyal tesislerle donatılmıştır.",
      shortDescription:
        "Esentepe'de lüks ve tatil yaşamının uyumlu birleşimi, eşsiz deniz manzarası.",
    },
    "courtyard-platinum": {
      location: "İskele",
      sizeRange: "Çeşitli",
      unitTypes: ["1+1", "2+1", "3+1"],
      completion: "2025",
      features: [
        "Özel bahçeler",
        "Kapalı otopark",
        "24/7 Güvenlik",
        "Sosyal alanlar",
        "Fitness merkezi",
        "Kapalı yüzme havuzu",
        "Sauna",
        "Çocuk oyun alanı",
        "Yürüyüş parkurları",
        "Concierge",
        "Akıllı ev sistemi",
        "Jeneratör",
      ],
      description:
        "Courtyard Platinum, İskele'de özel bahçeler, akıllı ev sistemleri ve kapsamlı sosyal alanlarıyla modern yaşam standartlarını sunan prestijli bir konut projesidir. Kapalı yüzme havuzu, fitness merkezi, sauna ve 24 saat güvenlik hizmeti ile konforlu bir yaşam deneyimi sağlar.",
      shortDescription:
        "İskele'de akıllı ev sistemleri ve kapsamlı sosyal alanlarla modern yaşam.",
    },
    "d-point": {
      location: "İskele, Long Beach",
      sizeRange: "43 - 122 m²",
      unitTypes: ["Stüdyo", "1+1", "2+1"],
      completion: "Aralık 2028",
      features: [
        "Akıllı ev sistemleri",
        "24/7 Güvenlik",
        "Spor merkezi",
        "Yüzme havuzu",
        "Kapalı otopark",
        "Ticari alanlar",
        "Modern ofis çözümleri",
        "Sosyal alanlar",
      ],
      description:
        "D-Point, İskele Long Beach'in hızla gelişen bölgesinde 405 üniteden oluşan modern bir yaşam merkezi. Prestijli ve yenilikçi tasarımıyla yaşam alanı ile iş merkezini bir arada sunar. Kompakt stüdyolardan ferah 2+1 dairelere kadar çeşitli seçeneklerle modern yaşamın tüm ihtiyaçlarını tek noktada karşılar.",
      shortDescription: "Long Beach'te 405 üniteli modern yaşam ve iş merkezi.",
    },
    "grand-sapphire-blu": {
      location: "İskele",
      sizeRange: "50 - 120 m²",
      unitTypes: ["1+1", "2+1", "3+1"],
      completion: "Devam Ediyor",
      features: [
        "Plaj havuzu & Yapay plaj",
        "5 yıldızlı otel & Casino",
        "Punta Cana havuz (4.000 m²)",
        "27. kat infinity havuz",
        "Su parkı",
        "Açık hava sineması",
        "Padel tenis",
        "FitPlus spor merkezi",
        "Organik spa",
        "Evcil hayvan parkı",
        "Süpermarket",
        "Çocuk kulübü",
        "Balo salonu & Konferans",
      ],
      description:
        "Grand Sapphire Blu, Kuzey Kıbrıs'ın muhteşem kıyı manzarasına karşı altın kum ve mavinin mükemmel tonlarını sunar. 7 yıldızlı yaşam konseptiyle mağazalar, güzellik salonları, süpermarket ve hobi dükkanları barındırır. Adanın en büyük havuzu Punta Cana (4.000 m²), toplam 10.000+ m² havuz alanı, 27. katta infinity havuz ve çok daha fazlası.",
      shortDescription:
        "7 yıldızlı yaşam konsepti, adanın en büyük havuzu ve muhteşem kıyı manzarası.",
    },
    hawaii: {
      location: "Bahçeli, Girne",
      sizeRange: "43 - 365 m²",
      unitTypes: ["Stüdyo", "1+1", "3+1 Villa"],
      completion: "Aralık 2025",
      features: [
        "9 büyük ortak havuz",
        "Spa & Hamam & Sauna",
        "Fitness & Güzellik merkezi",
        "Şnorkel alanı",
        "Restoranlar",
        "Yoga & Pilates",
        "Mini golf",
        "Bisiklet kulübü",
        "Tenis kortları",
        "Su sporları",
        "Isıtmalı kapalı havuz",
      ],
      description:
        "Hawaii, Bahçeli'nin sahil köyünde 490 üniteden oluşan kapsamlı bir yaşam projesi. Stüdyo dairelerden cam koridorla bölümlere ayrılmış benzersiz 3+1 villalara kadar geniş seçenekler sunar. 9 büyük ortak havuz, spa merkezi, spor tesisleri ve çok daha fazlası ile tatil yaşamını evinize taşır.",
      shortDescription: "Bahçeli sahilinde 490 üniteli benzersiz yaşam projesi.",
    },
    "ocean-life-residence": {
      location: "İskele, Long Beach",
      sizeRange: "Çeşitli",
      unitTypes: ["Stüdyo", "1+1", "2+1", "Penthouse"],
      completion: "Devam Ediyor",
      features: [
        "50.000 m² proje alanı",
        "Denize 600m mesafe",
        "Açık ve kapalı havuzlar",
        "Aqua park",
        "Spa & Fitness",
        "Tenis & Basketbol kortları",
        "Mini golf",
        "Çocuk parkları",
        "EV şarj istasyonları",
        "Yürüyüş & Bisiklet yolları",
        "24/7 Güvenlik",
      ],
      description:
        "Ocean Life Residence, İskele Long Beach'te 50.000 m² alan üzerine kurulu prestijli bir konut projesidir. Altın oran felsefesiyle tasarlanmış, doğayla uyumlu modern mimarisi ile denize sadece 600 metre mesafede konforlu ve huzurlu bir yaşam sunar. Zengin sosyal tesisleriyle modern yaşamın tüm ihtiyaçlarını karşılar.",
      shortDescription:
        "Long Beach'te 50.000 m² üzerine kurulu, denize 600m prestijli yaşam.",
    },
    "phuket-wellness": {
      location: "Esentepe, Girne",
      sizeRange: "80 - 120 m²",
      unitTypes: [
        "Stüdyo",
        "1+1",
        "2+1",
        "3+1",
        "Bahçe Daire",
        "Penthouse",
        "Dublex",
        "Villa",
      ],
      completion: "Mart 2027 - Ocak 2028",
      features: [
        "Spa & Wellness merkezi",
        "Açık ve kapalı ısıtmalı havuz",
        "Tenis kortları",
        "Spor salonu",
        "Türk hamamı",
        "Bisiklet yolları",
        "Restoran",
        "Sauna",
        "Su sporları",
        "Jeneratör",
      ],
      description:
        "Phuket Health & Wellness Resort, Girne Dağı eteklerinde yeşil çam ormanlarıyla çevrili huzurlu bir kaçış noktası. Çift katlı teraslı daireler, özel havuzlu ve çatı teraslı lüks kent evleri sunar. Kademeli aydınlatmalı havuzlar, tropikal bitki örtüsü ile otantik Tayland orman atmosferi yaratır. Ercan Uluslararası Havalimanı'na 45 dakika mesafededir.",
      shortDescription:
        "Girne Dağı eteklerinde tropikal atmosferli wellness resort.",
    },
    querencia: {
      location: "İskele, Long Beach",
      sizeRange: "50 - 160 m²",
      unitTypes: ["Stüdyo", "1+1", "2+1", "3+1", "Penthouse", "Dublex"],
      completion: "Aralık 2027",
      features: [
        "180° kesintisiz deniz manzarası",
        "Havuzlu penthouse'lar",
        "Panoramik teraslar",
        "Yerden ısıtma",
        "Gizli kanal soğutma",
        "Granit mutfak tezgahları",
        "Endemik bitki peyzajı",
        "Ticari alanlar",
        "5 yıldızlı otel & Casino (karşısında)",
        "9-28 katlı kuleler",
      ],
      description:
        "Querencia, Long Beach'in muhteşem projesi olarak denize 400 metre mesafede, eşsiz plajın karşısında konumlanmıştır. 4 bloktan (1'i otel) oluşan 705 üniteli proje, 9 ile 28 katlı kulelerden meydana gelir. 180° kesintisiz deniz manzarası, özel tasarım detayları ve sürekli değer kazanan yatırım potansiyeli ile 365 gün lüks ve tatil gibi yaşam sunar.",
      shortDescription:
        "Long Beach'te 705 üniteli, 180° deniz manzaralı prestijli yatırım.",
    },
  },
  en: {
    "aloha-beach-resort": {
      location: "Tatlisu, Kyrenia",
      sizeRange: "90 - 100 m²",
      unitTypes: ["1+1", "2+1", "Penthouse", "Bungalow", "Villa"],
      completion: "December 2026",
      features: [
        "Private beach",
        "Spa & Wellness",
        "Indoor and outdoor swimming pools",
        "Turkish bath & Sauna",
        "Fitness centre",
        "Tennis courts",
        "Restaurant & Café",
        "Children's playground",
        "Concierge service",
        "Parking",
        "Generator system",
      ],
      description:
        "Aloha Beach Resort offers peaceful coastal living with magnificent sea and mountain views in Tatlisu. Residences with spectacular sea views, a heated pool, spa facilities with hammam, massage and sauna, gyms, tennis courts, a restaurant and a private beach promise a comfortable living experience. Swimming pools with water and light shows create a truly unique atmosphere.",
      shortDescription:
        "Peaceful coastal living on the Tatlisu shore, with magnificent sea and mountain views.",
    },
    bahamas: {
      location: "Esentepe, Kyrenia",
      sizeRange: "43 - 298 m²",
      unitTypes: ["Studio", "1+1", "2+1", "Penthouse", "4+1 Villa"],
      completion: "December 2025 - June 2026",
      features: [
        "8 large communal pools",
        "Spa & Hammam",
        "Sauna & Massage",
        "Fitness & Beauty centre",
        "Snorkelling area",
        "Restaurants",
        "Yoga & Pilates",
        "Mini golf",
        "Cycling club",
        "Children's playground",
        "Pharmacy",
        "Security",
        "Supermarket",
      ],
      description:
        "Bahamas is a comprehensive 720-unit complex in the coastal town of Esentepe. Built in 3 phases, the project offers a wide range of options from studio apartments to 4+1 villas. Direct sea views, 8 large communal pools, spa facilities, restaurants and numerous social activity areas provide a rich living experience.",
      shortDescription:
        "A comprehensive 720-unit complex on the Esentepe coast with direct sea views.",
    },
    "casa-del-mare": {
      location: "Esentepe, Kyrenia",
      sizeRange: "48 - 347 m²",
      unitTypes: [
        "Studio",
        "1+1",
        "2+1",
        "3+1 Villa",
        "4+1 Villa",
        "Loft",
        "Penthouse",
      ],
      completion: "2025",
      features: [
        "Outdoor and indoor swimming pools",
        "Lagoon pool",
        "Padel tennis",
        "FitPlus sports centre",
        "Walking trails",
        "Natural beaches",
        "Restaurants",
        "Water sports",
        "Generator system",
        "Parking",
      ],
      description:
        "Casa Del Mare offers a unique living experience with Esentepe's unrivalled sea views. A wide range of options from studio apartments to luxury 4+1 villas — a harmonious blend of luxury and holiday living. It is equipped with rich social facilities such as nature walking trails, outdoor and indoor pools, a lagoon pool and padel tennis.",
      shortDescription:
        "A harmonious blend of luxury and holiday living in Esentepe, with unrivalled sea views.",
    },
    "courtyard-platinum": {
      location: "Iskele",
      sizeRange: "Various",
      unitTypes: ["1+1", "2+1", "3+1"],
      completion: "2025",
      features: [
        "Private gardens",
        "Covered parking",
        "24/7 Security",
        "Social areas",
        "Fitness centre",
        "Indoor swimming pool",
        "Sauna",
        "Children's playground",
        "Walking trails",
        "Concierge",
        "Smart home system",
        "Generator",
      ],
      description:
        "Courtyard Platinum is a prestigious residential project in Iskele offering modern living standards with private gardens, smart home systems and extensive social areas. An indoor swimming pool, fitness centre, sauna and 24-hour security provide a comfortable living experience.",
      shortDescription:
        "Modern living in Iskele with smart home systems and extensive social areas.",
    },
    "d-point": {
      location: "Iskele, Long Beach",
      sizeRange: "43 - 122 m²",
      unitTypes: ["Studio", "1+1", "2+1"],
      completion: "December 2028",
      features: [
        "Smart home systems",
        "24/7 Security",
        "Sports centre",
        "Swimming pool",
        "Covered parking",
        "Commercial areas",
        "Modern office solutions",
        "Social areas",
      ],
      description:
        "D-Point is a modern living hub of 405 units in the rapidly developing Long Beach area of Iskele. With its prestigious, innovative design it combines living space and business centre in one. From compact studios to spacious 2+1 apartments, it meets all the needs of modern life at a single point.",
      shortDescription:
        "A modern 405-unit living and business hub in Long Beach.",
    },
    "grand-sapphire-blu": {
      location: "Iskele",
      sizeRange: "50 - 120 m²",
      unitTypes: ["1+1", "2+1", "3+1"],
      completion: "Ongoing",
      features: [
        "Beach pool & Artificial beach",
        "5-star hotel & Casino",
        "Punta Cana pool (4,000 m²)",
        "27th-floor infinity pool",
        "Water park",
        "Open-air cinema",
        "Padel tennis",
        "FitPlus sports centre",
        "Organic spa",
        "Pet park",
        "Supermarket",
        "Kids' club",
        "Ballroom & Conference hall",
      ],
      description:
        "Grand Sapphire Blu offers perfect shades of golden sand and blue against North Cyprus' magnificent coastal scenery. Its 7-star living concept hosts shops, beauty salons, a supermarket and hobby stores. The island's largest pool, Punta Cana (4,000 m²), more than 10,000 m² of total pool area, a 27th-floor infinity pool and much more.",
      shortDescription:
        "A 7-star living concept with the island's largest pool and magnificent coastal views.",
    },
    hawaii: {
      location: "Bahceli, Kyrenia",
      sizeRange: "43 - 365 m²",
      unitTypes: ["Studio", "1+1", "3+1 Villa"],
      completion: "December 2025",
      features: [
        "9 large communal pools",
        "Spa & Hammam & Sauna",
        "Fitness & Beauty centre",
        "Snorkelling area",
        "Restaurants",
        "Yoga & Pilates",
        "Mini golf",
        "Cycling club",
        "Tennis courts",
        "Water sports",
        "Heated indoor pool",
      ],
      description:
        "Hawaii is a comprehensive living project of 490 units in the coastal village of Bahceli. It offers a wide range of options, from studio apartments to unique 3+1 villas divided by glass corridors. With 9 large communal pools, a spa centre, sports facilities and much more, it brings holiday living home.",
      shortDescription:
        "A unique 490-unit living project on the Bahceli coast.",
    },
    "ocean-life-residence": {
      location: "Iskele, Long Beach",
      sizeRange: "Various",
      unitTypes: ["Studio", "1+1", "2+1", "Penthouse"],
      completion: "Ongoing",
      features: [
        "50,000 m² project area",
        "600m from the sea",
        "Outdoor and indoor pools",
        "Aqua park",
        "Spa & Fitness",
        "Tennis & Basketball courts",
        "Mini golf",
        "Children's playgrounds",
        "EV charging stations",
        "Walking & Cycling paths",
        "24/7 Security",
      ],
      description:
        "Ocean Life Residence is a prestigious residential project set on 50,000 m² in Iskele Long Beach. Designed around the golden ratio philosophy, its modern architecture in harmony with nature offers comfortable, peaceful living just 600 metres from the sea. Its rich social facilities meet all the needs of modern life.",
      shortDescription:
        "Prestigious living on 50,000 m² in Long Beach, 600m from the sea.",
    },
    "phuket-wellness": {
      location: "Esentepe, Kyrenia",
      sizeRange: "80 - 120 m²",
      unitTypes: [
        "Studio",
        "1+1",
        "2+1",
        "3+1",
        "Garden Apartment",
        "Penthouse",
        "Duplex",
        "Villa",
      ],
      completion: "March 2027 - January 2028",
      features: [
        "Spa & Wellness centre",
        "Outdoor and heated indoor pools",
        "Tennis courts",
        "Gym",
        "Turkish bath",
        "Cycling paths",
        "Restaurant",
        "Sauna",
        "Water sports",
        "Generator",
      ],
      description:
        "Phuket Health & Wellness Resort is a peaceful retreat surrounded by green pine forests on the foothills of the Kyrenia Mountains. It offers double-storey terraced apartments and luxury townhouses with private pools and roof terraces. Pools with tiered lighting and tropical vegetation create an authentic Thai forest atmosphere. It is 45 minutes from Ercan International Airport.",
      shortDescription:
        "A wellness resort with a tropical atmosphere on the foothills of the Kyrenia Mountains.",
    },
    querencia: {
      location: "Iskele, Long Beach",
      sizeRange: "50 - 160 m²",
      unitTypes: ["Studio", "1+1", "2+1", "3+1", "Penthouse", "Duplex"],
      completion: "December 2027",
      features: [
        "180° uninterrupted sea views",
        "Penthouses with pools",
        "Panoramic terraces",
        "Underfloor heating",
        "Concealed duct cooling",
        "Granite kitchen countertops",
        "Endemic landscaping",
        "Commercial areas",
        "5-star hotel & Casino (opposite)",
        "9-28 storey towers",
      ],
      description:
        "Querencia, Long Beach's landmark project, is positioned 400 metres from the sea, opposite a pristine beach. The 705-unit project consists of 4 blocks (one a hotel), rising in towers of 9 to 28 storeys. With 180° uninterrupted sea views, bespoke design details and continuously appreciating investment potential, it offers luxury, holiday-style living 365 days a year.",
      shortDescription:
        "A prestigious 705-unit investment in Long Beach with 180° sea views.",
    },
  },
};

export function getProjects(locale: Locale): Project[] {
  return PROJECT_BASES.map((base) => ({
    slug: base.slug,
    name: base.name,
    region: base.region,
    bedrooms: base.bedrooms,
    totalUnits: base.totalUnits,
    images: generateImages(base.slug, base.imageCount, base.imageExtension),
    imageExtension: base.imageExtension,
    imageCount: base.imageCount,
    status: base.status,
    featured: base.featured,
    ...PROJECT_L10N[locale][base.slug],
  }));
}

export function getProjectBySlug(
  locale: Locale,
  slug: string
): Project | undefined {
  return getProjects(locale).find((p) => p.slug === slug);
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return getProjects(locale).filter((p) => p.featured);
}

export const PROJECT_SLUGS = PROJECT_BASES.map((p) => p.slug);

export const PROJECT_NAMES = PROJECT_BASES.map((p) => p.name);
