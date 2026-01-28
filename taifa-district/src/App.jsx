// ================= src/App.jsx =================
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import Home from './Pages/Home'
import Projects from './pages/Projects'
import Congregations from './Pages/Congregations'
import Contact from './Pages/Contact'

import AboutLayout from './pages/about/AboutLayout'
import DistrictMinister from './pages/about/DistrictMinister'
import ReverendMinisters from './Pages/about/ReverendMinisters'
import Catechists from './pages/about/Catechists'
import DistrictExecutives from './pages/about/DistrictExecutives'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/congregations" element={<Congregations />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<AboutLayout />}>
            <Route path="district-minister" element={<DistrictMinister />} />
            <Route path="reverend-ministers" element={<ReverendMinisters />} />
            <Route path="catechists" element={<Catechists />} />
            <Route path="district-executives" element={<DistrictExecutives />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  )
}