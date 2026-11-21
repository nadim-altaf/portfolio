"use client";

import { ExternalLink } from "lucide-react";
import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { ScrollReveal } from "./scroll-reveal";
import { siteConfig } from "@/data/site";

export function Certificates() {
  const { certificates } = siteConfig;

  return (
    <section id="certificates" className="py-28 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label={certificates.sectionLabel}
            title={certificates.title}
            centered
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.items.map((cert, index) => {
            const hasVerification = Boolean(
              cert.verificationUrl && cert.verificationUrl !== "#"
            );

            return (
              <ScrollReveal
                key={cert.name}
                direction="up"
                delay={0.05 * (index % 3)}
              >
                <GlassCard className="p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,212,255,0.3)] h-full">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ background: cert.iconBg }}
                  >
                    {cert.icon}
                  </div>

                  <div className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--muted)]">
                    {cert.issuer}
                  </div>

                  <h3 className="text-sm font-bold text-[var(--text)] leading-snug flex-1">
                    {cert.name}
                  </h3>

                  <div className="flex items-center justify-between font-mono text-[0.72rem] text-[var(--muted)] mt-1">
                    <span>{cert.year}</span>
                    {hasVerification && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#00d4ff] hover:underline"
                      >
                        Verify
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
