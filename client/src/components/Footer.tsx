import {
  LinkedInIcon,
  GoogleScholarIcon,
  EnvelopeIcon,
  TwitterIcon,
  PhoneIcon,
} from "./Icons";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/drdesouzasantos/",
      icon: LinkedInIcon,
    },
    {
      name: "Google Scholar",
      href: "https://scholar.google.com/citations?user=wYfnBrYAAAAJ&hl=en",
      icon: GoogleScholarIcon,
    },
    {
      name: "Email",
      href: "mailto:ronnie.desouzasantos@ucalgary.ca",
      icon: EnvelopeIcon,
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/softwaronnie",
      icon: TwitterIcon,
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name !== "Email" ? "_blank" : undefined}
                rel={item.name !== "Email" ? "noopener noreferrer" : undefined}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label={item.name}
              >
                <item.icon />
              </a>
            ))}
            {/* Phone Number */}
            <div className="flex items-center gap-2 text-gray-600">
              <a
                href="tel:+14032208076"
                className="text-sm hover:text-blue-600 transition-colors duration-200"
              >
                <PhoneIcon />
              </a>
            </div>
          </div>
          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Software Engineering for All
              Lab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
