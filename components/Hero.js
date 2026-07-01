import Image from 'next/image'

export default function Hero({ theme, toggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <section className="py-5">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <div className={`relative mx-auto h-[185px] w-[160px] shrink-0 overflow-hidden self-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <Image
              src="/finalpic.jpg"
              alt="Jesper Nicho Alicando"
              width={160}
              height={200}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 md:flex md:h-[170px] md:flex-col md:justify-between">
            <div className="flex items-start justify-between gap-4 pt-3">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className={`text-2xl font-bold tracking-normal md:text-3xl ${isDark ? 'text-white' : 'text-black'}`}>
                    Jesper Nicho Alicando
                  </h1>
                  <span
                    aria-label="Verified"
                    className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-500 text-white"
                  >
                    <CheckIcon />
                  </span>
                </div>

                <p className={`mt-1 flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-black'}`}>
                  <LocationIcon />
                  <span>Ozamiz City, Philippines</span>
                </p>
              </div>

              <button
                type="button"
                aria-label="Toggle theme"
                aria-pressed={isDark}
                onClick={toggleTheme}
                className={`hidden h-7 w-12 items-center justify-center border md:inline-flex ${isDark ? 'border-gray-700 bg-gray-800 text-gray-200' : 'border-gray-300 bg-gray-200 text-gray-800'}`}
              >
                {isDark ? <MoonIcon /> : <SunIcon />}
              </button>
            </div>

            <div className="mt-3">
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-200' : 'text-black'}`}>
                Data Analyst <span className={isDark ? 'text-gray-500' : 'text-gray-500'}>\</span> Mobile Developer{' '}
                <span className={isDark ? 'text-gray-500' : 'text-gray-500'}>\</span> Web Developer
              </p>
            </div>

            <div className="mt-4 grid gap-2 md:grid-cols-[190px_145px_1fr]">
              <a
                href="/resume.pdf"
                download
                className={`inline-flex h-9 items-center justify-start gap-2 whitespace-nowrap px-3 text-sm font-bold ${isDark ? 'bg-white text-gray-900' : 'bg-black text-white'}`}
              >
                <span className="flex w-4 shrink-0 items-center justify-center">
                  <DocumentIcon />
                </span>
                <span>Download Resume</span>
                <ChevronRightIcon className="ml-auto" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&to=jesperalicando01@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-9 items-center justify-start gap-2 whitespace-nowrap border px-3 text-sm font-semibold shadow-sm ${isDark ? 'border-gray-700 bg-gray-900 text-gray-100' : 'border-gray-100 bg-white text-black'}`}
              >
                <span className="flex w-4 shrink-0 items-center justify-center">
                  <MailIcon />
                </span>
                <span>Send Email</span>
              </a>

              <a
                href="https://github.com/nicho-boi"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-9 items-center justify-between gap-2 whitespace-nowrap border px-3 text-sm font-semibold shadow-sm ${isDark ? 'border-gray-700 bg-gray-900 text-gray-100' : 'border-gray-100 bg-white text-black'}`}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="flex w-4 shrink-0 items-center justify-center">
                    <GitHubIcon />
                  </span>
                  GitHub
                </span>
                <ChevronRightIcon />
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
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="m5 7 7 6 7-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.699-2.782.604-3.369-1.342-3.369-1.342-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.071 1.532 1.032 1.532 1.032.893 1.531 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.203 2.393.1 2.646.64.699 1.028 1.592 1.028 2.683 0 3.842-2.338 4.687-4.566 4.935.36.31.682.923.682 1.861 0 1.343-.012 2.425-.012 2.754 0 .268.18.58.688.482A10.003 10.003 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
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
