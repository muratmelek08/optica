import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: "p1",
    brand: "Versace",
    model: "Medusa Biggie",
    lensType: "Polarize",
    frameMaterial: "Kemik",
    gender: "Unisex",
    price: 14500,
    imageUrl: "/images/p1-versace-1.jpg",
    images: ["/images/p1-versace-1.jpg", "/images/p1-versace-2.jpg", "/images/p1-versace-3.jpg", "/images/p1-versace-4.jpg", "/images/p1-versace-5.jpg"],
    color: ["Siyah", "Pembe"],
    // Her renk kendi fotoğraflarına bağlanmış - renk seçince o galerideki fotoğraflar gelecek
    colorImages: {
      "Siyah": ["/images/p1-versace-1.jpg", "/images/p1-versace-2.jpg", "/images/p1-versace-3.jpg", "/images/p1-versace-4.jpg", "/images/p1-versace-5.jpg"],
      "Pembe": ["/images/p1-versace-6.jpg", "/images/p1-versace-7.jpg", "/images/p1-versace-8.jpg"]
    },
    // Her renk için ayrı stok miktarı
    colorStock: {
      "Siyah": 8,
      "Pembe": 4
    },
    description: "Pop kültürünün ikonu, kalın çerçeveli efsanevi Medusa serisi.",
    stock: 12,
    isFeatured: true
  },
  {
    id: "p2",
    brand: "Vogue",
    model: "Cat Eye",
    lensType: "UV Korumalı",
    frameMaterial: "Kemik",
    gender: "Kadın",
    price: 2100,
    imageUrl: "/images/p2-vogue-1.jpg",
    images: ["/images/p2-vogue-1.jpg", "/images/p2-vogue-2.jpg"],
    color: ["Şeffaf", "Kahverengi", "Siyah"],
    description: "Zarif, her yüze uyum sağlayan kedi gözü tasarım.",
    stock: 15,
    isFeatured: true
  },
  {
    id: "p3",
    brand: "Oakley",
    model: "Holbrook 55",
    lensType: "Antirefle",
    frameMaterial: "Plastik",
    gender: "Erkek",
    price: 4200,
    imageUrl: "/images/p3-oakley-1.jpg",
    images: ["/images/p3-oakley-1.jpg", "/images/p3-oakley-2.jpg"],
    color: ["Siyah", "Mavi", "Kırmızı", "Mor"],
    colorImages: {
      "Siyah": ["/images/p3-oakley-2.jpg"],
      "Mavi": ["/images/p3-oakley-1.jpg"],
      "Mor": ["/images/p3-oakley-3.jpg"],
      "Kırmızı": ["/images/p3-oakley-4.jpg"]
    },
    colorStock: {
      "Siyah": 8,
      "Mavi": 4,
      "Kırmızı": 2,
      "Mor": 1
    },
    description: "Aktif yaşam tarzı için darbelere dayanıklı sportif çerçeve.",
    stock: 15,
    isFeatured: true
  },
  {
    id: "p4",
    brand: "Tom Ford",
    model: "FT0711",
    lensType: "Standart",
    frameMaterial: "Titanyum",
    gender: "Unisex",
    price: 8500,
    imageUrl: "/images/p4-tomford-1.jpg",
    images: ["/images/p4-tomford-1.jpg", "/images/p4-tomford-2.jpg"],
    color: ["Altın", "Gümüş"],
    description: "Hafif ve lüks titanyum malzeme, asil bir görünüm.",
    stock: 5,
    isFeatured: true
  },
  {
    id: "p5",
    brand: "Prada",
    model: "Symbole",
    lensType: "Polarize",
    frameMaterial: "Kemik",
    gender: "Kadın",
    price: 9200,
    imageUrl: "/images/p5-prada-1.jpg",
    images: ["/images/p5-prada-1.jpg", "/images/p5-prada-2.jpg"],
    color: ["Siyah", "Pembe"],
    description: "Kalın kemik çerçeveli ikonik ve gösterişli şıklık.",
    stock: 8,
    isFeatured: true
  },
  {
    id: "p6",
    brand: "Dior",
    model: "So Real",
    lensType: "UV Korumalı",
    frameMaterial: "Metal",
    gender: "Kadın",
    price: 18500,
    imageUrl: "/images/p6-dior-1.jpg",
    images: ["/images/p6-dior-1.jpg", "/images/p6-dior-2.jpg"],
    color: ["Altın", "Gümüş", "Gül Altın"],
    description: "Geçmişin asil yüz hatlarını gelecekle harmanlayan aynalı ikonik tasarım.",
    stock: 7
  },
  {
    id: "p7",
    brand: "Osse",
    model: "OS3560-02 56",
    lensType: "UV Korumalı",
    frameMaterial: "Metal",
    gender: "Kadın",
    price: 1300,
    imageUrl: "/images/p7-osse-1.jpg",
    images: ["/images/p7-osse-1.jpg", "/images/p7-osse-2.jpg", "/images/p7-osse-3.jpg"],
    color: ["Gümüş", "Altın"],
    description: "Günlük kullanım için ideal ince metal çerçeve.",
    stock: 30
  },
  {
    id: "p8",
    brand: "Mustang",
    model: "MU-7411",
    lensType: "Polarize",
    frameMaterial: "Plastik",
    gender: "Erkek",
    price: 1600,
    imageUrl: "/images/p8-mustang.jpg",
    color: ["Siyah", "Lacivert"],
    description: "Spor ve klasik giyime uygun, rahat kullanım.",
    stock: 45
  },
  {
    id: "p9",
    brand: "Guess",
    model: "GU7605",
    lensType: "Mavi Işık Filtreli",
    frameMaterial: "Kemik",
    gender: "Unisex",
    price: 2500,
    imageUrl: "/images/p9-guess.jpg",
    color: ["Şeffaf", "Gri"],
    description: "Uzun süre ekran karşısında kalanlar için özel ekran gözlüğü.",
    stock: 22
  },
  {
    id: "p10",
    brand: "Gucci",
    model: "Men's Gold Square Optical Frame",
    lensType: "Transparent",
    frameMaterial: "Metal",
    gender: "Erkek",
    price: 12500,
    imageUrl: "/images/p10-gucci-1.jpg",
    images: ["/images/p10-gucci-1.jpg", "/images/p10-gucci-2.jpg", "/images/p10-gucci-3.jpg", "/images/p10-gucci-4.jpg"],
    colorImages: {
      "Altın": ["/images/p10-gucci-1.jpg", "/images/p10-gucci-2.jpg", "/images/p10-gucci-3.jpg", "/images/p10-gucci-4.jpg"]
    },
    colorStock: {
      "Altın": 5
    },
    color: ["Altın"],
    description: "Oversize lüks tasarımıyla tüm dikkatleri üzerinize çekin.",
    stock: 5
  },
  {
    id: "p11",
    brand: "Gucci",
    model: "Style 819568 J0740 2323",
    lensType: "UV Korumalı",
    frameMaterial: "Kemik",
    gender: "Kadın",
    price: 19250,
    imageUrl: "/images/p10-gucci-5.jpg",
    images: ["/images/p10-gucci-5.jpg", "/images/p10-gucci-6.jpg", "/images/p10-gucci-7.jpg"],
    colorImages: {
      "Kahverengi": ["/images/p10-gucci-5.jpg", "/images/p10-gucci-6.jpg", "/images/p10-gucci-7.jpg"],
      "Siyah": ["/images/p10-gucci-8.jpg", "/images/p10-gucci-9.jpg", "/images/p10-gucci-10.jpg"]
    },
    colorStock: {
      "Kahverengi": 5,
      "Siyah": 7
    },
    color: ["Kahverengi", "Siyah"],
    description: "Cruise 2025 gözlük koleksiyonu, cesur bir silüeti ve imza motiflerini çağdaş bir tasarımla birleştiriyor. Mavi ve kırmızı saplı bu kare güneş gözlüklerinde Gucci logosu yer alıyor.",
    stock: 12
  },
  {
    id: "p11",
    brand: "Police",
    model: "SPL999",
    lensType: "Antirefle",
    frameMaterial: "Metal",
    gender: "Erkek",
    price: 2800,
    imageUrl: "/images/p11-police-1.jpg",
    images: ["/images/p11-police-1.jpg", "/images/p11-police-2.jpg", "/images/p11-police-3.jpg"],
    color: ["Siyah", "Gümüş"],
    description: "Gündüz sürüşü ve aydınlık ortamlar için antirefle destekli.",
    stock: 18
  },
  {
    id: "p12",
    brand: "Ray-Ban",
    model: "Junior Wayfarer",
    lensType: "UV Korumalı",
    frameMaterial: "Kemik",
    gender: "Çocuk",
    price: 2400,
    imageUrl: "/images/p12-rayban-1.jpg",
    images: [
      "/images/p12-rayban-1.jpg",
      "/images/p12-rayban-2.jpg",
      "/images/p12-rayban-3.jpg"
    ],
    color: ["Siyah", "Kırmızı", "Mavi"],
    description: "Efsanevi Wayfarer modelinin çocuklar için özel tasarlanmış ergonomik versiyonu.",
    stock: 35
  },
  {
    id: "p13",
    brand: "Ray-Ban",
    model: "Junior RJ 9052S 17880 47",
    lensType: "Standart",
    frameMaterial: "Plastik",
    gender: "Çocuk",
    price: 2400,
    imageUrl: "/images/p13-rayban-1.jpg",
    images: [
      "/images/p13-rayban-1.jpg",
      "/images/p13-rayban-2.jpg",
      "/images/p13-rayban-3.jpg",
      "/images/p13-rayban-4.jpg"
    ],
    color: ["Mavi Turuncu"],
    description: "Ray-Ban Junior RJ 9052S 17880 47 Junior New Wayfarer Çocuk Kare Mavi Turuncu Kemik Güneş Gözlüğü",
    stock: 20
  }
];
