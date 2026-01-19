import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { ResearchFocusArea } from "../../types/Contentful";

interface ResearchHighlightsProps {
  highlights: ResearchFocusArea[];
}

export default function ResearchHighlights({
  highlights,
}: ResearchHighlightsProps) {
  const sortedHighlights = [...highlights]
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .slice(0, 3);

  return (
    <div className="bg-gray-50 py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Research Focus Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {sortedHighlights.map((highlight, index) => (
            <Link
              key={index}
              to="/research/focus"
              className="group relative flex flex-col overflow-hidden rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-base leading-7 text-gray-600 flex-grow mb-6">
                  {highlight.description}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold transition-all duration-200 group-hover:gap-4">
                  Learn More
                  <ArrowRightIcon className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/research/focus"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-gray-900/5 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
          >
            View All Research Areas
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
