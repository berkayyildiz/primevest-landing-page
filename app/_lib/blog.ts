import { BLOG_SLUGS, type BlogKey, type Locale } from "./i18n";

export interface BlogPost {
  key: BlogKey;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  // Most posts use a branded generated cover (see BlogCover); only posts with
  // real photography (e.g. press clippings) carry an image file.
  image: string | null;
  content: string;
}

interface BlogPostL10n {
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  content: string;
}

// Array order is irrelevant: getBlogPosts sorts newest-first, and the blog
// index features the first (i.e. most recent) post.
const BLOG_BASE: { key: BlogKey; date: string; image: string | null }[] = [
  { key: "advisory", date: "2026-07-08", image: null },
  { key: "cyprusEconomy", date: "2026-06-22", image: null },
  { key: "banking", date: "2026-06-02", image: null },
  { key: "portfolio", date: "2026-05-12", image: null },
  { key: "fxSavings", date: "2026-04-20", image: null },
  {
    key: "press",
    date: "2026-04-05",
    image: "/images/press/guclu-kadinlar-gulay-yildiz.jpg",
  },
  { key: "financialPlanning", date: "2026-03-10", image: null },
];

const BLOG_L10N: Record<Locale, Record<BlogKey, BlogPostL10n>> = {
  tr: {
    advisory: {
      title: "Bireysel Yatırım Danışmanlığı Nedir, Kimler İçin Uygundur?",
      excerpt:
        "Bireysel yatırım danışmanlığı ne sunar, banka ürün satışından nasıl ayrışır ve hangi durumlarda profesyonel destek almak fark yaratır? Kapsamlı bir başlangıç rehberi.",
      readTime: "7 dk",
      category: "Yatırım Rehberi",
      content: `Birikimini değerlendirmek isteyen pek çok kişi aynı sorularla karşılaşır: Hangi araca, ne zaman, ne kadar? Bireysel yatırım danışmanlığı; bu soruları sizin adınıza değil, sizinle birlikte cevaplayan, hedeflerinize ve risk profilinize göre şekillenen profesyonel bir rehberlik hizmetidir.

## Ürün Satışı Değil, Yol Arkadaşlığı

Klasik modelde yatırımcıya çoğu zaman bir ürün satılır; komisyon ürünü satan tarafın motivasyonudur. Güvene dayalı danışmanlık modelinde ise danışmanın tek gündemi yatırımcının kendisidir: mevcut finansal durum, hedefler, zaman ufku ve risk toleransı birlikte analiz edilir, strateji buna göre kurulur. Primevest Investment'ın satış odaklı değil, birebir danışmanlık odaklı modelinin temeli budur.

## Danışmanlık Süreci Nasıl İşler?

**1. Tanışma ve Hedef Analizi**

İlk görüşmede finansal hedefleriniz netleştirilir: birikim mi, düzenli ek gelir mi, emeklilik mi, çocuğunuzun eğitimi mi? Hedefi olmayan yatırım, rotası olmayan yolculuğa benzer.

**2. Finansal Durum ve Risk Profili**

Gelir-gider dengeniz, mevcut varlıklarınız ve borçlarınız birlikte incelenir. Piyasa dalgalanmalarına ne kadar tahammülünüz olduğu — yani gerçek risk profiliniz — dürüstçe ortaya konur.

**3. Strateji ve Yapılandırma**

Hedef ve profile uygun bir varlık dağılımı modellenir: vade yapısı, para birimi dengesi, likidite ihtiyacı ve getiri beklentisi birlikte optimize edilir.

**4. Düzenli Takip ve Revizyon**

Hayat değişir, piyasalar değişir. İyi bir danışmanlık ilişkisi tek seferlik bir görüşme değil; düzenli gözden geçirme ve gerektiğinde rota düzeltmesi içeren uzun vadeli bir süreçtir.

## Kimler İçin Uygundur?

Bireysel yatırım danışmanlığı yalnızca büyük servet sahipleri için değildir. Düzenli birikim yapmaya başlayan bir profesyonel, emekliliğe hazırlanan bir çalışan, farklı para birimlerinde geliri olan bir gurbetçi veya birikimini enflasyona karşı korumak isteyen herkes için anlamlıdır. Önemli olan tutar değil; birikiminizi bir plana bağlama kararlılığıdır.

## Doğru Danışmanı Seçmek

Danışmanınızın deneyimini, hangi kurumlarda görev aldığını ve gelir modelinin şeffaf olup olmadığını sorgulayın. 22 yılı aşkın bankacılık deneyimi ve Kuzey Kıbrıs'taki güçlü yerel bilgisiyle Primevest Investment, her yatırımcıya birebir ve güvene dayalı bir danışmanlık ilişkisi sunar.

Bu içerik yalnızca bilgilendirme amaçlıdır; yatırım tavsiyesi değildir.`,
    },
    cyprusEconomy: {
      title: "Kuzey Kıbrıs Ekonomisi: Dinamikler, Fırsatlar ve Dikkat Edilmesi Gerekenler",
      excerpt:
        "KKTC ekonomisinin taşıyıcı sektörleri, para birimi dinamikleri ve bireysel yatırımcı için anlamı. 8 yılı sahada geçmiş bir bankacı perspektifinden Kuzey Kıbrıs ekonomisine bakış.",
      readTime: "8 dk",
      category: "Ekonomi",
      content: `Kuzey Kıbrıs, kendine özgü dinamikleri olan küçük ama hareketli bir ekonomidir. Doğru okunduğunda bireysel yatırımcıya önemli fırsatlar sunar; ancak bu fırsatları değerlendirmek, yerel işleyişi yakından tanımayı gerektirir. Primevest Investment kurucusu Gülay Yıldız'ın 8 yılı aşkın süre KKTC'de şube müdürü olarak edindiği saha deneyimi, bu yazının temelini oluşturuyor.

## Ekonominin Taşıyıcı Sütunları

KKTC ekonomisinin belkemiğini hizmet sektörü oluşturur. Uluslararası öğrencileriyle yükseköğrenim, yıl boyu canlı kalan turizm ve bunlara eşlik eden ticaret ile inşaat sektörleri istihdamın ve döviz girdisinin ana kaynaklarıdır. Genç ve uluslararası bir nüfusun varlığı, iç talebi sürekli besler.

## Çok Para Birimli Bir Günlük Hayat

Kuzey Kıbrıs'ın en ayırt edici finansal özelliği, çok para birimli yapısıdır. Günlük harcamalarda Türk Lirası kullanılırken; birikimler, kiralar ve büyük ölçekli işlemler yaygın olarak Sterlin, Euro veya Dolar üzerinden yapılır. Bu yapı, bireysel yatırımcı için hem doğal bir döviz çeşitlendirmesi imkânı hem de doğru yönetilmesi gereken bir kur riski anlamına gelir.

## Faiz ve Mevduat Ortamı

KKTC bankacılık sisteminde hem TL hem döviz mevduatları için sunulan koşullar, Türkiye ve Avrupa'daki alternatiflerle karşılaştırıldığında dönem dönem cazip seviyelere ulaşabilmektedir. Ancak banka seçimi, mevduat sigortası kapsamı ve vade yapısı gibi konular uzman değerlendirmesi gerektirir; getiri tek başına karar kriteri olmamalıdır.

## Bireysel Yatırımcı İçin Ne Anlama Geliyor?

Kuzey Kıbrıs'ta yaşayan, çalışan veya gelir elde eden bir yatırımcı için üç temel soru öne çıkar: Birikimi hangi para biriminde tutmalı? Hangi vade ve araç karışımı hedeflere uygun? Türkiye ile KKTC arasındaki ekonomik köprü nasıl doğru kullanılır? Bu soruların cevabı kişiye göre değişir — tek tip bir doğru yoktur.

## Yerel Bilginin Değeri

Küçük ekonomilerde bilgi asimetrisi büyüktür: doğru bilgiye yakın olanla olmayan arasındaki fark, getiriye doğrudan yansır. Hem Türkiye hem KKTC vatandaşı olan ve iki ekonomiyi de içeriden tanıyan bir danışmanla çalışmak, bu asimetriyi yatırımcının lehine çevirir.

Bu içerik yalnızca bilgilendirme amaçlıdır; yatırım tavsiyesi değildir.`,
    },
    banking: {
      title: "KKTC'de Bankacılık ve Mevduat: Bilinmesi Gerekenler",
      excerpt:
        "Kuzey Kıbrıs'ta hesap açma, mevduat seçenekleri, mevduat sigortası ve banka seçiminde dikkat edilmesi gerekenler — 8 yıl KKTC'de şube yönetmiş bir bankacının rehberi.",
      readTime: "6 dk",
      category: "Finansal Rehber",
      content: `Kuzey Kıbrıs'a taşınan, burada çalışmaya başlayan veya birikiminin bir kısmını adada değerlendirmek isteyen herkesin ilk temas noktası bankacılık sistemidir. Sistemin işleyişini bilmek, hem zaman kazandırır hem de birikiminizi daha güvenli yapılandırmanızı sağlar.

## KKTC Bankacılık Sisteminin Yapısı

Kuzey Kıbrıs'ta yerel sermayeli bankalar, Türkiye kökenli bankaların şubeleri ve kamu bankaları birlikte faaliyet gösterir. Sistem KKTC Merkez Bankası tarafından düzenlenir ve denetlenir. Banka sayısının nüfusa oranla yüksek olması rekabeti canlı tutar; bu da mevduat sahibi için pazarlık alanı yaratır.

## Hesap Açma ve Günlük İşlemler

Hesap açmak için kimlik, adres belgesi ve gelir kaynağını gösteren temel evraklar yeterlidir; süreç Türkiye'dekine benzer şekilde ilerler. TL, Sterlin, Euro ve Dolar hesapları yaygın olarak kullanılır. Dijital bankacılık altyapısı son yıllarda belirgin şekilde gelişmiştir.

## Mevduat Seçenekleri ve Vade Yapısı

KKTC'de vadeli mevduat, bireysel birikimciler için en yaygın araçtır. Hem TL hem döviz mevduatlarında farklı vade seçenekleri sunulur. Doğru vade yapısı; likidite ihtiyacınıza, kur beklentinize ve hedeflerinize göre kurgulanmalıdır. Tek bir bankada, tek bir para biriminde ve tek bir vadede yoğunlaşmak en sık görülen hatadır.

## Mevduat Sigortası ve Güvence

KKTC'de mevduatlar, yasal düzenlemelerle belirlenen limitler dâhilinde Tasarruf Mevduatı Sigortası Fonu güvencesi altındadır. Güvence limitlerini ve kapsamı bilmek, birikimin birden fazla kurum arasında nasıl dağıtılacağına karar verirken kritik önem taşır.

## Banka Seçiminde Nelere Bakılmalı?

Yalnızca en yüksek faizi sunan bankaya yönelmek yerine; kurumun sermaye yapısı, geçmişi, hizmet kalitesi ve döviz işlemlerindeki kabiliyeti birlikte değerlendirilmelidir. 22 yıllık bankacılık deneyimiyle Primevest Investment, bu değerlendirmeyi yatırımcı adına yapılandırır ve birikiminizi kurumlar arasında doğru dağıtmanız için yol gösterir.

Bu içerik yalnızca bilgilendirme amaçlıdır; yatırım tavsiyesi değildir.`,
    },
    portfolio: {
      title: "Portföy Çeşitlendirmesi: Riski Yönetmenin Altın Kuralı",
      excerpt:
        "Tüm yumurtaları aynı sepete koymamak neden bu kadar önemli? Varlık sınıfı, para birimi ve vade çeşitlendirmesiyle dengeli bir portföy kurmanın temelleri.",
      readTime: "6 dk",
      category: "Yatırım Rehberi",
      content: `Yatırım dünyasının en eski öğüdü hâlâ en değerlisidir: Tüm yumurtaları aynı sepete koymayın. Çeşitlendirme, getiriyi artırma vaadinden önce bir risk yönetimi disiplinidir — ve bireysel yatırımcının kontrolündeki en güçlü araçtır.

## Çeşitlendirme Neden İşe Yarar?

Farklı varlık sınıfları aynı ekonomik olaylara farklı tepkiler verir. Faizler yükselirken mevduat cazipleşir; enflasyonist dönemlerde reel varlıklar öne çıkar; belirsizlik dönemlerinde altın ve güçlü para birimleri güvenli liman görevi görür. Portföyünüz bu tepkileri dengeleyecek şekilde kurulduğunda, tek bir olayın tüm birikiminizi etkilemesi engellenir.

## Üç Boyutlu Çeşitlendirme

**Varlık sınıfı çeşitlendirmesi**

Mevduat, döviz, kıymetli madenler, fonlar ve diğer araçlar arasında hedeflerinize uygun bir dağılım kurmak ilk adımdır. Her varlık sınıfının rolü farklıdır: kimi güvence, kimi büyüme, kimi likidite sağlar.

**Para birimi çeşitlendirmesi**

Geliriniz, harcamalarınız ve birikiminiz farklı para birimlerindeyse kur riski hayatınızın bir parçasıdır. Özellikle Kuzey Kıbrıs gibi çok para birimli ekonomilerde TL, Sterlin ve Euro arasındaki denge bilinçli kurulmalıdır.

**Vade çeşitlendirmesi**

Tüm birikimi tek vadeye bağlamak, hem likidite riskini hem de yeniden fiyatlama riskini büyütür. Kademeli vade yapısı — bir kısmı kısa, bir kısmı orta, bir kısmı uzun vadede — hem esneklik hem istikrar sağlar.

## Aşırı Çeşitlendirme de Bir Risktir

Çeşitlendirmenin amacı karmaşa değil dengedir. Takip edemeyeceğiniz kadar çok araca dağılmış bir portföy, hiç çeşitlendirilmemiş bir portföy kadar sorunludur. İdeal yapı; sayıca yönetilebilir, rolü net araçlardan oluşur.

## Kişiye Özel Denge

Doğru dağılım; yaşınıza, gelir yapınıza, hedeflerinize ve risk toleransınıza bağlıdır. Primevest Investment olarak her yatırımcının dengesini birlikte kuruyor, piyasa koşulları değiştikçe birlikte güncelliyoruz.

Bu içerik yalnızca bilgilendirme amaçlıdır; yatırım tavsiyesi değildir.`,
    },
    fxSavings: {
      title: "Döviz Bazlı Birikim Stratejileri: Kur Riskini Fırsata Çevirmek",
      excerpt:
        "Geliri TL, birikimi döviz olanlar için pratik stratejiler: para birimi dengesi, kademeli alım ve çok para birimli ekonomilerde birikim yönetimi.",
      readTime: "6 dk",
      category: "Yatırım Rehberi",
      content: `Türkiye ve Kuzey Kıbrıs gibi ekonomilerde birikim yapan herkes, ister istemez bir kur stratejisi yürütür — çoğu zaman farkında olmadan. Birikimin hangi para biriminde tutulduğu, en az ne kadar birikim yapıldığı kadar önemlidir.

## Neden Döviz Bazlı Düşünmeliyiz?

Birikimin amacı satın alma gücünü korumak ve büyütmektir. Harcamalarınızın veya gelecekteki hedeflerinizin bir kısmı döviz cinsindense — yurt dışında eğitim, Sterlin bazlı kira, uluslararası seyahat — birikimin tamamını TL'de tutmak, hedefle birikim arasında bir kur açığı oluşturur.

## Gelir-Harcama-Birikim Uyumu

Sağlıklı bir kur stratejisinin ilk kuralı uyumdur: birikiminizin para birimi dağılımı, gelecekteki harcama planınızı yansıtmalıdır. Kuzey Kıbrıs'ta bu denge özellikle önemlidir; günlük hayat TL ile dönerken kiralar ve büyük harcamalar çoğunlukla Sterlin bazlıdır. Bu yapıda Sterlin, birikim planlamasının doğal bir bileşeni hâline gelir.

## Kademeli Alım: Zamanlama Stresine Son

Kur seviyesini mükemmel zamanlamaya çalışmak, profesyoneller için bile kazanılması zor bir oyundur. Düzenli aralıklarla, sabit tutarlarla alım yapmak (maliyet ortalaması) hem zamanlama riskini dağıtır hem de birikim disiplinini otomatikleştirir.

## Döviz Mevduatının Rolü

Döviz birikimini yastık altında tutmak, onu getiriden mahrum bırakmaktır. KKTC ve Türkiye'de döviz mevduatlarına sunulan koşullar dönemsel olarak farklılaşır; doğru kurum ve vade seçimiyle döviz birikimi hem korunur hem çalışır. Ancak burada banka güvencesi, vade uyumu ve stopaj gibi detaylar kararı etkiler.

## Dengeyi Korumak

Kur hareketleri portföydeki dengeyi zamanla bozar: güçlenen para biriminin payı büyür. Belirli aralıklarla dağılımı hedefe geri çekmek (rebalancing), "pahalıyken sat, ucuzken al" disiplinini kendiliğinden uygular.

Primevest Investment olarak; gelir yapınıza ve hedeflerinize uygun para birimi dengesini birlikte kuruyor, iki ekonomiyi de içeriden tanıyan perspektifimizle birikiminizi yapılandırıyoruz.

Bu içerik yalnızca bilgilendirme amaçlıdır; yatırım tavsiyesi değildir.`,
    },
    press: {
      title: "Primevest Investment Güçlü Kadınlar Dergisi'nde",
      excerpt:
        "Kurucumuz Gülay Yıldız, Güçlü Kadınlar dergisine konuk oldu: 22 yıllık bankacılık kariyeri, Kuzey Kıbrıs'ta kendi danışmanlık şirketini kurma yolculuğu ve kadın girişimciliği üzerine samimi bir röportaj.",
      readTime: "5 dk",
      category: "Medya",
      content: `Primevest Investment'ın kurucu ortağı ve direktörü Gülay Yıldız, Güçlü Kadınlar dergisinin özel sayısında geniş yer aldı. Röportajda Gülay Yıldız; 22 yıllık bankacılık ve finans kariyerini, kurumsal hayattan kendi danışmanlık şirketini kurmaya uzanan dönüşümünü ve Kuzey Kıbrıs'taki yolculuğunu anlattı.

## Bankacılıktan Girişimciliğe

Garanti BBVA, ING Bank ve Türk Ekonomi Bankası gibi sektörün önde gelen kurumlarında özel bankacılık, ticari bankacılık ve şube müdürlüğü görevlerinde bulunan Gülay Yıldız, kariyerinin son 8 yılını Kuzey Kıbrıs'ta şube müdürü olarak geçirdi. Röportajda bu dönüm noktasını şöyle anlatıyor: "Uzun yıllar bankacılık yaptıktan sonra kısa sürede kendi ofisimi kurduğum dönem benim için dönüm noktasıydı. Ofisimin kapısını ilk gün açtığımda, doğru bir karar verdiğimi ve yeniden başlayabilmenin mümkün olduğunu kendime kanıtladığımı hissettim."

## Satış Değil, Güven

Röportajın en güçlü mesajı, Gülay Yıldız'ın çalışma felsefesiydi: "Beni farklılaştıran en önemli yaklaşım, hiçbir zaman sadece satış odaklı düşünmemem oldu. Bankacılık geçmişim sayesinde yatırımın arkasındaki finansal sürdürülebilirliği, riskleri ve uzun vadeli getiriyi doğru analiz etmeyi öğrendim. Uzun vadeli güven ilişkisi, benim için her zaman kısa vadeli kazançtan daha değerli oldu."

## Zor Zamanlarda Çözüm Üretmek

Kriz anlarında soğukkanlı kalabilmenin kariyerindeki en büyük kazanım olduğunu vurgulayan Yıldız, "En büyük ilhamım, zor zamanlarda paniğe kapılmak yerine çözüm üretmeye odaklanmak gerektiğini öğrenmem oldu. Bugün karar verirken önce sakin kalmaya ve durumu doğru analiz etmeye çalışmam bunun bir sonucu" dedi.

## Kadınlara Mesaj

Dergi aracılığıyla yolun başındaki kadınlara seslenen Gülay Yıldız'ın mesajı netti: "Kendinize yeniden başlama cesaretini verdiğiniz an, hayatınızın yönü değişmeye başlar; vazgeçmeyin."

Bu röportaj; Primevest Investment'ın güvene dayalı danışmanlık vizyonunu ve Gülay Yıldız'ın ekonomi birikimiyle Kuzey Kıbrıs'taki öncü konumunu bir kez daha gözler önüne serdi.`,
    },
    financialPlanning: {
      title: "Finansal Hedef Planlaması: Birikimden Yatırıma Geçişin Yol Haritası",
      excerpt:
        "Acil durum fonundan uzun vadeli yatırıma: finansal hedeflerinizi katmanlara ayırmak, önceliklendirmek ve her katman için doğru aracı seçmek.",
      readTime: "7 dk",
      category: "Finansal Planlama",
      content: `Birikim yapmak bir başlangıçtır; ama birikimin bir planı yoksa, en küçük beklenmedik harcama veya en cazip görünen fırsat tüm dengeyi bozabilir. Finansal hedef planlaması, birikiminizi katmanlara ayırarak her lirayı bir amaca bağlar.

## Birinci Katman: Acil Durum Fonu

Her finansal planın temeli, 3-6 aylık yaşam giderini karşılayacak, kolay erişilebilir bir acil durum fonudur. Bu fon getiri için değil, güvence için vardır; kısa vadeli ve likit araçlarda tutulmalıdır. Acil durum fonu olmayan yatırımcı, piyasanın en yanlış anında yatırımını bozmak zorunda kalır.

## İkinci Katman: Orta Vadeli Hedefler

Araç değişimi, eğitim, evlilik, taşınma gibi 1-5 yıl içindeki hedefler bu katmandadır. Buradaki altın kural, hedefin para birimiyle biriktirme aracının para birimini uyumlu tutmaktır. Vade sonu belli olan hedefler için dalgalanması yüksek araçlardan uzak durmak esastır.

## Üçüncü Katman: Uzun Vadeli Büyüme

Emeklilik ve nesiller arası birikim gibi 10 yıl ve ötesindeki hedefler, zamanın ve bileşik getirinin en güçlü çalıştığı alandır. Bu katmanda kısa vadeli dalgalanmalara tahammül daha yüksektir; strateji sabır ve disiplin üzerine kurulur.

## Bileşik Getirinin Sessiz Gücü

Einstein'a atfedilen söz abartılı olsa da gerçeği yansıtır: bileşik getiri, dünyanın en güçlü finansal kuvvetlerindendir. Erken başlamak, yüksek getiri kovalamaktan neredeyse her zaman daha etkilidir. Düzenli ve otomatik birikim, iradeden bağımsız bir sistem kurar.

## Plan Yaşayan Bir Belgedir

Gelir değişir, aile büyür, hedefler evrilir. İyi bir finansal plan yılda en az bir kez gözden geçirilir; büyük yaşam olaylarında ise beklemeden güncellenir.

Primevest Investment olarak; hedeflerinizi birlikte katmanlara ayırıyor, her katman için doğru aracı ve vadeyi yapılandırıyor, planınızı düzenli aralıklarla birlikte gözden geçiriyoruz. İlk görüşmemiz ücretsizdir.

Bu içerik yalnızca bilgilendirme amaçlıdır; yatırım tavsiyesi değildir.`,
    },
  },
  en: {
    advisory: {
      title: "What Is Personal Investment Advisory — and Who Is It For?",
      excerpt:
        "What does personal investment advisory actually offer, how does it differ from bank product sales, and when does professional guidance make a real difference? A comprehensive starter guide.",
      readTime: "7 min",
      category: "Investment Guide",
      content: `Anyone looking to put their savings to work runs into the same questions: which instrument, when, and how much? Personal investment advisory is a professional guidance service that answers these questions with you — not for you — shaped around your goals and your risk profile.

## A Companion, Not a Salesperson

In the classic model, investors are usually sold a product; commission drives the seller's motivation. In a trust-based advisory model, the advisor's only agenda is the investor: your current financial situation, goals, time horizon and risk tolerance are analysed together, and the strategy is built on them. This is the foundation of Primevest Investment's one-on-one, advisory-first model.

## How Does the Process Work?

**1. Introduction and Goal Analysis**

The first meeting clarifies your financial goals: building savings, generating regular additional income, retirement, your children's education? An investment without a goal is a journey without a route.

**2. Financial Situation and Risk Profile**

Your income and spending balance, existing assets and liabilities are reviewed together. How much market volatility you can genuinely tolerate — your true risk profile — is established honestly.

**3. Strategy and Structuring**

An asset allocation is modelled to match your goals and profile: maturity structure, currency balance, liquidity needs and return expectations are optimised together.

**4. Regular Review and Revision**

Life changes, and so do markets. A good advisory relationship is not a one-off meeting but a long-term process of regular reviews and course corrections when needed.

## Who Is It For?

Personal investment advisory is not only for the very wealthy. It makes sense for a professional who has started saving regularly, an employee preparing for retirement, an expat earning in multiple currencies, or anyone who wants to protect their savings against inflation. What matters is not the amount — it is the commitment to putting your savings on a plan.

## Choosing the Right Advisor

Ask about your advisor's experience, the institutions they have worked at, and whether their revenue model is transparent. With more than 22 years of banking experience and deep local knowledge of North Cyprus, Primevest Investment offers every investor a one-on-one relationship built on trust.

This content is for information purposes only and does not constitute investment advice.`,
    },
    cyprusEconomy: {
      title: "The North Cyprus Economy: Dynamics, Opportunities and Watch-Outs",
      excerpt:
        "The sectors that carry the TRNC economy, its currency dynamics and what they mean for individual investors — a view of North Cyprus through the eyes of a banker with 8 years in the field.",
      readTime: "8 min",
      category: "Economy",
      content: `North Cyprus is a small but lively economy with dynamics all of its own. Read correctly, it offers individual investors significant opportunities; but capturing them requires close familiarity with how things work locally. The field experience of Primevest Investment founder Gülay Yıldız — who spent more than 8 years as a bank branch manager in the TRNC — forms the backbone of this article.

## The Pillars of the Economy

The backbone of the TRNC economy is the services sector. Higher education with its international student body, tourism that stays lively year-round, and the trade and construction activity that accompany them are the main sources of employment and foreign currency inflows. A young, international population keeps domestic demand consistently fed.

## Daily Life in Multiple Currencies

North Cyprus' most distinctive financial feature is its multi-currency structure. Daily spending runs in Turkish Lira, while savings, rents and larger transactions are commonly denominated in Sterling, Euro or Dollars. For the individual investor this means both a natural opportunity for currency diversification and an exchange-rate risk that needs to be managed deliberately.

## The Interest Rate and Deposit Environment

Conditions offered on both TL and foreign currency deposits in the TRNC banking system can, at times, reach attractive levels compared with alternatives in Türkiye and Europe. But bank selection, deposit insurance coverage and maturity structure all require expert assessment; yield alone should never be the deciding criterion.

## What Does This Mean for Individual Investors?

For an investor living, working or earning in North Cyprus, three questions stand out: In which currency should savings be held? Which mix of maturities and instruments fits the goals? And how is the economic bridge between Türkiye and the TRNC best used? The answers differ from person to person — there is no one-size-fits-all.

## The Value of Local Knowledge

In small economies, information asymmetry is large: the gap between those close to accurate information and those far from it shows up directly in returns. Working with an advisor who holds both Turkish and TRNC citizenship and knows both economies from the inside turns that asymmetry in the investor's favour.

This content is for information purposes only and does not constitute investment advice.`,
    },
    banking: {
      title: "Banking and Deposits in North Cyprus: What You Need to Know",
      excerpt:
        "Opening accounts, deposit options, deposit insurance and how to choose a bank in North Cyprus — a guide from a banker who managed a TRNC branch for 8 years.",
      readTime: "6 min",
      category: "Financial Guide",
      content: `For anyone moving to North Cyprus, starting work here or looking to hold part of their savings on the island, the banking system is the first point of contact. Knowing how it works saves time and helps you structure your savings more securely.

## The Structure of the TRNC Banking System

Locally owned banks, branches of Türkiye-based banks and public banks all operate in North Cyprus. The system is regulated and supervised by the TRNC Central Bank. The high number of banks relative to the population keeps competition lively — which creates negotiating room for depositors.

## Opening an Account and Day-to-Day Banking

Opening an account requires identification, proof of address and basic documentation of your source of income; the process is similar to Türkiye's. TL, Sterling, Euro and Dollar accounts are all widely used, and digital banking infrastructure has improved markedly in recent years.

## Deposit Options and Maturity Structure

Term deposits are the most common instrument for individual savers in the TRNC, with a range of maturities offered in both TL and foreign currencies. The right maturity structure should be built around your liquidity needs, currency outlook and goals. Concentrating everything in a single bank, a single currency and a single maturity is the most common mistake.

## Deposit Insurance and Protection

Deposits in the TRNC are protected by the Savings Deposit Insurance Fund within limits set by law. Knowing those limits and what they cover is critical when deciding how to spread savings across more than one institution.

## How to Choose a Bank

Rather than simply chasing the highest rate, weigh the institution's capital strength, track record, service quality and capability in foreign currency transactions together. With 22 years of banking experience, Primevest Investment structures this assessment on the investor's behalf and guides you in allocating your savings across institutions.

This content is for information purposes only and does not constitute investment advice.`,
    },
    portfolio: {
      title: "Portfolio Diversification: The Golden Rule of Managing Risk",
      excerpt:
        "Why is not putting all your eggs in one basket so important? The fundamentals of building a balanced portfolio across asset classes, currencies and maturities.",
      readTime: "6 min",
      category: "Investment Guide",
      content: `The oldest advice in investing is still the most valuable: don't put all your eggs in one basket. Before being a promise of higher returns, diversification is a risk-management discipline — and the most powerful tool within an individual investor's control.

## Why Does Diversification Work?

Different asset classes react differently to the same economic events. When rates rise, deposits become attractive; in inflationary periods, real assets come to the fore; in times of uncertainty, gold and strong currencies act as safe harbours. When your portfolio is built to balance these reactions, no single event can hit your entire savings at once.

## Diversification in Three Dimensions

**Across asset classes**

The first step is an allocation across deposits, foreign currency, precious metals, funds and other instruments that fits your goals. Each asset class plays a different role: some provide security, some growth, some liquidity.

**Across currencies**

If your income, spending and savings run in different currencies, exchange-rate risk is part of your life. Especially in multi-currency economies like North Cyprus, the balance between TL, Sterling and Euro should be set deliberately.

**Across maturities**

Locking all savings into a single maturity magnifies both liquidity risk and repricing risk. A laddered maturity structure — part short, part medium, part long — delivers both flexibility and stability.

## Over-Diversification Is Also a Risk

The goal of diversification is balance, not complexity. A portfolio scattered across more instruments than you can follow is as problematic as one that isn't diversified at all. The ideal structure consists of a manageable number of instruments, each with a clear role.

## A Balance That Is Yours

The right allocation depends on your age, income structure, goals and risk tolerance. At Primevest Investment we build each investor's balance together — and update it together as market conditions change.

This content is for information purposes only and does not constitute investment advice.`,
    },
    fxSavings: {
      title: "Foreign Currency Savings Strategies: Turning FX Risk into Opportunity",
      excerpt:
        "Practical strategies for those who earn in TL and save in foreign currency: currency balance, cost averaging and managing savings in multi-currency economies.",
      readTime: "6 min",
      category: "Investment Guide",
      content: `Anyone saving in economies like Türkiye and North Cyprus is, willingly or not, running a currency strategy — often without realising it. Which currency your savings sit in matters at least as much as how much you save.

## Why Think in Currency Terms?

The purpose of saving is to protect and grow purchasing power. If part of your spending or future goals is denominated in foreign currency — education abroad, Sterling-based rent, international travel — keeping all savings in TL opens a currency gap between the goal and the savings meant to fund it.

## Aligning Income, Spending and Savings

The first rule of a sound currency strategy is alignment: the currency mix of your savings should reflect your future spending plans. In North Cyprus this balance matters especially; daily life runs in TL while rents and larger outlays are mostly Sterling-based. In such a structure, Sterling becomes a natural component of savings planning.

## Cost Averaging: An End to Timing Stress

Trying to time exchange rates perfectly is a hard game to win even for professionals. Buying at regular intervals in fixed amounts (cost averaging) spreads timing risk and automates the discipline of saving.

## The Role of Foreign Currency Deposits

Keeping foreign currency savings under the mattress deprives them of any return. Conditions offered on foreign currency deposits in the TRNC and Türkiye vary over time; with the right institution and maturity, currency savings are both protected and productive. Details such as deposit insurance, maturity alignment and withholding tax all shape the decision.

## Maintaining the Balance

Currency moves gradually distort a portfolio's balance: the strengthening currency's share grows. Rebalancing back to target at set intervals applies the discipline of "sell high, buy low" automatically.

At Primevest Investment, we build the currency balance that fits your income structure and goals — structuring your savings with a perspective that knows both economies from the inside.

This content is for information purposes only and does not constitute investment advice.`,
    },
    press: {
      title: "Primevest Investment Featured in Güçlü Kadınlar Magazine",
      excerpt:
        "Our founder Gülay Yıldız was featured in Güçlü Kadınlar (Strong Women) magazine: a candid interview on her 22-year banking career, building her own advisory firm in North Cyprus, and women's entrepreneurship.",
      readTime: "5 min",
      category: "Media",
      content: `Gülay Yıldız, founding partner and director of Primevest Investment, was featured extensively in a special issue of Güçlü Kadınlar (Strong Women) magazine. In the interview, she talked about her 22-year career in banking and finance, her transformation from corporate life to founding her own advisory firm, and her journey in North Cyprus.

## From Banking to Entrepreneurship

Having held private banking, commercial banking and branch management roles at leading institutions such as Garanti BBVA, ING Bank and Türk Ekonomi Bankası, Gülay Yıldız spent the last 8 years of her career as a branch manager in North Cyprus. She describes the turning point: "After many years in banking, the period when I built my own office in a short time was a turning point for me. The day I first opened my office door, I felt I had made the right decision and proved to myself that starting again is possible."

## Trust, Not Sales

The interview's strongest message was her working philosophy: "The most important approach that sets me apart is that I have never thought in purely sales-driven terms. Thanks to my banking background, I learned to analyse the financial sustainability, the risks and the long-term return behind an investment. A long-term relationship of trust has always been worth more to me than short-term gain."

## Producing Solutions in Hard Times

Emphasising that staying calm in moments of crisis was the greatest lesson of her career, Yıldız said: "My greatest inspiration was learning that in difficult times you must focus on producing solutions rather than panicking. The fact that today I try to stay calm and analyse the situation correctly before deciding is a result of that."

## A Message to Women

Speaking through the magazine to women at the start of their journey, her message was clear: "The moment you give yourself the courage to start again, the direction of your life begins to change; don't give up."

The interview once again showcased Primevest Investment's trust-based advisory vision and Gülay Yıldız's pioneering position in North Cyprus, built on her depth in economics and finance.`,
    },
    financialPlanning: {
      title: "Financial Goal Planning: A Road Map from Saving to Investing",
      excerpt:
        "From the emergency fund to long-term investing: layering your financial goals, prioritising them and choosing the right instrument for each layer.",
      readTime: "7 min",
      category: "Financial Planning",
      content: `Saving is a beginning — but if your savings have no plan, the smallest unexpected expense or the most tempting-looking opportunity can upset the whole balance. Financial goal planning divides your savings into layers and ties every lira to a purpose.

## Layer One: The Emergency Fund

The foundation of every financial plan is an easily accessible emergency fund covering 3-6 months of living costs. This fund exists for security, not returns; it belongs in short-term, liquid instruments. An investor without an emergency fund ends up unwinding investments at the market's worst possible moment.

## Layer Two: Medium-Term Goals

Goals within 1-5 years — a car, education, a wedding, a move — sit in this layer. The golden rule here is to match the currency of the savings instrument to the currency of the goal. For goals with a fixed end date, staying away from highly volatile instruments is essential.

## Layer Three: Long-Term Growth

Goals 10 years and beyond — retirement, intergenerational savings — are where time and compounding work hardest. This layer tolerates short-term volatility better; the strategy is built on patience and discipline.

## The Quiet Power of Compounding

The saying attributed to Einstein may be exaggerated, but it reflects the truth: compound returns are among the most powerful financial forces in the world. Starting early beats chasing high returns almost every time. Regular, automated saving builds a system that doesn't depend on willpower.

## A Plan Is a Living Document

Income changes, families grow, goals evolve. A good financial plan is reviewed at least once a year — and updated without delay after major life events.

At Primevest Investment, we layer your goals together, structure the right instrument and maturity for each layer, and review your plan with you at regular intervals. Your first consultation is free.

This content is for information purposes only and does not constitute investment advice.`,
    },
  },
};

export function getBlogPosts(locale: Locale): BlogPost[] {
  return BLOG_BASE.map((base) => ({
    key: base.key,
    slug: BLOG_SLUGS[base.key][locale],
    date: base.date,
    image: base.image,
    ...BLOG_L10N[locale][base.key],
  })).sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPostBySlug(
  locale: Locale,
  slug: string
): BlogPost | undefined {
  return getBlogPosts(locale).find((p) => p.slug === slug);
}
