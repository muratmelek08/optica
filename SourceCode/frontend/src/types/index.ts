export type LensType = 'Polarize' | 'UV Korumalı' | 'Mavi Işık Filtreli' | 'Standart' | 'Antirefle' | 'Transparent';
export type FrameMaterial = 'Metal' | 'Kemik' | 'Titanyum' | 'Plastik';
export type Gender = 'Erkek' | 'Kadın' | 'Unisex' | 'Çocuk';

export interface Product {
  id: string;
  brand: string;
  model: string;
  lensType: LensType;
  frameMaterial: FrameMaterial;
  gender: Gender;
  price: number;
  imageUrl: string;
  images?: string[];
  // Her renk seçeneğine ait fotoğraflar
  colorImages?: Record<string, string[]>;
  // Her renk seçeneğine ait stok miktarı
  colorStock?: Record<string, number>;
  description: string;
  stock: number; // Genel stok (renk ayrımı yoksa kullanılır)
  isFeatured?: boolean;
  color?: string[];
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
