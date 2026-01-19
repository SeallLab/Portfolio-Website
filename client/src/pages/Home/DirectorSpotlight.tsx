import { Link } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import type { LabDirector } from "../../types/Contentful";

interface DirectorSpotlightProps {
  director: LabDirector | null;
}

export default function DirectorSpotlight({ director }: DirectorSpotlightProps) {
  if (!director) {
    return null;
  }
  const imageUrl = director.headshot.fields.file.url.startsWith("//")
    ? `https:${director.headshot.fields.file.url}`
    : director.headshot.fields.file.url;

  const bioParagraphs = director?.description?.split("\n\n").filter((p) => p.trim());

  return (
    <div className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-start">
          <div className="relative mb-12 lg:mb-0 lg:sticky lg:top-24">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-900/5 max-w-sm mx-auto">
                <img
                  src={imageUrl}
                  alt={`${director.firstName} ${director.lastName}`}
                  className="w-full object-cover"
                />
              </div>

            </div>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {`${director.firstName} ${director.lastName}`}
              </h3>
              <p className="mt-2 text-lg font-medium text-blue-600">
                {director.position}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              {bioParagraphs?.map((paragraph, index) => (
                <p key={index} className="text-base leading-7 text-gray-600 mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/team"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:scale-105"
              >
                View Full Team
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

