"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, ArrowRight, Send, Download, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, KaggleIcon } from "./icons";
import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { ScrollReveal } from "./scroll-reveal";
import { siteConfig } from "@/data/site";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters."),
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
  honeypot: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface FormStatus {
  type: "success" | "warning" | "error";
  message: string;
}

export function Contact() {
  const { contact } = siteConfig;
  const [status, setStatus] = useState<FormStatus | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  const isEndpointConfigured =
    Boolean(endpoint) &&
    endpoint !== "https://formspree.io/f/your_form_id" &&
    !endpoint?.includes("your_form_id");

  const onSubmit = async (data: ContactFormData) => {
    setStatus(null);

    // Silent success for bot submissions
    if (data.honeypot) {
      reset();
      setStatus({
        type: "success",
        message: contact.formSuccessMessage || "Message sent successfully!",
      });
      return;
    }

    if (!isEndpointConfigured || !endpoint) {
      setStatus({
        type: "warning",
        message:
          "The contact form is not configured yet. Please reach out directly via the email address on the left.",
      });
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      reset();
      setStatus({
        type: "success",
        message: contact.formSuccessMessage || "Message sent successfully!",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Unable to send your message right now. Please try again or reach out directly by email.",
      });
    }
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
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label={contact.sectionLabel}
            title={contact.title}
            subtitle={contact.subtitle}
            centered
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
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
                  <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0" />
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
                  <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0" />
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
                  <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0" />
                </a>
              )}

              {hasKaggle && (
                <a
                  href={contact.info.kaggle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)] text-[var(--text)] transition-all hover:border-[#00d4ff] hover:translate-x-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(32,190,255,0.1)] text-[#20beff]">
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
                  <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0" />
                </a>
              )}

              {hasResume && (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)]">
                  <div>
                    <div className="text-[0.68rem] uppercase tracking-wider text-[var(--muted)] font-bold">
                      Resume
                    </div>
                    <div className="text-xs text-[var(--muted)] mt-0.5">
                      Updated PDF version
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
            <GlassCard className="p-5 sm:p-8">
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
                {/* Honeypot field for bot suppression */}
                <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                  <label htmlFor="company-website">Company Website</label>
                  <input
                    id="company-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("honeypot")}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                    className={`px-4 py-3 rounded-xl bg-[var(--surface2)] border text-[var(--text)] text-sm outline-none transition-all focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 ${
                      errors.name ? "border-[#ff6b6b]" : "border-[var(--border-color)]"
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-xs text-[#ff6b6b] mt-0.5 font-medium">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                    className={`px-4 py-3 rounded-xl bg-[var(--surface2)] border text-[var(--text)] text-sm outline-none transition-all focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 ${
                      errors.email ? "border-[#ff6b6b]" : "border-[var(--border-color)]"
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-xs text-[#ff6b6b] mt-0.5 font-medium">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Opportunity or collaboration inquiry..."
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    {...register("subject")}
                    className={`px-4 py-3 rounded-xl bg-[var(--surface2)] border text-[var(--text)] text-sm outline-none transition-all focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 ${
                      errors.subject ? "border-[#ff6b6b]" : "border-[var(--border-color)]"
                    }`}
                  />
                  {errors.subject && (
                    <p id="subject-error" role="alert" className="text-xs text-[#ff6b6b] mt-0.5 font-medium">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell me about the opportunity or project..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    {...register("message")}
                    className={`px-4 py-3 rounded-xl bg-[var(--surface2)] border text-[var(--text)] text-sm outline-none resize-y transition-all focus:border-[#00d4ff] focus:ring-2 focus:ring-[#00d4ff]/20 ${
                      errors.message ? "border-[#ff6b6b]" : "border-[var(--border-color)]"
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="text-xs text-[#ff6b6b] mt-0.5 font-medium">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-sm bg-[#00d4ff] text-[#080b10] flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(0,212,255,0.3)] hover:shadow-[0_0_36px_rgba(0,212,255,0.5)] transition-all cursor-pointer hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status announcement area */}
                <div role="status" aria-live="polite">
                  {status && (
                    <div
                      className={`flex items-start gap-2.5 p-3.5 rounded-xl text-xs sm:text-sm font-semibold border ${
                        status.type === "success"
                          ? "bg-[rgba(0,212,255,0.1)] text-[#00d4ff] border-[rgba(0,212,255,0.3)]"
                          : status.type === "warning"
                          ? "bg-[rgba(240,180,41,0.1)] text-[#f0b429] border-[rgba(240,180,41,0.3)]"
                          : "bg-[rgba(255,107,107,0.1)] text-[#ff6b6b] border-[rgba(255,107,107,0.3)]"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      )}
                      <span>{status.message}</span>
                    </div>
                  )}
                </div>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
