import { createContext, useContext, useEffect, useState } from "react"
import { createClient } from "contentful"
import type { LabDirector, TeamMember, GalleryImage } from "../types/Contentful"

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
})

export const ContentfulContext = createContext({})

export const ContentfulProvider = ({ children }: { children: React.ReactNode }) => {
    const [labDirector, setLabDirector] = useState<LabDirector | null>(null)
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
    const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        
        const fetchData = async () => {
            try {
                // Fetch lab director (single entry)
                const directorResponse = await client.getEntries({
                    content_type: "labDirector",
                    limit: 1,
                })
                if (directorResponse.items.length > 0) {
                    setLabDirector(directorResponse.items[0].fields as LabDirector)
                }

                // Fetch team members
                const teamResponse = await client.getEntries({
                    content_type: "teamMembers",
                })
                setTeamMembers(teamResponse.items.map((item) => item.fields as TeamMember))

                // Fetch gallery images
                const galleryResponse = await client.getEntries({
                    content_type: "galleryImages",
                })
                setGalleryImages(galleryResponse.items.map((item) => item.fields as GalleryImage))
            } catch (error) {
                console.error("Error fetching Contentful data:", error)
            } finally {
                setLoading(false)
            }
        }
        
        fetchData()
    }, [])

    return (
        <ContentfulContext.Provider value={{ labDirector, setLabDirector, teamMembers, setTeamMembers, galleryImages, setGalleryImages, loading }}>
            {children}
        </ContentfulContext.Provider>
    )
}

export const useContentful = () => {
    const context = useContext(ContentfulContext)
    if (!context) {
        throw new Error("useContentful must be used within a ContentfulProvider")
    }
    return context
}