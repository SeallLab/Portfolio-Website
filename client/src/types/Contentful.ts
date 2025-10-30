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

export type TeamMember = {
  firstName: string
  lastName: string
  description: string
  headshot: Image
  countryCode?: string
  email?: string
  linkedinUrl?: string
  current?: boolean
}

export type GalleryImage = {
    title?: string
    description?: string
    image: Image
}