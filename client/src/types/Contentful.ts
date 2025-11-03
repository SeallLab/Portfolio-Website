export type Image = {
  fields: {
    description: string;
    file: {
      contentType: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      url: string;
    };
    title: string;
  };
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
  };
};

export type LabDirector = {
  firstName: string;
  lastName: string;
  position: string;
  description: string;
  headshot: Image;
  countryCode?: string;
  email?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  googleScholarUrl?: string;
  phone?: string;
  cvUrl?: string;
};

export type TeamMember = {
  firstName: string;
  lastName: string;
  position?: string;
  description: string;
  headshot: Image;
  countryCode?: string;
  email?: string;
  linkedinUrl?: string;
  type?: "current" | "alumni" | "collaborator";
};

export type GalleryImage = {
  title?: string;
  description?: string;
  image: Image;
};

export type Sponsor = {
  name: string;
  image: Image;
};

export type ResearchFocus = {
  title: string;
  description: string;
  focusAreas: string[];
  order?: number;
};

export type ResearchProject = {
  title: string;
  description: string;
  image?: Image;
  tags?: string[];
  order?: number;
};

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract?: string;
  pdfUrl?: string;
  doi?: string;
  bibtex?: string;
  tags?: string[];
  type: "conference" | "journal" | "workshop" | "preprint";
  order?: number;
};

export type Software = {
  name: string;
  description: string;
  icon?: Image;
  url?: string;
  githubUrl?: string;
  tags?: string[];
  order?: number;
};

export type LabInfo = {
  heroHeadline: string;
  heroTagline: string;
  missionTitle: string;
  missionDescription: string;
  approachTitle: string;
  approachDescription: string;
  impactTitle: string;
  impactDescription: string;
};

export type DirectorBio = {
  name: string;
  title: string;
  headshot: Image;
  bio: string;
  email?: string;
  linkedinUrl?: string;
  googleScholarUrl?: string;
  twitterUrl?: string;
};

export type ResearchHighlight = {
  title: string;
  description: string;
  image?: Image;
  link: string;
  featured?: boolean;
  order?: number;
};

export type LabStatistics = {
  publicationsCount: number;
  projectsCount: number;
  teamMembersCount: number;
  yearsOfResearch: number;
};

export type CTASection = {
  headline: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
};
