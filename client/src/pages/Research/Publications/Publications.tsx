import PublicationItem from "./PublicationItem";
import { useContentful } from "../../../context/ContentfulContext";
import type { Publication } from "../../../types/Contentful";
export default function Publications() {
  const { publications } = useContentful();
  const publicationsByYear = publications?.reduce(
    (acc, pub) => {
      if (!acc[pub.year]) {
        acc[pub.year] = [];
      }
      acc[pub.year].push(pub);
      return acc;
    },
    {} as Record<number, Publication[]>,
  );

  // Get years in descending order
  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 pt-20 sm:pt-28 lg:px-8 pb-10 sm:pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Publications
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our latest research contributions to the software engineering and AI
            communities.
          </p>
        </div>
      </div>

      {/* Publications Section */}
      <div className="mx-auto max-w-5xl px-6 pb-32 lg:px-8">
        {years.map((year, yearIndex) => (
          <div key={year} className={yearIndex > 0 ? "mt-4" : ""}>
            {/* Year Header */}
            <div className="mb-2">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                {year}
              </h2>
              <div
                className={`mt-2 h-1 w-20 rounded-full ${
                  yearIndex === 0
                    ? "bg-blue-600"
                    : yearIndex === 1
                      ? "bg-green-600"
                      : "bg-purple-600"
                }`}
              ></div>
            </div>

            {/* Publications List */}
            <div className="rounded-lg bg-white">
              {publicationsByYear[year].map((publication, index) => (
                <PublicationItem key={index} publication={publication} />
              ))}
            </div>
          </div>
        ))}

        {/* Empty State */}
        {years.length === 0 && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-gray-500">
              No publications to display at this time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
