import ProjectCard from './ProjectCard'
import { projects } from './projectData'
import ScrollReveal from './ScrollReveal'

export default function Projects({ isDark }) {
  return (
    <ScrollReveal id="projects" className="py-10">
      <div className="container space-y-6">
        <div>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-950'}`}>Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.title} project={project} isDark={isDark} />
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <a
            href="/projects"
            className={`inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition hover:scale-[1.03] ${isDark ? 'bg-white text-gray-950' : 'bg-gray-950 text-white'}`}
          >
            View all Projects <span>{'>'}</span>
          </a>
        </div>
      </div>
    </ScrollReveal>
  )
}
