export default function Projects() {
  const items = [
    { title: 'CodeCred', desc: 'Online certifications for programmers', link: 'https://codecred.dev', img: '/gallery-1.svg' },
    { title: 'BASE404', desc: 'Online coding bootcamp', link: 'https://base-404.com', img: '/gallery-2.svg' },
    { title: 'DIIN.PH', desc: 'AI-powered wardrobe assistant', link: 'https://diin.ph', img: '/gallery-3.svg' },
  ]
  return (
    <section id="projects" className="py-10">
      <div className="container">
        <h2 className="text-2xl font-bold">Recent Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p) => (
            <a key={p.title} href={p.link} className="block p-4 border rounded hover:shadow">
              <div className="w-full h-40 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                <img src={p.img} alt={p.title} className="object-contain h-full" />
              </div>
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
