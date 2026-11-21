import type { Metadata } from "next";
import { fontSyne, fontDMSerif, fontMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Data Science & ML Portfolio`,
  description: `Portfolio of ${siteConfig.name}, specializing in Data Science and Machine Learning.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSyne.variable} ${fontDMSerif.variable} ${fontMono.variable}`}
    >
      <body className="antialiased selection:bg-[#00d4ff]/20 selection:text-[#00d4ff]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
