import { useState } from 'react'

export default function TechStack({ isDark, compact }) {
  const [showAll, setShowAll] = useState(false)
  const stacks = {
    Frontend: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'CSS'],
    Mobile: ['Flutter', 'Dart', 'Kotlin', 'Swift'],
    Backend: ['Python', 'FastAPI', 'Node.js'],
    AI: ['GPT', 'Gemini', 'GitHub Copilot', 'Claude'],
    'Tools & Deployment': ['Vercel', 'Cloudflare', 'GitHub', 'Git', 'Figma', 'Canva'],
  }

  const wrapperClasses = isDark ? 'border-gray-800 bg-gray-900/80 text-gray-100' : 'border-gray-200 bg-white text-gray-900'
  const chipClasses = isDark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-700'
  const titleClasses = isDark ? 'text-gray-100' : 'text-gray-900'
  const subtitleClasses = isDark ? 'text-gray-400' : 'text-gray-600'

  if (compact) {
    return (
      <div className={`rounded-2xl border p-4 ${wrapperClasses}`}>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className={`text-xs uppercase tracking-[0.12em] ${subtitleClasses}`}>Stack</p>
            <h2 className="text-xl font-bold">Tech Stack</h2>
          </div>
          <button
            type="button"
            className={`text-xs font-semibold transition ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>

        <div className="mt-4 space-y-4">
          {Object.entries(stacks).map(([k, v]) => (
            <div key={k}>
              <h3 className={`mb-2 text-sm font-semibold uppercase tracking-[0.1em] ${titleClasses}`}>{k}</h3>
              <div className="flex flex-wrap gap-2">
                {(showAll ? v : v.slice(0, 4)).map((item) => (
                  <span key={item} className={`inline-flex items-center justify-center rounded-full px-2.5 py-1 text-xs ${chipClasses}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="tech" className="py-10">
      <div className="container">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {Object.entries(stacks).map(([k, v]) => (
            <div key={k} className={`rounded-2xl p-4 ${wrapperClasses}`}>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.1em] text-gray-500">{k}</h3>
              <div className="flex flex-wrap gap-2">
                {v.slice(0, 4).map((item) => (
                  <span key={item} className={`inline-flex items-center justify-center rounded-full px-2.5 py-1 text-xs ${chipClasses}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
