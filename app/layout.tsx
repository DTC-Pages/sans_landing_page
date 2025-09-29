import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({ subsets: ["latin"], variable: "--font-albert-sans", display: "swap" });
export const metadata: Metadata = {
  title: "Top 5 Air Purifiers 2025",
  description: "Air purifiers are one of the most effective solutions for creating a cleaner, healthier home environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
