// Social media and academic link icons
const LinkedInIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const GoogleScholarIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
)

const EnvelopeIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
  </svg>
)

export default function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/drdesouzasantos/',
      icon: LinkedInIcon,
    },
    {
      name: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=wYfnBrYAAAAJ&hl=en',
      icon: GoogleScholarIcon,
    },
    {
      name: 'Email',
      href: 'mailto:ronnie.desouzasantos@ucalgary.ca',
      icon: EnvelopeIcon,
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/softwaronnie',
      icon: TwitterIcon,
    },
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name !== 'Email' ? '_blank' : undefined}
                rel={item.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label={item.name}
              >
                <item.icon />
              </a>
            ))}
          </div>

          {/* Phone Number */}
          <div className="flex items-center gap-2 text-gray-600">
            <PhoneIcon />
            <a
              href="tel:+14032208076"
              className="text-sm hover:text-blue-600 transition-colors duration-200"
            >
              +1 (403) 220 8076
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Software Engineering for All Lab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

