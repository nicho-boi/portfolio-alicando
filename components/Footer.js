export default function Footer({ isDark }) {
  return (
    <footer className={`mt-10 border-t py-8 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <p className={`text-xs italic ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Automating the repetitive so teams can focus on better work.
            </p>
            <p className={`flex flex-wrap items-center gap-1.5 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              <span className={isDark ? 'text-gray-300' : 'text-gray-900'}>Jesper Nicho Alicando</span>
              <span>/</span>
              <span>Generative AI Engineer</span>
              <span>/</span>
              <span>Ozamiz City, PH</span>
            </p>
          </div>

          <a
            href="#"
            className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition hover:-translate-y-0.5 ${isDark ? 'border-gray-800 text-gray-400 hover:bg-gray-900 hover:text-white' : 'border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-950'}`}
          >
            Back to top <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
