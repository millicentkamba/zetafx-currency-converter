import { useState, useEffect } from "react"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Footer from "./components/Footer"

// currencies list stays constant
// defined outside App to avoid recreating on each render

const currencies = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "INR", name: "Indian Rupee" },
  { code: "ZAR", name: "South African Rand" },
  { code: "NGN", name: "Nigerian Naira" },
  { code: "KES", name: "Kenyan Shilling" },
  { code: "GHS", name: "Ghanaian Cedi" },
  { code: "EGP", name: "Egyptian Pound" },
]

function App() {

  // state for the converter inputs
  const [amount, setAmount] = useState("1000")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("EUR")

  // state for API data
  const [rates, setRates] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // state for the result
  const [result, setResult] = useState(null)

 // fetch exchange rates when fromCurrency changes
  useEffect(() => {
    setLoading(true)
    setError("")
    setResult(null)

    const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY

    if (!apiKey) {
      setError("API key missing. Add VITE_EXCHANGE_RATE_API_KEY to your .env file.")
      setLoading(false)
      return
    }

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result === "success") {
          setRates(data.conversion_rates)
        } else {
          setError("Could not get rates. Try again.")
        }
        setLoading(false)
      })
      .catch(() => {
        setError("Network error. Check your connection.")
        setLoading(false)
      })
  }, [fromCurrency])

  // converts the amount when button is clicked
  function handleConvert() {
    if (!amount || !rates) return
    const num = parseFloat(amount)
    if (isNaN(num) || num <= 0) {
      setError("Please enter a valid amount")
      return
    }
    setError("")
    const converted = num * rates[toCurrency]
    setResult(converted)
  }

  // swaps the two currencies
  function handleSwap() {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setResult(null)
  }

  // only allows numbers and one decimal point
  function handleAmountChange(e) {
    const val = e.target.value
    if (val === "" || /^\d*\.?\d*$/.test(val)) {
      setAmount(val)
      setResult(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* navigation bar */}
      <Header />

      {/* hero section */}
      <HeroSection />

      {/* main converter section */}
      <section id="converter" className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">CONVERT</h2>

          <div className="flex flex-col md:flex-row gap-6">

            {/* left side - main converter card */}
            <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6">

              {/* amount input */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Amount</label>
                <input
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="Enter amount"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* from and to dropdowns */}
              <div className="flex gap-3 items-center mb-5">
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label>
                  <select
                    value={fromCurrency}
                    onChange={(e) => { setFromCurrency(e.target.value); setResult(null) }}
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {currencies.map((c) => (
                      <option key={c.code} value={c.code}>{c.code} - {c.name}</option>
                    ))}
                  </select>
                </div>

                {/* swap button */}
                <button
                  onClick={handleSwap}
                  className="mt-5 text-gray-400 hover:text-blue-500 text-xl px-1"
                >
                  ⇄
                </button>

                <div className="flex-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">To</label>
                  <select
                    value={toCurrency}
                    onChange={(e) => { setToCurrency(e.target.value); setResult(null) }}
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {currencies.map((c) => (
                      <option key={c.code} value={c.code}>{c.code} - {c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* error message */}
              {error && (
                <p className="text-red-500 text-sm mb-4 bg-red-50 border border-red-200 rounded px-3 py-2">
                  {error}
                </p>
              )}

              {/* loading indicator */}
              {loading && (
                <p className="text-gray-400 text-sm text-center mb-4">Loading rates...</p>
              )}

              {/* convert button */}
              <button
                onClick={handleConvert}
                disabled={loading || !rates}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-bold py-3 rounded-lg text-sm mb-5"
              >
                CONVERT
              </button>

              {/* result */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
                <p className="text-xs text-gray-400 uppercase mb-1">Result</p>
                {result !== null ? (
                  <p className="text-2xl font-bold text-blue-600">
                    {result.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {toCurrency}
                  </p>
                ) : (
                  <p className="text-gray-300 text-xl font-bold">—</p>
                )}
                {result !== null && rates && (
                  <p className="text-xs text-gray-400 mt-1">
                    1 {fromCurrency} = {rates[toCurrency]?.toFixed(4)} {toCurrency}
                  </p>
                )}
              </div>

            </div>

            {/* right side - popular currencies with live rates */}
            <div className="w-full md:w-64 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-4">Popular Currency</p>

              {rates ? (
                <ul className="space-y-3">
                  {["USD", "EUR", "GBP", "JPY", "AUD", "ZAR"].map((code) => (
                    <li key={code} className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-sm font-semibold text-gray-700">{code}</span>
                      <span className="text-sm text-blue-600 font-medium">
                        {rates[code]?.toFixed(4)}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-sm">Loading rates...</p>
              )}

              <p className="text-xs text-gray-400 mt-4 text-center">
                Rates based on 1 {fromCurrency}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* about section */}
      <section id="about" className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-lg mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">About ZetaFX</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            ZetaFX is a currency converter I built to solve a real problem I have —
            when shopping online from foreign stores, I needed a quick way to know
            what something actually costs in my currency. This app uses live exchange
            rates to convert between 14 major currencies instantly. No account needed,
            no fees, just fast and accurate conversions.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Powered by ExchangeRate-API.
          </p>
        </div>
      </section>

      {/* footer */}
      <Footer />

    </div>
  )
}

export default App