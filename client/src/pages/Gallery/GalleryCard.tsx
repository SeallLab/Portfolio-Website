import type { GalleryImage } from '../../types/Contentful'

interface GalleryCardProps {
  galleryImage: GalleryImage
}

export default function GalleryCard({ galleryImage }: GalleryCardProps) {
  const { title, description, image } = galleryImage
  const imageUrl = image.fields.file.url.startsWith('//')
    ? `https:${image.fields.file.url}`
    : image.fields.file.url
  const hasOverlayContent = title || description

  return (
    <div className="group relative overflow-hidden rounded-lg bg-gray-100 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="aspect-4/3 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay with Title and Description - Only shows if title or description exists */}
      {hasOverlayContent && (
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="p-6">
            {title && (
              <h3 className="text-xl font-semibold text-white">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-2 text-sm leading-6 text-gray-200">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

