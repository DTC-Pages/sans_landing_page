"use client";

import Image from "next/image";

const WINNER_SECTION_DATA = {
  title: 'The Clear Winner for Cleaner Air',
  description: '**Sans Air Purifier takes the top spot with an outstanding 99.9% purification efficiency and the ideal balance of performance and value.** It delivers wide coverage—up to 1,854 sq. ft., nearly double many competitors—all about half the price, all while running whisper-quiet. With a 30-day home trial, free returns, and a 5-year warranty, Sans stands out as the smartest choice.',
  productName: 'Sans Air Purifier',
  ctaButtonText: 'Shop The #1 Choice Now'
} as const;

const WINNER_FEATURES = [
  'Removes up to **99.9% of pollutants** for cleaner, healthier air',
  'Captures **dust, pet hair, dander, allergens, VOCs, and more**',
  'Provides **fast allergy relief** and supports easier breathing',
  '**Neutralizes odors** to keep your home smelling fresh'
] as const;

const handleShopNow = () => {
  window.open('https://www.livesans.com/products/air-purifier', '_blank');
};

export default function WinnerSection() {

  const renderFeatureText = (feature: string) => {
    const parts = feature.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <span key={index} className="font-bold">
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="bg-white max-w-4xl w-full">
      <h2 className="text-[38px] leading-[42px] font-bold text-[#231F20] mb-6">
        {WINNER_SECTION_DATA.title}
      </h2>
      <p className="text-[#231F20] text-[17px] md:text-[18px] leading-6.5 mb-6 md:mb-10">
        {renderFeatureText(WINNER_SECTION_DATA.description)}
      </p>

      <div
        className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 border-2 border-[#ededed] rounded-[22px] py-[31px] px-3 relative"
        style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.08)" }}
      >
        <div className="flex flex-col items-center lg:items-start">
          <div className="bg-[#133E3B] text-white px-4 py-2 rounded-3xl font-bold absolute top-[-18px] w-[200px] text-center text-base leading-[26px]">
            #1 Choice
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/air-purifier-winner.png"
              alt="Air purifier winner"
              width={300}
              height={400}
              priority
              className="h-auto w-[252px] md:w-full md:h-auto cursor-pointer"
              onClick={handleShopNow}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="text-yellow-400 text-base">★★★★★</div>
            <span className="text-[#1F2A34] text-[12px] leading-[19px]">
              +3,300 5-Star Reviews
            </span>
          </div>
          <h3
            className="text-[21px] md:text-[24px] font-[500] text-[#133E3B] mb-4 cursor-pointer"
            onClick={handleShopNow}
          >
            {WINNER_SECTION_DATA.productName}
          </h3>
          <div className="mb-6 flex flex-col gap-[11px]">
            {WINNER_FEATURES.map((feature: string, index: number) => (
              <div key={index} className="flex items-baseline md:items-center gap-2.5">
                <div className="rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 relative top-[0.45rem] md:top-0">
                  <Image
                    src="/check-v2.svg"
                    alt="Check"
                    width={18}
                    height={18}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-black text-[14.5px] leading-[25px]">
                  {renderFeatureText(feature)}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={handleShopNow}
            className="bg-[#04D1C3] hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:transform hover:-translate-y-0.5 flex items-center gap-2 w-full md:w-[340px] justify-center cursor-pointer"
          >
            {WINNER_SECTION_DATA.ctaButtonText}
            <span className="text-sm">
              <Image
                src="/arrow-icon.svg"
                alt="The Health Report Logo"
                width={24}
                height={23}
                priority
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
