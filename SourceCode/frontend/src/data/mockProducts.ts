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
    images: [
      "/images/p1-versace-1.jpg", // Temiz ürün çekimi
      "/images/p1-versace-2.jpg"  // Lifestyle çekim - şık ve ağır duruş
    ],
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
    images: [
      "/images/p2-vogue-1.jpg", // Ürün
      "/images/p2-vogue-2.jpg"  // Benzer alternatif çekim
    ],
    description: "Zarif, her yüze uyum sağlayan kedi gözü tasarım.",
    stock: 15,
    isFeatured: true
  },
  {
    id: "p3",
    brand: "Oakley",
    model: "Holbrook Sport",
    lensType: "Antirefle",
    frameMaterial: "Plastik",
    gender: "Erkek",
    price: 4200,
    imageUrl: "/images/p3-oakley-1.jpg",
    images: [
      "/images/p3-oakley-1.jpg", // Ürün siyah
      "/images/p3-oakley-2.jpg"  // Alternatif çekim
    ],
    description: "Aktif yaşam tarzı için darbelere dayanıklı sportif çerçeve.",
    stock: 10,
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
    images: [
      "/images/p4-tomford-1.jpg", // Ürün (Turuncu cam)
      "/images/p4-tomford-2.jpg"  // Lifestyle turuncu cam takan manken
    ],
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
    images: [
      "/images/p5-prada-1.jpg", // Kalın şık siyah
      "/images/p5-prada-2.jpg"  // Siyah takan manken
    ],
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
    images: [
      "/images/p6-dior-1.jpg", // Dior So Real - zarif kadın çerçeve
      "/images/p6-dior-2.jpg"  // Lifestyle - şık kadın
    ],
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
    images: [
      "/images/p7-osse-1.jpg",
      "/images/p7-osse-2.jpg",
      "/images/p7-osse-3.jpg"
    ],
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
    description: "Uzun süre ekran karşısında kalanlar için özel ekran gözlüğü.",
    stock: 22
  },
  {
    id: "p10",
    brand: "Gucci",
    model: "GG0053S",
    lensType: "Standart",
    frameMaterial: "Kemik",
    gender: "Kadın",
    price: 12500,
    imageUrl: "/images/p10-gucci.jpg",
    description: "Oversize lüks tasarımıyla tüm dikkatleri üzerinize çekin.",
    stock: 3
  },
  {
    id: "p11",
    brand: "Police",
    model: "SPL999",
    lensType: "Antirefle",
    frameMaterial: "Metal",
    gender: "Erkek",
    price: 2800,
    imageUrl: "/images/p11-police.jpg",
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
      "/images/p12-rayban-1.jpg", // Ürün çekimi
      "/images/p12-rayban-2.jpg",
      "/images/p12-rayban-3.jpg"
    ],
    description: "Efsanevi Wayfarer modelinin çocuklar için özel tasarlanmış ergonomik versiyonu.",
    stock: 35
  }
];
