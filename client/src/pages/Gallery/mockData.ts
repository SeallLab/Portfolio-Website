import type { GalleryImage } from '../../types/Contentful'

// Mock data following the GalleryImage schema
// This will be replaced with Contentful data via useContentful() hook
export const mockGalleryImages: GalleryImage[] = [
  {
    title: 'Solar Panel Installation',
    description: 'Installing solar panels at our research facility to study energy efficiency and output optimization.',
    image: {
      fields: {
        title: 'Solar Panel Installation',
        description: 'Solar panels being installed',
        file: {
          url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
          fileName: 'solar-panels.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 150000,
            image: {
              width: 800,
              height: 600
            }
          }
        }
      },
      sys: {
        id: 'gallery-1',
        type: 'Asset',
        createdAt: '2024-01-15',
        updatedAt: '2024-01-15',
        locale: 'en-US'
      }
    }
  },
  {
    title: 'Team Workshop 2024',
    description: 'Annual team workshop where we discuss new research directions and collaborate on innovative solutions.',
    image: {
      fields: {
        title: 'Team Workshop',
        description: 'Research team collaboration',
        file: {
          url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
          fileName: 'team-workshop.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 150000,
            image: {
              width: 800,
              height: 600
            }
          }
        }
      },
      sys: {
        id: 'gallery-2',
        type: 'Asset',
        createdAt: '2024-02-10',
        updatedAt: '2024-02-10',
        locale: 'en-US'
      }
    }
  },
  {
    title: 'Wind Energy Research',
    description: 'Collecting data from wind turbines to analyze performance metrics and environmental impact.',
    image: {
      fields: {
        title: 'Wind Turbines',
        description: 'Wind energy research',
        file: {
          url: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=600&fit=crop',
          fileName: 'wind-turbines.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 150000,
            image: {
              width: 800,
              height: 600
            }
          }
        }
      },
      sys: {
        id: 'gallery-3',
        type: 'Asset',
        createdAt: '2024-03-05',
        updatedAt: '2024-03-05',
        locale: 'en-US'
      }
    }
  },
  {
    title: 'Laboratory Equipment',
    description: 'State-of-the-art laboratory equipment used for materials testing and energy analysis.',
    image: {
      fields: {
        title: 'Lab Equipment',
        description: 'Laboratory testing equipment',
        file: {
          url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop',
          fileName: 'lab-equipment.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 150000,
            image: {
              width: 800,
              height: 600
            }
          }
        }
      },
      sys: {
        id: 'gallery-4',
        type: 'Asset',
        createdAt: '2024-03-20',
        updatedAt: '2024-03-20',
        locale: 'en-US'
      }
    }
  },
  {
    title: 'Conference Presentation',
    description: 'Presenting our latest findings at the International Energy Conference.',
    image: {
      fields: {
        title: 'Conference',
        description: 'Research presentation',
        file: {
          url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
          fileName: 'conference.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 150000,
            image: {
              width: 800,
              height: 600
            }
          }
        }
      },
      sys: {
        id: 'gallery-5',
        type: 'Asset',
        createdAt: '2024-04-12',
        updatedAt: '2024-04-12',
        locale: 'en-US'
      }
    }
  },
  {
    title: 'Field Research',
    description: 'Conducting field research to study renewable energy integration in rural communities.',
    image: {
      fields: {
        title: 'Field Work',
        description: 'Outdoor field research',
        file: {
          url: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop',
          fileName: 'field-research.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 150000,
            image: {
              width: 800,
              height: 600
            }
          }
        }
      },
      sys: {
        id: 'gallery-6',
        type: 'Asset',
        createdAt: '2024-05-08',
        updatedAt: '2024-05-08',
        locale: 'en-US'
      }
    }
  },
  {
    title: 'Data Analysis Session',
    image: {
      fields: {
        title: 'Data Analysis',
        description: 'Team analyzing research data',
        file: {
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
          fileName: 'data-analysis.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 150000,
            image: {
              width: 800,
              height: 600
            }
          }
        }
      },
      sys: {
        id: 'gallery-7',
        type: 'Asset',
        createdAt: '2024-06-15',
        updatedAt: '2024-06-15',
        locale: 'en-US'
      }
    }
  },
  {
    title: 'Sustainable Building Design',
    description: 'Exploring innovative sustainable building designs incorporating renewable energy systems.',
    image: {
      fields: {
        title: 'Building Design',
        description: 'Sustainable architecture',
        file: {
          url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
          fileName: 'building-design.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 150000,
            image: {
              width: 800,
              height: 600
            }
          }
        }
      },
      sys: {
        id: 'gallery-8',
        type: 'Asset',
        createdAt: '2024-07-20',
        updatedAt: '2024-07-20',
        locale: 'en-US'
      }
    }
  },
  {
    image: {
      fields: {
        title: 'Research Collaboration',
        description: 'Team collaboration',
        file: {
          url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
          fileName: 'collaboration.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 150000,
            image: {
              width: 800,
              height: 600
            }
          }
        }
      },
      sys: {
        id: 'gallery-9',
        type: 'Asset',
        createdAt: '2024-08-05',
        updatedAt: '2024-08-05',
        locale: 'en-US'
      }
    }
  },
  {
    title: 'Electric Vehicle Charging Station',
    description: 'Testing and optimizing EV charging infrastructure for maximum efficiency and sustainability.',
    image: {
      fields: {
        title: 'EV Charging',
        description: 'Electric vehicle charging',
        file: {
          url: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop',
          fileName: 'ev-charging.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 150000,
            image: {
              width: 800,
              height: 600
            }
          }
        }
      },
      sys: {
        id: 'gallery-10',
        type: 'Asset',
        createdAt: '2024-09-10',
        updatedAt: '2024-09-10',
        locale: 'en-US'
      }
    }
  },
  {
    title: 'Green Energy Innovation',
    image: {
      fields: {
        title: 'Green Energy',
        description: 'Renewable energy innovation',
        file: {
          url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
          fileName: 'green-energy.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 150000,
            image: {
              width: 800,
              height: 600
            }
          }
        }
      },
      sys: {
        id: 'gallery-11',
        type: 'Asset',
        createdAt: '2024-10-01',
        updatedAt: '2024-10-01',
        locale: 'en-US'
      }
    }
  },
  {
    title: 'Smart Grid Technology',
    description: 'Developing and testing smart grid solutions for efficient energy distribution.',
    image: {
      fields: {
        title: 'Smart Grid',
        description: 'Smart grid technology',
        file: {
          url: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop',
          fileName: 'smart-grid.jpg',
          contentType: 'image/jpeg',
          details: {
            size: 150000,
            image: {
              width: 800,
              height: 600
            }
          }
        }
      },
      sys: {
        id: 'gallery-12',
        type: 'Asset',
        createdAt: '2024-10-15',
        updatedAt: '2024-10-15',
        locale: 'en-US'
      }
    }
  }
]

