"use client";

import Image from "next/image";
import { ProductReview } from "./types";

interface ProductReviewCardProps {
  product: ProductReview;
}

export default function ProductReviewCard({ product }: ProductReviewCardProps) {
  const renderHighlightedText = (
    text: string,
    highlightedTexts?: { text: string }[]
  ) => {
    if (!highlightedTexts || highlightedTexts.length === 0) return text;
    const regex = new RegExp(
      `(${highlightedTexts.map((h) => h.text).join("|")})`,
      "gi"
    );

    const parts = text.split(regex);

    return parts.map((part, index) => {
      const isHighlighted = highlightedTexts.some(
        (h) => h.text.toLowerCase() === part.toLowerCase()
      );

      return (
        <span key={index} className={isHighlighted ? "font-bold" : ""}>
          {part}
        </span>
      );
    });
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded-xl p-[20px] max-w-4xl w-full"
      style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.08)" }}
    >
      {/* Header */}
      <h3 className="text-[26px] md:text-[30px] font-bold text-black mb-6 leading-[34px]">
        {product.id}. {product.title}
      </h3>

      {/* Desktop Layout */}
      <div className="hidden lg:block mb-6">
        <div className="grid grid-cols-[200px_1fr] gap-6">
          {/* Left Side - Image */}
          <div className="flex justify-start">
            <div className="w-48 h-64 rounded-lg flex items-center justify-center">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  width={200}
                  height={200}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="w-32 h-48 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg relative shadow-md">
                  <div className="w-28 h-28 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full absolute top-4 left-2 shadow-inner"></div>
                  <div className="w-20 h-3 bg-gray-400 rounded absolute bottom-4 left-6"></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Overall (Desktop) */}
          <div>
            <h4 className="text-[26px] font-bold text-[#444444] mb-2.5">
              {product.overall.title}
            </h4>
            <div className="text-[#444444] leading-[24px] text-base">
              {renderHighlightedText(
                product.overall.description,
                product.overall.highlightedText
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Only Image */}
      <div className="lg:hidden mb-8">
        <div className="flex justify-center">
          <div className="w-48 h-64 rounded-lg flex items-center justify-center">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.imageAlt}
                width={192}
                height={256}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="w-32 h-48 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg relative shadow-md">
                <div className="w-28 h-28 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full absolute top-4 left-2 shadow-inner"></div>
                <div className="w-20 h-3 bg-gray-400 rounded absolute bottom-4 left-6"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pros and Cons Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 md:px-[30px]">
        {/* Pros */}
        <div>
          <h5 className="text-[26px] font-bold text-[#444444] mb-4.5 leading-[32.5px]">
            PROS
          </h5>
          <div className="flex flex-col gap-4 md:gap-6">
            {product.pros.map((pro, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  <Image
                    src="/check-v2.svg"
                    alt="Check"
                    width={30}
                    height={30}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-[#444444] text-base leading-normal md:leading-8">
                  {pro.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cons */}
        <div>
          <h5 className="text-[26px] font-bold text-[#444444] mb-4.5">CONS</h5>
          <div className="flex flex-col gap-4 md:gap-6">
            {product.cons.map((con, index) => (
              <div key={index} className="flex items-baseline md:items-center gap-3">
                <div className="rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 relative top-[0.75rem] md:top-0">
                  <Image
                    src="/fail.svg"
                    alt="Check"
                    width={30}
                    height={30}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-[#444444] text-base leading-normal md:leading-8">
                  {con.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overall Section - Mobile Only (after Pros/Cons) */}
      <div className="lg:hidden mt-6">
        <h4 className="text-[26px] font-bold text-[#444444] mb-4">
          {product.overall.title}
        </h4>
        <div className="text-[#444444] leading-[24px] text-base">
          {renderHighlightedText(
            product.overall.description,
            product.overall.highlightedText
          )}
        </div>
      </div>
    </div>
  );
}
