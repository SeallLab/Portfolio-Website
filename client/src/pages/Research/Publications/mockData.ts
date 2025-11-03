import type { Publication } from "../../../types/Contentful";

export const mockPublications: Publication[] = [
  {
    title:
      "Fairness Testing in Machine Learning: A Comprehensive Survey and Taxonomy",
    authors: ["Jane Smith", "John Doe", "Lab Director"],
    venue: "ACM Transactions on Software Engineering and Methodology",
    year: 2024,
    abstract:
      "This paper presents a comprehensive survey of fairness testing approaches in machine learning systems, providing a taxonomy of existing techniques and identifying open challenges.",
    pdfUrl: "https://example.com/paper1.pdf",
    doi: "10.1145/1234567",
    type: "journal",
    tags: ["Fairness", "Testing", "Machine Learning"],
    order: 1,
  },
  {
    title:
      "Understanding How Developers Use Large Language Models in Software Engineering",
    authors: ["Alice Johnson", "Bob Williams", "Lab Director"],
    venue: "International Conference on Software Engineering (ICSE)",
    year: 2024,
    abstract:
      "We conducted an empirical study with 50 professional developers to understand their practices, challenges, and concerns when using LLMs in their daily work.",
    pdfUrl: "https://example.com/paper2.pdf",
    doi: "10.1109/ICSE48612.2024",
    type: "conference",
    tags: ["LLM", "Empirical Study", "Software Engineering"],
    order: 2,
  },
  {
    title:
      "Automated Test Oracle Generation for Fairness Testing of AI Systems",
    authors: ["Lab Director", "Charlie Brown", "Diana Prince"],
    venue:
      "ACM SIGSOFT International Symposium on Foundations of Software Engineering (FSE)",
    year: 2023,
    abstract:
      "We propose a novel approach for automatically generating test oracles to detect fairness violations in AI systems, reducing manual effort by 70%.",
    pdfUrl: "https://example.com/paper3.pdf",
    doi: "10.1145/3611643",
    type: "conference",
    tags: ["Testing", "Fairness", "Automation"],
    order: 3,
  },
  {
    title: "Large Language Models in Healthcare: Opportunities and Challenges",
    authors: ["Emily Davis", "Lab Director", "Frank Miller"],
    venue: "Journal of Medical Informatics",
    year: 2023,
    abstract:
      "This position paper discusses the potential applications of LLMs in healthcare settings, along with critical challenges around safety, privacy, and validation.",
    pdfUrl: "https://example.com/paper4.pdf",
    doi: "10.1016/j.jmi.2023.104567",
    type: "journal",
    tags: ["LLM", "Healthcare", "Clinical Informatics"],
    order: 4,
  },
  {
    title:
      "Bias Detection and Mitigation in Software Engineering Tools: A Case Study",
    authors: ["George Taylor", "Hannah Lee", "Lab Director"],
    venue: "International Conference on Software Testing (ICST)",
    year: 2023,
    abstract:
      "We present a case study of bias detection and mitigation in three popular software engineering tools, revealing significant fairness issues.",
    pdfUrl: "https://example.com/paper5.pdf",
    type: "conference",
    tags: ["Bias", "Tools", "Case Study"],
    order: 5,
  },
  {
    title: "Teaching Software Testing in the Age of AI",
    authors: ["Lab Director", "Ian Martinez"],
    venue: "Workshop on Software Engineering Education (WSEE)",
    year: 2022,
    abstract:
      "We share our experiences and lessons learned from incorporating AI-assisted testing tools into our software engineering curriculum.",
    pdfUrl: "https://example.com/paper6.pdf",
    type: "workshop",
    tags: ["Education", "Testing", "AI"],
    order: 6,
  },
  {
    title:
      "Accessible Software Development: Practices and Perceptions of Professional Developers",
    authors: ["Julia Anderson", "Lab Director", "Kevin White"],
    venue: "ACM Conference on Human Factors in Computing Systems (CHI)",
    year: 2022,
    abstract:
      "Through interviews with 30 developers, we investigate current practices and barriers to creating accessible software.",
    pdfUrl: "https://example.com/paper7.pdf",
    doi: "10.1145/3491102",
    type: "conference",
    tags: ["Accessibility", "Empirical Study", "HCI"],
    order: 7,
  },
];
