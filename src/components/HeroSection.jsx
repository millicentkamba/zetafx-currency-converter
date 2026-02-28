function HeroSection() {
  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Convert Any Currency, Fast and Free
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            ZetaFX uses live exchange rates to convert between 14 currencies.
            No account needed. Just pick, type, and convert.
          </p>
          <a href="#converter" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg">
            Try it now
          </a>
        </div>

        <div className="w-full md:w-80 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <p className="text-sm font-semibold text-blue-600 mb-4">Why ZetaFX?</p>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>✓ Live rates updated daily</li>
            <li>✓ 14 currencies supported</li>
            <li>✓ No sign-up required</li>
            <li>✓ Free to use</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default HeroSection