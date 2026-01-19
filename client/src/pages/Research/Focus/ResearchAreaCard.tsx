import type { ResearchFocusArea } from "../../../types/Contentful";

interface ResearchAreaCardProps {
  area: ResearchFocusArea;
}

export default function ResearchAreaCard({ area }: ResearchAreaCardProps) {
  const { title, description, tags } = area;

  return (
    <div className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-lg hover:scale-105">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

      <p className="text-sm leading-6 text-gray-600 flex-grow">{description}</p>

      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition-colors duration-200 group-hover:bg-blue-50 group-hover:text-blue-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
