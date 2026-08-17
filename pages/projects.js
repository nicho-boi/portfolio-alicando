import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../components/projectData'

export default function ProjectsPage() {
  const [theme, setTheme] = useState('light')
  const [page, setPage] = useState(0)
  const isDark = theme === 'dark'
  const pageSize = 6
  const pageCount = Math.ceil(projects.length / pageSize)
  const visibleProjects = projects.slice(page * pageSize, page * pageSize + pageSize)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.colorScheme = theme
    document.body.className = theme === 'dark' ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'
  }, [theme])

  const goToPrevious = () => setPage((current) => Math.max(current - 1, 0))
  const goToNext = () => setPage((current) => Math.min(current + 1, pageCount - 1))

  return (
    <main className={`min-h-screen py-8 transition-colors duration-300 ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'}`}>
      <div className="container space-y-10">
        <a href="/" className={`inline-flex items-center gap-2 text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-950'}`}>
          <span>{'<'}</span> Back to Home
        </a>

        <header className="max-w-2xl space-y-3">
          <h1 className={`section-title ${isDark ? 'text-white' : 'text-gray-950'}`}>Selected Projects</h1>
          <p className={`text-sm leading-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            A collection of digital products, internal tools, and experimental builds I have designed, developed, and refined across web, mobile, data, and generative AI work.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} isDark={isDark} />
          ))}
        </div>

        <div className={`flex items-center justify-between border-t pt-6 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <button
            type="button"
            onClick={goToPrevious}
            disabled={page === 0}
            className={`inline-flex items-center gap-2 text-sm transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-950'} ${page === 0 ? 'cursor-not-allowed opacity-40' : ''}`}
          >
            <span>{'<'}</span> Prev
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                className={`h-9 w-9 rounded-lg border text-sm font-medium transition ${
                  index === page
                    ? isDark
                      ? 'border-white bg-white text-gray-950'
                      : 'border-gray-950 bg-gray-950 text-white'
                    : isDark
                      ? 'border-gray-800 text-gray-400 hover:bg-gray-900 hover:text-white'
                      : 'border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-950'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={goToNext}
            disabled={page === pageCount - 1}
            className={`inline-flex items-center gap-2 text-sm transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-950'} ${page === pageCount - 1 ? 'cursor-not-allowed opacity-40' : ''}`}
          >
            Next <span>{'>'}</span>
          </button>
        </div>
      </div>
    </main>
  )
}
