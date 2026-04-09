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
    imageUrl: "https://images.unsplash.com/photo-1625591342279-0524cb562477?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1625591342279-0524cb562477?auto=format&fit=crop&q=80&w=800", 
      "https://images.unsplash.com/photo-1589718424266-3d71e988229b?auto=format&fit=crop&q=80&w=800"  
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
    imageUrl: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800", // Ürün
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=800"  // Benzer alternatif çekim
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
    imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800", // Ürün siyah
      "https://images.unsplash.com/photo-1556306535-38febf6782e7?auto=format&fit=crop&q=80&w=800"  // Alternatif Siyah Gözlük Masada
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
    imageUrl: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=800", // Ürün (Turuncu cam)
      "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?auto=format&fit=crop&q=80&w=800"  // Lifestyle turuncu cam takan manken
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
    imageUrl: "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&q=80&w=800", // Kalın şık siyah
      "https://images.unsplash.com/photo-1589718424266-3d71e988229b?auto=format&fit=crop&q=80&w=800"  // Siyah takan manken
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
    imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Geçmişin asil yüz hatlarını gelecekle harmanlayan aynalı ikonik tasarım.",
    stock: 7
  },
  {
    id: "p7",
    brand: "Osse",
    model: "OS-1240",
    lensType: "UV Korumalı",
    frameMaterial: "Metal",
    gender: "Kadın",
    price: 1300,
    imageUrl: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800",
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
    imageUrl: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800",
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
    imageUrl: "https://images.unsplash.com/photo-1483412468200-72182dbbc544?auto=format&fit=crop&q=80&w=800",
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
    imageUrl: "https://images.unsplash.com/photo-1614715838608-dd527c46231d?auto=format&fit=crop&q=80&w=800",
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
    imageUrl: "https://images.unsplash.com/photo-1556306535-38febf6782e7?auto=format&fit=crop&q=80&w=800",
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
    imageUrl: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Efsanevi Wayfarer modelinin çocuklar için özel tasarlanmış ergonomik versiyonu.",
    stock: 35
  }
];
