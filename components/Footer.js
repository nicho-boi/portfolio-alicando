export default function Footer(){
  return (
    <footer className="py-8 border-t mt-12">
      <div className="container text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Alicando. All rights reserved.
      </div>
    </footer>
  )
}
