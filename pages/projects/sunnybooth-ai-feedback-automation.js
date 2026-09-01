import { useEffect, useState } from 'react'

const techBadges = ['n8n', 'Google Gemini', 'Claude', 'Supabase', 'Baserow', 'Railway', 'Gmail', 'Next.js']

const workflowSteps = [
  'User Feedback',
  'n8n Webhook',
  'Google Gemini',
  'AI Classification & Summarization',
  'Supabase + Baserow',
  'Existing Issue?',
  'Update Issue / Create Issue',
  'Reopen / Priority Detection',
  'Email Alerts',
  'Weekly AI Analysis',
  'Weekly Gmail Report',
]

const features = [
  ['AI Feedback Classification', 'Turns natural language feedback into structured issue data.'],
  ['Automatic Priority Detection', 'Flags urgent bugs and important feedback quickly.'],
  ['Duplicate Issue Detection', 'Matches recurring reports against existing tracked issues.'],
  ['SB-xxx Issue ID Generation', 'Creates consistent SunnyBooth issue identifiers.'],
  ['Recurring Issue Tracking', 'Updates report counts and last reported dates.'],
  ['Automatic Issue Reopening', 'Reopens resolved issues when users report them again.'],
  ['High-Priority Email Alerts', 'Sends alerts when serious issues need attention.'],
  ['Sentiment Analysis', 'Reads feedback tone to understand user experience.'],
  ['Weekly AI Reports', 'Summarizes feedback patterns on a weekly schedule.'],
  ['AI-Generated Recommendations', 'Turns raw feedback into suggested next actions.'],
  ['Cloud-Hosted Automation', 'Runs the automation reliably through hosted workflow tools.'],
]

const stack = [
  ['n8n', 'workflow orchestration'],
  ['Google Gemini', 'AI classification and analysis'],
  ['Supabase', 'raw feedback storage'],
  ['Baserow', 'structured issue tracking'],
  ['Gmail', 'automated notifications and reports'],
  ['Railway', 'cloud hosting for n8n'],
  ['Next.js', 'SunnyBooth web application'],
]

export default function SunnyBoothCaseStudy() {
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

  const sectionTitle = isDark ? 'text-white' : 'text-gray-950'
  const muted = isDark ? 'text-gray-400' : 'text-gray-500'
  const card = isDark ? 'border-gray-800 bg-gray-950 text-gray-100' : 'border-gray-200 bg-white text-gray-950'
  const chip = isDark ? 'border-gray-700 bg-gray-900 text-gray-300' : 'border-gray-200 bg-white text-gray-500'

  return (
    <main className={`min-h-screen py-8 transition-colors duration-300 ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'}`}>
      <div className="container space-y-14">
        <a href="/" className={`inline-flex items-center gap-2 text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-950'}`}>
          <span>{'<'}</span> Back to Home
        </a>

        <section className="space-y-5">
          <p className={`eyebrow ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Workflow</p>
          <div className="space-y-3">
            <h1 className={`text-3xl font-light tracking-tight sm:text-4xl ${sectionTitle}`}>SunnyBooth AI Feedback Automation</h1>
            <p className={`max-w-2xl text-base leading-7 ${muted}`}>AI-powered customer feedback and issue management system.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((item) => (
              <span key={item} className={`rounded-full border px-3 py-1 text-xs font-medium ${chip}`}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <CaseSection title="The Problem" isDark={isDark}>
          <p>
            As SunnyBooth receives user feedback, manually reviewing every submission, identifying duplicate bugs, maintaining issue records, tracking recurring problems, and preparing reports becomes inefficient. The goal was to create a system capable of automatically processing this feedback while keeping important problems visible.
          </p>
        </CaseSection>

        <CaseSection title="The Solution" isDark={isDark}>
          <p>
            I designed an automated system using n8n and Google Gemini to receive feedback from SunnyBooth, classify it with AI, store raw submissions, check whether issues already exist, update recurring problems, create new tracked issues, generate SB-xxx issue IDs, detect priority bugs, reopen resolved issues when they return, send email alerts, and generate weekly AI-powered reports.
          </p>
        </CaseSection>

        <section className="space-y-6">
          <h2 className={`section-title ${sectionTitle}`}>How It Works</h2>
          <div className="grid gap-3">
            {workflowSteps.map((step, index) => (
              <div key={step} className="grid gap-3">
                <div className={`rounded-xl border border-dashed p-4 text-sm font-medium ${card}`}>
                  {step}
                </div>
                {index < workflowSteps.length - 1 && <div className={`pl-4 text-sm ${muted}`}>↓</div>}
              </div>
            ))}
          </div>
        </section>

        <CaseSection title="Real-Time Feedback Automation" isDark={isDark}>
          <p>
            When feedback is submitted, n8n receives it through a webhook. Google Gemini converts the user's natural-language feedback into structured information such as issue, category, priority, and summary. The raw feedback is stored in Supabase, then the workflow searches the Baserow issue tracker.
          </p>
          <p>
            If the issue already exists, the automation increments the report count, updates the last reported date, preserves the current status, and detects repeated issues. If the issue was previously resolved, it changes the status to reopened, clears the resolved date, and sends an alert. For new issues, it generates the next SB-xxx ID, creates the issue, evaluates priority, and sends an alert when necessary.
          </p>
        </CaseSection>

        <CaseSection title="Weekly AI Reporting" isDark={isDark}>
          <p>
            Every week, n8n retrieves recent raw feedback from Supabase and tracked issue information from Baserow, aggregates both datasets, and sends the combined data to Google Gemini. Gemini analyzes categories, sentiment, priorities, recurring problems, reopened issues, feature requests, and positive feedback, then produces recommended actions. Gmail automatically sends the formatted weekly report.
          </p>
        </CaseSection>

        <section className="space-y-6">
          <h2 className={`section-title ${sectionTitle}`}>Key Automation Features</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(([title, desc]) => (
              <div key={title} className={`rounded-xl border border-dashed p-4 ${card}`}>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className={`mt-2 text-sm leading-6 ${muted}`}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={`section-title ${sectionTitle}`}>Tech Stack</h2>
          <div className="grid gap-3">
            {stack.map(([name, role]) => (
              <div key={name} className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-6">
                <p className={`text-sm font-semibold ${sectionTitle}`}>{name}</p>
                <p className={`text-sm leading-6 ${muted}`}>{role}</p>
              </div>
            ))}
          </div>
        </section>

        <CaseSection title="Outcome" isDark={isDark}>
          <p>
            The automation reduces manual feedback processing, keeps recurring bugs organized, prevents duplicate issue records, surfaces reopened and high-priority problems, converts raw feedback into actionable product insights, and provides weekly visibility into user feedback without inventing extra reporting work for the team.
          </p>
        </CaseSection>
      </div>
    </main>
  )
}

function CaseSection({ title, isDark, children }) {
  return (
    <section className="space-y-4">
      <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-950'}`}>{title}</h2>
      <div className={`space-y-4 text-sm leading-7 sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{children}</div>
    </section>
  )
}
