// import PublicationItem from "./PublicationItem";
// import { useContentful } from "../../../context/ContentfulContext";
// import type { Publication } from "../../../types/Contentful";
import { GoogleScholarIcon, ResearchGateIcon } from "../../../components/Icons";

export default function Publications() {
  // const { publications } = useContentful();

  // const publicationsByYear = publications?.reduce(
  //   (acc, pub) => {
  //     if (!acc[pub.year]) {
  //       acc[pub.year] = [];
  //     }
  //     acc[pub.year].push(pub);
  //     return acc;
  //   },
  //   {} as Record<number, Publication[]>,
  // );

  // const years = Object.keys(publicationsByYear)
  //   .map(Number)
  //   .sort((a, b) => b - a);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 pt-20 sm:pt-28 lg:px-8 pb-10 sm:pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Publications
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dr. de Souza Santos publishes in established international journals
            and conferences in software engineering that apply rigorous peer
            reviewand are widely recognized by the research community. His work
            appears in venues such as ACM Computing Surveys, ACM Transactions on
            Software Engineering and Methodology, IEEE Software, and the
            International Conference on Software Engineering, as well as other
            CORE A and A* conferences including the ACM International Conference
            on the Foundations of Software Engineering, the IEEE ACM
            International Conference on Automated Software Engineering, the
            International Conference on Software Maintenance and Evolution, the
            ACM IEEE International Symposium on Empirical Software Engineering
            and Measurement, the IEEE International Conference on Software
            Testing, Verification and Validation, and the International
            Conference on Cooperative and Human Aspects of Software Engineering.
            He also publishes in workshops co-located with these conferences
            when the work addresses emerging topics, methodological questions,
            or interdisciplinary concerns. Venue selection follows disciplinary
            norms and reflects a balance between empirical contribution,
            conceptual development, and relevance to research and practice.
          </p>

          <div className="mt-6 flex justify-center gap-6">
            <a
              href="https://scholar.google.com/citations?user=wYfnBrYAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="Google Scholar"
            >
              <GoogleScholarIcon />
            </a>

            <a
              href="https://www.researchgate.net/profile/Ronnie-De-Souza-Santos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="ResearchGate"
            >
              <ResearchGateIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Publications Section */}
      {/* Publications Section */}
      <div className="mx-auto max-w-5xl px-6 pb-32 lg:px-8">
        {/*
        {years.map((year, yearIndex) => (
          <div key={year} className={yearIndex > 0 ? "mt-4" : ""}>
            <div className="mb-2">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                {year}
              </h2>
              <div
                className={`mt-2 h-1 w-20 rounded-full ${
                  yearIndex === 0
                    ? "bg-blue-600"
                    : yearIndex === 1
                      ? "bg-green-600"
                      : "bg-purple-600"
                }`}
              />
            </div>

            <div className="rounded-lg bg-white">
              {publicationsByYear[year].map((publication, index) => (
                <PublicationItem key={index} publication={publication} />
              ))}
            </div>
          </div>
        ))}
        */}

        {/* Empty State */}
        {/* {years.length === 0 && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-gray-500">
              No publications to display at this time.
            </p>
          </div>
        )} */}
      </div>

    </div>
  );
}