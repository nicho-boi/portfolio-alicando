import { useEffect, useState } from 'react'
import { technologyGroups } from '../components/technologyData'

export default function TechStackPage() {
  const [theme, setTheme] = useState('light')
  const isDark = theme === 'dark'

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

  const pillClass = isDark
    ? 'border-gray-800 bg-gray-950 text-gray-200 hover:border-gray-700 hover:bg-gray-900'
    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'

  return (
    <main className={`min-h-screen py-8 transition-colors duration-300 ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'}`}>
      <div className="container space-y-10">
        <a href="/" className={`inline-flex items-center gap-2 text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-950'}`}>
          <span>{'<'}</span> Back to Home
        </a>

        <header className="max-w-2xl space-y-3">
          <h1 className={`section-title ${isDark ? 'text-white' : 'text-gray-950'}`}>Full Tech Stack</h1>
          <p className={`text-sm leading-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Comprehensive list of tools and technologies I use.
          </p>
        </header>

        <div className="space-y-10">
          {technologyGroups.map((group) => (
            <section key={group.title} className={`border-b pb-8 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
              <h2 className={`mb-5 text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-950'}`}>{group.title}</h2>
              <div className="flex flex-wrap gap-3">
                {group.items.map(({ name, Icon, color }, index) => (
                  <span key={`${group.title}-${name}-${index}`} className={`inline-flex items-center gap-2 rounded-lg border border-dashed px-3 py-2 text-sm font-medium transition ${pillClass}`}>
                    <Icon className={`h-4 w-4 ${color}`} aria-hidden="true" />
                    {name}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
