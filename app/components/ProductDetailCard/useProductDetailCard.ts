'use client';

import { useState, useCallback } from 'react';

interface Product {
  name: string;
}

export const useProductDetailCard = () => {
  const [product] = useState<Product>({
    name: 'Sans Air Purifier'
  });

  const [features] = useState<string[]>([
    'Powerful 3-Stage Filtration For Up To 99.9% Effectiveness',
    'Third-Party Tested',
    'Backed By A 30-Day Home Trial & 5-Year Warranty',
    'Powerful Purification Without The Premium Price',
    'Whisper-Quiet Operation You\'ll Barely Notice'
  ]);

  const handleShopNow = useCallback(() => {
    // Redirección a sitio externo
    window.open('https://example.com/shop', '_blank');
  }, []);

  return {
    product,
    features,
    handleShopNow
  };
};
