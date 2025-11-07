import { useContentful } from "../../../context/ContentfulContext";

export default function Focus() {
  const { researchFocus } = useContentful();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 pt-20 sm:pt-28 lg:px-8 pb-10 sm:pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {researchFocus?.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">{researchFocus?.description}</p>
        </div>
      </div>

      {/* Focus Areas Section */}
      <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            Research Areas
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchFocus?.focusAreas.map((area, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              {/* Area Title */}
              <h3 className="text-center text-xl font-semibold text-gray-900">
                {area}
              </h3>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {researchFocus?.focusAreas.length === 0 && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-gray-500">
              No research focus areas to display at this time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
