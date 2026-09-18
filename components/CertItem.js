export default function CertItem({ title, issuer, href, isDark }) {
  const Wrapper = href ? 'a' : 'div'
  const wrapperProps = href
    ? {
        href,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`grid w-full gap-2 rounded-lg px-2 py-2 text-left transition duration-200 hover:translate-x-1 sm:grid-cols-[150px_1fr_auto] sm:items-start sm:gap-6 ${
        isDark ? 'text-gray-100 hover:bg-gray-900 hover:text-white' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-950'
      }`}
    >
      <p className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{issuer}</p>
      <div className="min-w-0">
        <p className={`text-base font-semibold leading-tight ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{title}</p>
      </div>
      {href && <span className="hidden text-sm text-gray-400 sm:block">{'>'}</span>}
    </Wrapper>
  )
}
