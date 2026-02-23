{/* this is the MAIN SECTION FOR  ZETAFX */}


function HeroSection() {
  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">

        {/* left side - text content */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            CONVERT ANY  CURRENCY <br />
            FAST, RELIABLE & FREE 🌍
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            ZetaFX uses live exchange rates to convert between 30+ currencies.
            No account needed. 
            Just pick, type, and convert.
          </p>
          
            href="#converter"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg"
          >
           Try it now &#8594;
          </a>
        </div>

        {/* right side - placeholder for converter card */}
        <div className="w-full md:w-80 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <p className="text-gray-400 text-sm text-center">Converter coming soon</p>
        </div>

      </div>
    </section>
  )
}

export default HeroSection