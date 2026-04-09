export type LensType = 'Polarize' | 'UV Korumalı' | 'Mavi Işık Filtreli' | 'Standart' | 'Antirefle';
export type FrameMaterial = 'Metal' | 'Kemik' | 'Titanyum' | 'Plastik';
export type Gender = 'Erkek' | 'Kadın' | 'Unisex' | 'Çocuk';

export interface Product {
  id: string;
  brand: string; // Marka
  model: string; // Model
  lensType: LensType; // Cam türü
  frameMaterial: FrameMaterial; // Çerçeve materyali
  gender: Gender; // Cinsiyet (Kategori)
  price: number; // Fiyat
  imageUrl: string; // Ana Resim URL'si
  images?: string[]; // Profesyonel görünüm için çoklu/alternatif ürün görselleri
  description: string; // Ürün Açıklaması
  stock: number; // Stok durumu
  isFeatured?: boolean; // Vitrin/Öne çıkan ürünü mü?
}

// Final projesi için eklenecek Kullanıcı Yorumları (Reviews) tipi
export interface Review {
  id: string;
  productId: string; // Hangi ürüne yapıldı
  userId: string; // Yapan kullanıcı ID
  userName: string; // Görünen isim
  rating: number; // 1-5 arası puan
  comment: string; // Yorum metni
  createdAt: string; // Yorum tarihi
}

// Final projesi için Admin panelini destekleyici yetki tipi
export interface AdminPrivileges {
  canAddProduct: boolean;
  canEditProduct: boolean;
  canDeleteProduct: boolean;
  canManageUsers: boolean;
  canViewReports: boolean;
}

// Çok basit bir User (Kullanıcı) arayüzü
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer'; // Kullanıcı rolü
  adminPrivileges?: AdminPrivileges; // Sadece admin olanlarda dolu olabilir
}
