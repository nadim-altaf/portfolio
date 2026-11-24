"use client";

import React, { useState } from "react";
import { Mail, ArrowRight, Send, FileText, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, KaggleIcon } from "./icons";
import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { ScrollReveal } from "./scroll-reveal";
import { siteConfig } from "@/data/site";

export function Contact() {
  const { contact } = siteConfig;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const hasEmail = Boolean(contact.info.email && contact.info.email !== "#");
  const hasGithub = Boolean(
    contact.info.github.url && contact.info.github.url !== "#"
  );
  const hasLinkedin = Boolean(
    contact.info.linkedin.url && contact.info.linkedin.url !== "#"
  );
  const hasKaggle = Boolean(
    contact.info.kaggle.url && contact.info.kaggle.url !== "#"
  );
  const hasResume = Boolean(siteConfig.resumeUrl && siteConfig.resumeUrl !== "#");

  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label={contact.sectionLabel}
            title={contact.title}
            subtitle={contact.subtitle}
            centered
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-3">
              {hasEmail && (
                <a
                  href={`mailto:${contact.info.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)] text-[var(--text)] transition-all hover:border-[#00d4ff] hover:translate-x-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(0,212,255,0.1)] text-[#00d4ff]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[0.68rem] uppercase tracking-wider text-[var(--muted)] font-bold">
                      Email
                    </div>
                    <div className="text-sm font-semibold truncate">
                      {contact.info.email}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--muted)]" />
                </a>
              )}

              {hasGithub && (
                <a
                  href={contact.info.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)] text-[var(--text)] transition-all hover:border-[#00d4ff] hover:translate-x-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(255,255,255,0.06)] text-[var(--text)]">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[0.68rem] uppercase tracking-wider text-[var(--muted)] font-bold">
                      GitHub
                    </div>
                    <div className="text-sm font-semibold truncate">
                      {contact.info.github.label}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--muted)]" />
                </a>
              )}

              {hasLinkedin && (
                <a
                  href={contact.info.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)] text-[var(--text)] transition-all hover:border-[#00d4ff] hover:translate-x-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(0,100,255,0.1)] text-[#4a9eff]">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[0.68rem] uppercase tracking-wider text-[var(--muted)] font-bold">
                      LinkedIn
                    </div>
                    <div className="text-sm font-semibold truncate">
                      {contact.info.linkedin.label}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--muted)]" />
                </a>
              )}

              {hasKaggle && (
                <a
                  href={contact.info.kaggle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)] text-[var(--text)] transition-all hover:border-[#00d4ff] hover:translate-x-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(32,176,255,0.1)] text-[#20b0ff]">
                    <KaggleIcon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[0.68rem] uppercase tracking-wider text-[var(--muted)] font-bold">
                      Kaggle
                    </div>
                    <div className="text-sm font-semibold truncate">
                      {contact.info.kaggle.label}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--muted)]" />
                </a>
              )}

              {hasResume && (
                <div className="p-4 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all hover:border-[#00d4ff]/40">
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(240,180,41,0.1)] text-[#f0b429]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[0.68rem] uppercase tracking-wider text-[var(--muted)] font-bold">
                        Curriculum Vitae
                      </div>
                      <div className="text-sm font-semibold text-[var(--text)]">
                        Nadim Altaf Resume
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <a
                      href={siteConfig.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[var(--text)] hover:text-[#00d4ff] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                      aria-label="View Resume in new tab"
                    >
                      View
                    </a>
                    <a
                      href={siteConfig.resumeUrl}
                      download="Nadim_Altaf_Resume.pdf"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#00d4ff] text-[#080b10] hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                      aria-label="Download Resume"
                    >
                      <Download className="w-3 h-3" />
                      Download
                    </a>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="firstName"
                      className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Your name"
                      required
                      className="px-4 py-3 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)] text-[var(--text)] text-sm outline-none transition-all focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="lastName"
                      className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Your last name"
                      required
                      className="px-4 py-3 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)] text-[var(--text)] text-sm outline-none transition-all focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                    className="px-4 py-3 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)] text-[var(--text)] text-sm outline-none transition-all focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Opportunity or collaboration inquiry..."
                    required
                    className="px-4 py-3 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)] text-[var(--text)] text-sm outline-none transition-all focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about the opportunity or project..."
                    required
                    className="px-4 py-3 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)] text-[var(--text)] text-sm outline-none resize-y transition-all focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm bg-[#00d4ff] text-[#080b10] flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(0,212,255,0.3)] hover:shadow-[0_0_36px_rgba(0,212,255,0.5)] transition-all cursor-pointer hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                {submitted && (
                  <div
                    role="alert"
                    className="text-center text-sm font-semibold text-[#00d4ff] mt-2 animate-in fade-in"
                  >
                    {contact.formSuccessMessage}
                  </div>
                )}
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
