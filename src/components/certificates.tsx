"use client";

import { ExternalLink, FileText, CheckCircle2 } from "lucide-react";
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
            subtitle="Verified credentials from industry and academic specializations."
            centered
            className="mb-12"
          />
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          {certificates.items.map((cert, index) => {
            const hasVerification = Boolean(
              cert.verificationUrl && cert.verificationUrl !== "#"
            );
            const hasPdf = Boolean(cert.pdfPath && cert.pdfPath !== "#");

            return (
              <ScrollReveal
                key={cert.name}
                direction="up"
                delay={0.1 * index}
              >
                <GlassCard className="p-8 flex flex-col gap-5 transition-all duration-300 hover:border-[#00d4ff]/40">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                        style={{ background: cert.iconBg }}
                      >
                        {cert.icon}
                      </div>
                      <div>
                        <div className="text-[0.7rem] font-bold uppercase tracking-wider text-[#00d4ff]">
                          {cert.issuer}
                        </div>
                        <h3 className="text-lg font-bold text-[var(--text)] leading-snug">
                          {cert.name}
                        </h3>
                      </div>
                    </div>

                    <span className="font-mono text-xs text-[var(--muted)] shrink-0 px-2.5 py-1 rounded-md bg-[var(--surface2)] border border-[var(--border-color)]">
                      {cert.year}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    {cert.scope}
                  </p>

                  <div className="flex items-center gap-2 text-[0.75rem] text-[var(--muted)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#28c840]" />
                    <span>{cert.note}</span>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-3 border-t border-[var(--border-color)]">
                    {hasPdf && (
                      <a
                        href={cert.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[var(--surface3)] text-[var(--text)] border border-[var(--border-color)] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#00d4ff]" />
                        View Certificate PDF
                      </a>
                    )}

                    {hasVerification && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-[#00d4ff] hover:underline transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                      >
                        Verify on Coursera
                        <ExternalLink className="w-3.5 h-3.5" />
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
