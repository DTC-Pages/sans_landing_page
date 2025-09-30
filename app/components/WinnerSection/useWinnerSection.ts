'use client';

import { useState, useCallback, useEffect } from 'react';

export const useWinnerSection = () => {
  const [title, setTitle] = useState('The Clear Winner for Cleaner Air');
  const [description, setDescription] = useState(
    '**Sans Air Purifier takes the top spot with an outstanding 99.9% purification efficiency and the ideal balance of performance and value.** It delivers wide coverage—up to 1,854 sq. ft., nearly double many competitors—all about half the price, all while running whisper-quiet. With a 30-day home trial, free returns, and a 5-year warranty, Sans stands out as the smartest choice.'
  );
  const [productName, setProductName] = useState('Sans Air Purifier');
  const [features, setFeatures] = useState<string[]>([]);

  useEffect(() => {
    setFeatures([
      'Removes up to **99.9% of pollutants** for cleaner, healthier air',
      'Captures **dust, pet hair, dander, allergens, VOCs, and more**',
      'Provides **fast allergy relief** and supports easier breathing',
      '**Neutralizes odors** to keep your home smelling fresh'
    ]);
  }, []);

  const handleShopNow = useCallback(() => {
    // Redirección a sitio externo
    window.open('https://www.livesans.com/products/air-purifier', '_blank');
  }, []);

  return {
    title,
    description,
    productName,
    features,
    handleShopNow
  };
};
