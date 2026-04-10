# Optica - Midterm (Simplified Frontend-Only)

Bu proje, Optica (Gözlük E-Ticaret) uygulamasının vize teslimi için hazırlanan sadece ön yüz (frontend) versiyonudur.

## What is included
- ✅ React + TypeScript + Material UI
- ✅ Product list page (Ana sayfa - Öne çıkan ürünler vitrini)
- ✅ Product detail page (Dinamik yönlendirme: örn. `/product/:id`)
- ✅ Görseller yerel olarak `public/images` klasöründen yüklenmektedir (Sunum sırasındaki olası internet kesintilerine karşı önlem alınmıştır).

## What is removed (reserved for final project)
- ❌ Backend (Java, Spring Boot, PostgreSQL)
- ❌ Authentication / Güvenlik (Firebase)
- ❌ Roles (Admin ve Kullanıcı yetkilendirmeleri)
- ❌ Admin pages (Ürün ekleme, stok güncelleme, mesaj cevaplama)
- ❌ Checkout / Kredi kartı ile satın alma (Stripe)
- ❌ Orders / Yıldızlı yorumlar, soru-cevap ve sipariş geçmişi

## How to run
```bash
cd frontend
npm install
npm run dev