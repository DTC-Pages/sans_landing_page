'use client';

import { useState, useEffect } from 'react';

export const useFooter = () => {
  const [disclaimer, setDisclaimer] = useState('');
  const [copyright, setCopyright] = useState('');

  useEffect(() => {
    setDisclaimer(
      'This article is an advertorial for Sans and is intended solely for informational purposes. The Health Report is owned and operated by Sans.'
    );
    setCopyright('© 2025 Sans. All rights reserved.');
  }, []);

  return {
    disclaimer,
    copyright
  };
};
