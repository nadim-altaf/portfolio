"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasResume = Boolean(siteConfig.resumeUrl && siteConfig.resumeUrl !== "#");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-8 ${
        isScrolled
          ? "bg-[rgba(8,11,16,0.85)] light:bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border-b border-[var(--border-color)] shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[68px]">
        <Link
          href="#hero"
          className="text-lg font-extrabold tracking-[-0.02em] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff] rounded-xs"
        >
          <span className="grad-cyan">{siteConfig.logoInitials}</span>
          <span className="opacity-30 ml-1">/</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs uppercase tracking-[0.1em] font-semibold text-[var(--muted)] hover:text-[var(--text)] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff] rounded-xs"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          {hasResume && (
            <a
              href={siteConfig.resumeUrl}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-[10px] text-xs font-bold uppercase tracking-wider rounded-xl bg-[#00d4ff] text-[#080b10] shadow-[0_0_24px_rgba(0,212,255,0.3)] hover:shadow-[0_0_36px_rgba(0,212,255,0.5)] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          )}

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-[var(--text)] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bottom-0 bg-[var(--surface)] z-40 flex flex-col items-center justify-center gap-8 p-6 animate-in fade-in duration-200">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-[var(--text)] hover:text-[#00d4ff] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff] rounded-md px-4 py-2"
            >
              {link.label}
            </Link>
          ))}
          {hasResume && (
            <a
              href={siteConfig.resumeUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-wider rounded-xl bg-[#00d4ff] text-[#080b10] shadow-[0_0_24px_rgba(0,212,255,0.3)] mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          )}
        </div>
      )}
    </nav>
  );
}
