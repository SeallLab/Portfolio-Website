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
} from "../types/Contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const ContentfulContext = createContext({});

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
  const [loading, setLoading] = useState(false);

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
          content_type: "galleryImages",
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
          content_type: "researchProjects",
        });
        setResearchProjects(
          projectsResponse.items.map((item) => item.fields as ResearchProject),
        );

        // Fetch publications
        const publicationsResponse = await client.getEntries({
          content_type: "publications",
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
        setLabDirector,
        teamMembers,
        setTeamMembers,
        galleryImages,
        setGalleryImages,
        researchFocus,
        setResearchFocus,
        researchProjects,
        setResearchProjects,
        publications,
        setPublications,
        software,
        setSoftware,
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
