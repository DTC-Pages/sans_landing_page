'use client';

import { useState, useCallback } from 'react';

interface Product {
  name: string;
  reviews: string;
  originalPrice: number;
  currentPrice: number;
}

export const useProductCard = () => {
  const [product] = useState<Product>({
    name: 'Sans Air Purifier',
    reviews: '3,419',
    originalPrice: 469.99,
    currentPrice: 369.99
  });

  const handleShopNow = useCallback(() => {
    window.open('https://www.livesans.com/products/air-purifier', '_blank');
  }, []);

  const formatPrice = useCallback((price: number): string => {
    return price.toFixed(2);
  }, []);

  return {
    product,
    handleShopNow,
    formatPrice
  };
};
