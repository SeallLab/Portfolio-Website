import { EnvelopeIcon } from '@heroicons/react/24/outline'
import type { TeamMember } from '../../types/Contentful'
import { getCountryFlag } from '../../helpers/flag'
import { LinkedInIcon } from '../../components/Icons'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { firstName, lastName, position, description, headshot, email, linkedinUrl, countryCode } = member
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

      {/* Position */}
      {position && (
        <p className="mt-1 text-center text-sm font-medium text-blue-600">
          {position}
        </p>
      )}

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

