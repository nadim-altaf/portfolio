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
  icon: string;
  iconBg: string;
  tags: string[];
}

export interface FocusTopic {
  title: string;
  description: string;
}

export interface HighlightItem {
  icon: string;
  title: string;
  subtitle: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  years: string;
  badges: Array<{
    text: string;
    variant: "gold" | "cyan" | "green" | "purple";
  }>;
  coursework: string[];
}

export interface CertificateItem {
  name: string;
  issuer: string;
  year: string;
  icon: string;
  iconBg: string;
  verificationUrl?: string;
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
  role: "< Data Science & Machine Learning Student />",
  statusBadge: "Available for Internships & Opportunities",
  tagline: {
    prefix: "Transforming raw data into",
    suffix: "intelligence that drives decisions.",
  },
  typingWords: [
    "actionable insights",
    "predictive models",
    "compelling stories",
    "real-world impact",
    "intelligent systems",
  ],
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certs", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ] as NavLink[],
  resumeUrl: "", // TODO: add real resume path from CONTENT.md
  heroStats: [
    { value: "3rd Year", label: "Academic Standing", color: "cyan" },
    { value: "B.Sc.", label: "Computer Science", color: "gold" },
    { value: "CUK", label: "Central Univ. of Kashmir" },
  ] as StatItem[],
  codePreview: {
    filename: "model.py",
    lines: [
      { num: 1, content: "import pandas as pd" },
      { num: 2, content: "from sklearn.ensemble import RandomForestClassifier" },
      { num: 3, content: "" },
      { num: 4, content: "# Configure model pipeline" },
      { num: 5, content: "model = RandomForestClassifier(" },
      { num: 6, content: "  n_estimators=100," },
      { num: 7, content: "  random_state=42" },
      { num: 8, content: ")" },
      { num: 9, content: "model.fit(X_train, y_train)" },
      { num: 10, content: "" },
      { num: 11, content: "# Generate predictions" },
      { num: 12, content: "predictions = model.predict(X_test)" },
    ],
    floatPrimary: {
      label: "Pipeline Status",
      value: "Ready",
      subtext: "Training pipeline compiled",
    },
    floatSecondary: {
      label: "Environment",
      value: "Python / ML",
      subtext: "Scikit-Learn stack",
    },
  },
  about: {
    sectionLabel: "About Me",
    headingMain: "Curious mind.",
    headingAccent: "Data-driven",
    headingEnd: "heart.",
    paragraphs: [
      "I'm Nadim Altaf, a 3rd-year Computer Science student specialising in Data Science and Machine Learning at Central University of Kashmir. I focus on exploring datasets and building models that generate practical value.",
      "My work centres on foundational machine learning techniques, statistical data analysis, and building reproducible data pipelines.",
    ],
    careerGoal: {
      title: "Career Goal",
      description:
        "To join a research-driven or data-forward team where I can develop machine learning pipelines, contribute to applied AI projects, and continue developing practical data science solutions.",
    },
    currentlyFocusedOn: [
      {
        title: "Machine Learning & Deep Learning",
        description: "Supervised algorithms, model evaluation, and neural architectures.",
      },
      {
        title: "Data Analysis & Visualisation",
        description: "Exploratory data analysis, statistical modeling, and insights reporting.",
      },
      {
        title: "Applied AI Pipelines",
        description: "Building reproducible preprocessing and inference workflows.",
      },
    ] as FocusTopic[],
    highlights: [
      { icon: "🎓", title: "CS Student", subtitle: "3rd Year (2022–2026)" },
      { icon: "🏛️", title: "University", subtitle: "Central Univ. of Kashmir" },
      { icon: "💻", title: "Specialisation", subtitle: "Data Science & ML" },
      { icon: "📊", title: "Focus", subtitle: "Predictive Analytics" },
    ] as HighlightItem[],
  },
  skills: {
    sectionLabel: "Skills & Tools",
    title: "My Technical Arsenal",
    subtitle: "Languages, frameworks, and tools I use to analyze data and build models.",
    categories: [
      {
        title: "Programming Languages",
        icon: "💻",
        iconBg: "rgba(0,212,255,0.1)",
        tags: ["Python", "Java", "C", "C++", "SQL", "Bash"],
      },
      {
        title: "Data Science Libraries",
        icon: "📊",
        iconBg: "rgba(240,180,41,0.1)",
        tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "SciPy"],
      },
      {
        title: "Machine Learning",
        icon: "🤖",
        iconBg: "rgba(138,43,226,0.15)",
        tags: [
          "Scikit-learn",
          "TensorFlow",
          "Keras",
          "XGBoost",
          "LightGBM",
          "NLTK",
        ],
      },
      {
        title: "Tools & Platforms",
        icon: "🛠️",
        iconBg: "rgba(40,200,64,0.1)",
        tags: ["Git", "GitHub", "VS Code", "Jupyter", "Docker", "Linux"],
      },
    ] as SkillCategory[],
  },
  education: {
    sectionLabel: "Background",
    title: "Education",
    item: {
      degree: "B.Sc. Computer Science",
      institution: "Central University of Kashmir",
      years: "2022 – 2026",
      badges: [
        { text: "2022 – 2026", variant: "gold" },
        { text: "3rd Year", variant: "cyan" },
      ],
      coursework: [
        "Machine Learning",
        "Data Structures & Algorithms",
        "Database Systems",
        "Statistics & Probability",
        "Linear Algebra",
        "Computer Vision",
        "Natural Language Processing",
        "Cloud Computing",
      ],
    } as EducationItem,
  },
  certificates: {
    sectionLabel: "Credentials",
    title: "Certifications",
    items: [
      {
        name: "IBM Data Analyst Professional Certificate",
        issuer: "IBM / Coursera",
        year: "2023",
        icon: "🔵",
        iconBg: "rgba(0,100,255,0.12)",
        verificationUrl: "", // TODO: add verification URL from CONTENT.md
      },
      {
        name: "Google Data Analytics Certificate",
        issuer: "Google / Coursera",
        year: "2023",
        icon: "🟠",
        iconBg: "rgba(255,150,0,0.12)",
        verificationUrl: "", // TODO: add verification URL from CONTENT.md
      },
      {
        name: "Machine Learning Specialisation",
        issuer: "DeepLearning.AI",
        year: "2024",
        icon: "🔷",
        iconBg: "rgba(0,212,255,0.12)",
        verificationUrl: "", // TODO: add verification URL from CONTENT.md
      },
      {
        name: "Statistical Learning & Inference",
        issuer: "Stanford Online",
        year: "2023",
        icon: "❤️",
        iconBg: "rgba(255,80,80,0.12)",
        verificationUrl: "", // TODO: add verification URL from CONTENT.md
      },
      {
        name: "Azure AI Fundamentals (AI-900)",
        issuer: "Microsoft Learn",
        year: "2024",
        icon: "🟢",
        iconBg: "rgba(40,200,64,0.12)",
        verificationUrl: "", // TODO: add verification URL from CONTENT.md
      },
      {
        name: "Advanced SQL + Pandas Micro-courses",
        issuer: "Kaggle",
        year: "2023",
        icon: "🟣",
        iconBg: "rgba(138,43,226,0.12)",
        verificationUrl: "", // TODO: add verification URL from CONTENT.md
      },
    ] as CertificateItem[],
  },
  contact: {
    sectionLabel: "Get in Touch",
    title: "Let's Connect",
    subtitle:
      "Open to internships, research collaborations, and data science discussions. Feel free to reach out.",
    info: {
      email: "", // TODO: add email from CONTENT.md
      github: {
        label: "github.com/nadim-altaf",
        url: "https://github.com/nadim-altaf",
      },
      linkedin: {
        label: "", // TODO: add LinkedIn profile from CONTENT.md
        url: "", // TODO: add LinkedIn URL from CONTENT.md
      },
      kaggle: {
        label: "", // TODO: add Kaggle profile from CONTENT.md
        url: "", // TODO: add Kaggle URL from CONTENT.md
      },
    } as ContactInfo,
    formSuccessMessage: "Message sent! I'll get back to you soon.",
  },
  footer: {
    socials: [
      { name: "GitHub", url: "https://github.com/nadim-altaf" },
      { name: "LinkedIn", url: "" }, // TODO: add LinkedIn URL from CONTENT.md
      { name: "Kaggle", url: "" }, // TODO: add Kaggle URL from CONTENT.md
    ],
    copy: "Crafted by Nadim Altaf · © 2026 · All rights reserved",
  },
};
