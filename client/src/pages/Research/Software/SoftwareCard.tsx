import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import type { Software } from "../../../types/Contentful";
import { GitHubIcon } from "../../../components/Icons";

interface SoftwareCardProps {
  software: Software;
}

export default function SoftwareCard({ software }: SoftwareCardProps) {
  const { name, description, url, githubUrl, tags, icon } = software;

  return (
    <div className="group relative flex flex-col rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-xl">
      {/* Card Content */}
      <div className="flex flex-col p-6 flex-grow">
        {icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-2xl">
            <img src={icon.fields.file.url} alt={name} className="h-full w-full object-cover" />
          </div>
        )}

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{name}</h3>
        <p className="text-sm leading-6 text-gray-600 flex-grow mb-4">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:scale-105"
            >
              Visit
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-gray-900 hover:text-white hover:scale-110"
              title="View on GitHub"
            >
              <GitHubIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
