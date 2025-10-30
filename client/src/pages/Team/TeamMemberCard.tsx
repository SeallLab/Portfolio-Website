import { EnvelopeIcon } from '@heroicons/react/24/outline'
import type { TeamMember } from '../../types/Contentful'

// LinkedIn Logo Icon Component
const LinkedInIcon = () => (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

// Country code to flag emoji mapping
const getCountryFlag = (countryCode?: string): string => {
  if (!countryCode) return ''
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { firstName, lastName, description, headshot, email, linkedinUrl, countryCode } = member
  const fullName = `${firstName} ${lastName}`
  const imageUrl = headshot.fields.file.url.startsWith('//')
    ? `https:${headshot.fields.file.url}`
    : headshot.fields.file.url

  return (
    <div className="group relative flex flex-col items-center rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-lg hover:scale-105">
      {/* Headshot */}
      <div className="relative mb-4">
        <img
          src={imageUrl}
          alt={`${fullName} headshot`}
          className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-100 transition-all duration-300 group-hover:ring-blue-100"
        />
        {countryCode && (
          <div
            className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl shadow-md ring-2 ring-white"
            title={countryCode}
          >
            {getCountryFlag(countryCode)}
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-center text-xl font-semibold text-gray-900">
        {fullName}
      </h3>

      {/* Description */}
      <p className="mt-3 text-center text-sm leading-6 text-gray-600">
        {description}
      </p>

      {/* Social Links */}
      {(email || linkedinUrl) && (
        <div className="mt-4 flex gap-3">
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
        </div>
      )}
    </div>
  )
}

