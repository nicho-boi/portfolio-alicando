export default function CertItem({ title, issuer }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-900">
      <div>
        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{title}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{issuer}</p>
      </div>
      <span className="text-sm text-gray-400">›</span>
    </div>
  )
}
