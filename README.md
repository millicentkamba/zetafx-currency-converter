# ZetaFX - Currency Converter

A modern currency converter web application built with **React 18** and **Tailwind CSS** as my frontend capstone project.

---

## Project Overview

ZetaFX is a clean, responsive currency conversion tool designed to make international shopping easier.

As someone who frequently shops from foreign online stores, I often struggled to quickly calculate the true cost in my local currency. ZetaFX solves that problem by providing fast, accurate, and user-friendly currency conversions.

---

## Features

- Convert between 14 major global currencies
- Live exchange rates powered by ExchangeRate-API
- One-click Swap Currency button
- Input validation and error handling
- Fully responsive design (mobile + desktop)
- Clean, minimal UI built with Tailwind CSS

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | Component-based UI |
| Tailwind CSS | Styling and responsive layout |
| Vite | Development and build tool |
| ExchangeRate-API | Live currency exchange rates |

---

## How to Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/millicentkamba/zetafx-currency-converter.git
   ```

2. Navigate into the project folder
   ```bash
   cd zetafx-currency-converter
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add:
   ```
   VITE_EXCHANGE_RATE_API_KEY=your_api_key_here
   ```

5. Start the development server
   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173`

---

## Known Limitations

- Currently supports only 14 currencies
- Exchange rates update once per day, not real-time
- No conversion history or saved favourites yet

---

## Future Improvements

- Add conversion history tracking
- Add more supported currencies
- Add dark mode toggle
- Add rate change indicators
- Deploy with custom domain

---

## Live Demo

[https://zetafx.netlify.app](https://zetafx.netlify.app)

---

## Author

