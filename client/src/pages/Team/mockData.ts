import type { LabDirector, TeamMember } from "../../types/Contentful";

// Mock Lab Director data
// This will be replaced with Contentful data via useContentful() hook
export const mockLabDirector: LabDirector = {
  firstName: "Ronnie",
  lastName: "De Souza Santos",
  position: "Principal Investigator, Associate Professor",
  description:
    "Leading researcher specializing in software engineering for all, with a focus on accessibility, inclusivity, and equitable technology solutions. Over 15 years of experience advancing research in human-computer interaction and inclusive design.",
  headshot: {
    fields: {
      title: "Ronnie De Souza Santos Headshot",
      description: "Professional headshot",
      file: {
        url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        fileName: "ronnie-headshot.jpg",
        contentType: "image/jpeg",
        details: {
          size: 50000,
          image: {
            width: 400,
            height: 400,
          },
        },
      },
    },
    sys: {
      id: "director-1",
      type: "Asset",
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
      locale: "en-US",
    },
  },
  email: "ronnie.desouzasantos@ucalgary.ca",
  linkedinUrl: "https://www.linkedin.com/in/drdesouzasantos/",
  twitterUrl: "https://x.com/softwaronnie",
  googleScholarUrl:
    "https://scholar.google.com/citations?user=wYfnBrYAAAAJ&hl=en",
  phone: "+14032208076",
  countryCode: "BR",
  cvUrl: "https://example.com/cv/ronnie-de-souza-santos.pdf",
};

// Mock data following the TeamMember schema
// This will be replaced with Contentful data via useContentful() hook
export const mockTeamMembers: TeamMember[] = [
  {
    firstName: "Maria",
    lastName: "Silva",
    position: "Postdoctoral Researcher",
    description:
      "Research scientist focused on accessibility testing and inclusive design methodologies. Expertise in user experience research.",
    headshot: {
      fields: {
        title: "Maria Silva Headshot",
        description: "Professional headshot",
        file: {
          url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
          fileName: "maria-headshot.jpg",
          contentType: "image/jpeg",
          details: {
            size: 50000,
            image: {
              width: 400,
              height: 400,
            },
          },
        },
      },
      sys: {
        id: "2",
        type: "Asset",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        locale: "en-US",
      },
    },
    email: "maria.silva@example.com",
    linkedinUrl: "https://linkedin.com/in/mariasilva",
    countryCode: "PT",
    type: "current",
  },
  {
    firstName: "James",
    lastName: "Chen",
    position: "PhD Candidate",
    description:
      "Doctoral researcher investigating assistive technologies and accessible software development practices.",
    headshot: {
      fields: {
        title: "James Chen Headshot",
        description: "Professional headshot",
        file: {
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
          fileName: "james-headshot.jpg",
          contentType: "image/jpeg",
          details: {
            size: 50000,
            image: {
              width: 400,
              height: 400,
            },
          },
        },
      },
      sys: {
        id: "3",
        type: "Asset",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        locale: "en-US",
      },
    },
    email: "james.chen@example.com",
    linkedinUrl: "https://linkedin.com/in/jameschen",
    countryCode: "US",
    type: "current",
  },
  {
    firstName: "Lucas",
    lastName: "Andersson",
    position: "Research Assistant",
    description:
      "Research assistant supporting projects on web accessibility standards and WCAG compliance testing.",
    headshot: {
      fields: {
        title: "Lucas Andersson Headshot",
        description: "Professional headshot",
        file: {
          url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
          fileName: "lucas-headshot.jpg",
          contentType: "image/jpeg",
          details: {
            size: 50000,
            image: {
              width: 400,
              height: 400,
            },
          },
        },
      },
      sys: {
        id: "5",
        type: "Asset",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        locale: "en-US",
      },
    },
    email: "lucas.andersson@example.com",
    countryCode: "SE",
    type: "current",
  },
  {
    firstName: "Sarah",
    lastName: "Johnson",
    position: "Former PhD Student",
    description:
      "Alumni who contributed significantly to early research on accessibility standards. Now working as Senior UX Researcher at Microsoft.",
    headshot: {
      fields: {
        title: "Sarah Johnson Headshot",
        description: "Professional headshot",
        file: {
          url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
          fileName: "sarah-headshot.jpg",
          contentType: "image/jpeg",
          details: {
            size: 50000,
            image: {
              width: 400,
              height: 400,
            },
          },
        },
      },
      sys: {
        id: "6",
        type: "Asset",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        locale: "en-US",
      },
    },
    linkedinUrl: "https://linkedin.com/in/sarahjohnson",
    countryCode: "CA",
    type: "alumni",
  },
  {
    firstName: "David",
    lastName: "Kim",
    position: "Former Postdoc",
    description:
      "Alumni researcher who pioneered methodologies in inclusive design patterns. Currently an Assistant Professor at MIT.",
    headshot: {
      fields: {
        title: "David Kim Headshot",
        description: "Professional headshot",
        file: {
          url: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
          fileName: "david-headshot.jpg",
          contentType: "image/jpeg",
          details: {
            size: 50000,
            image: {
              width: 400,
              height: 400,
            },
          },
        },
      },
      sys: {
        id: "7",
        type: "Asset",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        locale: "en-US",
      },
    },
    email: "david.kim@mit.edu",
    linkedinUrl: "https://linkedin.com/in/davidkim",
    countryCode: "KR",
    type: "alumni",
  },
  {
    firstName: "Elena",
    lastName: "Rodriguez",
    position: "Former Graduate Student",
    description:
      "Alumni who completed research on multilingual accessibility. Now leading accessibility initiatives at Google Spain.",
    headshot: {
      fields: {
        title: "Elena Rodriguez Headshot",
        description: "Professional headshot",
        file: {
          url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
          fileName: "elena-headshot.jpg",
          contentType: "image/jpeg",
          details: {
            size: 50000,
            image: {
              width: 400,
              height: 400,
            },
          },
        },
      },
      sys: {
        id: "8",
        type: "Asset",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        locale: "en-US",
      },
    },
    email: "elena.rodriguez@example.com",
    linkedinUrl: "https://linkedin.com/in/elenarodriguez",
    countryCode: "ES",
    type: "alumni",
  },
  {
    firstName: "Thomas",
    lastName: "Anderson",
    position: "Professor, Stanford University",
    description:
      "Frequent collaborator on accessibility research projects. Expert in human-computer interaction and assistive technologies.",
    headshot: {
      fields: {
        title: "Thomas Anderson Headshot",
        description: "Professional headshot",
        file: {
          url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
          fileName: "thomas-headshot.jpg",
          contentType: "image/jpeg",
          details: {
            size: 50000,
            image: {
              width: 400,
              height: 400,
            },
          },
        },
      },
      sys: {
        id: "9",
        type: "Asset",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        locale: "en-US",
      },
    },
    email: "thomas.anderson@stanford.edu",
    linkedinUrl: "https://linkedin.com/in/thomasanderson",
    countryCode: "US",
    type: "collaborator",
  },
  {
    firstName: "Yuki",
    lastName: "Tanaka",
    position: "Senior Researcher, University of Tokyo",
    description:
      "Collaborating on cross-cultural accessibility studies and international inclusive design standards.",
    headshot: {
      fields: {
        title: "Yuki Tanaka Headshot",
        description: "Professional headshot",
        file: {
          url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
          fileName: "yuki-headshot.jpg",
          contentType: "image/jpeg",
          details: {
            size: 50000,
            image: {
              width: 400,
              height: 400,
            },
          },
        },
      },
      sys: {
        id: "10",
        type: "Asset",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        locale: "en-US",
      },
    },
    linkedinUrl: "https://linkedin.com/in/yukitanaka",
    countryCode: "JP",
    type: "collaborator",
  },
];
