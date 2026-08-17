import ScrollReveal from './ScrollReveal'

export default function Contact({ isDark }) {
  const cards = [
    {
      label: 'Email',
      title: 'jesperalicando01@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&to=jesperalicando01@gmail.com',
      Icon: MailIcon,
    },
    {
      label: "Let's Talk",
      title: 'Schedule a Call',
      href: 'https://www.linkedin.com/in/jesper-nicho/',
      Icon: CalendarIcon,
    },
  ]

  return (
    <ScrollReveal id="contact" className="py-10">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-950'}`}>Let's work together.</h2>
            <p className={`max-w-xl text-base leading-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Available for freelance development, generative AI integrations, data analysis, and polished web experiences. I am open to helping teams turn ideas into clear, practical digital solutions.
            </p>
          </div>

          <div className="grid gap-4 lg:pt-10">
            {cards.map(({ label, title, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between gap-3 rounded-xl border p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${isDark ? 'border-gray-800 bg-gray-950 text-gray-100' : 'border-gray-200 bg-white text-gray-950'}`}
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className={`block text-[10px] font-bold uppercase tracking-[0.14em] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</span>
                    <span className="block truncate text-sm font-medium">{title}</span>
                  </span>
                </div>
                <span className={`text-base transition-transform group-hover:translate-x-1 ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>{'>'}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="m5 7 7 6 7-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3v4m10-4v4M4.5 9h15M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
