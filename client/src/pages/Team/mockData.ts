import type { TeamMember } from '../../types/Contentful'

// Mock data following the TeamMember schema
// This will be replaced with Contentful data via useContentful() hook
export const mockTeamMembers: TeamMember[] = [
  {
    firstName: 'Ronnie',
    lastName: 'De Souza Santos',
    description: 'Principal Investigator and lead researcher specializing in environmental sustainability and energy systems. Leading groundbreaking research in renewable energy applications.',
    headshot: {
      fields: {
        title: 'Ronnie De Souza Santos Headshot',
        description: 'Professional headshot',
        file: {
          url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
          fileName: 'ronnie-headshot.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 50000,
            image: {
              width: 400,
              height: 400
            }
          }
        }
      },
      sys: {
        id: '1',
        type: 'Asset',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
        locale: 'en-US'
      }
    },
    email: 'ronnie.santos@example.com',
    linkedinUrl: 'https://linkedin.com/in/ronniesantos',
    countryCode: 'BR',
    current: true
  },
  {
    firstName: 'Maria',
    lastName: 'Silva',
    description: 'Senior Research Scientist focused on climate modeling and data analysis. Expertise in computational methods for environmental impact assessment.',
    headshot: {
      fields: {
        title: 'Maria Silva Headshot',
        description: 'Professional headshot',
        file: {
          url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
          fileName: 'maria-headshot.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 50000,
            image: {
              width: 400,
              height: 400
            }
          }
        }
      },
      sys: {
        id: '2',
        type: 'Asset',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
        locale: 'en-US'
      }
    },
    email: 'maria.silva@example.com',
    linkedinUrl: 'https://linkedin.com/in/mariasilva',
    countryCode: 'PT',
    current: true
  },
  {
    firstName: 'James',
    lastName: 'Chen',
    description: 'Postdoctoral Researcher specializing in sustainable energy infrastructure and smart grid technologies.',
    headshot: {
      fields: {
        title: 'James Chen Headshot',
        description: 'Professional headshot',
        file: {
          url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
          fileName: 'james-headshot.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 50000,
            image: {
              width: 400,
              height: 400
            }
          }
        }
      },
      sys: {
        id: '3',
        type: 'Asset',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
        locale: 'en-US'
      }
    },
    email: 'james.chen@example.com',
    linkedinUrl: 'https://linkedin.com/in/jameschen',
    countryCode: 'US',
    current: true
  },
  {
    firstName: 'Lucas',
    lastName: 'Andersson',
    description: 'Research Assistant working on experimental designs for solar energy optimization and efficiency improvements.',
    headshot: {
      fields: {
        title: 'Lucas Andersson Headshot',
        description: 'Professional headshot',
        file: {
          url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
          fileName: 'lucas-headshot.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 50000,
            image: {
              width: 400,
              height: 400
            }
          }
        }
      },
      sys: {
        id: '5',
        type: 'Asset',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
        locale: 'en-US'
      }
    },
    email: 'lucas.andersson@example.com',
    countryCode: 'SE',
    current: true
  },
  {
    firstName: 'Sarah',
    lastName: 'Johnson',
    description: 'Former Senior Scientist who contributed significantly to early research on wind energy integration. Now working in industry.',
    headshot: {
      fields: {
        title: 'Sarah Johnson Headshot',
        description: 'Professional headshot',
        file: {
          url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
          fileName: 'sarah-headshot.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 50000,
            image: {
              width: 400,
              height: 400
            }
          }
        }
      },
      sys: {
        id: '6',
        type: 'Asset',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
        locale: 'en-US'
      }
    },
    linkedinUrl: 'https://linkedin.com/in/sarahjohnson',
    countryCode: 'CA',
    current: false
  },
  {
    firstName: 'David',
    lastName: 'Kim',
    description: 'Alumni researcher who pioneered methodologies in energy efficiency analysis. Currently a professor at MIT.',
    headshot: {
      fields: {
        title: 'David Kim Headshot',
        description: 'Professional headshot',
        file: {
          url: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
          fileName: 'david-headshot.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 50000,
            image: {
              width: 400,
              height: 400
            }
          }
        }
      },
      sys: {
        id: '7',
        type: 'Asset',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
        locale: 'en-US'
      }
    },
    email: 'david.kim@mit.edu',
    linkedinUrl: 'https://linkedin.com/in/davidkim',
    countryCode: 'KR',
    current: false
  },
  {
    firstName: 'Elena',
    lastName: 'Rodriguez',
    description: 'Former PhD student who completed groundbreaking research on bioenergy systems. Now leading sustainability initiatives in Spain.',
    headshot: {
      fields: {
        title: 'Elena Rodriguez Headshot',
        description: 'Professional headshot',
        file: {
          url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
          fileName: 'elena-headshot.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 50000,
            image: {
              width: 400,
              height: 400
            }
          }
        }
      },
      sys: {
        id: '8',
        type: 'Asset',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
        locale: 'en-US'
      }
    },
    email: 'elena.rodriguez@example.com',
    linkedinUrl: 'https://linkedin.com/in/elenarodriguez',
    countryCode: 'ES',
    current: false
  }
]

