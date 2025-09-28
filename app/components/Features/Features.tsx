"use client";

import { useFeatures } from "./useFeatures";
import Image from "next/image";
export default function Features() {
  const { features } = useFeatures();

  return (
    <div className="bg-white border border-[#231F20] rounded-[10px] p-6 max-w-4xl w-full my-9">
      <h3 className="text-[20px] md:text-[26px] font-bold text-[#231F20] mb-6 leading-[30px]">
        What to Look For in an Air Purifier
      </h3>

      <div className="flex flex-col gap-6 justify-start items-start">
        {features.map((feature: string, index: number) => (
          <div
            key={index}
            className="flex items-center justify-start gap-3 transition-all duration-300 hover:translate-x-1 bg-[#EEFCFB] rounded-[32px] p-2"
          >
            <div className="w-4.5 h-4.5 flex items-center justify-center flex-shrink-0">
              <Image
                src="/check-v1.svg"
                alt="Check"
                width={30}
                height={30}
                priority
                className="w-5 h-5"
              />
            </div>
            <span className="text-[17px] md:text-[18px] text-[#231F20] font-bold inline-block leading-[26px]">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
