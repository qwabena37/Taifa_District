// ================================
// TAIFA DISTRICT WEBSITE
// React + Zustand + Tailwind CSS
// ================================

// -------- src/main.jsx --------
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// -------- src/store/districtStore.js --------
import { create } from 'zustand'

export const useDistrictStore = create(() => ({
  districtName: 'PCG TAIFA DISTRICT',
  congregations: [
    { id: 1, name: 'Grace Congregation – North Taifa' },
    { id: 2, name: 'Faith Congregation – South Taifa' },
    { id: 3, name: 'Hope Congregation – Taifa Central' },
    { id: 4, name: 'Victory Congregation – Taifa Market' },
    { id: 5, name: 'Redemption Congregation' },
    { id: 6, name: 'Bethany Congregation' },
    { id: 7, name: 'Calvary Congregation' },
    { id: 8, name: 'Zion Congregation' },
    { id: 9, name: 'Salem Congregation' },
    { id: 10, name: 'Emmanuel Congregation' },
    { id: 11, name: 'Bethel Congregation' },
    { id: 12, name: 'Resurrection Congregation' },
    { id: 13, name: 'Christ Chapel' },
    { id: 14, name: 'Living Waters Congregation' },
    { id: 15, name: 'New Life Congregation' },
    { id: 16, name: 'Holy Trinity Congregation' },
  ],
}))

// -------- src/components/Header.jsx --------
export function Header() {
  return (
    <header className="bg-blue-900 text-white py-6 shadow">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold">PCG TAIFA DISTRICT</h1>
        <p className="text-sm opacity-90">
          One District · Sixteen Congregations · One Mission
        </p>
      </div>
    </header>
  )
}

// -------- src/components/CongregationCard.jsx --------
import { motion } from 'framer-motion'

export function CongregationCard({ congregation }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-md p-5 border"
    >
      <h3 className="text-lg font-semibold text-blue-900">
        {congregation.name}
      </h3>
      <p className="text-gray-600 text-sm mt-2">
        Serving the Taifa community with faith, love and unity.
      </p>
    </motion.div>
  )
}


