"use client";

import { useProductDetailCard } from "./useProductDetailCard";
import Image from "next/image";
export default function ProductDetailCard() {
  const { product, features, handleShopNow } = useProductDetailCard();

  return (
    <div
      className="bg-white border border-gray-200 rounded-xl p-5 max-w-4xl w-full"
      style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.08)" }}
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="text-3xl md:text-4xl font-bold text-black leading-[42px]">
          1.
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-black leading-[42px]">
          {product.name}
        </h3>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4 justify-center">
          <Image
            src="/air-purifier-main.png"
            alt="Sans Air Purifier"
            width={353}
            height={353}
          />
        </div>

        <div className="space-y-4">
          {features.map((feature: string, index: number) => (
            <div
              key={index}
              className="flex items-center gap-2 py-3 px-4 bg-green-50 rounded-[12px]"
            >
              <div className="w-[25px] h-[25px] md:w-7.5 md:h-7.5 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
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

      {/* Overall Section */}
      <div className="mt-8">
        <h4 className="text-[28px] md:text-[32px] font-bold text-[#231F20] mb-4 leading-[42px]">
          OVERALL
        </h4>
        <p className="text-[#231F20] leading-[26px] mb-6 text-[17px] md:text-[18px]">
          <b>
            Sans Air Purifier takes the top spot with an impressive 99.9%
            purification efficiency, independently certified, delivering the
            best air quality and value for the price
          </b>
          , all while operating whisper-quietly. Add a 30-day home trial, free
          returns, and a 5-year warranty, and it's clear why Sans is the
          smartest choice for anyone serious about a cleaner, healthier home.
        </p>

        <button
          onClick={handleShopNow}
          className="flex items-center justify-center gap-4 bg-teal-400 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:transform hover:-translate-y-0.5 m-auto w-full md:w-[340px] text-[18px]"
        >
          Shop The #1 Choice Now
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
