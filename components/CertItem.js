export default function CertItem({ title, issuer, onClick, isDark }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
        isDark ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div>
        <p className={`text-sm font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{title}</p>
        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{issuer}</p>
      </div>
      <span className="text-sm text-gray-400">{'>'}</span>
    </button>
  )
}
