import {
  EnvelopeIcon,
  DocumentIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import type { LabDirector } from "../../types/Contentful";
import { getCountryFlag } from "../../helpers/flag";
import {
  LinkedInIcon,
  TwitterIcon,
  GoogleScholarIcon,
} from "../../components/Icons";

interface LabDirectorCardProps {
  director: LabDirector;
}

export default function LabDirectorCard({ director }: LabDirectorCardProps) {
  const {
    firstName,
    lastName,
    position,
    description,
    headshot,
    email,
    linkedinUrl,
    twitterUrl,
    googleScholarUrl,
    phone,
    countryCode,
    cvUrl,
  } = director;
  const fullName = `${firstName} ${lastName}`;
  const imageUrl = headshot.fields.file.url.startsWith("//")
    ? `https:${headshot.fields.file.url}`
    : headshot.fields.file.url;

  return (
    <div className="mx-auto max-w-5xl">
      <div className="overflow-hidden rounded-2xl bg-white">
        <div className="grid grid-cols-1 gap-8 p-8 sm:p-10 md:grid-cols-2 md:gap-12">
          {/* Left Column - Photo */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src={imageUrl}
                alt={`${fullName} headshot`}
                className="h-64 w-64 rounded-2xl object-cover ring-4 ring-blue-100 shadow-xl"
              />
              {countryCode && (
                <div
                  className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-lg ring-4 ring-white"
                  title={countryCode}
                >
                  {getCountryFlag(countryCode)}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="flex flex-col justify-center">
            {/* Name */}
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {fullName}
            </h2>

            {/* Position */}
            <p className="mt-2 text-lg font-semibold text-blue-600">
              {position}
            </p>

            {/* Description */}
            <p className="mt-4 text-base leading-7 text-gray-600">
              {description}
            </p>

            {/* Contact Links & CV */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 hover:scale-110"
                    title={`Email ${fullName}`}
                    aria-label={`Email ${fullName}`}
                  >
                    <EnvelopeIcon className="h-5 w-5" />
                  </a>
                )}
                {linkedinUrl && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 hover:scale-110"
                    title={`${fullName}'s LinkedIn`}
                    aria-label={`${fullName}'s LinkedIn profile`}
                  >
                    <LinkedInIcon />
                  </a>
                )}
                {twitterUrl && (
                  <a
                    href={twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 hover:scale-110"
                    title={`${fullName}'s X (Twitter)`}
                    aria-label={`${fullName}'s X profile`}
                  >
                    <TwitterIcon />
                  </a>
                )}
                {googleScholarUrl && (
                  <a
                    href={googleScholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 hover:scale-110"
                    title={`${fullName}'s Google Scholar`}
                    aria-label={`${fullName}'s Google Scholar profile`}
                  >
                    <GoogleScholarIcon />
                  </a>
                )}
                {phone && (
                  <a
                    href={`tel:${phone}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 hover:scale-110"
                    title={`Call ${fullName}`}
                    aria-label={`Call ${fullName}`}
                  >
                    <PhoneIcon className="h-5 w-5" />
                  </a>
                )}
              </div>

              {/* CV Button */}
              {cvUrl && (
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
                >
                  <DocumentIcon className="h-5 w-5" />
                  CV
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
