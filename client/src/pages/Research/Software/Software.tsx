import SoftwareCard from "./SoftwareCard";
import { mockSoftware } from "./mockData";

export default function Software() {
  const sortedSoftware = [...mockSoftware].sort(
    (a, b) => (a.order || 0) - (b.order || 0),
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 pt-20 sm:pt-28 lg:px-8 pb-10 sm:pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Software
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tools and applications developed by the SE-ALL Lab.
          </p>
        </div>
      </div>

      {/* Software Section */}
      <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            Our Tools
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedSoftware.map((software, index) => (
            <SoftwareCard key={index} software={software} />
          ))}
        </div>

        {/* Empty State */}
        {sortedSoftware.length === 0 && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-gray-500">
              No software tools to display at this time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
