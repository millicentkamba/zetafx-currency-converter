{/* this is the header for ZETAFX */}

function Header() {
  return (
    <header className="bg-blue-600 border-b border-blue-700 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">

        <span className="text-xl font-bold text-white">ZetaFX</span>

        <nav className="flex gap-6">
          <a href="#" className="text-white hover:text-blue-200 text-sm font-medium">Home</a>
          <a href="#converter" className="text-white hover:text-blue-200 text-sm font-medium">Converter</a>
          <a href="#about" className="text-white hover:text-blue-200 text-sm font-medium">About</a>
        </nav>

      </div>
    </header>
  )
}

export default Header