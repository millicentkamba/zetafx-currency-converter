ZetaFX – Currency Converter

A modern currency converter web application built with React 18 and Tailwind CSS as my frontend capstone project.

🚀 Project Overview

ZetaFX is a clean, responsive currency conversion tool designed to make international shopping easier.

As someone who frequently shops from foreign online stores, I often struggled to quickly calculate the true cost in my local currency. ZetaFX solves that problem by providing fast, accurate, and user-friendly currency conversions.

✨ Features

Convert between 14 major global currencies

Live exchange rates powered by ExchangeRate-API

One-click Swap Currency button

Input validation and error handling

Fully responsive design (mobile + desktop)

Clean, minimal UI built with Tailwind CSS

🛠 Tech Stack

React 18

Tailwind CSS

Vite

ExchangeRate-API (exchangerate-api.com)

⚙️ How to Run Locally

Clone the repository:

git clone <your-repo-url>

Navigate into the project folder:

cd zetaFX

Install dependencies:

npm install

Create a .env file in the root directory and add:

VITE_EXCHANGE_RATE_API_KEY=your_api_key_here

Start the development server:

npm run dev

Open your browser and visit:

http://localhost:5173
⚠️ Known Limitations

Currently supports only 14 currencies

Exchange rates update once per day (not real-time streaming)

No conversion history or saved favorites yet

📈 Future Improvements

Add conversion history tracking

Add more supported currencies

Add dark mode toggle

Add rate change indicators (increase/decrease)

Deploy with custom domain

🌍 Live Demo
https://zetafx.netlify.app/
