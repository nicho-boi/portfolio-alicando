export default function Gallery() {
  const images = ['/gallery-1.svg','/gallery-2.svg','/gallery-3.svg','/gallery-4.svg']

  return (
    <section id="gallery" className="py-10">
      <div className="container">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={src} className="overflow-hidden rounded border bg-gray-50">
              <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-40 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
