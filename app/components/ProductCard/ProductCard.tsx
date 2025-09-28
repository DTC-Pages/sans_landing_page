"use client";

import { useProductCard } from "./useProductCard";
import Image from "next/image";

export default function ProductCard() {
  const { product, handleShopNow, formatPrice } = useProductCard();

  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden w-full">
      <div className="bg-[#133E3B] text-white text-center pt-3 pb-3.5 text-[20px] font-bold leading-[19.2px] tracking-[0.6px]">
        #1 choice
      </div>

      <div className="pt-[15px] px-3 pb-4 md:pb-[15px] text-center grid grid-cols-2 md:grid-cols-1 place-content-center gap-4">
        <div className="flex justify-center">
          <Image
            src="/air-purifier-card.png"
            alt="The Health Report Logo"
            width={300}
            height={400}
            priority
            className="h-[150px] w-[120px] md:w-full md:h-auto"
          />
        </div>
        <div className="">
          <h3 className="text-xl md:text[28px] font-bold text-[#1F2A34] mb-1 leading-[24px] md:leading-[34px]">
            {product.name}
          </h3>

          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="text-yellow-400 text-base">★★★★★</div>
            <span className="text-[#1F2A34] text-xs leading-[19px]">
              {product.reviews} Reviews
            </span>
          </div>

          <div className="mb-4">
            <span className="text-[#727981] line-through text-sm mr-2 leading-[22.4px]">
              ${formatPrice(product.originalPrice)}
            </span>
            <span className="text-[#1F2A34] text-sm leading-[22.4px]">
              ${formatPrice(product.currentPrice)}
            </span>
          </div>

          <button
            onClick={handleShopNow}
            className="w-full bg-[#04D1C3] hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-[32px] transition-all duration-300 hover:transform hover:-translate-y-0.5 flex items-center justify-center gap-2 md:text-[18px]"
          >
            Shop Now
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
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
