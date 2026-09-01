export default function FeaturedBuild({ isDark }) {
  const tech = ['n8n', 'Google Gemini', 'Claude', 'Supabase', 'Baserow', 'Railway', 'Gmail', 'Next.js']
  const previewSrc = '/sunnybooth-ai-automation-preview.png'
  const chipClass = isDark ? 'border-gray-700 bg-gray-900 text-gray-300' : 'border-gray-200 bg-white text-gray-500'

  return (
    <section id="featured-build" className="py-10">
      <div className="container">
        <a
          href="/projects/sunnybooth-ai-feedback-automation"
          className={`group grid overflow-hidden rounded-xl border border-dashed p-2 transition hover:-translate-y-1 hover:shadow-lg md:grid-cols-[0.95fr_1.05fr] ${
            isDark ? 'border-gray-800 bg-gray-950 text-gray-100' : 'border-gray-200 bg-white text-gray-950'
          }`}
        >
          <div className={`flex min-h-[240px] items-center justify-center overflow-hidden rounded-lg border ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
            <img
              src={previewSrc}
              alt="SunnyBooth AI Feedback Automation preview"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
                event.currentTarget.nextElementSibling.style.display = 'flex'
              }}
            />
            <div className={`hidden h-full min-h-[240px] w-full flex-col items-center justify-center gap-3 p-6 text-center ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em]">Automation Preview</span>
              <span className="text-sm">Place screenshot at public/sunnybooth-ai-automation-preview.png</span>
            </div>
          </div>

          <div className="flex flex-col justify-center p-5 sm:p-6">
            <p className={`eyebrow ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Featured Build</p>
            <h2 className="mt-3 text-2xl font-light tracking-tight sm:text-3xl">SunnyBooth AI Feedback Automation</h2>
            <p className={`mt-3 text-sm font-medium leading-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              AI-powered feedback analysis, issue tracking, alerts, and automated weekly reporting.
            </p>
            <p className={`mt-4 text-sm leading-7 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              An intelligent feedback management system that automatically analyzes user feedback, identifies recurring issues, tracks bugs, reopens resolved problems when they return, sends priority alerts, and generates weekly AI-powered reports.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span key={item} className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${chipClass}`}>
                  {item}
                </span>
              ))}
            </div>

            <span className={`mt-6 inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition group-hover:scale-[1.03] ${isDark ? 'bg-white text-gray-950' : 'bg-gray-950 text-white'}`}>
              View Workflow <span>{'>'}</span>
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
