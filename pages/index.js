import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import TechStack from '../components/TechStack'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import CertItem from '../components/CertItem'
import NavBar from '../components/NavBar'
import Contact from '../components/Contact'
import ScrollReveal from '../components/ScrollReveal'
import FeaturedBuild from '../components/FeaturedBuild'

export default function Home() {
  const [theme, setTheme] = useState('light')
  const [showAllCerts, setShowAllCerts] = useState(false)

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

  const certificateList = [
    { title: 'AI Fundamentals', issuer: 'AI Foundations', href: 'https://coursera.org/share/68f462d843905b6f5ec0f64d027e2b49' },
    { title: 'Foundations of Business Intelligence', issuer: 'Business Intelligence', href: 'https://coursera.org/share/38259429138245ff5453cc1352032659' },
    { title: 'Automation Specialist', issuer: 'AI Automation', src: '/sunnybooth-ai-workflow.png' },
    { title: 'AI Workflow Engineer', issuer: 'Workflow Automation', src: '/sunnybooth-ai-workflow.png' },
    { title: 'Flutter & Dart', issuer: 'Mobile Development', src: '/flutterdartcert.jpg' },
    { title: 'Data Analytics', issuer: 'Analytics', src: '/Data Analytics Cert-1.png' },
  ]
  const featuredCertificates = certificateList.slice(0, 4)

  const experiences = [
    { dates: 'Jul 2026 - Present', title: 'Founder & AI Automation Developer', company: 'SunnyBooth Web App' },
    { dates: 'Jun 2026', title: 'BS Computer Science Graduate', company: 'La Salle University – Ozamiz City' },
    { dates: 'Feb 2026 – May 2026', title: 'Software & AI Developer Intern', company: 'Department of Education (DepEd) – Ozamiz City' },
    { dates: 'Sep 2025 – Feb 2026', title: 'Thesis & Research', company: 'KMASS: Kitchen Modeling & Simulation System' },
    { dates: 'Sep 2024 – Aug 2025', title: 'CRM & Workflow Automation Developer', company: 'GoHighLevel Automation Projects' },
    { dates: 'Sep 2024 – Aug 2025', title: 'AI Automation & Full-Stack Developer', company: 'BAIP – US-Based Client · Contractual · Confidential' },
    { dates: 'Feb 2024 – Jul 2024', title: 'AI Automation Developer', company: 'Local Dental Clinic · Project-Based' },
    { dates: 'Nov 2023 – Jan 2024', title: 'Workflow Automation Developer', company: 'Local Coffee Shop · Customer Feedback Automation' },
    { dates: 'Aug 2022 – Jun 2023', title: 'Business Automation & Data Assistant', company: 'Local Coffee Shop · Part-Time' },
    { dates: 'Dec 2021 - Apr 2022', title: 'Data Analyst & Visualization Specialist', company: 'Client-Based Projects' },
    { dates: 'Aug 2021 - Dec 2021', title: 'Video Editor', company: 'Client-Based Video Projects' },
    { dates: 'Jun 2020', title: 'Hello World!', company: 'Wrote my first line of code' },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'}`}>
      <main>
        <NavBar isDark={isDark} />
        <Hero theme={theme} toggleTheme={toggleTheme} />

        <ScrollReveal id="about" className="py-10">
          <div className="container">
            <section className="space-y-4">
              <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-950'}`}>About</h2>
              <p className={`max-w-2xl text-sm leading-7 sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                I turn complex and repetitive business processes into smart, reliable, and scalable automated systems. My work combines AI, workflow automation, APIs, web scraping, and data integrations using tools like n8n, Make, Zapier, GoHighLevel, Airtable, Baserow, Supabase, OpenAI, and Claude. I focus on building practical solutions that save time, streamline operations, and help businesses work smarter.
              </p>
            </section>
          </div>
        </ScrollReveal>

        <FeaturedBuild isDark={isDark} />

        <ScrollReveal className="py-10">
          <div className="container">
            <section id="experience" className="space-y-6">
              <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-950'}`}>Experience</h2>
              <div className="space-y-8">
                {experiences.map((item) => (
                  <div key={item.title} className="grid gap-2 sm:grid-cols-[150px_1fr] sm:gap-6">
                    <p className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{item.dates}</p>
                    <div className="space-y-1">
                      <h3 className={`text-base font-semibold leading-tight ${isDark ? 'text-white' : 'text-gray-950'}`}>{item.title}</h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </ScrollReveal>

        <Projects isDark={isDark} />

        <ScrollReveal id="skills" className="py-10">
          <div className="container space-y-16">
            <section className="space-y-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-950'}`}>Certifications</h2>
                </div>
                <button
                  type="button"
                  className={`text-sm font-medium transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-950'}`}
                  onClick={() => setShowAllCerts(true)}
                >
                  View All
                </button>
              </div>

              <div className="space-y-7">
                {featuredCertificates.map((cert) => (
                  <CertItem key={cert.title} title={cert.title} issuer={cert.issuer} href={cert.href} isDark={isDark} />
                ))}
              </div>
            </section>

            <TechStack isDark={isDark} compact />

            <section className="space-y-6">
              <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-950'}`}>Education</h2>
              <div className="grid gap-3 sm:grid-cols-[190px_1fr] sm:gap-7">
                <p className={`text-sm font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>2022 - 2026</p>
                <div className="space-y-1">
                  <h3 className={`text-base font-semibold leading-tight ${isDark ? 'text-white' : 'text-gray-950'}`}>Bachelor of Science in Computer Science</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>La Salle University Ozamiz, Philippines</p>
                </div>
              </div>
            </section>
          </div>
        </ScrollReveal>

        {showAllCerts && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
            <div className={`max-h-[82vh] w-full max-w-5xl overflow-hidden rounded-xl border p-6 shadow-2xl ${isDark ? 'border-gray-800 bg-gray-950 text-gray-100' : 'border-gray-200 bg-white text-gray-900'}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-light tracking-tight">All Certificates</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAllCerts(false)}
                  className={`h-10 w-10 rounded-full border text-lg transition ${isDark ? 'border-gray-700 bg-gray-900 text-gray-200 hover:bg-gray-800' : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-100'}`}
                  aria-label="Close certificates modal"
                >
                  X
                </button>
              </div>

              <div className="mt-6 max-h-[64vh] overflow-auto pr-2">
                <div className="grid gap-4 sm:grid-cols-2">
                  {certificateList.map((cert) => {
                    const Wrapper = cert.href ? 'a' : 'div'

                    return (
                    <Wrapper
                      key={cert.title}
                      {...(cert.href ? { href: cert.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className={`rounded-xl border p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${isDark ? 'border-gray-800 bg-gray-950 hover:border-gray-700 hover:bg-gray-900' : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'}`}
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-semibold">{cert.title}</p>
                        <p className="text-xs text-gray-500">{cert.issuer}</p>
                      </div>
                    </Wrapper>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        <Gallery isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
    </div>
  )
}
