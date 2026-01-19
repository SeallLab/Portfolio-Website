import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "contentful";
import type {
  LabDirector,
  TeamMember,
  GalleryImage,
  ResearchFocus,
  ResearchFocusArea,
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

  // ✅ Research Focus Areas
  researchFocusAreas: ResearchFocusArea[];

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
  researchFocusAreas: [],
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
  const [researchFocus, setResearchFocus] = useState<ResearchFocus | null>(null);

  // ✅ Research Focus Areas state
  const [researchFocusAreas, setResearchFocusAreas] = useState<
    ResearchFocusArea[]
  >([]);

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
        // Lab Director
        const directorResponse = await client.getEntries({
          content_type: "labDirector",
          limit: 1,
        });
        if (directorResponse.items.length > 0) {
          setLabDirector(directorResponse.items[0].fields as LabDirector);
        }

        // Team Members
        const teamResponse = await client.getEntries({
          content_type: "teamMembers",
        });
        setTeamMembers(
          teamResponse.items.map((item) => item.fields as TeamMember),
        );

        // Gallery Images
        const galleryResponse = await client.getEntries({
          content_type: "galleryImage",
        });
        setGalleryImages(
          galleryResponse.items.map((item) => item.fields as GalleryImage),
        );

        // Research Focus (single)
        const focusResponse = await client.getEntries({
          content_type: "researchFocus",
          limit: 1,
        });
        if (focusResponse.items.length > 0) {
          setResearchFocus(focusResponse.items[0].fields as ResearchFocus);
        }

        // ✅ Research Focus Areas (ID: researchFocus2)
        const focusAreasResponse = await client.getEntries({
          content_type: "researchFocus2",
        });
        setResearchFocusAreas(
          focusAreasResponse.items.map(
            (item) => item.fields as ResearchFocusArea,
          ),
        );

        // Research Projects
        const projectsResponse = await client.getEntries({
          content_type: "ResearchProject",
        });
        setResearchProjects(
          projectsResponse.items.map((item) => item.fields as ResearchProject),
        );

        // Publications
        const publicationsResponse = await client.getEntries({
          content_type: "publication",
        });
        setPublications(
          publicationsResponse.items.map((item) => item.fields as Publication),
        );

        // Software
        const softwareResponse = await client.getEntries({
          content_type: "software",
        });
        setSoftware(
          softwareResponse.items.map((item) => item.fields as Software),
        );

        // Lab Info
        const labInfoResponse = await client.getEntries({
          content_type: "labInfo",
          limit: 1,
        });
        if (labInfoResponse.items.length > 0) {
          setLabInfo(labInfoResponse.items[0].fields as LabInfo);
        }

        // Lab Statistics
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
        researchFocusAreas,
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
