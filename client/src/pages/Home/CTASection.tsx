import { Link } from "react-router-dom";
import { ArrowRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import type { CTASection as CTASectionType } from "../../types/Contentful";

interface CTASectionProps {
  cta: CTASectionType;
}

export default function CTASection({ cta }: CTASectionProps) {
  return (
    <div className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 px-8 py-16 shadow-2xl sm:px-16 sm:py-24 lg:px-24">
          {/* Decorative background elements */}
          <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl">
            <div
              className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-blue-400 to-purple-400 opacity-25"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            ></div>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            {/* Headline */}
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {cta.headline}
            </h2>

            {/* Subtitle */}
            <p className="mt-6 text-lg leading-8 text-blue-100">
              {cta.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={cta.primaryButtonLink}
                className="group flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-blue-600 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:scale-105 w-full sm:w-auto justify-center"
              >
                {cta.primaryButtonText}
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={cta.secondaryButtonLink}
                className="flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-white hover:text-blue-600 hover:scale-105 w-full sm:w-auto justify-center"
              >
                {cta.secondaryButtonText}
                <EnvelopeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

