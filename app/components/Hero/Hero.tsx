'use client';

const HERO_CONTENT = {
  title: 'Top 5 Air Purifiers 2025',
  subtitle: 'Air purifiers are one of the most effective solutions for creating a cleaner, healthier home environment.',
  description: {
    mainText: 'Backed by growing research and everyday demand, they\'re quickly becoming a household essential for reducing airborne pollutants, allergens, and even microscopic contaminants. But not all air purifiers are created equal—some have limited coverage, or fail to remove the most harmful particles. That\'s why we researched and reviewed the',
    highlightedText: 'Top 5 Air Purifiers of 2025—so you don\'t have to.'
  }
} as const;

export default function Hero() {

  return (
    <section className="max-w-4xl">
      <h1 className="text-[34px] md:text-[50px] font-bold text-black mb-9 leading-[42px] md:leading-[54px]">
        {HERO_CONTENT.title}
      </h1>
      
      <p className="text-[17px] md:text-[18px] font-bold text-[#231F20] mb-6 leading-[28px] md:leading-[26px]">
        {HERO_CONTENT.subtitle}
      </p>
      
      <div className="text-[17px] md:text-[18px] leading-[26px] text-[#231F20]">
        <p className="mb-4">
          {HERO_CONTENT.description.mainText}{' '}
          <b>{HERO_CONTENT.description.highlightedText}</b>
        </p>
      </div>
    </section>
  );
}