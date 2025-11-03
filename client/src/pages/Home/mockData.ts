import type {
  LabInfo,
  DirectorBio,
  ResearchHighlight,
  LabStatistics,
  CTASection,
  Image,
} from "../../types/Contentful";

export const mockSponsors = [
  {
    name: "Schulich School of Engineering",
    image: "SSE_Logo.png",
  },
  {
    name: "NSERC",
    image: "NSERC.png",
  },
  {
    name: "Alberta Innovates",
    image: "AI.png",
  },
];

export const mockLabInfo: LabInfo = {
  heroHeadline: "Software Engineering for ALL",
  heroTagline:
    "Advancing inclusive, fair, and accessible software engineering practices through cutting-edge research and innovation. Building technology that truly serves everyone.",
  missionTitle: "Our Mission",
  missionDescription:
    "We are dedicated to making software engineering practices more inclusive and accessible. Our research focuses on ensuring that technology development considers diverse perspectives and serves all communities equitably.",
  approachTitle: "Our Approach",
  approachDescription:
    "We combine rigorous empirical research with practical tool development. Our work spans software testing, AI fairness, human-centered design, and healthcare technology, always with a focus on real-world impact.",
  impactTitle: "Our Impact",
  impactDescription:
    "Our research directly influences how software is built and tested. We partner with industry and academia to translate our findings into practical tools and methodologies that improve software quality and accessibility worldwide.",
};

// Mock image for director (reusing existing public image)
const mockDirectorImage: Image = {
  fields: {
    description: "Lab Director Headshot",
    file: {
      contentType: "image/png",
      details: {
        size: 0,
        image: {
          width: 400,
          height: 400,
        },
      },
      fileName: "SE-ALL.png",
      url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    title: "Director Photo",
  },
  sys: {
    id: "mock-director-image",
    type: "Asset",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    locale: "en-US",
  },
};

export const mockDirectorBio: DirectorBio = {
  name: "Dr. Lab Director",
  title: "Director & Associate Professor",
  headshot: mockDirectorImage,
  bio: `Dr. Lab Director is an Associate Professor in the Department of Software Engineering at the University of Calgary's Schulich School of Engineering. With over 10 years of research experience, they lead the Software Engineering for ALL (SE-ALL) Lab in its mission to make software engineering more inclusive and accessible.

Their research interests span software testing, AI fairness, human aspects of software development, and healthcare technology. They are particularly passionate about understanding how developers can build more equitable AI systems and ensuring that software engineering practices consider diverse user needs.

Dr. Director has published over 50 peer-reviewed papers in top-tier software engineering and AI venues, including ICSE, FSE, ASE, and CHI. Their work has been recognized with multiple best paper awards and has been adopted by major technology companies.

Beyond research, Dr. Director is committed to mentoring the next generation of software engineering researchers and practitioners. They actively promote diversity in computing and work to create inclusive research environments where all voices are heard and valued.`,
  email: "director@ucalgary.ca",
  linkedinUrl: "https://linkedin.com/in/director",
  googleScholarUrl: "https://scholar.google.com/citations?user=example",
  twitterUrl: "https://twitter.com/director",
};

export const mockResearchHighlights: ResearchHighlight[] = [
  {
    title: "AI Fairness Testing",
    description:
      "Developing automated tools and methodologies to detect and mitigate bias in machine learning systems. Our research helps developers build more equitable AI applications.",
    link: "/research/projects",
    featured: true,
    order: 1,
  },
  {
    title: "Human-Centered Software Engineering",
    description:
      "Understanding how developers work with modern tools and technologies. We study practices, challenges, and workflows to improve development processes.",
    link: "/research/projects",
    featured: true,
    order: 2,
  },
  {
    title: "Healthcare Technology",
    description:
      "Applying software engineering principles to healthcare, including safe deployment of AI in clinical settings and medical software quality assurance.",
    link: "/research/projects",
    featured: true,
    order: 3,
  },
];

export const mockLabStatistics: LabStatistics = {
  publicationsCount: 50,
  projectsCount: 12,
  teamMembersCount: 15,
  yearsOfResearch: 8,
};

export const mockCTASection: CTASection = {
  headline: "Join Us in Making Software Engineering Accessible to All",
  subtitle:
    "Whether you're a prospective student, industry partner, or fellow researcher, we'd love to hear from you. Let's work together to build more inclusive technology.",
  primaryButtonText: "Explore Research Opportunities",
  primaryButtonLink: "/team",
  secondaryButtonText: "Contact Us",
  secondaryButtonLink: "mailto:director@ucalgary.ca",
};
