"use client";

import Link from "next/link";
import { Rocket, Mail, Download, ExternalLink } from "lucide-react";
import { TypingEffect } from "./typing-effect";
import { ScrollReveal } from "./scroll-reveal";
import { siteConfig } from "@/data/site";

export function Hero() {
  const [firstName, ...restName] = siteConfig.name.split(" ");
  const lastName = restName.join(" ");
  const hasResume = Boolean(siteConfig.resumeUrl && siteConfig.resumeUrl !== "#");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -top-24 -right-24"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 212, 255, 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none bottom-12 -left-20"
        style={{
          background:
            "radial-gradient(circle, rgba(240, 180, 41, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-[640px]">
          <ScrollReveal direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.2)] rounded-full px-4 py-1.5 mb-8 text-xs font-semibold tracking-wide text-[#00d4ff]">
              <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-pulse-subtle" />
              {siteConfig.statusBadge}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95] mb-5 text-[var(--text)]">
              {firstName}
              <br />
              <span className="grad-cyan">{lastName}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="font-mono text-sm sm:text-base text-[var(--muted)] font-medium mb-3">
              {siteConfig.role}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-base sm:text-xl leading-relaxed text-[var(--text)] opacity-90 max-w-[540px] mb-8">
              {siteConfig.tagline.prefix}{" "}
              <TypingEffect words={siteConfig.typingWords} />
              <br className="hidden sm:inline" />
              {siteConfig.tagline.suffix}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#00d4ff] text-[#080b10] shadow-[0_0_24px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
              >
                <Rocket className="w-4 h-4" />
                View Projects
              </Link>

              {hasResume && (
                <>
                  <a
                    href={siteConfig.resumeUrl}
                    download="Nadim_Altaf_Resume.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-transparent text-[var(--text)] border border-[var(--border-color)] hover:border-[#00d4ff] hover:bg-[rgba(0,212,255,0.06)] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                    aria-label="Download Nadim Altaf Resume"
                  >
                    <Download className="w-4 h-4 text-[#00d4ff]" />
                    Download Resume
                  </a>

                  <a
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-semibold text-[var(--muted)] hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                    aria-label="View Resume in a new tab"
                  >
                    <span>View Resume</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </>
              )}

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.5}>
            <div className="flex gap-10 mt-12 pt-10 border-t border-[var(--border-color)]">
              {siteConfig.heroStats.map((stat, i) => (
                <div key={i}>
                  <div
                    className={`font-serif text-3xl sm:text-4xl leading-none font-bold ${
                      stat.color === "cyan"
                        ? "grad-cyan"
                        : stat.color === "gold"
                        ? "grad-gold"
                        : "text-[var(--text)]"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[0.75rem] text-[var(--muted)] font-semibold uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          direction="right"
          delay={0.3}
          className="relative w-full max-w-[380px] h-[430px] hidden lg:block shrink-0"
        >
          <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[var(--surface2)] to-[var(--surface3)] border border-[var(--border-color)] flex flex-col overflow-hidden shadow-2xl">
            <div className="px-6 py-4 border-b border-[var(--border-color)] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="font-mono text-xs text-[var(--muted)] ml-2">
                {siteConfig.codePreview.filename}
              </span>
            </div>

            <div className="p-5 font-mono text-xs leading-loose overflow-hidden flex-1 select-none">
              {siteConfig.codePreview.lines.map((line) => (
                <div key={line.num} className="flex gap-4">
                  <span className="text-[var(--muted)] opacity-50 min-w-5 text-right">
                    {line.num}
                  </span>
                  <span className="text-[var(--text)] opacity-90">
                    {line.content}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-4 -left-8 min-w-[170px] glass p-3.5 rounded-xl shadow-xl">
            <div className="text-[0.65rem] uppercase tracking-wider text-[var(--muted)] mb-1">
              {siteConfig.codePreview.floatPrimary.label}
            </div>
            <div className="text-lg font-extrabold grad-cyan">
              {siteConfig.codePreview.floatPrimary.value}
            </div>
            <div className="text-[0.7rem] text-[var(--muted)] mt-0.5">
              {siteConfig.codePreview.floatPrimary.subtext}
            </div>
          </div>

          <div className="absolute top-8 -right-8 min-w-[150px] glass p-3.5 rounded-xl shadow-xl">
            <div className="text-[0.65rem] uppercase tracking-wider text-[var(--muted)] mb-1">
              {siteConfig.codePreview.floatSecondary.label}
            </div>
            <div className="text-lg font-extrabold grad-gold">
              {siteConfig.codePreview.floatSecondary.value}
            </div>
            <div className="text-[0.7rem] text-[var(--muted)] mt-0.5">
              {siteConfig.codePreview.floatSecondary.subtext}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
