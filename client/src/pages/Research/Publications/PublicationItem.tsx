import {
  DocumentTextIcon,
  LinkIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import type { Publication } from "../../../types/Contentful";

interface PublicationItemProps {
  publication: Publication;
  labMembers?: string[];
}

export default function PublicationItem({
  publication,
  labMembers = ["Lab Director"],
}: PublicationItemProps) {
  const { title, authors, venue, year, pdfUrl, doi, bibtex, type } =
    publication;

  // Format authors, making lab members bold
  const formatAuthors = () => {
    return authors.map((author, index) => {
      const isLabMember = labMembers.some(
        (member) =>
          author.toLowerCase().includes(member.toLowerCase()) ||
          member.toLowerCase().includes(author.toLowerCase()),
      );
      return (
        <span key={index}>
          {index > 0 && ", "}
          <span className={isLabMember ? "font-semibold" : ""}>{author}</span>
        </span>
      );
    });
  };

  // Get badge color based on publication type
  const getTypeBadgeColor = () => {
    switch (type) {
      case "conference":
        return "bg-blue-100 text-blue-600";
      case "journal":
        return "bg-green-100 text-green-600";
      case "workshop":
        return "bg-purple-100 text-purple-600";
      case "preprint":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="border-b border-gray-200 py-6 last:border-0">
      <div className="flex flex-col gap-2">
        {/* Type Badge */}
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getTypeBadgeColor()}`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        {/* Authors */}
        <p className="text-sm text-gray-900">{formatAuthors()}</p>

        {/* Venue and Year */}
        <p className="text-sm text-gray-600">
          {venue}, {year}
        </p>

        {/* Action Links */}
        <div className="mt-2 flex gap-2">
          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 items-center gap-2 rounded-full bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 hover:scale-105"
              title="View PDF"
            >
              <DocumentTextIcon className="h-4 w-4" />
              PDF
            </a>
          )}
          {doi && (
            <a
              href={`https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 items-center gap-2 rounded-full bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 hover:scale-105"
              title="View DOI"
            >
              <LinkIcon className="h-4 w-4" />
              DOI
            </a>
          )}
          {bibtex && (
            <button
              onClick={() => {
                navigator.clipboard.writeText(bibtex);
                // Could add a toast notification here
              }}
              className="flex h-9 items-center gap-2 rounded-full bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 hover:scale-105"
              title="Copy BibTeX"
            >
              <CodeBracketIcon className="h-4 w-4" />
              BibTeX
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
