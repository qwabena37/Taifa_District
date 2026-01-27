// -------- src/components/Footer.jsx --------
export function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm">
        © {new Date().getFullYear()} PCG Taifa District · All Rights Reserved
      </div>
    </footer>
  )
}