# Proposal: Ingilizce Dil Destegi (i18n)

**Tarih:** 2026-04-13
**Durum:** Taslak — karar bekleniyor

## Ozet

Siteye Ingilizce dil destegi eklenmesi. Mevcut Turkce icerik korunacak, tum sayfalar Ingilizce olarak da sunulacak.

## Mevcut Durum

- Next.js 16, App Router
- Tum metinler JSX icinde hardcoded Turkce
- Route isimleri Turkce: `/projeler`, `/hakkimizda`, `/iletisim`, `/blog`
- `data.ts` icindeki proje aciklamalari, ekip biyografileri tamamen Turkce
- Herhangi bir i18n altyapisi yok

## Onerilen Yaklasim

### URL Yapisi: Prefix Tabanli

Her dil kendi prefix'i altinda yasayacak:

```
/tr/projeler        /en/projects
/tr/hakkimizda      /en/about
/tr/iletisim        /en/contact
/tr/blog            /en/blog
/tr/blog/[slug]     /en/blog/[slug]
/tr/projeler/[slug] /en/projects/[slug]
```

**Neden prefix tabanli?**
- Site yeni, mevcut SEO siralamasi yok — temiz baslangic icin en uygun zaman
- Google her dili ayri ayri indexler (hreflang destegi ile)
- Iki dil esit statude, tutarli yapi
- Subdomain'e gore DNS karmasikligi yok

### Varsayilan Dil ve Yonlendirme

**Turkce varsayilan.** Root URL ve prefix'siz eski URL'ler otomatik yonlendirilir:

```
/                → 301 → /tr
/projeler        → 301 → /tr/projeler
/hakkimizda      → 301 → /tr/hakkimizda
/iletisim        → 301 → /tr/iletisim
/blog            → 301 → /tr/blog
```

**Neden Turkce varsayilan?**
- Hedef kitle agirlikli Turk yatirimcilar
- Mevcut icerik zaten Turkce

### Acik Kararlar

Asagidaki konularda henuz karar verilmedi:

1. **Tarayici diline gore otomatik yonlendirme olsun mu?**
   - `Accept-Language` header'ina bakilarak ilk ziyarette `/en` veya `/tr`'ye yonlendirme
   - Yoksa her zaman `/tr`'ye mi yonlensin?

2. **Dil degistirme mekanizmasi**
   - Navbar'da dil secici (bayrak/dropdown)?
   - Konum: navbar'in neresinde?

3. **Icerik yonetimi**
   - Ceviriler JSON dosyalarinda mi tutulsun? (ornek: `messages/tr.json`, `messages/en.json`)
   - Yoksa her dil icin ayri data dosyasi mi? (`data.tr.ts`, `data.en.ts`)
   - Proje aciklamalari, blog yazilar, ekip biyografileri nasil cevirilecek?

4. **i18n kutuphanesi**
   - `next-intl` (en yaygin Next.js i18n kutuphanesi)
   - Manuel cozum (Next.js'in kendi `[locale]` segmenti + JSON dosyalari)

5. **SEO**
   - `hreflang` tag'leri otomatik eklenmeli
   - Her dil icin ayri sitemap
   - Her dil icin ayri metadata (title, description, OpenGraph)

## Teknik Mimari (On Tasarim)

```
app/
  [locale]/              ← "tr" veya "en"
    layout.tsx           ← locale'e gore html lang, metadata vb.
    page.tsx             ← Ana sayfa
    projeler/            ← (veya projects — locale'e gore route mapping)
      page.tsx
      [slug]/page.tsx
    hakkimizda/          ← (veya about)
      page.tsx
    iletisim/            ← (veya contact)
      page.tsx
    blog/
      page.tsx
      [slug]/page.tsx
messages/
  tr.json                ← Turkce metinler
  en.json                ← Ingilizce metinler
middleware.ts            ← Yonlendirme ve locale tespiti
```

## Etkilenen Dosyalar

- `app/layout.tsx` — locale-aware olacak
- `app/page.tsx` ve tum sayfa dosyalari — `[locale]` segmenti altina tasiniyor
- `app/_components/navbar.tsx` — dil secici eklenmeli, link'ler locale-aware olmali
- `app/_components/footer.tsx` — metinler cevirilecek
- `app/_lib/data.ts` — proje/ekip verileri iki dilde sunulmali
- `app/sitemap.ts` — iki dil icin URL'ler
- `app/robots.ts` — guncellenmeli
- `next.config.ts` — i18n yapilandirmasi
- `middleware.ts` — yeni dosya, yonlendirme mantigi

## Sonraki Adimlar

1. Acik kararlarin netlestirilmesi
2. Detayli implementasyon plani
3. Ingilizce ceviri iceriklerin hazirlanmasi
4. Implementasyon
