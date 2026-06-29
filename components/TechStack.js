export default function TechStack(){
  const stacks = {
    Frontend: ['JavaScript','TypeScript','React','Next.js','Vue.js','Tailwind CSS'],
    Backend: ['Node.js','Python','PHP','Laravel','PostgreSQL','MongoDB'],
    DevOps: ['AWS','Docker','Kubernetes','GitHub Actions']
  }

  return (
    <section id="tech" className="py-10">
      <div className="container">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(stacks).map(([k,v])=> (
            <div key={k} className="p-4 border rounded">
              <h3 className="font-semibold">{k}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {v.map(item=> (
                  <span key={item} className="px-3 py-1 border rounded text-sm">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
