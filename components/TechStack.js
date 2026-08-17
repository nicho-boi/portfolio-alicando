import { featuredTechnologies, technologyGroups } from './technologyData'

export default function TechStack({ isDark }) {
  const generativeAiItems = technologyGroups.find((group) => group.title === 'Generative AI')?.items || []
  const rows = [
    { items: featuredTechnologies.slice(0, 7), direction: 'marquee-left' },
    { items: featuredTechnologies.slice(7, 13), direction: 'marquee-right' },
    { items: generativeAiItems, direction: 'marquee-left' },
  ]
  const pillClass = isDark
    ? 'border-gray-800 bg-gray-950 text-gray-200 hover:border-gray-700 hover:bg-gray-900'
    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'

  return (
    <section id="tech" className="space-y-6 overflow-hidden">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-950'}`}>Technologies</h2>
        <a
          href="/tech-stack"
          className={`inline-flex items-center gap-2 text-sm font-medium transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-950'}`}
        >
          <GridIcon />
          View All
          <span>{'>'}</span>
        </a>
      </div>

      <div className="space-y-3">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="overflow-hidden">
            <div className={`flex w-max gap-3 ${row.direction}`}>
              {[...row.items, ...row.items].map(({ name, Icon, color }, index) => (
                <span key={`${rowIndex}-${name}-${index}`} className={`inline-flex items-center gap-2 rounded-lg border border-dashed px-4 py-2 text-sm font-medium transition ${pillClass}`}>
                  <Icon className={`h-4 w-4 ${color}`} aria-hidden="true" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function GridIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}
