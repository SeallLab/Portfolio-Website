import { mockSponsors } from "./mockData";

export default function Sponsors() {
    // todo should pull from contentful
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Proudly Supported By
          </h2>
          <div className="mx-auto mt-10 flex flex-col items-center gap-y-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-12 sm:gap-y-12 lg:gap-x-16">
            {mockSponsors.map((sponsor) => (
              <div key={sponsor.name} className="flex items-center justify-center">
                <img
                  className="h-20 w-auto max-w-[200px] object-contain hover:grayscale-0 transition-all duration-300"
                  src={sponsor.image}
                  alt={sponsor.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }