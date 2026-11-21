"use client";

import { Target, Compass } from "lucide-react";
import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { ScrollReveal } from "./scroll-reveal";
import { siteConfig } from "@/data/site";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal direction="left">
            <SectionHeader
              label={about.sectionLabel}
              title={
                <>
                  {about.headingMain}
                  <br />
                  <span className="font-serif italic">{about.headingAccent}</span>{" "}
                  {about.headingEnd}
                </>
              }
              className="mb-6"
            />

            <div className="space-y-4 text-[var(--muted)] leading-relaxed text-base">
              {about.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            <div className="mt-6 p-6 rounded-xl bg-[rgba(0,212,255,0.04)] border border-[rgba(0,212,255,0.15)]">
              <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00d4ff] mb-2">
                <Target className="w-4 h-4" />
                {about.careerGoal.title}
              </h4>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {about.careerGoal.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="space-y-4">
            <GlassCard className="p-7">
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-5">
                <Compass className="w-4 h-4 text-[#00d4ff]" />
                Currently focused on
              </h4>
              <div className="space-y-4">
                {about.currentlyFocusedOn.map((topic) => (
                  <div
                    key={topic.title}
                    className="p-3.5 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)]"
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
                <GlassCard key={index} className="p-5 text-center">
                  <div className="text-2xl mb-1.5">{item.icon}</div>
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
