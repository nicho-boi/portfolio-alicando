import { useEffect, useState } from 'react'

const techBadges = ['n8n', 'GoHighLevel', 'Supabase', 'React', 'Next.js', 'JavaScript', 'REST APIs', 'Webhooks', 'AI Agents']

const workflows = [
  {
    title: 'Business Acquisition Intelligence Program (BAIP)',
    stack: 'React / Next.js - Lovable - Claude Code - Supabase - n8n',
    img: '/projects/automation-systems/baip-dashboard.png',
    desc: 'A full-stack business acquisition intelligence platform designed to centralize business opportunities, lead research, deal management, outreach, and acquisition workflows.',
    highlights: [
      'Business listing dashboard for viewing and managing acquisition opportunities.',
      'Lead scoring and CRM-style interface for tracking deal stages and contacts.',
      'AI-generated research and business intelligence summaries.',
      'Deal workspace for managing acquisition activity and outreach.',
      'Frontend integration with automation workflows through APIs and webhooks.',
    ],
    flow: ['Broker Sources', 'Data Collection', 'AI Research & Scoring', 'Supabase', 'BAIP Dashboard', 'Deal Management & Outreach'],
  },
  {
    title: 'Business Acquisition Automation Backend',
    stack: 'n8n - Apify - OpenAI - Supabase - Tavily - Gmail API',
    img: '/projects/automation-systems/baip-n8n-backend.png',
    desc: 'The automation and orchestration layer powering the acquisition intelligence platform.',
    note: 'Workflow shown at a high level. Sensitive implementation details, credentials, endpoints, and business-specific logic are intentionally not displayed.',
    highlights: [
      'Collects and processes business listings from multiple sources.',
      'Cleans, parses, and deduplicates incoming business data.',
      'Stores structured acquisition data in Supabase.',
      'Uses AI-assisted research and enrichment for lead intelligence.',
      'Supports business scoring and prioritization workflows.',
      'Connects external services through APIs and webhooks.',
      'Supports automated outreach and email-related workflows.',
    ],
    flow: ['Business Sources', 'Scraping / Collection', 'n8n Orchestration', 'Clean + Validate + Deduplicate', 'AI Research / Enrichment', 'Supabase', 'BAIP Dashboard / Outreach'],
  },
]

const ghlWorkflows = [
  {
    title: 'WhatsApp Automation',
    img: '/projects/automation-systems/ghl-whatsapp-automation.png',
    desc: 'Multi-branch WhatsApp workflow designed to process incoming conversations and route contacts through different communication paths.',
    highlights: ['Multi-path conversation routing', 'Intent-based workflow branches', 'Contact and tag management', 'Automated response sequences', 'Timeout and fallback handling', 'CRM workflow integration'],
  },
  {
    title: 'Automated Scheduling System',
    img: '/projects/automation-systems/ghl-scheduling-system.png',
    desc: 'CRM scheduling workflow that routes contacts according to business rules such as location, language, schedule, and appointment availability.',
    highlights: ['Location-based routing', 'Language detection and routing', 'Dynamic contact tagging', 'Weekly scheduling logic', 'Automated appointment workflow', 'Multiple scheduling branches'],
  },
  {
    title: 'EDP Workshop Check-In Processor',
    img: '/projects/automation-systems/ghl-workshop-checkin.png',
    desc: 'Multi-branch CRM workflow for processing workshop participants and routing contacts through check-in and qualification logic.',
    highlights: ['Workshop-type routing', 'English / Spanish workflow paths', 'Contact qualification logic', 'Dynamic tag assignment', 'Opportunity creation', 'Webhook handoffs', 'Multi-branch conditional processing'],
  },
]

const capabilities = ['AI Automation', 'Workflow Orchestration', 'CRM Automation', 'API Integration', 'Webhooks', 'AI Agents', 'Database Integration', 'Conditional Routing', 'Lead Management', 'Business Process Automation', 'Automated Outreach', 'Scheduling Automation', 'Error Handling', 'Data Transformation']

export default function AutomationSystemsPage() {
  const [theme, setTheme] = useState('light')
  const [lightbox, setLightbox] = useState(null)
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

  useEffect(() => {
    if (!lightbox) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setLightbox(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightbox])

  const sectionTitle = isDark ? 'text-white' : 'text-gray-950'
  const muted = isDark ? 'text-gray-400' : 'text-gray-500'
  const card = isDark ? 'border-gray-800 bg-gray-950 text-gray-100' : 'border-gray-200 bg-white text-gray-950'
  const soft = isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'
  const chip = isDark ? 'border-gray-700 bg-gray-900 text-gray-300' : 'border-gray-200 bg-white text-gray-500'

  return (
    <main className={`min-h-screen py-8 transition-colors duration-300 ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'}`}>
      <div className="container space-y-14">
        <a href="/" className={`inline-flex items-center gap-2 text-xs transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-950'}`}>
          <span>{'<'}</span> Back to Home
        </a>

        <section className="space-y-5">
          <p className={`eyebrow ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Automation Systems</p>
          <div className="space-y-3">
            <h1 className={`text-3xl font-light tracking-tight sm:text-4xl ${sectionTitle}`}>AI & Business Automation Systems</h1>
            <p className={`max-w-2xl text-base leading-7 ${muted}`}>
              End-to-end automation systems combining AI, workflow orchestration, CRM automation, databases, APIs, and full-stack applications.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((item) => <Badge key={item} label={item} className={chip} />)}
          </div>
        </section>

        {workflows.map((workflow) => (
          <WorkflowSection key={workflow.title} workflow={workflow} card={card} soft={soft} chip={chip} muted={muted} sectionTitle={sectionTitle} onImageClick={setLightbox} />
        ))}

        <section className="space-y-6">
          <div>
            <h2 className={`section-title ${sectionTitle}`}>GoHighLevel Workflow Automation Suite</h2>
            <p className={`mt-3 max-w-2xl text-sm leading-7 ${muted}`}>
              A collection of CRM automation workflows designed for customer communication, scheduling, contact routing, tagging, and operational workflow management.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {ghlWorkflows.map((workflow) => (
              <article key={workflow.title} className={`rounded-xl border border-dashed p-3 ${card}`}>
                <button type="button" onClick={() => setLightbox(workflow.img)} className={`block h-36 w-full overflow-hidden rounded-lg border ${soft}`} aria-label={`Expand ${workflow.title} screenshot`}>
                  <img src={workflow.img} alt={workflow.title} className="h-full w-full object-contain" />
                </button>
                <div className="p-1 pt-4">
                  <h3 className="text-sm font-semibold">{workflow.title}</h3>
                  <p className={`mt-2 text-sm leading-6 ${muted}`}>{workflow.desc}</p>
                  <ul className={`mt-3 space-y-1 text-xs leading-5 ${muted}`}>
                    {workflow.highlights.slice(0, 4).map((item) => <li key={item}>- {item}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CaseSection title="How the Systems Connect" isDark={isDark}>
          <ArchitectureDiagram items={['Web Applications / CRM', 'APIs & Webhooks', 'n8n', 'AI / Business Logic', 'Databases / CRM Platforms', 'Alerts / Outreach / Reporting']} soft={soft} muted={muted} />
          <p>
            These systems demonstrate an automation-first architecture where user-facing applications, CRM platforms, AI services, databases, and external APIs communicate through orchestrated workflows.
          </p>
        </CaseSection>

        <section className="space-y-6">
          <h2 className={`section-title ${sectionTitle}`}>Key Capabilities</h2>
          <div className="flex flex-wrap gap-2">
            {capabilities.map((item) => <Badge key={item} label={item} className={chip} />)}
          </div>
        </section>

        <div className="flex justify-center border-t pt-8 border-gray-200 dark:border-gray-800">
          <a
            href="#"
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition hover:-translate-y-0.5 ${isDark ? 'border-gray-800 text-gray-400 hover:bg-gray-900 hover:text-white' : 'border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-950'}`}
          >
            Back to top <span>↑</span>
          </a>
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onMouseDown={() => setLightbox(null)}>
          <img src={lightbox} alt="Expanded automation system screenshot" className="max-h-[92vh] max-w-[96vw] rounded-xl object-contain" onMouseDown={(event) => event.stopPropagation()} />
        </div>
      )}
    </main>
  )
}

function WorkflowSection({ workflow, card, soft, chip, muted, sectionTitle, onImageClick }) {
  return (
    <section className="space-y-5">
      <div>
        <h2 className={`section-title ${sectionTitle}`}>{workflow.title}</h2>
        <p className={`mt-2 text-xs font-medium uppercase tracking-[0.16em] ${muted}`}>{workflow.stack}</p>
      </div>
      <button type="button" onClick={() => onImageClick(workflow.img)} className={`block w-full overflow-hidden rounded-xl border border-dashed p-2 ${card}`} aria-label={`Expand ${workflow.title} screenshot`}>
        <img src={workflow.img} alt={workflow.title} className="max-h-[460px] w-full rounded-lg object-contain" />
      </button>
      {workflow.note && <p className={`text-xs leading-5 ${muted}`}>{workflow.note}</p>}
      <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
        <div className={`space-y-4 text-sm leading-7 sm:text-base ${muted}`}>
          <p>{workflow.desc}</p>
          <ul className="space-y-2">
            {workflow.highlights.map((item) => <li key={item}>- {item}</li>)}
          </ul>
        </div>
        <div className={`rounded-xl border border-dashed p-4 ${soft}`}>
          <ArchitectureDiagram items={workflow.flow} soft={chip} muted={muted} />
        </div>
      </div>
    </section>
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

function ArchitectureDiagram({ items, soft, muted }) {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={item}>
          <div className={`rounded-lg border border-dashed px-3 py-2 text-center text-xs font-medium ${soft}`}>{item}</div>
          {index < items.length - 1 && <div className={`py-1 text-center text-xs ${muted}`}>↓</div>}
        </div>
      ))}
    </div>
  )
}

function Badge({ label, className }) {
  return <span className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${className}`}>{label}</span>
}
