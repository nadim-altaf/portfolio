"use client";

import Image from "next/image";
import { Target, Compass } from "lucide-react";
import { AppIcon } from "./icon";
import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { ScrollReveal } from "./scroll-reveal";
import { siteConfig } from "@/data/site";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <ScrollReveal direction="left" className="lg:col-span-7 space-y-6">
            <SectionHeader
              label={about.sectionLabel}
              title={
                <>
                  {about.headingMain}{" "}
                  <span className="font-serif italic">{about.headingAccent}</span>{" "}
                  {about.headingEnd}
                </>
              }
            />

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative shrink-0 mx-auto sm:mx-0">
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden glass p-1.5 shadow-xl relative z-10 border border-[#00d4ff]/30">
                  <Image
                    src={about.photo}
                    alt={`Portrait of ${siteConfig.name}`}
                    width={176}
                    height={176}
                    priority
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-2xl opacity-40 blur-lg -z-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 70%)",
                  }}
                />
              </div>

              <div className="space-y-3.5 text-[var(--muted)] leading-relaxed text-sm sm:text-base flex-1">
                {about.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[rgba(0,212,255,0.04)] border border-[rgba(0,212,255,0.15)]">
              <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[var(--cyan)] mb-2">
                <Target className="w-4 h-4" />
                {about.careerGoal.title}
              </h4>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {about.careerGoal.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-5 space-y-5" id="focus">
            <GlassCard className="p-7">
              <div className="flex items-center justify-between mb-4">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--cyan)]">
                  <Compass className="w-4 h-4" />
                  Currently focused on
                </h4>
                <span className="text-[0.65rem] font-mono px-2 py-0.5 rounded-full bg-[var(--surface3)] text-[var(--muted)] border border-[var(--border-color)]">
                  Learning & Building
                </span>
              </div>
              <p className="text-xs text-[var(--muted)] mb-5">
                Focus areas actively being explored and engineered toward (demonstrated once projects ship).
              </p>
              <div className="space-y-3">
                {siteConfig.currentlyFocusedOn.map((topic) => (
                  <div
                    key={topic.title}
                    className="p-3.5 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)] transition-colors hover:border-[#00d4ff]/40"
                  >
                    <div className="text-xs font-bold text-[var(--text)] mb-1">
                      {topic.title}
                    </div>
                    <div className="text-[0.75rem] text-[var(--muted)] leading-normal">
                      {topic.description}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <div className="grid grid-cols-2 gap-3.5">
              {about.highlights.map((item, index) => (
                <GlassCard key={index} className="p-4 text-center flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(0,212,255,0.1)] text-[var(--cyan)] flex items-center justify-center mb-2">
                    <AppIcon name={item.icon} className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-[var(--text)]">
                    {item.title}
                  </div>
                  <div className="text-[0.72rem] text-[var(--muted)] mt-0.5">
                    {item.subtitle}
                  </div>
                </GlassCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
