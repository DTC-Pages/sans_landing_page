'use client';

import Image from 'next/image';
import { useFooter } from './useFooter';

export default function Footer() {
  const { disclaimer, copyright } = useFooter();

  return (
    <footer className="w-full bg-gray-100 py-12 md:py-14 px-4 md:px-[65px]">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center md:justify-start mb-6">
          <Image
            src="/main-logo.svg"
            alt="The Health Report Logo"
            width={315}
            height={90}
            priority
            className="h-auto w-auto max-w-full"
          />
        </div>

        {/* Disclaimer */}
        <div className="text-center md:text-left mb-8">
          <p className="text-[#B0ADAD] text-sm leading-6 max-w-4xl">
            {disclaimer}
          </p>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-300 mb-[27px]"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#BDBDBD] text-sm leading-[21px]">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
