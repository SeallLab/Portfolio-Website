// File: client/src/pages/Research/keynotes/KeynoteCard.tsx

import type { Keynote } from "../../../types/Contentful";

interface KeynoteCardProps {
  keynote: Keynote;
}

export default function KeynoteCard({ keynote }: KeynoteCardProps) {
  const { title, description, image, location, mediaLink, eventDate } = keynote;

  return (
    <div className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-lg hover:scale-105">
      {/* Thumbnail image */}
      {image && (
        <img
          src={image.fields.file.url}
          alt={image.fields.title}
          className="rounded-lg mb-4 max-w-full h-auto"
        />
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

      <p className="text-sm leading-6 text-gray-600 flex-grow">{description}</p>

      {location && (
        <p className="mt-4 text-sm text-gray-500">
          <strong>Location:</strong> {location}
        </p>
      )}

      {eventDate && (
        <p className="text-sm text-gray-500">
          <strong>Date:</strong> {new Date(eventDate).toLocaleDateString()}
        </p>
      )}

      {mediaLink && (
        <div className="mt-4">
          <a
            href={mediaLink}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Media
          </a>
        </div>
      )}
    </div>
  );
}
