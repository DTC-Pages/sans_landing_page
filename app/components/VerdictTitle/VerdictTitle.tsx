'use client';

import { useVerdictTitle } from './useVerdictTitle';

export default function VerdictTitle() {
  const { title } = useVerdictTitle();

  return (
    <h2 className="text-[32px] md:text-[38px] font-bold text-[#231F20] leading-[45px] md:leading-[42px] max-w-4xl w-full mb-6">
      {title}
    </h2>
  );
}
