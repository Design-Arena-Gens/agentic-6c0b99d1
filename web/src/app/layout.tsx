import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Reality Check Official",
  description:
    "A cinematic ultra-detailed portal into a futuristic digital world where holographic vision and data converge.",
  openGraph: {
    title: "Al Reality Check Official",
    description:
      "Experience a holographic eye awakening over a connected Earth in cinematic 8K detail.",
    url: "https://agentic-6c0b99d1.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Reality Check Official",
    description:
      "A luminous eye unveils the circuitry of reality in this cinematic futuristic showcase.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
