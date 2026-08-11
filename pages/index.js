import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import TechStack from '../components/TechStack'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import CertItem from '../components/CertItem'

export default function Home() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
    document.documentElement.style.colorScheme = theme
    document.body.className = theme === 'dark' ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  const isDark = theme === 'dark'
  const [showAllCerts, setShowAllCerts] = useState(false)
  const [selectedCert, setSelectedCert] = useState(null)

  const certificateList = [
    { title: 'Flutter & Dart', issuer: 'Mobile Development', src: '/flutterdartcert.jpg' },
    { title: 'Data Analytics', issuer: 'Analytics', src: '/Data Analytics Cert-1.png' },
    { title: 'Cyber Security', issuer: 'Security', src: '/Cyber Security Cert-1.png' },
    { title: 'Intellectual Property', issuer: 'IP Fundamentals', src: '/Intellectual Property Cert-1.png' },
    { title: 'Game Development', issuer: 'Game Design', src: '/Game Cert-1.png' },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'}`}>
      <main>
        <Hero theme={theme} toggleTheme={toggleTheme} />

        <section id="about" className="pt-10 pb-16">
          <div className="container max-w-6xl">
            <div className="grid gap-4 md:grid-cols-2">
              <div className={`bento-card p-4 md:col-span-1 space-y-2 group animate-fade-in ${isDark ? 'border-gray-800 bg-gray-900/80' : 'border-gray-200/80 bg-white/80'}`}>
                <h2 className="text-lg font-bold">About</h2>
                <p className={`text-sm leading-relaxed text-justify ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  I build modern digital solutions, and these days I am focused on generative AI. I care about clean execution, clear structure, and polished user experiences that feel practical and easy to use.
                  I enjoy turning complex problems into practical systems through clean code, strong analysis, and careful product thinking, bringing technical depth and business value to every project.
                </p>
              </div>

              <div className={`bento-card p-4 space-y-2 group flex-1 ${isDark ? 'border-gray-800 bg-gray-900/80' : 'border-gray-200/80 bg-white/80'}`}>
                <h2 className="text-lg font-bold">Experience</h2>
                <div className="relative mt-4 space-y-4">
                  <div className={`absolute left-1.5 top-1.5 bottom-2 w-px ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                  <div className="relative pl-6 group/role">
                    <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-blue-500 bg-blue-500 transition-colors"></div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-blue-600 transition-colors">Software Developer Intern</h3>
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Department of Education (DepEd) – Ozamiz City</span>
                        <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-mono ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>2026</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative pl-6 group/role">
                    <div className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 bg-white transition-colors ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-white'}`}></div>
                    <div className="space-y-1">
                      <h3 className={`text-sm font-semibold transition-colors ${isDark ? 'text-gray-100 group-hover/role:text-blue-400' : 'text-gray-900 group-hover/role:text-blue-600'}`}>Game QA Tester</h3>
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Global Beta Test Network (GBTN)</span>
                        <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-mono ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative pl-6 group/role">
                    <div className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 bg-white transition-colors ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-white'}`}></div>
                    <div className="space-y-1">
                      <h3 className={`text-sm font-semibold transition-colors ${isDark ? 'text-gray-100 group-hover/role:text-blue-400' : 'text-gray-900 group-hover/role:text-blue-600'}`}>Freelance Data Analyst</h3>
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Commission-Based Projects</span>
                        <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-mono ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects isDark={isDark} />

        <section id="skills" className="py-8">
          <div className="container">
            <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
              <div className={`bento-card p-4 ${isDark ? 'border-gray-800 bg-gray-900/80 text-gray-100' : 'border-gray-200/80 bg-white/80 text-gray-900'}`}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className={`text-xs uppercase tracking-[0.3em] ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Recent</p>
                    <h2 className="text-xl font-bold">Certifications</h2>
                  </div>
                  <button
                    type="button"
                    className={`text-xs font-semibold transition ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                    onClick={() => setShowAllCerts(true)}
                  >
                    View All
                  </button>
                </div>

                <div className="mt-4 space-y-2">
                  {certificateList.map((cert) => (
                    <CertItem key={cert.title} title={cert.title} issuer={cert.issuer} onClick={() => setSelectedCert(cert)} isDark={isDark} />
                  ))}
                </div>
              </div>

              <TechStack isDark={isDark} compact />
            </div>
          </div>
        </section>

        {showAllCerts && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm">
            <div className={`w-full max-w-6xl rounded-3xl border p-8 shadow-2xl max-h-[80vh] overflow-hidden ${isDark ? 'border-gray-800 bg-gray-950 text-gray-100' : 'border-white/10 bg-white text-gray-900'}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">All Certificates</h2>
                  <p className={`mt-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Choose a certificate to preview it closer.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAllCerts(false)}
                  className={`h-10 w-10 rounded-full border text-lg transition ${isDark ? 'border-gray-700 bg-gray-900 text-gray-200 hover:bg-gray-800' : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-100'}`}
                  aria-label="Close certificates modal"
                >
                  ×
                </button>
              </div>

              <div className="mt-6 max-h-[64vh] overflow-auto pr-2">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {certificateList.map((cert) => (
                    <button
                      key={cert.title}
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className={`overflow-hidden rounded-3xl border p-6 text-left transition hover:-translate-y-1 hover:shadow-lg ${isDark ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-white'}`}
                    >
                      <div className={`flex h-44 items-center justify-center rounded-3xl ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
                        <img src={cert.src} alt={cert.title} className="h-full w-full object-contain" />
                      </div>
                      <div className="mt-4 space-y-1">
                        <p className="text-sm font-semibold">{cert.title}</p>
                        <p className="text-xs text-gray-500">{cert.issuer}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedCert && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
            <div className={`w-full max-w-4xl rounded-3xl border p-4 shadow-2xl ${isDark ? 'border-gray-800 bg-gray-950 text-gray-100' : 'border-gray-200 bg-white text-gray-900'}`}>
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold">{selectedCert.title}</h2>
                  <p className="text-sm text-gray-500">{selectedCert.issuer}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className={`h-10 w-10 rounded-full border text-lg transition ${isDark ? 'border-gray-700 bg-gray-900 text-gray-200 hover:bg-gray-800' : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-100'}`}
                  aria-label="Close certificate preview"
                >
                  X
                </button>
              </div>
              <div className={`flex max-h-[72vh] items-center justify-center overflow-hidden rounded-2xl ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <img src={selectedCert.src} alt={selectedCert.title} className="max-h-[72vh] w-full object-contain" />
              </div>
            </div>
          </div>
        )}

        <Gallery isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
    </div>
  )
}
