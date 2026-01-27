// -------- src/App.jsx --------
import { Header } from './components/Header'
import { Congregations } from './components/Congregations'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Congregations />
      <Footer />
    </div>
  )
}