// import { useContentful } from '../../context/ContentfulContext'
import TeamMemberCard from './TeamMemberCard'
import { mockTeamMembers } from './mockData'

export default function Team() {
  // TODO: Replace mock data with Contentful data
  // const { teamMembers, loading } = useContentful()
  const teamMembers = mockTeamMembers

  // Filter team members by current status
  const currentMembers = teamMembers.filter((member) => member.current === true)
  const pastMembers = teamMembers.filter((member) => member.current === false)

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 pt-20 sm:pt-28 lg:px-8 pb-10 sm:pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our Team
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the talented individuals behind our research. Our team brings together experts from around the world, united by a passion for advancing sustainable energy solutions.
          </p>
        </div>
      </div>

      {/* Current Team Section */}
      {currentMembers.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
              Current Team
            </h2>
            <div className="mt-2 h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currentMembers.map((member, index) => (
              <TeamMemberCard key={`current-${index}`} member={member} />
            ))}
          </div>
        </div>
      )}

      {/* Alumni/Past Members Section */}
      {pastMembers.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
              Alumni
            </h2>
            <div className="mt-2 h-1 w-20 bg-gray-400 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pastMembers.map((member, index) => (
              <TeamMemberCard key={`alumni-${index}`} member={member} />
            ))}
          </div>
        </div>
      )}

      {/* Empty State - for when using Contentful and data hasn't loaded yet */}
      {teamMembers.length === 0 && (
        <div className="mx-auto max-w-2xl px-6 pb-32 text-center">
          <p className="text-gray-500">No team members to display at this time.</p>
        </div>
      )}
    </div>
  )
}

