export type Image = {
    fields: {
        description: string
        file: {
            contentType: string
            details: {
                size: number
                image: {
                    width: number
                    height: number
                }
            }
            fileName: string
            url: string
        }
        title: string
    }
    sys: {
        id: string
        type: string
        createdAt: string
        updatedAt: string
        locale: string
    }
}

export type LabDirector = {
  firstName: string
  lastName: string
  position: string
  description: string
  headshot: Image
  countryCode?: string
  email?: string
  linkedinUrl?: string
  twitterUrl?: string
  googleScholarUrl?: string
  phone?: string
  cvUrl?: string
}

export type TeamMember = {
  firstName: string
  lastName: string
  position?: string
  description: string
  headshot: Image
  countryCode?: string
  email?: string
  linkedinUrl?: string
  type?: 'current' | 'alumni' | 'collaborator'
}

export type GalleryImage = {
    title?: string
    description?: string
    image: Image
}

export type Sponsor = {
    name: string
    image: Image
}