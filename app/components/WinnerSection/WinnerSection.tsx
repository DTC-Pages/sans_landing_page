"use client";

import { useWinnerSection } from "./useWinnerSection";
import Image from "next/image";
export default function WinnerSection() {
  const { title, description, productName, features, handleShopNow } =
    useWinnerSection();

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
      {/* Header */}
      <h2 className="text-[38px] leading-[42px] font-bold text-[#231F20] mb-6">
        {title}
      </h2>

      {/* Description */}
      <p className="text-[#231F20] text-[17px] md:text-[18px] leading-6.5 mb-6 md:mb-10">
        {description}
      </p>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 border-2 border-[#ededed] rounded-[22px] py-[31px] px-3 relative"  style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.08)" }}>
        {/* Left Side - Image and Badge */}
        <div className="flex flex-col items-center lg:items-start">
          {/* #1 Choice Badge */}
          <div className="bg-[#231F20] text-white px-4 py-2 rounded-3xl font-bold absolute top-[-18px] w-[200px] text-center text-base leading-[26px]">
            #1 Choice
          </div>
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/air-purifier-card.png"
              alt="The Health Report Logo"
              width={300}
              height={400}
              priority
              className="h-auto w-[252px] md:w-full md:h-auto"
            />
          </div>

          {/* Stars and Reviews */}
        </div>

        {/* Right Side - Content */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-yellow-400 text-base">★★★★★</div>
            <span className="text-[#1F2A34] text-[12px] leading-[19px]">
              +3,300 5-Star Reviews
            </span>
          </div>
          <h3 className="text-[21px] md:text-[24px] font-[500] text-[#133E3B] mb-4">
            {productName}
          </h3>

          {/* Features List */}
          <div className="mb-6 flex flex-col gap-[11px]">
            {features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2.5">
                <div className="rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                  <Image
                    src="/check-v2.svg"
                    alt="Check"
                    width={18}
                    height={18}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-gray-700 text-sm">
                  {renderFeatureText(feature)}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleShopNow}
            className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:transform hover:-translate-y-0.5 flex items-center gap-2 w-full md:w-[340px] justify-center"
          >
            Shop The #1 Choice Now
            <span className="text-sm">
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
    </div>
  );
}
