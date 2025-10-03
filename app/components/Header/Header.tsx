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
          src="/main-logo.png"
          alt="The Health Report Logo"
          width={315}
          height={90}
          priority
          className="w-full"
        />
      </div>
    </header>
  );
}
