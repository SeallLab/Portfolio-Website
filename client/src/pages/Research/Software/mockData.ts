import type { Software } from "../../../types/Contentful";

export const mockSoftware: Software[] = [
  {
    name: "FairTest",
    description:
      "An automated testing framework for detecting fairness violations in machine learning models. FairTest helps developers identify and fix bias issues early in the development cycle.",
    url: "https://github.com/se-all/fairtest",
    tags: ["Python", "Testing", "Machine Learning", "Fairness"],
    order: 1,
  },
  {
    name: "AccessLint",
    description:
      "A static analysis tool that automatically detects accessibility issues in web applications. Integrates seamlessly with popular CI/CD pipelines to ensure accessibility from day one.",
    githubUrl: "https://github.com/se-all/accesslint",
    tags: ["TypeScript", "Accessibility", "Static Analysis", "Web"],
    order: 2,
  },
  {
    name: "LLM Healthcare Toolkit",
    description:
      "A comprehensive toolkit for safely deploying Large Language Models in healthcare settings. Includes validation frameworks, privacy-preserving techniques, and domain-specific evaluation metrics.",
    url: "https://github.com/se-all/llm-healthcare",
    githubUrl: "https://github.com/se-all/llm-healthcare",
    tags: ["Python", "LLM", "Healthcare", "AI"],
    order: 3,
  },
  {
    name: "TestGen",
    description:
      "An intelligent test case generation tool that uses AI to automatically create comprehensive test suites. Reduces testing effort while improving code coverage.",
    url: "https://github.com/se-all/testgen",
    githubUrl: "https://github.com/se-all/testgen",
    tags: ["Java", "Testing", "Automation", "AI"],
    order: 4,
  },
  {
    name: "BiasDetect",
    description:
      "A visualization dashboard for exploring and understanding bias in datasets and ML models. Provides interactive charts and metrics to help teams make informed decisions about fairness.",
    url: "https://github.com/se-all/biasdetect",
    githubUrl: "https://github.com/se-all/biasdetect",
    tags: ["React", "Python", "Visualization", "Fairness"],
    order: 5,
  },
  {
    name: "SE-EDU",
    description:
      "An open-source platform for teaching software engineering concepts with interactive examples and automated grading. Used by universities worldwide.",
    url: "https://github.com/se-all/se-edu",
    githubUrl: "https://github.com/se-all/se-edu",
    tags: ["JavaScript", "Education", "Web", "Learning"],
    order: 6,
  },
];
