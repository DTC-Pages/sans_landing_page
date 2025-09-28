'use client';

import { useState, useEffect } from 'react';

export const useFeatures = () => {
  const [features, setFeatures] = useState<string[]>([]);

  useEffect(() => {
    setFeatures([
      'High Filtration Efficiency',
      'Third-Party Tested',
      'Reliable Warranty',
      'Strong Purification At A Fair Price',
      'Quiet Operation'
    ]);
  }, []);

  return {
    features
  };
};
