import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { LabInfo, LabStatistics } from "../../types/Contentful";

interface HeroSectionProps {
  labInfo: LabInfo | null;
  statistics: LabStatistics | null;
}

export default function HeroSection({ labInfo, statistics }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-7">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                {labInfo?.heroHeadline}
              </h1>
              <p className="mt-8 text-lg leading-8 text-gray-600 sm:text-xl">
                {labInfo?.heroTagline}
              </p>

              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/research/projects"
                  className="group rounded-lg bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:scale-105 hover:shadow-lg flex items-center gap-2"
                >
                  Explore Our Research
                  <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/team"
                  className="rounded-lg border-2 border-gray-300 bg-white px-6 py-3.5 text-base font-semibold text-gray-900 transition-all duration-200 hover:border-blue-600 hover:text-blue-600 hover:scale-105"
                >
                  Meet the Team
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 sm:gap-x-8">
                <div className="border-l-2 border-blue-600 pl-4">
                  <p className="text-3xl font-bold text-gray-900">
                    {statistics?.publicationsCount}+
                  </p>
                  <p className="text-sm text-gray-600">Publications</p>
                </div>
                <div className="border-l-2 border-green-600 pl-4">
                  <p className="text-3xl font-bold text-gray-900">
                    {statistics?.projectsCount}+
                  </p>
                  <p className="text-sm text-gray-600">Projects</p>
                </div>
                <div className="border-l-2 border-purple-600 pl-4">
                  <p className="text-3xl font-bold text-gray-900">
                    {statistics?.teamMembersCount}+
                  </p>
                  <p className="text-sm text-gray-600">Team Members</p>
                </div>
                <div className="border-l-2 border-orange-600 pl-4">
                  <p className="text-3xl font-bold text-gray-900">
                    {statistics?.yearsOfResearch}+
                  </p>
                  <p className="text-sm text-gray-600">Years</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-16 lg:col-span-5 lg:mt-0">
            <div className="relative">
              <div className="relative flex h-96 items-center justify-center">
                <img
                  src="/LabLogo.png"
                  alt="Plurise Lab"
                  className="h-64 w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

