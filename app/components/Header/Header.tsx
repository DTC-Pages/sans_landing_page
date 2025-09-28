'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-gray-100">
      <div className="text-center text-sm md:text-[18px] text-[#231F20] font-bold py-2 border-b border-[#133E3B] leading-[26px]">
        Advertorial
      </div>
      
      <div className="flex justify-center items-center p-2.5 md:p-2">
        <Image
          src="/main-logo.svg"
          alt="The Health Report Logo"
          width={286}
          height={82}
          priority
          className="max-w-full w-[171px] h-[49px] md:w-[286px] md:h-[82px]"
        />
      </div>
    </header>
  );
}
