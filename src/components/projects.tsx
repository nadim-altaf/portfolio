"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { ScrollReveal } from "./scroll-reveal";
import { projectsData } from "@/data/projects";
import { siteConfig } from "@/data/site";

export function Projects() {
  const githubUrl = siteConfig.contact.info.github.url;
  const hasGithub = Boolean(githubUrl && githubUrl !== "#");

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeader label="Portfolio" title="Featured Projects" />
            {hasGithub && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[var(--text)] border border-[var(--border-color)] hover:border-[#00d4ff] hover:bg-[rgba(0,212,255,0.06)] transition-all self-start sm:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                All on GitHub
              </a>
            )}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => {
            const hasRepo = Boolean(project.repoUrl && project.repoUrl !== "#");
            const hasDemo = Boolean(project.demoUrl && project.demoUrl !== "#");

            return (
              <ScrollReveal
                key={project.id}
                direction="up"
                delay={0.1 * (index % 3)}
              >
                <GlassCard className="group overflow-hidden flex flex-col h-full rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                  <div className="h-40 overflow-hidden relative">
                    <div
                      className="w-full h-full flex items-center justify-center text-5xl transition-transform duration-500 group-hover:scale-105"
                      style={{ background: project.bgGradient }}
                    >
                      {project.emoji}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-base font-extrabold text-[var(--text)] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[var(--muted)] leading-relaxed flex-1 mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[0.68rem] font-bold tracking-wide px-2.5 py-0.5 rounded-md bg-[rgba(0,212,255,0.1)] text-[#00d4ff] border border-[rgba(0,212,255,0.2)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {(hasRepo || hasDemo) && (
                      <div className="flex gap-2">
                        {hasRepo && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2 rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5 bg-[var(--surface3)] text-[var(--text)] border border-[var(--border-color)] hover:border-[var(--text)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            Code
                          </a>
                        )}
                        {hasDemo && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2 rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5 bg-[#00d4ff] text-[#080b10] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                          </a>
                        )}
                      </div>
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
