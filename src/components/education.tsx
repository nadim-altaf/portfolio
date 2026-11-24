"use client";

import { GraduationCap } from "lucide-react";
import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { ScrollReveal } from "./scroll-reveal";
import { siteConfig } from "@/data/site";

export function Education() {
  const { education } = siteConfig;
  const { item } = education;

  const badgeColorClasses = {
    gold: "bg-[rgba(240,180,41,0.1)] text-[#f0b429] border-[rgba(240,180,41,0.3)]",
    cyan: "bg-[rgba(0,212,255,0.1)] text-[#00d4ff] border-[rgba(0,212,255,0.3)]",
    green: "bg-[rgba(40,200,64,0.1)] text-[#28c840] border-[rgba(40,200,64,0.3)]",
    purple: "bg-[rgba(138,43,226,0.1)] text-[#a78bfa] border-[rgba(138,43,226,0.3)]",
  };

  return (
    <section id="education" className="py-28 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label={education.sectionLabel}
            title={education.title}
            centered
            className="mb-12"
          />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <GlassCard className="p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start max-w-3xl mx-auto transition-all duration-300 hover:border-[#00d4ff]/40">
            <div className="w-14 h-14 rounded-2xl bg-[rgba(240,180,41,0.1)] border border-[rgba(240,180,41,0.2)] flex items-center justify-center text-[#f0b429] shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-extrabold text-[var(--text)] mb-1">
                {item.degree}
              </h3>
              <p className="text-sm text-[var(--muted)] mb-3">
                {item.institution}
              </p>

              <div className="flex flex-wrap gap-2.5 my-3">
                {item.badges.map((badge, index) => (
                  <span
                    key={index}
                    className={`text-[0.72rem] font-bold px-3 py-1 rounded-full border ${badgeColorClasses[badge.variant]}`}
                  >
                    {badge.text}
                  </span>
                ))}
              </div>

              {item.coursework && item.coursework.length > 0 && (
                <div className="mt-5 pt-5 border-t border-[var(--border-color)]">
                  <h4 className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--muted)] mb-3">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span key={course} className="tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
