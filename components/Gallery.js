import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Gallery({ isDark }) {
  const images = [
    { src: '/gallery/%20(1).JPEG' },
    { src: '/gallery/%20(1).jpg' },
    { src: '/gallery/%20(2).jpg' },
    { src: '/gallery/%20(3).jpg' },
    { src: '/gallery/1.jpg' },
    { src: '/gallery/2.jpg' },
    { src: '/gallery/3.jpg' },
    { src: '/gallery/4.jpg' },
    { src: '/gallery/5.jpg' },
    { src: '/gallery/6.jpg' },
    { src: '/gallery/7.jpg' },
  ]

  const pageSize = 6
  const pageCount = Math.ceil(images.length / pageSize)
  const [page, setPage] = useState(0)

  const previousPage = () => setPage((current) => Math.max(current - 1, 0))
  const nextPage = () => setPage((current) => Math.min(current + 1, pageCount - 1))

  const currentImages = images.slice(page * pageSize, page * pageSize + pageSize)

  return (
    <ScrollReveal id="gallery" className="py-10">
      <div className="container space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className={`section-title ${isDark ? 'text-white' : 'text-gray-950'}`}>Gallery</h2>
          </div>

          <div className="flex shrink-0 items-center gap-2 text-sm font-medium">
            <button
              type="button"
              onClick={previousPage}
              disabled={page === 0}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition ${isDark ? 'border-gray-800 bg-gray-950 text-white hover:bg-gray-900' : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-100'} ${page === 0 ? 'cursor-not-allowed opacity-40' : ''}`}
              aria-label="Previous page"
            >
              {'<'}
            </button>
            <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{page + 1} / {pageCount}</span>
            <button
              type="button"
              onClick={nextPage}
              disabled={page === pageCount - 1}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition ${isDark ? 'border-gray-800 bg-gray-950 text-white hover:bg-gray-900' : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-100'} ${page === pageCount - 1 ? 'cursor-not-allowed opacity-40' : ''}`}
              aria-label="Next page"
            >
              {'>'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {currentImages.map((item, index) => (
            <div key={`${item.src}-${index}`} className={`overflow-hidden rounded-xl border ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
              <img src={item.src} alt={`Gallery item ${page * pageSize + index + 1}`} className="aspect-[4/3] h-full w-full object-cover transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
