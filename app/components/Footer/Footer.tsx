"use client";

import Image from "next/image";

const FOOTER_DATA = {
  disclaimer: 'This article is an advertorial for Sans and is intended solely for informational purposes. The Health Report is owned and operated by Sans.',
  copyright: '© 2025 Sans. All rights reserved.'
} as const;

export default function Footer() {

  return (
    <footer className="w-full bg-[#F6F6F6] py-12 md:py-14 px-4 md:px-[65px]">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center md:justify-start mb-6">
          <Image
            src="/main-logo.png"
            alt="The Health Report Logo"
            width={1260}
            height={360}
            priority
            className="max-w-full w-[315px] h-[90px]"
          />
        </div>

        {/* Disclaimer */}
        <div className="text-center md:text-left mb-8">
          <p className="text-[#B0ADAD] text-sm leading-6 max-w-4xl">
            {FOOTER_DATA.disclaimer}
          </p>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-300 mb-[27px]"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#BDBDBD] text-sm leading-[21px]">{FOOTER_DATA.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
