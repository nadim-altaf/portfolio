"use client";

import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { ScrollReveal } from "./scroll-reveal";
import { siteConfig } from "@/data/site";

export function Skills() {
  const { skills } = siteConfig;

  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label={skills.sectionLabel}
            title={skills.title}
            subtitle={skills.subtitle}
            centered
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.categories.map((category, index) => (
            <ScrollReveal
              key={category.title}
              direction="up"
              delay={0.1 * index}
            >
              <GlassCard className="p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,212,255,0.3)] h-full">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4"
                  style={{ background: category.iconBg }}
                >
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-[var(--text)] mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
