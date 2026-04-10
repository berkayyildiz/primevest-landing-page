export interface Project {
  slug: string;
  name: string;
  location: string;
  region: string;
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
  status: "satis" | "on-satis";
  featured: boolean;
}

export interface TeamMember {
  name: string;
  title: string;
  titleEn: string;
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
  whatsappMessage:
    "Merhaba, Kuzey Kıbrıs projeleri ve yatırım fırsatları hakkında bilgi almak istiyorum.",
  address: {
    street: "Prof. Dr. Serdar Saydam Caddesi, Bereket Sokak No: 2/3",
    city: "İskele",
    country: "Kuzey Kıbrıs (KKTC)",
  },
  contactPerson: "Gülay Yıldız",
};

export const TEAM: TeamMember[] = [
  {
    name: "Gülay Yıldız",
    title: "Kurucu Ortak & Direktör",
    titleEn: "Founder & Director",
    image: null,
    bio: "21 yıllık bankacılık kariyerinde Garanti BBVA, ING Bank ve Türk Ekonomi Bankası gibi sektörün önde gelen kurumlarında özel bankacılık, ticari bankacılık ve şube müdürlüğü görevlerinde bulunmuştur. Finansal uzmanlığını girişimcilikle birleştirerek Primevest Investment'ı kurmuş ve yılların birikimini gayrimenkul ve yatırım danışmanlığına dönüştürmüştür. Gülay Yıldız'ı farklı kılan; yalnızca satış yapmak değil, birebir güvene dayalı stratejik danışmanlık sunarak yatırımcıya doğru zamanda, doğru lokasyonda, doğru proje seçimini sağlamasıdır.",
  },
  {
    name: "Berkay Yıldız",
    title: "Kurucu Ortak",
    titleEn: "Co-Founder",
    image: null,
    bio: "Galatasaray Üniversitesi Bilgisayar Mühendisliği mezunudur. Teknolojiye olan tutkusu ile kendi markası FARAVA'yı kurmuş, geliştirdiği mobil uygulamaları farklı ülkelere başarıyla pazarlayarak uluslararası girişimcilik deneyimi kazanmıştır. Primevest Investment'ın kurucu ortağı olarak teknolojiyi yatırım dünyasıyla buluşturan yenilikçi projelere liderlik etmekte ve şirketin stratejik büyümesine katkı sağlamaktadır.",
  },
  {
    name: "Yağmur Güzel",
    title: "Dijital Stratejist",
    titleEn: "Digital Strategist",
    image: null,
    bio: "Mustafa Kemal Üniversitesi Bilişim Güvenliği bölümünden mezun olmuştur. Primevest Investment'ta markanın dijital kimliğini tasarlıyor ve bilişim bilgisini gayrimenkul ile yatırım bilgisiyle birleştirerek yenilikçi çözümler üretiyor. Teknoloji ve yatırım danışmanlığını birleştiren yaklaşımıyla fark yaratmayı hedeflemektedir.",
  },
  {
    name: "Taşkın Şen",
    title: "Kıdemli Danışman",
    titleEn: "Senior Consultant",
    image: "/images/team/taskin-sen.jpeg",
    bio: "Otomotiv sektöründe satış, satış sonrası hizmetler ve operasyon yönetimi alanlarında 20 yılı aşkın deneyime sahiptir. Volkswagen, Audi, Seat ve Ford markalarında satış ve servis organizasyonlarının yönetiminde aktif rol almıştır. Stratejik planlama, ekip yönetimi ve müşteri odaklı yaklaşımıyla öne çıkan Şen, bu kapsamlı deneyimini emlak ve yatırım danışmanlığı alanında değerlendirmektedir.",
  },
  {
    name: "Zeki Kayar",
    title: "Danışman",
    titleEn: "Consultant",
    image: "/images/team/zeki-kayar.jpeg",
    bio: "Primevest Investment ekibinin deneyimli danışmanlarından biri olarak müşterilerine güvenilir ve profesyonel hizmet sunmaktadır.",
  },
];

function generateImages(
  folder: string,
  count: number,
  ext: string
): string[] {
  return Array.from(
    { length: count },
    (_, i) => `/images/projects/${folder}/${i + 1}.${ext}`
  );
}

export const PROJECTS: Project[] = [
  {
    slug: "aloha-beach-resort",
    name: "Aloha Beach Resort",
    location: "Tatlısu, Girne",
    region: "Girne",
    sizeRange: "90 - 100 m²",
    bedrooms: "1 - 2",
    totalUnits: 124,
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
    images: generateImages("aloha-beach-resort", 14, "jpg"),
    imageExtension: "jpg",
    imageCount: 14,
    status: "on-satis",
    featured: true,
  },
  {
    slug: "bahamas",
    name: "Bahamas PH 1, 2 & 3",
    location: "Esentepe, Girne",
    region: "Girne",
    sizeRange: "43 - 298 m²",
    bedrooms: "1 - 4",
    totalUnits: 720,
    unitTypes: [
      "Stüdyo",
      "1+1",
      "2+1",
      "Penthouse",
      "4+1 Villa",
    ],
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
    images: generateImages("bahamas", 13, "jpg"),
    imageExtension: "jpg",
    imageCount: 13,
    status: "satis",
    featured: true,
  },
  {
    slug: "casa-del-mare",
    name: "Casa Del Mare",
    location: "Esentepe, Girne",
    region: "Girne",
    sizeRange: "48 - 347 m²",
    bedrooms: "1 - 4",
    totalUnits: 0,
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
    images: generateImages("casa-del-mare", 8, "webp"),
    imageExtension: "webp",
    imageCount: 8,
    status: "satis",
    featured: false,
  },
  {
    slug: "courtyard-platinum",
    name: "Courtyard Platinum",
    location: "İskele",
    region: "İskele",
    sizeRange: "Çeşitli",
    bedrooms: "1 - 3",
    totalUnits: 0,
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
    images: generateImages("courtyard-platinum", 7, "webp"),
    imageExtension: "webp",
    imageCount: 7,
    status: "satis",
    featured: false,
  },
  {
    slug: "d-point",
    name: "D-Point",
    location: "İskele, Long Beach",
    region: "İskele",
    sizeRange: "43 - 122 m²",
    bedrooms: "1 - 2",
    totalUnits: 405,
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
    shortDescription:
      "Long Beach'te 405 üniteli modern yaşam ve iş merkezi.",
    images: generateImages("d-point", 14, "webp"),
    imageExtension: "webp",
    imageCount: 14,
    status: "on-satis",
    featured: true,
  },
  {
    slug: "grand-sapphire-blu",
    name: "Grand Sapphire Blu",
    location: "İskele",
    region: "İskele",
    sizeRange: "50 - 120 m²",
    bedrooms: "1 - 3",
    totalUnits: 0,
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
    images: generateImages("grand-sapphire-blu", 11, "webp"),
    imageExtension: "webp",
    imageCount: 11,
    status: "satis",
    featured: true,
  },
  {
    slug: "hawaii",
    name: "Hawaii",
    location: "Bahçeli, Girne",
    region: "Girne",
    sizeRange: "43 - 365 m²",
    bedrooms: "1 - 3",
    totalUnits: 490,
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
    shortDescription:
      "Bahçeli sahilinde 490 üniteli benzersiz yaşam projesi.",
    images: generateImages("hawaii", 12, "jpg"),
    imageExtension: "jpg",
    imageCount: 12,
    status: "satis",
    featured: false,
  },
  {
    slug: "ocean-life-residence",
    name: "Ocean Life Residence",
    location: "İskele, Long Beach",
    region: "İskele",
    sizeRange: "Çeşitli",
    bedrooms: "1 - 2",
    totalUnits: 0,
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
    images: generateImages("ocean-life-residence", 5, "jpg"),
    imageExtension: "jpg",
    imageCount: 5,
    status: "on-satis",
    featured: false,
  },
  {
    slug: "phuket-wellness",
    name: "Phuket Health & Wellness Resort",
    location: "Esentepe, Girne",
    region: "Girne",
    sizeRange: "80 - 120 m²",
    bedrooms: "1 - 3",
    totalUnits: 111,
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
    images: generateImages("phuket-wellness", 14, "jpg"),
    imageExtension: "jpg",
    imageCount: 14,
    status: "on-satis",
    featured: true,
  },
  {
    slug: "querencia",
    name: "Querencia",
    location: "İskele, Long Beach",
    region: "İskele",
    sizeRange: "50 - 160 m²",
    bedrooms: "1 - 3",
    totalUnits: 705,
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
    images: generateImages("querencia", 11, "webp"),
    imageExtension: "webp",
    imageCount: 11,
    status: "on-satis",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

export function getWhatsAppLink(message?: string): string {
  const msg = message || COMPANY.whatsappMessage;
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export const WHY_NORTH_CYPRUS = [
  {
    title: "Yüksek Yatırım Getirisi",
    description:
      "Kuzey Kıbrıs'ta gayrimenkul yatırımları 8-12 yıl gibi kısa sürede kendini amorti eder. Sürekli artan arazi ve konut değerleri ile güçlü kira getirisi sunar.",
    icon: "trending-up",
  },
  {
    title: "Yabancı Yatırımcıya Açık",
    description:
      "Yabancı uyruklu yatırımcılar kolayca mülk satın alabilir. Kolay ve hızlı tapu işlemleri ile güvenli yatırım ortamı sağlanır.",
    icon: "globe",
  },
  {
    title: "Vergi Avantajları",
    description:
      "Düşük vergi oranları ve yatırımcı dostu politikalar sayesinde net getirinizi maksimize edin. Döviz bazlı kira geliri (GBP) elde edin.",
    icon: "piggy-bank",
  },
  {
    title: "Akdeniz Yaşam Kalitesi",
    description:
      "Yılda 300+ güneşli gün, bozulmamış doğa, güvenli yaşam ortamı ve düşük nüfus yoğunluğu ile Akdeniz'in en yaşanılabilir noktası.",
    icon: "sun",
  },
  {
    title: "Stratejik Konum",
    description:
      "Avrupa, Orta Doğu ve Afrika'nın kesişim noktasında, Türkiye'ye 75 dakika uçuş mesafesinde stratejik lokasyon avantajı.",
    icon: "map-pin",
  },
  {
    title: "Gelişen Altyapı",
    description:
      "Yeni havalimanı, otobanlar, üniversiteler ve turizm yatırımları ile hızla gelişen altyapı. Sürekli değer kazanan bir pazar.",
    icon: "building-2",
  },
];

export const BLOG_POSTS = [
  {
    slug: "kuzey-kibrista-gayrimenkul-yatirimi-rehberi",
    title: "Kuzey Kıbrıs'ta Gayrimenkul Yatırımı: Kapsamlı Rehber",
    excerpt:
      "Kuzey Kıbrıs'ta gayrimenkul yatırımı yapmayı düşünüyorsanız bilmeniz gereken her şey: pazar dinamikleri, bölge analizi, yasal süreçler ve uzman tavsiyeleri.",
    date: "2026-03-15",
    readTime: "8 dk",
    category: "Yatırım Rehberi",
    content: `Kuzey Kıbrıs, son yıllarda gayrimenkul yatırımcılarının radarına giren en cazip destinasyonlardan biri haline gelmiştir. Akdeniz'in doğusunda, stratejik konumuyla Avrupa, Orta Doğu ve Afrika'nın kesişim noktasında yer alan ada, yatırımcılara benzersiz fırsatlar sunmaktadır.

## Neden Kuzey Kıbrıs?

Kuzey Kıbrıs'ın gayrimenkul yatırımları için öne çıkan birçok avantajı bulunmaktadır. Yılda 300'den fazla güneşli gün, bozulmamış doğal güzellikler ve güvenli yaşam ortamı ile hem yaşam hem yatırım için ideal bir lokasyondur.

## Pazar Dinamikleri

Son 5 yılda Kuzey Kıbrıs gayrimenkul pazarı istikrarlı bir büyüme göstermiştir. Özellikle İskele, Girne ve Gazimağusa bölgeleri yoğun ilgi görmektedir. Long Beach, Esentepe ve Tatlısu gibi bölgeler en hızlı değer kazanan lokasyonlar arasındadır.

## Yatırım Süreci

Kuzey Kıbrıs'ta mülk satın alma süreci oldukça basittir. Yabancı uyruklular bir mülk satın alabilir ve tapu işlemleri güvenli bir şekilde gerçekleştirilir. Profesyonel danışmanlık hizmeti almanız, sürecin sorunsuz ilerlemesi açısından büyük önem taşır.

## Bölge Karşılaştırması

**İskele / Long Beach:** En yoğun ilgi gören bölge. Uzun sahil şeridi, gelişen altyapı ve çok sayıda yeni proje ile dikkat çeker. Kira getirisi ve değer artışı potansiyeli yüksektir.

**Girne / Esentepe:** Muhteşem dağ ve deniz manzaraları, sakin yaşam ortamı. Tatil amaçlı kiralamalar için ideal lokasyon.

**Girne / Tatlısu:** Gelişmekte olan bölge, uygun fiyatlar ve yüksek değer artışı potansiyeli.

## Sonuç

Kuzey Kıbrıs gayrimenkul pazarı, doğru rehberlik ve stratejik seçimlerle mükemmel getiriler sağlayabilir. Primevest Investment olarak, 21 yılı aşan finans deneyimimiz ve Kuzey Kıbrıs'taki güçlü yerel networkümüzle yatırımcılarımıza en doğru yönlendirmeyi sunuyoruz.`,
  },
  {
    slug: "2026-kuzey-kibris-emlak-piyasasi",
    title: "2026'da Kuzey Kıbrıs Emlak Piyasası: Trendler ve Beklentiler",
    excerpt:
      "2026 yılında Kuzey Kıbrıs gayrimenkul piyasasında neler bekleniyor? Güncel trendler, fiyat hareketleri ve yatırım fırsatları.",
    date: "2026-02-28",
    readTime: "6 dk",
    category: "Pazar Analizi",
    content: `2026 yılı Kuzey Kıbrıs gayrimenkul piyasası için heyecan verici gelişmelerin yaşandığı bir dönem olmaya devam etmektedir.

## Güncel Trendler

Kuzey Kıbrıs'ta gayrimenkul sektörü, artan uluslararası ilgi ve altyapı yatırımları ile güçlü bir ivme kazanmıştır. Özellikle lüks konut segmentinde talep artışı dikkat çekmektedir.

## Fiyat Hareketleri

Kuzey Kıbrıs genelinde konut fiyatları istikrarlı bir yükseliş trendi göstermektedir. Bölgesel bazda bakıldığında, Long Beach ve Esentepe en yüksek değer artışı gösteren lokasyonlardır.

## Yatırım Fırsatları

Ön satış döneminde satın alınan projeler, tamamlanma sürecinde önemli değer artışı potansiyeli taşımaktadır. Özellikle denize yakın konumdaki projeler ve wellness konseptli konutlar yoğun ilgi görmektedir.

## Kira Getirisi

Kısa dönem tatil kiralamaları özellikle yaz aylarında cazip getiriler sunmaktadır. Döviz bazlı (GBP/EUR) kira gelirleri, Türk Lirası bazlı yatırım maliyetleri düşünüldüğünde önemli bir avantaj oluşturmaktadır.

## Uzman Görüşü

Primevest Investment olarak, 2026 yılının Kuzey Kıbrıs gayrimenkul yatırımları için güçlü bir dönem olacağını öngörüyoruz. Doğru proje seçimi ve zamanlama ile yatırımcılar önemli kazanımlar elde edebilir.`,
  },
  {
    slug: "kuzey-kibrista-tapu-islemleri",
    title: "Kuzey Kıbrıs'ta Tapu İşlemleri ve Yasal Süreçler",
    excerpt:
      "Yabancı yatırımcılar için Kuzey Kıbrıs'ta mülk satın alma, tapu işlemleri ve yasal süreçler hakkında bilmeniz gerekenler.",
    date: "2026-01-20",
    readTime: "7 dk",
    category: "Yasal Bilgiler",
    content: `Kuzey Kıbrıs'ta gayrimenkul satın almayı planlayan yabancı yatırımcıların en çok merak ettiği konuların başında tapu işlemleri ve yasal süreçler gelmektedir.

## Yabancıların Mülk Edinme Hakkı

Kuzey Kıbrıs'ta yabancı uyruklular mülk satın alabilmektedir. Bakanlar Kurulu'ndan alınan satın alma izni ile tapu tescili gerçekleştirilir.

## Tapu Türleri

Kuzey Kıbrıs'ta farklı tapu türleri bulunmaktadır. Her tapu türünün kendine özgü avantajları ve dikkat edilmesi gereken noktaları mevcuttur. Profesyonel danışmanlık hizmeti bu konuda büyük önem taşımaktadır.

## Satın Alma Süreci

Mülk seçimi yapıldıktan sonra satış sözleşmesi hazırlanır, depozito ödenir ve tapu başvuru süreci başlatılır. Bu süreçte güvenilir bir danışmanla çalışmak, olası riskleri minimize eder.

## Vergi ve Harçlar

Mülk satın alımında çeşitli vergi ve harçlar ödenmektedir. Bunlar tapu harcı, damga vergisi ve KDV'den oluşabilir. Detaylı maliyet analizi için uzman danışmanlık almanız önerilir.

## Primevest Farkı

Primevest Investment, kurucu Gülay Yıldız'ın 21 yıllık bankacılık deneyimi ve Kuzey Kıbrıs'taki 8 yıllık birikimi ile müşterilerine yasal süreçlerde de güvenilir rehberlik sunmaktadır. Her yatırımcıya özel, birebir danışmanlık yaklaşımımızla tapu sürecinin her aşamasında yanınızdayız.`,
  },
];

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
