export default function CertItem({ title, issuer, onClick, isDark }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`grid w-full gap-2 py-1 text-left transition sm:grid-cols-[150px_1fr_auto] sm:items-start sm:gap-6 ${
        isDark ? 'text-gray-100 hover:text-white' : 'text-gray-900 hover:text-gray-950'
      }`}
    >
      <p className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{issuer}</p>
      <div className="min-w-0">
        <p className={`text-base font-semibold leading-tight ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{title}</p>
        <p className={`mt-1 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Preview certificate</p>
      </div>
      <span className="hidden text-sm text-gray-400 sm:block">{'>'}</span>
    </button>
  )
}
