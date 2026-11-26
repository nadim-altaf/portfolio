"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FileText, Award, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { GlassCard } from "./glass-card";
import { SectionHeader } from "./section-header";
import { ScrollReveal } from "./scroll-reveal";
import { certificatesData, Certificate } from "@/data/certificates";

export function Certificates() {
  const [selectedIssuer, setSelectedIssuer] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Extract unique issuers automatically
  const issuers = ["All", ...Array.from(new Set(certificatesData.map((c) => c.issuer)))];

  const filtered = certificatesData.filter(
    (cert) => selectedIssuer === "All" || cert.issuer === selectedIssuer
  );

  const featuredCerts = filtered.filter((c) => c.featured);
  const regularCerts = filtered.filter((c) => !c.featured);

  // Combine featured first, then regular
  const sortedCerts = [...featuredCerts, ...regularCerts];
  const displayedCerts = showAll ? sortedCerts : sortedCerts.slice(0, 6);
  const hasMoreThanSix = sortedCerts.length > 6;

  return (
    <section id="certificates" className="py-28 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label="Credentials"
            title="Certifications & Specializations"
            subtitle="Verified credentials from industry specializations and academic courses."
            centered
            className="mb-10"
          />
        </ScrollReveal>

        {/* Dynamic Issuer Filter */}
        {issuers.length > 2 && (
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {issuers.map((issuer) => {
                const isActive = selectedIssuer === issuer;
                return (
                  <button
                    key={issuer}
                    type="button"
                    onClick={() => {
                      setSelectedIssuer(issuer);
                      setShowAll(false);
                    }}
                    className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff] cursor-pointer ${
                      isActive
                        ? "text-[#080b10]"
                        : "text-[var(--muted)] hover:text-[var(--text)] bg-[var(--surface2)] border border-[var(--border-color)]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeIssuerPill"
                        className="absolute inset-0 bg-[#00d4ff] rounded-xl -z-0"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{issuer}</span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        )}

        {/* Certificates Grid */}
        <motion.div layout className="space-y-6">
          <AnimatePresence mode="popLayout">
            {displayedCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                {cert.featured ? (
                  <FeaturedCertificateCard cert={cert} />
                ) : (
                  <CompactCertificateCard cert={cert} />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show all / Show less toggle */}
        {hasMoreThanSix && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[var(--text)] bg-[var(--surface2)] border border-[var(--border-color)] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
            >
              <span>{showAll ? "Show Less" : `Show All (${sortedCerts.length})`}</span>
              {showAll ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedCertificateCard({ cert }: { cert: Certificate }) {
  const hasVerify = Boolean(cert.verifyUrl && cert.verifyUrl !== "#");
  const hasFile = Boolean(cert.file && cert.file !== "#");

  return (
    <GlassCard className="p-8 border-[#00d4ff]/30 shadow-lg relative overflow-hidden transition-all duration-300 hover:border-[#00d4ff]/60">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-start gap-4 flex-1">
          <div className="w-12 h-12 rounded-xl bg-[rgba(0,212,255,0.1)] text-[var(--cyan)] border border-[rgba(0,212,255,0.2)] flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>

          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[0.68rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[rgba(0,212,255,0.12)] text-[var(--cyan)] border border-[rgba(0,212,255,0.3)]">
                Featured Specialization
              </span>
              <span className="text-xs font-semibold text-[var(--muted)]">
                {cert.issuer}
              </span>
              <span className="text-xs font-mono text-[var(--muted)]">
                · {cert.issued}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[var(--text)] leading-snug">
              {cert.name}
            </h3>

            {cert.scope && (
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                {cert.scope}
              </p>
            )}

            {cert.note && (
              <div className="flex items-center gap-1.5 text-xs text-[var(--muted)] pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#28c840] shrink-0" />
                <span>{cert.note}</span>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 pt-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[0.7rem] font-bold px-2.5 py-0.5 rounded-md bg-[var(--surface3)] text-[var(--text)] border border-[var(--border-color)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex sm:flex-col lg:flex-row items-center gap-2.5 shrink-0 self-start lg:self-center">
          {hasFile && (
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-[var(--surface3)] text-[var(--text)] border border-[var(--border-color)] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
            >
              <FileText className="w-3.5 h-3.5 text-[#00d4ff]" />
              View PDF
            </a>
          )}
          {hasVerify && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#00d4ff] text-[#080b10] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
            >
              <span>Verify</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

function CompactCertificateCard({ cert }: { cert: Certificate }) {
  const hasVerify = Boolean(cert.verifyUrl && cert.verifyUrl !== "#");
  const hasFile = Boolean(cert.file && cert.file !== "#");

  return (
    <GlassCard className="p-6 transition-all duration-300 hover:border-[#00d4ff]/40">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-[var(--cyan)] uppercase tracking-wider text-[0.68rem]">
              {cert.issuer}
            </span>
            <span className="text-[var(--muted)]">·</span>
            <span className="font-mono text-[var(--muted)] text-[0.72rem]">
              {cert.issued}
            </span>
          </div>

          <h4 className="text-base font-bold text-[var(--text)] leading-snug truncate">
            {cert.name}
          </h4>

          {cert.note && (
            <p className="text-[0.72rem] text-[var(--muted)] line-clamp-1">
              {cert.note}
            </p>
          )}

          <div className="flex flex-wrap gap-1.5 pt-1">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-[0.68rem] px-2 py-0.5 rounded-md bg-[var(--surface3)] text-[var(--muted)] border border-[var(--border-color)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
          {hasFile && (
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[var(--text)] border border-[var(--border-color)] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
              aria-label={`View PDF for ${cert.name}`}
            >
              <FileText className="w-3.5 h-3.5 text-[#00d4ff]" />
              <span className="hidden md:inline">View PDF</span>
            </a>
          )}
          {hasVerify && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-[var(--cyan)] hover:underline transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
              aria-label={`Verify ${cert.name}`}
            >
              <span>Verify</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
