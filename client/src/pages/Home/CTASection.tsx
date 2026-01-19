import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useContentful } from "../../context/ContentfulContext";

export default function CTASection() {
  const { labDirector } = useContentful();

  return (
    <div className="bg-white py-16 sm:py-10">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Card width reduced */}
        <div className="relative isolate mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 px-6 py-12 shadow-2xl sm:px-12 sm:py-16 lg:px-16">
          {/* Decorative background elements */}
          <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl">
            <div
              className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-blue-400 to-purple-400 opacity-25"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>

          <div className="mx-auto max-w-xl text-center">
            {/* Headline */}
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {CTASectionContent.headline}
            </h2>

            {/* Subtitle */}
            <p className="mt-5 text-base leading-7 text-blue-100">
              {CTASectionContent.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${labDirector?.email}`}
                className="flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-white hover:text-blue-600 hover:scale-105 w-full sm:w-auto justify-center"
              >
                {CTASectionContent.primaryButtonText}
                <EnvelopeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CTASectionContent = {
  headline: "Join Us in Plural Software Engineering",
  subtitle:
    "We welcome prospective students, industry partners, and researchers who are interested in advancing software engineering that accounts for diversity, accessibility, and societal plurality. We invite collaboration on research and practice aimed at developing inclusive and equitable software systems.",
  primaryButtonText: "Contact Us",
};
