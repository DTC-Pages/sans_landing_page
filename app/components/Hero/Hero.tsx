'use client';

import { useHero } from './useHero';

export default function Hero() {
  const { content } = useHero();

  return (
    <section className="max-w-4xl">
      <h1 className="text-[34px] md:text-[50px] font-bold text-black mb-9 leading-[42px] md:leading-[54px]">
        {content.title}
      </h1>
      
      <p className="text-[17px] md:text-[18px] font-bold text-[#231F20] mb-6 leading-[28px] md:leading-[26px]">
        {content.subtitle}
      </p>
      
      <div className="text-[17px] md:text-[18px] leading-[26px] text-[#231F20]">
        <p className="mb-4">
          Backed by growing research and everyday demand, they&apos;re quickly becoming a 
          household essential for reducing airborne pollutants, allergens, and even 
          microscopic contaminants. But not all air purifiers are created equal—some 
          have limited coverage, or fail to remove the most harmful particles. That&apos;s 
          why we researched and reviewed the{' '}
          <b>Top 5 Air Purifiers of 2025
          —so you don&apos;t have to.</b>
        </p>
      </div>
    </section>
  );
}