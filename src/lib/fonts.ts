import { Syne, DM_Serif_Display, JetBrains_Mono } from "next/font/google";

export const fontSyne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const fontDMSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
