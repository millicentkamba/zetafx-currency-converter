{/* this is the header for ZETAFX */}



function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">   {/* CENTERS THE SCREEN */}

        <span className="text-xl font-bold text-blue-600">ZetaFX</span>   {/* LOGO NAME */}

        <nav className="flex gap-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 text-sm font-medium">Home</a>
          <a href="#converter" className="text-gray-600 hover:text-blue-600 text-sm font-medium">Converter</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 text-sm font-medium">About</a>
        </nav>

      </div>
    </header>
  )
}

export default Header