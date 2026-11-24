"use client";

import { ExternalLink, AlertCircle } from "lucide-react";
import { AppIcon } from "./icon";
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
            <SectionHeader
              label="Projects"
              title="Featured Project"
              subtitle="Practical applications engineered with machine learning and backend services."
            />
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

        <div className="grid grid-cols-1 max-w-3xl mx-auto gap-8">
          {projectsData.map((project, index) => {
            const hasRepo = Boolean(project.repoUrl && project.repoUrl !== "#");
            const hasDemo = Boolean(project.demoUrl && project.demoUrl !== "#");

            return (
              <ScrollReveal
                key={project.id}
                direction="up"
                delay={0.1 * index}
              >
                <GlassCard className="group overflow-hidden flex flex-col rounded-2xl transition-all duration-300 hover:border-[#00d4ff]/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                  <div className="h-44 overflow-hidden relative flex items-center justify-between px-8 bg-gradient-to-r from-[#0a1628] to-[#1a3a5c]">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/25 flex items-center justify-center text-[#00d4ff] shrink-0">
                        <AppIcon name={project.icon} className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-widest text-[#00d4ff] font-bold">
                          {project.category}
                        </div>
                        <h3 className="text-2xl font-black text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.7rem] font-bold bg-[#f0b429]/15 text-[#f0b429] border border-[#f0b429]/30">
                      <AlertCircle className="w-3 h-3" />
                      {project.status}
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col gap-6">
                    <div className="sm:hidden inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full text-[0.7rem] font-bold bg-[#f0b429]/15 text-[#f0b429] border border-[#f0b429]/30">
                      <AlertCircle className="w-3 h-3" />
                      {project.status}
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                        Problem
                      </div>
                      <p className="text-sm text-[var(--text)] leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                        Architecture & Implementation
                      </div>
                      <p className="text-sm text-[var(--muted)] leading-relaxed">
                        {project.whatIDid}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-xs font-bold tracking-wide px-3 py-1 rounded-md bg-[rgba(0,212,255,0.1)] text-[#00d4ff] border border-[rgba(0,212,255,0.2)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {(hasRepo || hasDemo) && (
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--border-color)]">
                        {hasRepo && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 bg-[var(--surface3)] text-[var(--text)] border border-[var(--border-color)] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                          >
                            <GithubIcon className="w-4 h-4" />
                            View on GitHub
                          </a>
                        )}
                        {hasDemo && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 bg-[#00d4ff] text-[#080b10] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                          >
                            <ExternalLink className="w-4 h-4" />
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
