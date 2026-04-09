import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types';

// Sepet öğesi - hangi ürün, hangi renk, kaç adet
export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string | null;
  itemImage: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, color?: string | null) => void;
  removeFromCart: (productId: string, color?: string | null) => void;
  cartCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Sayfa yüklenince localStorage'dan sepeti oku, yoksa boş başlat
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('optica_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return []; // JSON parse hatası olursa boş başlat
    }
  });

  // Cart her değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('optica_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, color?: string | null) => {
    // Seçilen renge ait ilk fotoğrafı bul, yoksa ürünün normal fotoğrafını kullan
    const selectedColor = color ?? null;
    const itemImage = (selectedColor && product.colorImages?.[selectedColor]?.[0])
      || product.imageUrl;

    setCart((prev) => {
      // Aynı ürün + aynı renk kombinasyonu zaten sepette mi? varsa adedi arttır
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedColor === selectedColor
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Yoksa yeni kayıt olarak ekle
      return [...prev, { product, quantity: 1, selectedColor, itemImage }];
    });
  };

  // Renk bilgisi ile birlikte sil - aynı ürünün farklı renkleri ayrı satır olarak durabilir
  const removeFromCart = (productId: string, color?: string | null) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedColor === (color ?? null))
      )
    );
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart hooku CartProvider icinde olmak zorunda!!');
  }
  return context;
};
