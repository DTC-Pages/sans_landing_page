'use client';

import { useState, useEffect } from 'react';

export const useVerdictTitle = () => {
  const [title, setTitle] = useState('Our Verdict: Top 5 Air Purifiers for 2025');

  useEffect(() => {
    // Custom hook para manejar el título del veredicto
  }, []);

  return {
    title
  };
};
