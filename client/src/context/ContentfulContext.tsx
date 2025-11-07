import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "contentful";
import type {
  LabDirector,
  TeamMember,
  GalleryImage,
  ResearchFocus,
  ResearchProject,
  Publication,
  Software,
  LabInfo,
  LabStatistics,
  Sponsor,
} from "../types/Contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export type ContentfulContextType = {
  labDirector: LabDirector | null;
  teamMembers: TeamMember[];
  galleryImages: GalleryImage[];
  researchFocus: ResearchFocus | null;
  researchProjects: ResearchProject[];
  publications: Publication[];
  software: Software[];
  labInfo: LabInfo | null;
  labStatistics: LabStatistics | null;
  sponsors: Sponsor[];
  loading: boolean;
};

export const ContentfulContext = createContext<ContentfulContextType>({
  labDirector: null,
  teamMembers: [],
  galleryImages: [],
  researchFocus: null,
  researchProjects: [],
  publications: [],
  software: [],
  labInfo: null,
  labStatistics: null,
  sponsors: [],
  loading: false,
});

export const ContentfulProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [labDirector, setLabDirector] = useState<LabDirector | null>(null);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [researchFocus, setResearchFocus] = useState<ResearchFocus | null>(
    null,
  );
  const [researchProjects, setResearchProjects] = useState<ResearchProject[]>(
    [],
  );
  const [publications, setPublications] = useState<Publication[]>([]);
  const [software, setSoftware] = useState<Software[]>([]);
  const [labInfo, setLabInfo] = useState<LabInfo | null>(null);
  const [labStatistics, setLabStatistics] = useState<LabStatistics | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        // Fetch lab director (single entry)
        const directorResponse = await client.getEntries({
          content_type: "labDirector",
          limit: 1,
        });
        if (directorResponse.items.length > 0) {
          setLabDirector(directorResponse.items[0].fields as LabDirector);
        }

        // Fetch team members
        const teamResponse = await client.getEntries({
          content_type: "teamMembers",
        });
        setTeamMembers(
          teamResponse.items.map((item) => item.fields as TeamMember),
        );

        // Fetch gallery images
        const galleryResponse = await client.getEntries({
          content_type: "galleryImage",
        });
        setGalleryImages(
          galleryResponse.items.map((item) => item.fields as GalleryImage),
        );

        // Fetch research focus
        const focusResponse = await client.getEntries({
          content_type: "researchFocus",
          limit: 1,
        });
        if (focusResponse.items.length > 0) {
          setResearchFocus(focusResponse.items[0].fields as ResearchFocus);
        }

        // Fetch research projects
        const projectsResponse = await client.getEntries({
          content_type: "ResearchProject",
        });
        setResearchProjects(
          projectsResponse.items.map((item) => item.fields as ResearchProject),
        );

        // Fetch publications
        const publicationsResponse = await client.getEntries({
          content_type: "publication",
        });
        setPublications(
          publicationsResponse.items.map((item) => item.fields as Publication),
        );

        // Fetch software
        const softwareResponse = await client.getEntries({
          content_type: "software",
        });
        setSoftware(
          softwareResponse.items.map((item) => item.fields as Software),
        );

        // Fetch lab info
        const labInfoResponse = await client.getEntries({
          content_type: "labInfo",
          limit: 1,
        });
        if (labInfoResponse.items.length > 0) {
          setLabInfo(labInfoResponse.items[0].fields as LabInfo);
        }

        // Fetch lab statistics
        const statisticsResponse = await client.getEntries({
          content_type: "labStatistics",
          limit: 1,
        });
        if (statisticsResponse.items.length > 0) {
          setLabStatistics(statisticsResponse.items[0].fields as LabStatistics);
        }

        // Sponsors
        const sponsorsResponse = await client.getEntries({
          content_type: "sponsorType",
        });
        setSponsors(
          sponsorsResponse.items.map((item) => item.fields as Sponsor),
        );

      } catch (error) {
        console.error("Error fetching Contentful data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ContentfulContext.Provider
      value={{
        labDirector,
        teamMembers,
        galleryImages,
        researchFocus,
        researchProjects,
        publications,
        software,
        labInfo,
        labStatistics,
        sponsors,
        loading,
      }}
    >
      {children}
    </ContentfulContext.Provider>
  );
};

export const useContentful = () => {
  const context = useContext(ContentfulContext);
  if (!context) {
    throw new Error("useContentful must be used within a ContentfulProvider");
  }
  return context;
};
