import type { IconName } from "@/components/icon";

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
  color?: "cyan" | "gold";
}

export interface SkillCategory {
  title: string;
  icon: IconName;
  iconBg: string;
  tags: string[];
}

export interface FocusTopic {
  title: string;
  description: string;
}

export interface HighlightItem {
  icon: IconName;
  title: string;
  subtitle: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  note?: string;
  badges: Array<{
    text: string;
    variant: "gold" | "cyan" | "green" | "purple";
  }>;
  coursework?: string[];
}

export interface CertificateItem {
  name: string;
  issuer: string;
  year: string;
  scope: string;
  note: string;
  icon: IconName;
  iconBg: string;
  verificationUrl: string;
  pdfPath: string;
}

export interface ContactLink {
  label: string;
  url: string;
}

export interface ContactInfo {
  email: string; // TODO: add verified email from CONTENT.md
  github: ContactLink;
  linkedin: ContactLink;
  kaggle: ContactLink;
}

export const siteConfig = {
  name: "Nadim Altaf",
  logoInitials: "NA",
  role: "< Applied AI Engineer />",
  headline: "Aspiring Applied AI Engineer",
  statusBadge: "Available for Opportunities",
  tagline: {
    prefix: "Building intelligent applications with",
    suffix: "practical AI and production-ready systems.",
  },
  typingWords: [
    "Generative AI",
    "LLM Engineering",
    "Agentic Systems",
    "Applied Machine Learning",
    "FastAPI Backends",
  ],
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Focus", href: "#focus" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certs", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ] as NavLink[],
  resumeUrl: "/resume.pdf",
  resumeFilename: "Nadim_Altaf_Resume.pdf",
  heroStats: [
    { value: "Applied AI", label: "Primary Direction", color: "cyan" },
    { value: "B.Tech", label: "Computer Science & Eng", color: "gold" },
    { value: "CUK", label: "Central Univ. of Kashmir" },
  ] as StatItem[],
  codePreview: {
    filename: "service.py",
    lines: [
      { num: 1, content: "from fastapi import FastAPI" },
      { num: 2, content: "from pydantic import BaseModel" },
      { num: 3, content: "" },
      { num: 4, content: "# Applied AI decision service" },
      { num: 5, content: "app = FastAPI(title=\"AI Service\")" },
      { num: 6, content: "" },
      { num: 7, content: "@app.post(\"/analyze\")" },
      { num: 8, content: "async def analyze(data: Assessment):" },
      { num: 9, content: "    result = await pipeline.evaluate(data)" },
      { num: 10, content: "    return {\"status\": \"ok\", \"insights\": result}" },
    ],
    floatPrimary: {
      label: "Architecture",
      value: "Applied AI",
      subtext: "FastAPI + ML Pipeline",
    },
    floatSecondary: {
      label: "Focus",
      value: "Agentic & LLM",
      subtext: "Production-ready systems",
    },
  },
  about: {
    sectionLabel: "About Me",
    headingMain: "Engineering ideas into",
    headingAccent: "practical AI",
    headingEnd: "applications.",
    photo: "/profile.webp",
    photoFallback: "/profile.jpg",
    paragraphs: [
      "I am a Computer Science and Engineering student at the Central University of Kashmir, passionate about Artificial Intelligence and building intelligent software applications.",
      "My primary focus is Applied AI Engineering, particularly Generative AI, Large Language Models (LLMs), AI agents, and production-ready AI systems.",
      "I enjoy turning ideas into practical applications by combining Python, machine learning, backend engineering, and modern AI technologies.",
    ],
    careerGoal: {
      title: "Long-Term Goal",
      description:
        "Become an accomplished AI Engineer and help build reliable, scalable, and impactful AI-powered products.",
    },
    highlights: [
      { icon: "graduation-cap", title: "B.Tech CSE", subtitle: "Central Univ. of Kashmir" },
      { icon: "zap", title: "Target Role", subtitle: "Applied AI Engineer" },
      { icon: "map-pin", title: "Location", subtitle: "Srinagar, J&K, India" },
      { icon: "wrench", title: "Tech Stack", subtitle: "Python, FastAPI, ML" },
    ] as HighlightItem[],
  },
  currentlyFocusedOn: [
    {
      title: "Generative AI & LLM Engineering",
      description:
        "Developing prompt architectures, fine-tuning approaches, and LLM-powered application layers.",
    },
    {
      title: "Agentic AI Systems",
      description:
        "Designing autonomous workflows, tool-use agents, and multi-step reasoning architectures.",
    },
    {
      title: "Retrieval-Augmented Generation (RAG)",
      description:
        "Building semantic search, chunking strategies, vector embeddings, and contextual retrieval pipelines.",
    },
    {
      title: "Deploying AI Systems",
      description:
        "Packaging inference engines into scalable, containerized, and production-ready services.",
    },
  ] as FocusTopic[],
  skills: {
    sectionLabel: "Skills",
    title: "Current Technical Experience",
    subtitle:
      "Technologies and tools I actively use in developing software and machine learning applications.",
    categories: [
      {
        title: "Programming & Core",
        icon: "code",
        iconBg: "rgba(0,212,255,0.1)",
        tags: ["Python", "Machine Learning Fundamentals", "Git", "GitHub"],
      },
      {
        title: "Backend & Systems",
        icon: "settings",
        iconBg: "rgba(240,180,41,0.1)",
        tags: [
          "FastAPI",
          "REST API Development",
          "SQLite",
          "Database Management",
          "Authentication Design",
          "Privacy-Focused Architecture",
        ],
      },
      {
        title: "Integration & Analytics",
        icon: "bar-chart",
        iconBg: "rgba(138,43,226,0.15)",
        tags: [
          "Android Integration",
          "SQL",
          "Jupyter Notebooks",
          "Excel",
          "Cognos Analytics",
        ],
      },
    ] as SkillCategory[],
  },
  education: {
    sectionLabel: "Education",
    title: "Academic Background",
    item: {
      degree: "Bachelor of Technology, Computer Science & Engineering",
      institution: "Central University of Kashmir",
      badges: [
        { text: "B.Tech CSE", variant: "cyan" },
        { text: "Central University of Kashmir", variant: "gold" },
      ],
    } as EducationItem,
  },
  certificates: {
    sectionLabel: "Credentials",
    title: "Certifications",
    items: [
      {
        name: "IBM Data Analyst Professional Certificate",
        issuer: "IBM (via Coursera)",
        year: "Feb 7, 2025",
        scope:
          "11 courses covering Excel, SQL, Python, data visualization, Cognos Analytics, and a capstone project.",
        note: "Online, non-credit Professional Certificate.",
        icon: "scroll",
        iconBg: "rgba(0,100,255,0.12)",
        verificationUrl:
          "https://coursera.org/verify/professional-cert/KV2QW2WF13UG",
        pdfPath: "/certificates/ibm-data-analyst.pdf",
      },
    ] as CertificateItem[],
  },
  contact: {
    sectionLabel: "Get in Touch",
    title: "Let's Connect",
    subtitle:
      "Interested in Applied AI Engineering, collaborative projects, or discussions around LLMs and Agentic AI. My inbox is open.",
    info: {
      email: "nadimaltaf271@gmail.com",
      github: {
        label: "github.com/nadim-altaf",
        url: "https://github.com/nadim-altaf",
      },
      linkedin: {
        label: "linkedin.com/in/nadim-altaf",
        url: "https://www.linkedin.com/in/nadim-altaf",
      },
      kaggle: {
        label: "kaggle.com/nadimaltaf",
        url: "https://www.kaggle.com/nadimaltaf",
      },
    } as ContactInfo,
    formSuccessMessage: "Message sent! I'll get back to you soon.",
  },
  footer: {
    socials: [
      { name: "GitHub", url: "https://github.com/nadim-altaf" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/nadim-altaf" },
      { name: "Kaggle", url: "https://www.kaggle.com/nadimaltaf" },
    ],
    copy: "Crafted by Nadim Altaf · © 2026 · All rights reserved",
  },
};
