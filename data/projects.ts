export interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  problem: string;
  whatIDid: string;
  tech: string[];
  emoji: string;
  bgGradient: string;
  repoUrl: string;
  demoUrl: string;
}

export const projectsData: Project[] = [
  {
    id: "mindful-ai",
    title: "MINDFUL AI",
    category: "Machine Learning / Applied AI",
    status: "In development",
    problem:
      "Helping analyse student wellbeing from structured assessments and lifestyle-related information.",
    whatIDid:
      "Building an AI-powered decision-support platform with a FastAPI backend, a machine learning analysis layer, a SQLite database, and an Android app, designed around privacy and user consent.",
    tech: ["Python", "FastAPI", "Machine Learning", "SQLite", "REST APIs", "Android"],
    emoji: "🧠",
    bgGradient: "linear-gradient(135deg, #0a1628, #1a3a5c)",
    repoUrl: "https://github.com/nadim-altaf/mindful-ai",
    demoUrl: "", // Live demo: none currently
  },
];
