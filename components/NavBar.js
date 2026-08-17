export default function NavBar({ isDark }) {
  const links = [
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
  ]

  return (
    <nav className="w-full">
      <div className="container flex items-center justify-between gap-4 py-3 sm:py-4">
        <a className={`text-sm font-bold transition-colors ${isDark ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-700'}`} href="#">
          JNA
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              className={`whitespace-nowrap text-xs font-normal transition-colors sm:text-sm ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-700'}`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
