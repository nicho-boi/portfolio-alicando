import Hero from '../components/Hero'
import Projects from '../components/Projects'
import TechStack from '../components/TechStack'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        <Hero />

        <section id="about" className="py-16">
          <div className="container max-w-6xl">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bento-card p-4 md:col-span-1 space-y-2 group animate-fade-in">
                <h2 className="text-lg font-bold">About</h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  I’m a software engineer who enjoys building polished digital experiences that blend thoughtful product design with reliable engineering.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  My work spans modern web applications, developer tools, and AI-powered products, with a strong focus on clarity, usability, and clean implementation.
                </p>
              </div>

              <div className="bento-card p-4 space-y-2 group flex-1">
                <h2 className="text-lg font-bold">Experience</h2>
                <div className="relative space-y-4 mt-4">
                  <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-gray-300"></div>
                  <div className="relative pl-6 group/role">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-blue-500 bg-blue-500 transition-colors"></div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-blue-600 transition-colors">AI Engineer</h3>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs text-gray-600">Standard Chartered</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-gray-100">2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative pl-6 group/role">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-gray-300 bg-white group-hover/role:bg-blue-500 transition-colors"></div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold group-hover/role:text-blue-600 transition-colors">AI Ops Engineer</h3>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs text-gray-600">Centre of Excellence for GenAI, Cambridge</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-gray-100">2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative pl-6 group/role">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-gray-300 bg-white group-hover/role:bg-blue-500 transition-colors"></div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold group-hover/role:text-blue-600 transition-colors">Senior Full-Stack Developer</h3>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs text-gray-600">Core Technology, Cambridge</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-gray-100">2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <TechStack />
        <Gallery />

        <section id="contact" className="py-16">
          <div className="container max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Contact</p>
            <h2 className="mt-3 text-3xl font-bold">Let’s build something meaningful.</h2>
            <p className="mt-5 text-lg text-gray-700">Email me at <a href="mailto:you@example.com" className="text-blue-600 underline">you@example.com</a> or reach out to discuss your next product.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
