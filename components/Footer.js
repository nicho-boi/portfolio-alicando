export default function Footer({ isDark }) {
  return (
    <footer className={`mt-12 border-t py-8 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className={`container text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        © {new Date().getFullYear()} Alicando. All rights reserved.
      </div>
    </footer>
  )
}
