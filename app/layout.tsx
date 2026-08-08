import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import BackgroundAudio from "@/features/ui/BackgroundAudio";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Memory Capsule",
    template: "%s | Memory Capsule",
  },
  description: "A Digital Memory Capsule for Graduation 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={geist.className}>
        {children}
        <BackgroundAudio />
      </body>
    </html>
  );
}