"use client";

import Image from "next/image";

const PRODUCT_DATA = {
  name: 'Sans Air Purifier'
} as const;

const PRODUCT_FEATURES = [
  'Powerful 3-Stage Filtration For Up To 99.9% Effectiveness',
  'Third-Party Tested',
  'Backed By A 30-Day Home Trial & 5-Year Warranty',
  'Powerful Purification Without The Premium Price',
  'Whisper-Quiet Operation You\'ll Barely Notice'
] as const;

const OVERALL_SECTION = {
  title: 'OVERALL',
  description: {
    highlightedText: 'Sans Air Purifier takes the top spot with an impressive 99.9% purification efficiency, independently certified, delivering the best air quality and value for the price',
    regularText: ', all while operating whisper-quietly. Add a 30-day home trial, free returns, and a 5-year warranty, and it\'s clear why Sans is the smartest choice for anyone serious about a cleaner, healthier home.'
  },
  buttonText: 'Shop The #1 Choice Now'
} as const;

const handleShopNow = () => {
  window.open('https://www.livesans.com/products/air-purifier', '_blank');
};

export default function ProductDetailCard() {

  return (
    <div
      className="bg-white border border-gray-200 rounded-xl p-5 max-w-4xl w-full"
      style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.08)" }}
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="text-3xl md:text-4xl font-bold text-black leading-[42px]">
          1.
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-black leading-[42px] cursor-pointer" onClick={handleShopNow}>
          {PRODUCT_DATA.name}
        </h3>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4 justify-center">
          <Image
            src="/air-purifier-main.png"
            alt="Sans Air Purifier"
            width={353}
            height={353}
            className="cursor-pointer"
            onClick={handleShopNow}
          />
        </div>

        <div className="space-y-4">
          {PRODUCT_FEATURES.map((feature: string, index: number) => (
            <div
              key={index}
              className="flex items-center gap-2 py-3 px-4 bg-green-50 rounded-[12px]"
            >
              <div className="w-[25px] h-[25px] md:w-7.5 md:h-7.5 text-sm flex-shrink-0">
                <Image
                  src="/check-v2.svg"
                  alt="Check"
                  width={30}
                  height={30}
                  className="w-[25px] h-[25px] md:w-7.5 md:h-7.5"
                />
              </div>
              <span className="text-base md:text-[18px] text-black font-bold leading-[29px]">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h4 className="text-[28px] md:text-[32px] font-bold text-[#231F20] mb-4 leading-[42px]">
          {OVERALL_SECTION.title}
        </h4>
        <p className="text-[#231F20] leading-[26px] mb-6 text-[17px] md:text-[18px]">
          <b>{OVERALL_SECTION.description.highlightedText}</b>
          {OVERALL_SECTION.description.regularText}
        </p>

        <button
          onClick={handleShopNow}
          className="flex items-center justify-center gap-4 bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 px-3 md:px-8 rounded-full transition-all duration-300 hover:transform hover:-translate-y-0.5 m-auto w-full md:w-[340px] text-[18px] cursor-pointer"
        >
          {OVERALL_SECTION.buttonText}
          <span>
            <Image
              src="/arrow-icon.svg"
              alt="The Health Report Logo"
              width={24}
              height={23}
              priority
              className=""
            />
          </span>
        </button>
      </div>
    </div>
  );
}
