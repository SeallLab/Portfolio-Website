import { useState, useEffect } from 'react'
import { useContentful } from '../../context/ContentfulContext'
import GalleryCard from "./GalleryCard";
import type { GalleryImage } from '../../types/Contentful';

export default function Gallery() {
  const { galleryImages } = useContentful()
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  const handleImageClick = (galleryImage: GalleryImage) => {
    setSelectedImage(galleryImage)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 pt-20 sm:pt-28 lg:px-8 pb-10 sm:pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Photo Gallery
          </h1>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryImages.map((galleryImage, index) => (
            <GalleryCard
              key={galleryImage.image.sys.id || `gallery-${index}`}
              galleryImage={galleryImage}
              onClick={() => handleImageClick(galleryImage)}
            />
          ))}
        </div>

        {/* Empty State */}
        {galleryImages.length === 0 && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-gray-500">No images to display at this time.</p>
          </div>
        )}
      </div>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 md:p-8"
          onClick={handleCloseModal}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="cursor-pointer absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image Container */}
          <div 
            className="relative max-h-full max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={
                selectedImage.image.fields.file.url.startsWith("//")
                  ? `https:${selectedImage.image.fields.file.url}`
                  : selectedImage.image.fields.file.url
              }
              alt={selectedImage.title || 'Gallery image'}
              className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Caption */}
            {(selectedImage.title || selectedImage.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 rounded-b-lg">
                {selectedImage.title && (
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {selectedImage.title}
                  </h3>
                )}
                {selectedImage.description && (
                  <p className="mt-1 text-sm sm:text-base text-gray-200">
                    {selectedImage.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
