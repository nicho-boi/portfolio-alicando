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
          <div className="container max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">About</p>
            <h2 className="mt-3 text-3xl font-bold">I’m a full-stack engineer building modern apps, AI-powered experiences, and developer tools.</h2>
            <p className="mt-5 text-lg text-gray-700 leading-8">I work at the intersection of product, engineering, and content creation. My focus is on crafting high-quality web experiences with JavaScript, Python, and cloud-native workflows.</p>
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
