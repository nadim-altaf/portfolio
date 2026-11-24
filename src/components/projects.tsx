"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, AlertCircle, ArrowUpRight } from "lucide-react";
import { AppIcon } from "./icon";
import { GithubIcon } from "./icons";
import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { ScrollReveal } from "./scroll-reveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { projectsData, Project } from "@/data/projects";
import { siteConfig } from "@/data/site";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const githubUrl = siteConfig.contact.info.github.url;
  const hasGithub = Boolean(githubUrl && githubUrl !== "#");

  // Derive categories automatically when multiple projects exist
  const categories = [
    "All",
    ...Array.from(new Set(projectsData.map((p) => p.category))),
  ];

  const filteredProjects = projectsData.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
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

        {/* Filter tabs only render when there are two or more projects */}
        {projectsData.length >= 2 && categories.length > 2 && (
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff] cursor-pointer ${
                      isActive
                        ? "text-[#080b10]"
                        : "text-[var(--muted)] hover:text-[var(--text)] bg-[var(--surface2)] border border-[var(--border-color)]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId={shouldReduceMotion ? undefined : "activeProjectFilter"}
                        className="absolute inset-0 bg-[#00d4ff] rounded-xl -z-10 shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 400, damping: 30 }
                        }
                      />
                    )}
                    {category}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        )}

        <div
          className={
            filteredProjects.length === 1
              ? "max-w-2xl mx-auto"
              : "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          }
        >
          {filteredProjects.map((project, index) => {
            const hasRepo = Boolean(project.repoUrl && project.repoUrl !== "#");
            const hasDemo = Boolean(project.demoUrl && project.demoUrl !== "#");

            return (
              <ScrollReveal
                key={project.id}
                direction="up"
                delay={0.1 * index}
              >
                <GlassCard
                  role="button"
                  tabIndex={0}
                  aria-haspopup="dialog"
                  aria-label={`View details for ${project.title}`}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  className="group overflow-hidden flex flex-col rounded-2xl cursor-pointer text-left transition-all duration-300 hover:border-[#00d4ff]/40 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                >
                  <div
                    className="h-40 overflow-hidden relative flex items-center justify-between px-6"
                    style={{
                      background:
                        project.bgGradient ||
                        "linear-gradient(135deg, #0a1628, #1a3a5c)",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#00d4ff] shrink-0">
                        <AppIcon name={project.icon} className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-[0.7rem] uppercase tracking-widest text-[#00d4ff] font-bold">
                          {project.category}
                        </div>
                        <h3 className="text-xl font-black text-white group-hover:text-[#00d4ff] transition-colors flex items-center gap-1.5">
                          {project.title}
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                      </div>
                    </div>

                    <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[0.68rem] font-bold bg-[#f0b429]/15 text-[#f0b429] border border-[#f0b429]/30">
                      <AlertCircle className="w-3 h-3" />
                      {project.status}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col gap-5">
                    <div className="sm:hidden inline-flex self-start items-center gap-1 px-2.5 py-1 rounded-full text-[0.68rem] font-bold bg-[#f0b429]/15 text-[#f0b429] border border-[#f0b429]/30">
                      <AlertCircle className="w-3 h-3" />
                      {project.status}
                    </div>

                    <div className="space-y-1">
                      <div className="text-[0.68rem] font-bold uppercase tracking-wider text-[var(--muted)]">
                        Problem
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--text)] line-clamp-2 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[0.68rem] font-bold uppercase tracking-wider text-[var(--muted)]">
                        What I Built
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--muted)] line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-1.5 mt-auto">
                      <div className="text-[0.68rem] font-bold uppercase tracking-wider text-[var(--muted)]">
                        Tech
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[0.68rem] font-semibold px-2.5 py-0.5 rounded-md bg-[rgba(0,212,255,0.08)] text-[#00d4ff] border border-[rgba(0,212,255,0.18)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {(hasRepo || hasDemo) && (
                      <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[var(--border-color)]">
                        {hasRepo && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 bg-[var(--surface2)] text-[var(--text)] border border-[var(--border-color)] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
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
                            onClick={(e) => e.stopPropagation()}
                            className="px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 bg-[#00d4ff] text-[#080b10] hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
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

      {/* Accessible Detail Dialog */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      >
        <DialogContent className="max-w-[calc(100%-1.5rem)] sm:max-w-xl max-h-[85vh] overflow-y-auto bg-[var(--surface)] text-[var(--text)] border border-[var(--border-color)] p-5 sm:p-7 rounded-2xl shadow-2xl">
          {selectedProject && (
            <>
              <DialogHeader className="gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[0.7rem] uppercase tracking-widest text-[#00d4ff] font-bold">
                    {selectedProject.category}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-[#f0b429]/15 text-[#f0b429] border border-[#f0b429]/30">
                    <AlertCircle className="w-2.5 h-2.5" />
                    {selectedProject.status}
                  </span>
                </div>
                <DialogTitle className="text-xl sm:text-2xl font-black text-[var(--text)]">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Detailed information about {selectedProject.title}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 my-2">
                <div className="p-4 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)]">
                  <h4 className="text-[0.7rem] font-bold uppercase tracking-wider text-[#00d4ff] mb-1">
                    Problem
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text)] leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)]">
                  <h4 className="text-[0.7rem] font-bold uppercase tracking-wider text-[#00d4ff] mb-1">
                    What I Built
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.result && (
                  <div className="p-4 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)]">
                    <h4 className="text-[0.7rem] font-bold uppercase tracking-wider text-[#00d4ff] mb-1">
                      Measurable Result
                    </h4>
                    <p className="text-xs sm:text-sm text-[var(--text)] leading-relaxed">
                      {selectedProject.result}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--muted)] mb-2">
                    Technologies & Architecture
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-[rgba(0,212,255,0.08)] text-[#00d4ff] border border-[rgba(0,212,255,0.2)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {(selectedProject.repoUrl || selectedProject.demoUrl) && (
                <div className="flex flex-wrap gap-3 pt-3 border-t border-[var(--border-color)]">
                  {selectedProject.repoUrl && selectedProject.repoUrl !== "#" && (
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2 bg-[var(--surface3)] text-[var(--text)] border border-[var(--border-color)] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                    >
                      <GithubIcon className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2 bg-[#00d4ff] text-[#080b10] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open Live Demo
                    </a>
                  )}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
