import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  cartCount: number;
  totalPrice: number;
}

// sepet contexti oluşturduk
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // sepetteki ürünleri burda tutuyorum
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      // eger urun zaten sepette varsa bi daha eklemek yerine adedini arttırıyoruz
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // hic yoksa 1 tane olarark diziye atıyo
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    // id si uymayanları filtrele arrayde kalsın, uyanı atıyo sepetten
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // sepet ikonunda gözüksün diye toplam ürün sayisini heseplatıyoruz
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  // odeme ksımı icin fiyar carpi adet seklinde siparis totalgini cıkarıyo asagda gosterck
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
    throw new Error('useCart hooku CartProvider icinde olmak zorunda!!'); // disarida falan kullanilirsa patlar, hoca gormez umarim :)
  }
  return context;
};
