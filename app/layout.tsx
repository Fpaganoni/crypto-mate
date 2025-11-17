import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CryptoMate | Your Friendly Solana Meme Token",
  description:
    "Join the CryptoMate community - a fun, friendly, and community-driven meme token on Solana. Together we MATE!",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      {
        url: "/logo-CM.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
