export default function ProjectCard({ project, isDark }) {
  const borderClass = isDark ? 'border-gray-800' : 'border-gray-200'
  const cardClass = isDark ? 'border-gray-800 bg-gray-950 text-gray-100' : 'border-gray-200 bg-white text-gray-950'
  const imagePanelClass = isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'
  const mutedText = isDark ? 'text-gray-400' : 'text-gray-500'
  const chipClass = isDark ? 'border-gray-700 bg-gray-900 text-gray-300' : 'border-gray-200 bg-white text-gray-500'
  const openProject = (event) => {
    if (!project.link) return

    event.preventDefault()

    if (project.mobilePreview) {
      const width = 430
      const height = 820
      const left = Math.max(0, window.screenX + (window.outerWidth - width) / 2)
      const top = Math.max(0, window.screenY + (window.outerHeight - height) / 2)

      window.open(
        project.link,
        `${project.title.replace(/\W+/g, '')}Preview`,
        `noopener,noreferrer,width=${width},height=${height},left=${left},top=${top}`
      )
      return
    }

    window.open(project.link, '_blank', 'noopener,noreferrer')
  }
  const CardTag = project.link ? 'a' : 'div'
  const cardProps = project.link
    ? {
        href: project.link,
        target: '_blank',
        rel: 'noopener noreferrer',
        onClick: openProject,
      }
    : {}

  return (
    <CardTag
      {...cardProps}
      className={`group flex min-h-[330px] flex-col rounded-xl border border-dashed p-2 transition hover:-translate-y-1 hover:shadow-lg ${cardClass}`}
    >
      <div className={`flex h-40 items-center justify-center overflow-hidden rounded-lg border ${imagePanelClass}`}>
        {project.img ? (
          <img src={project.img} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <span className={`tracking-[0.45em] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>COMING SOON</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
          <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] ${chipClass}`}>
            {project.status}
          </span>
        </div>

        <p className={`mt-2 text-sm leading-6 ${mutedText}`}>{project.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${chipClass}`}>
              {item}
            </span>
          ))}
        </div>

        <div className={`mt-auto border-t pt-4 ${borderClass}`}>
          {project.link ? (
            <span className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.mobilePreview ? 'Mobile Preview' : 'View Project'} <span className="transition-transform group-hover:translate-x-1">{'>'}</span>
            </span>
          ) : (
            <span className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              {project.status === 'Confidential' ? 'Private project' : 'In progress'}
            </span>
          )}
        </div>
      </div>
    </CardTag>
  )
}
