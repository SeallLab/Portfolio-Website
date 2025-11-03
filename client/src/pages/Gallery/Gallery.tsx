// import { useContentful } from '../../context/ContentfulContext'
import GalleryCard from "./GalleryCard";
import { mockGalleryImages } from "./mockData";

export default function Gallery() {
  // TODO: Replace mock data with Contentful data
  // const { galleryImages, loading } = useContentful()
  const galleryImages = mockGalleryImages;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 pt-20 sm:pt-28 lg:px-8 pb-10 sm:pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The software engineering for all labs images through conferences and
            events.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryImages.map((galleryImage, index) => (
            <GalleryCard
              key={galleryImage.image.sys.id || `gallery-${index}`}
              galleryImage={galleryImage}
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
    </div>
  );
}
