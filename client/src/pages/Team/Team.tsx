// import { useContentful } from '../../context/ContentfulContext'
import LabDirectorCard from './LabDirectorCard'
import TeamMemberCard from './TeamMemberCard'
import { mockLabDirector, mockTeamMembers } from './mockData'

export default function Team() {
  // TODO: Replace mock data with Contentful data
  // const { labDirector, teamMembers, loading } = useContentful()
  const labDirector = mockLabDirector
  const teamMembers = mockTeamMembers

  // Filter team members by type
  const currentMembers = teamMembers.filter((member) => member.type === 'current')
  const alumni = teamMembers.filter((member) => member.type === 'alumni')
  const collaborators = teamMembers.filter((member) => member.type === 'collaborator')

  return (
    <div className="bg-white min-h-screen">
      {/* Lab Director Section */}
      <div className="mx-auto max-w-7xl px-6 pt-20 sm:pt-28 lg:px-8 pb-16 sm:pb-20">
        <LabDirectorCard director={labDirector} />
      </div>

      {/* Our Team Title */}
      <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our Team
          </h1>
        </div>
      </div>

      {/* Current Team Section */}
      {currentMembers.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
              Current Members
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

      {/* Alumni Section */}
      {alumni.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
              Alumni
            </h2>
            <div className="mt-2 h-1 w-20 bg-gray-400 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {alumni.map((member, index) => (
              <TeamMemberCard key={`alumni-${index}`} member={member} />
            ))}
          </div>
        </div>
      )}

      {/* Collaborators Section */}
      {collaborators.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
              Frequent Collaborators
            </h2>
            <div className="mt-2 h-1 w-20 bg-green-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {collaborators.map((member, index) => (
              <TeamMemberCard key={`collaborator-${index}`} member={member} />
            ))}
          </div>
        </div>
      )}

      {/* Empty State - for when using Contentful and data hasn't loaded yet */}
      {teamMembers.length === 0 && !labDirector && (
        <div className="mx-auto max-w-2xl px-6 pb-32 text-center">
          <p className="text-gray-500">No team members to display at this time.</p>
        </div>
      )}
    </div>
  )
}

