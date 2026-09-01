export default function CertItem({ title, issuer, isDark }) {
  return (
    <div
      className={`grid w-full gap-2 py-1 text-left sm:grid-cols-[150px_1fr] sm:items-start sm:gap-6 ${
        isDark ? 'text-gray-100' : 'text-gray-900'
      }`}
    >
      <p className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{issuer}</p>
      <div className="min-w-0">
        <p className={`text-base font-semibold leading-tight ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{title}</p>
      </div>
    </div>
  )
}
