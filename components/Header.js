import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-6">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-extrabold">Alicando</Link>
          <span className="text-sm text-gray-500">AI · Software Engineer</span>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-4 text-sm text-gray-700">
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#tech">Tech</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#gallery">Gallery</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href="mailto:you@example.com" className="text-sm text-gray-600 hover:text-black">Email</a>
            <a href="#contact" className="hidden md:inline-block bg-black text-white px-3 py-2 rounded text-sm">Let's Talk</a>
          </div>
        </div>
      </div>
    </header>
  )
}
