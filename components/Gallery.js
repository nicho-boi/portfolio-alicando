import { useState } from 'react'

export default function Gallery({ isDark }) {
  const images = [
    { src: '/gallery/1.jpg' },
    { src: '/gallery/2.jpg' },
    { src: '/gallery/3.jpg' },
    { src: '/gallery/4.jpg' },
    { src: '/gallery/5.jpg' },
    { src: '/gallery/6.jpg' },
    { src: '/gallery/7.jpg' },
  ]

  const pageSize = 5
  const pageCount = Math.ceil(images.length / pageSize)
  const [page, setPage] = useState(0)

  const previousPage = () => setPage((current) => Math.max(current - 1, 0))
  const nextPage = () => setPage((current) => Math.min(current + 1, pageCount - 1))

  const currentImages = images.slice(page * pageSize, page * pageSize + pageSize)

  return (
    <section id="gallery" className="py-10">
      <div className="container">
        <div className={`bento-card p-3 ${isDark ? 'border-gray-800 bg-gray-900/80 text-gray-100' : 'border-gray-200/80 bg-white/80 text-gray-900'}`}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <h2 className="text-2xl font-bold">Gallery</h2>
            </div>

            <div className="flex shrink-0 items-center gap-1 rounded-full border px-2 py-1 text-sm font-semibold">
              <button
                type="button"
                onClick={previousPage}
                disabled={page === 0}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition ${isDark ? 'border-gray-700 bg-gray-900 text-white hover:bg-gray-800' : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-100'} ${page === 0 ? 'cursor-not-allowed opacity-40' : ''}`}
                aria-label="Previous page"
              >
                ‹
              </button>
              <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{page + 1} / {pageCount}</span>
              <button
                type="button"
                onClick={nextPage}
                disabled={page === pageCount - 1}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition ${isDark ? 'border-gray-700 bg-gray-900 text-white hover:bg-gray-800' : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-100'} ${page === pageCount - 1 ? 'cursor-not-allowed opacity-40' : ''}`}
                aria-label="Next page"
              >
                ›
              </button>
            </div>
          </div>

          <div className="mt-4 grid gap-2 grid-cols-2 sm:grid-cols-3 xl:grid-cols-5">
            {currentImages.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className={`overflow-hidden rounded-3xl bg-transparent transition duration-200 ${isDark ? 'bg-gray-950' : 'bg-white'}`}
              >
                <div className={`flex h-28 items-center justify-center p-2 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
                  <img src={item.src} alt={`Gallery item ${page * pageSize + index + 1}`} className="h-full w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
