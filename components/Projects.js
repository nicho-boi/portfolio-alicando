import { useState, useEffect, useRef } from 'react'

export default function Projects({ isDark }) {
  const items = [
    {
      title: 'Attack on Titan Guide Web App',
      desc: 'Flutter web app for exploring characters, Titans, favorites, and a Scout quiz',
      shortDesc: 'Anime guide',
      link: 'https://aot-wiki.vercel.app/',
      img: '/project banner (1600 x 800 px).png',
    },
    { title: 'Foresight',
      desc: 'AI image manipulation timeline analyzer with lightweight forensic signal reporting', 
      shortDesc: 'Image forensics',
      link: 'https://foren-sight-seven.vercel.app/', 
      img: '/Foresight.png' 
    },
    { title: 'SunnyBooth', desc: 'Digital photo booth for capturing, customizing, and sharing memorable moments', shortDesc: 'Photo booth', link: 'https://sunnybooth.vercel.app/', img: '/SunnyBoothbanner.png' },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionKey, setTransitionKey] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const resumeTimerRef = useRef(null)
  const activeProject = items[activeIndex]

  useEffect(() => {
    if (!isTransitioning) return

    const timer = window.setTimeout(() => setIsTransitioning(false), 220)
    return () => window.clearTimeout(timer)
  }, [isTransitioning])

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = window.setInterval(() => {
      setIsTransitioning(true)
      setTransitionKey((prev) => prev + 1)
      setActiveIndex((activeIndex) => (activeIndex === items.length - 1 ? 0 : activeIndex + 1))
    }, 4000)

    return () => window.clearInterval(timer)
  }, [isAutoPlaying, items.length])

  const changeProject = (nextIndex) => {
    setIsTransitioning(true)
    setTransitionKey((prev) => prev + 1)
    setActiveIndex(nextIndex)
  }

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)

    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current)
    }

    resumeTimerRef.current = window.setTimeout(() => {
      setIsAutoPlaying(true)
    }, 8000)
  }

  const changeProjectManually = (nextIndex) => {
    pauseAutoPlay()
    changeProject(nextIndex)
  }

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current)
      }
    }
  }, [])

  const goToPrevious = () => {
    changeProjectManually((activeIndex) => (activeIndex === 0 ? items.length - 1 : activeIndex - 1))
  }

  const goToNext = () => {
    changeProjectManually((activeIndex) => (activeIndex === items.length - 1 ? 0 : activeIndex + 1))
  }

  const shellClasses = isDark ? 'border-gray-800 bg-gray-900/80' : 'border-gray-200/80 bg-white/80'
  const panelClasses = isDark ? 'border-gray-800 bg-gray-900 text-gray-100' : 'border-gray-200 bg-white text-gray-900'
  const mutedText = isDark ? 'text-gray-400' : 'text-gray-600'
  const softMutedText = isDark ? 'text-gray-500' : 'text-gray-400'

  return (
    <section id="projects" className="pt-0 pb-6">
      <div className="container">
        <div className={`bento-card p-6 md:p-8 ${shellClasses}`}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold">Recent Projects</h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="View previous project"
                className={`flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition hover:border-blue-500 hover:text-blue-600 ${isDark ? 'border-gray-700 bg-gray-950 text-gray-200' : 'border-gray-200 bg-white text-gray-700'}`}
              >
                ←
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="View next project"
                className={`flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition hover:border-blue-500 hover:text-blue-600 ${isDark ? 'border-gray-700 bg-gray-950 text-gray-200' : 'border-gray-200 bg-white text-gray-700'}`}
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div
              key={transitionKey}
              className={`group rounded-2xl border p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${panelClasses} ${
                isTransitioning ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              <a href={activeProject.link} className="block">
                <div className={`aspect-[2/1] w-full overflow-hidden rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <img src={activeProject.img} alt={activeProject.title} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{activeProject.title}</h3>
                  <p className={`mt-2 text-sm ${mutedText}`}>{activeProject.desc}</p>
                </div>
              </a>
            </div>

            <div className="space-y-3">
              {items.map((p, index) => (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => changeProjectManually(index)}
                  className={`w-full rounded-xl border p-3 text-left transition ${
                    index === activeIndex
                      ? isDark
                        ? 'border-blue-500 bg-blue-950/40 shadow-sm'
                        : 'border-blue-500 bg-blue-50 shadow-sm'
                      : isDark
                        ? 'border-gray-800 bg-gray-950 hover:border-gray-700'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className={`font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{p.title}</p>
                      <p className={`text-sm ${mutedText}`}>{p.shortDesc || p.desc}</p>
                    </div>
                    <span className={`text-sm ${softMutedText}`}>{index + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
