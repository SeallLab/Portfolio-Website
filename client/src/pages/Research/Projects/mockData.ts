import type { ResearchProject } from "../../../types/Contentful";

export const mockProjects: ResearchProject[] = [
  {
    title: "Fairness Testing",
    description:
      "We develop novel techniques and tools to systematically test AI systems for fairness issues. Our research focuses on detecting and mitigating bias in machine learning models, ensuring equitable outcomes across different demographic groups.",
    tags: ["AI", "Testing", "Fairness", "Machine Learning"],
    order: 1,
  },
  {
    title: "Human Aspects of AI Development",
    description:
      "Understanding how developers interact with AI tools and technologies is crucial for building better systems. We study the challenges, practices, and workflows of AI practitioners to improve development processes and tools.",
    tags: ["AI", "Human-Computer Interaction", "Software Engineering"],
    order: 2,
  },
  {
    title: "LLMs Applied in Healthcare",
    description:
      "Large Language Models present unique opportunities and challenges in healthcare settings. Our research explores how to safely and effectively deploy LLMs for clinical decision support, patient communication, and medical documentation.",
    tags: ["LLM", "Healthcare", "AI", "Clinical Informatics"],
    order: 3,
  },
  {
    title: "Automated Software Testing",
    description:
      "We develop innovative approaches to automate software testing, making it more efficient and effective. Our work includes test generation, test oracle creation, and mutation testing techniques.",
    tags: ["Testing", "Automation", "Quality Assurance"],
    order: 4,
  },
  {
    title: "Software Engineering Education",
    description:
      "Improving how we teach software engineering is essential for preparing the next generation of developers. We research effective pedagogical approaches and tools for software engineering education.",
    tags: ["Education", "Pedagogy", "Software Engineering"],
    order: 5,
  },
  {
    title: "Accessible Technology",
    description:
      "Making technology accessible to everyone is a core mission of our lab. We research and develop methods to ensure software systems are usable by people with diverse abilities and backgrounds.",
    tags: ["Accessibility", "Inclusive Design", "HCI"],
    order: 6,
  },
];
