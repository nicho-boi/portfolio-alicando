import Image from 'next/image'

export default function Hero({ theme, toggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <section className="pb-8 pt-10 sm:pb-12 sm:pt-14">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className={`relative h-36 w-36 shrink-0 overflow-hidden rounded-full border sm:h-40 sm:w-40 ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-100'}`}>
            <Image
              src="/Untitled%20design%20(2).png"
              alt="Jesper Nicho Alicando"
              width={160}
              height={160}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className={`text-3xl font-light tracking-tight sm:text-4xl ${isDark ? 'text-white' : 'text-gray-950'}`}>
                    Jesper Nicho Alicando
                  </h1>
                  <span
                    aria-label="Verified"
                    className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-500 text-white"
                  >
                    <CheckIcon />
                  </span>
                </div>

                <p className={`mt-2 flex items-center gap-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <LocationIcon />
                  <span>Ozamiz City, Philippines</span>
                </p>
              </div>

              <button
                type="button"
                aria-label="Toggle theme"
                aria-pressed={isDark}
                onClick={toggleTheme}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition ${isDark ? 'border-gray-800 bg-gray-900 text-gray-200 hover:bg-gray-800' : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                {isDark ? <MoonIcon /> : <SunIcon />}
              </button>
            </div>

            <div className="mt-5">
              <p className={`max-w-2xl text-base italic leading-7 sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Generative AI Engineer <span className={isDark ? 'text-gray-500' : 'text-gray-500'}>\</span> Mobile & Web Developer{' '}
                <span className={isDark ? 'text-gray-500' : 'text-gray-500'}>\</span> Data Analyst
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-9 items-center justify-center gap-2 rounded-lg px-3.5 text-sm font-medium transition hover:scale-[1.03] ${isDark ? 'bg-white text-gray-950' : 'bg-gray-950 text-white'}`}
              >
                <span className="flex w-4 shrink-0 items-center justify-center">
                  <DocumentIcon />
                </span>
                <span>View Resume</span>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&to=jesperalicando01@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-9 items-center justify-center gap-2 rounded-lg border px-3.5 text-sm font-medium transition hover:-translate-y-0.5 ${isDark ? 'border-gray-800 bg-gray-950 text-gray-100 hover:bg-gray-900' : 'border-gray-200 bg-white text-gray-800 hover:bg-gray-50'}`}
              >
                <span className="flex w-5 shrink-0 items-center justify-center">
                  <MailIcon />
                </span>
                <span>Send Email</span>
              </a>

              <a
                href="https://github.com/nicho-boi"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-9 items-center justify-center gap-2 rounded-lg border px-3.5 text-sm font-medium transition hover:-translate-y-0.5 ${isDark ? 'border-gray-800 bg-gray-950 text-gray-100 hover:bg-gray-900' : 'border-gray-200 bg-white text-gray-800 hover:bg-gray-50'}`}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="flex w-4 shrink-0 items-center justify-center">
                    <GitHubIcon />
                  </span>
                  GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/jesper-nicho/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-9 items-center justify-center gap-2 rounded-lg border px-3.5 text-sm font-medium transition hover:-translate-y-0.5 ${isDark ? 'border-gray-800 bg-gray-950 text-gray-100 hover:bg-gray-900' : 'border-gray-200 bg-white text-gray-800 hover:bg-gray-50'}`}
              >
                <span className="flex w-4 shrink-0 items-center justify-center">
                  <img src="/linkedin%20icon.jpg" alt="" className="h-4 w-4 object-contain" />
                </span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 12 4 4 8-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 12.3a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.7-5.7 1.4-1.4M4.9 19.1l1.4-1.4m0-11.4L4.9 4.9m14.2 14.2-1.4-1.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3v4m10-4v4M4.5 9h15M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.75 5.5h14.5A2.25 2.25 0 0 1 21.5 7.75v8.5a2.25 2.25 0 0 1-2.25 2.25H4.75a2.25 2.25 0 0 1-2.25-2.25v-8.5A2.25 2.25 0 0 1 4.75 5.5Zm.28 2 6.42 5.08a.9.9 0 0 0 1.1 0l6.42-5.08H5.03Z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.699-2.782.604-3.369-1.342-3.369-1.342-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.071 1.532 1.032 1.532 1.032.893 1.531 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.203 2.393.1 2.646.64.699 1.028 1.592 1.028 2.683 0 3.842-2.338 4.687-4.566 4.935.36.31.682.923.682 1.861 0 1.343-.012 2.425-.012 2.754 0 .268.18.58.688.482A10.003 10.003 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.9H3.68V20h3.26V8.9ZM5.31 4a1.89 1.89 0 1 0 0 3.78A1.89 1.89 0 0 0 5.31 4Zm15.01 9.63c0-3.05-1.63-4.47-3.8-4.47a3.28 3.28 0 0 0-2.95 1.62h-.04V8.9h-3.13V20h3.26v-5.49c0-1.45.27-2.85 2.07-2.85 1.77 0 1.79 1.66 1.79 2.94V20h3.26v-6.37h-.46Z" />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 4h7l4 4v12H7V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 4v5h4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRightIcon({ className = '' }) {
  return (
    <svg className={`h-3.5 w-3.5 shrink-0 ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
