'use client';

import { useState, useEffect } from 'react';

interface HeroContent {
  title: string;
  subtitle: string;
}

export const useHero = () => {
  const [content, setContent] = useState<HeroContent>({
    title: 'Top 5 Air Purifiers 2025',
    subtitle: 'Air purifiers are one of the most effective solutions for creating a cleaner, healthier home environment.'
  });

  useEffect(() => {
    // Custom hook para manejar contenido del hero
  }, []);

  return {
    content
  };
};