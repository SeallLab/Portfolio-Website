import ProjectCard from "./ProjectCard";
import { mockProjects } from "./mockData";

export default function Projects() {
  // Sort projects by order
  const sortedProjects = [...mockProjects].sort(
    (a, b) => (a.order || 0) - (b.order || 0),
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 pt-20 sm:pt-28 lg:px-8 pb-10 sm:pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Research Projects
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore the diverse themes and projects we work on at SE-ALL Lab,
            advancing software engineering for all.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            Current Projects
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {sortedProjects.length === 0 && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-gray-500">
              No research projects to display at this time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
