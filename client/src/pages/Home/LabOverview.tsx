import type { LabInfo } from "../../types/Contentful";

interface LabOverviewProps {
  labInfo: LabInfo;
}

export default function LabOverview({ labInfo }: LabOverviewProps) {
  const pillars = [
    {
      title: labInfo.missionTitle,
      description: labInfo.missionDescription,
      icon: "🎯",
      accentColor: "bg-blue-600",
    },
    {
      title: labInfo.approachTitle,
      description: labInfo.approachDescription,
      icon: "🔬",
      accentColor: "bg-green-600",
    },
    {
      title: labInfo.impactTitle,
      description: labInfo.impactDescription,
      icon: "🌍",
      accentColor: "bg-purple-600",
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            About SE-ALL Lab
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dedicated to advancing software engineering research that makes
            technology accessible, fair, and beneficial for everyone.
          </p>
        </div>

        {/* Three Pillar Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {/* Colored accent bar at top */}
              <div className={`h-2 ${pillar.accentColor}`}></div>

              {/* Card Content */}
              <div className="flex flex-col p-8">
                {/* Icon */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 text-4xl transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-50">
                  {pillar.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-7 text-gray-600 flex-grow">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

