import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <div className="relative h-36 w-full shrink-0 overflow-hidden bg-gray-100 md:h-[170px] md:w-[160px]">
            <Image
              src="/finalpic.jpg"
              alt="Jesper Nicho Alicando"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex-1 md:flex md:h-[170px] md:flex-col md:justify-between">
            <div className="flex items-start justify-between gap-4 pt-3">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-extrabold tracking-normal text-black md:text-21xl">
                    Jesper Nicho Alicando
                  </h1>
                  <span
                    aria-label="Verified"
                    className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-500 text-white"
                  >
                    <CheckIcon />
                  </span>
                </div>

                <p className="mt-1 flex items-center gap-2 text-sm text-black">
                  <LocationIcon />
                  <span>Ozamiz City, Philippines</span>
                </p>
              </div>

              <button
                type="button"
                aria-label="Toggle theme"
                className="hidden h-7 w-12 items-center justify-center border border-gray-300 bg-gray-200 text-gray-800 md:inline-flex"
              >
                <SunIcon />
              </button>
            </div>

            <div className="mt-3">
              <p className="text-base text-black md:text-lg">
                Data Analyst <span className="text-gray-500">\</span> Mobile Developer{' '}
                <span className="text-gray-500">\</span> Web Developer
              </p>
            </div>

            <div className="mt-4 grid gap-2 md:grid-cols-[160px_145px_1fr]">
              <a
                href="#contact"
                className="inline-flex h-9 items-center justify-start gap-2 whitespace-nowrap bg-black px-3 text-sm font-bold text-white"
              >
                <span className="flex w-4 shrink-0 items-center justify-center">
                  <CalendarIcon />
                </span>
                <span>Schedule a Call</span>
                <ChevronRightIcon className="ml-auto" />
              </a>

              <a
                href="mailto:you@example.com"
                className="inline-flex h-9 items-center justify-start gap-2 whitespace-nowrap border border-gray-100 bg-white px-3 text-sm font-semibold text-black shadow-sm"
              >
                <span className="flex w-4 shrink-0 items-center justify-center">
                  <MailIcon />
                </span>
                <span>Send Email</span>
              </a>

              <a
                href="#about"
                className="inline-flex h-9 items-center justify-between gap-2 whitespace-nowrap border border-gray-100 bg-white px-3 text-sm font-semibold text-black shadow-sm"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="flex w-4 shrink-0 items-center justify-center">
                    <DocumentIcon />
                  </span>
                  Read my blog
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
