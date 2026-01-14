import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Templates from './Pages/Templates/Templates'
import PricePlans from './Pages/Price-Plans/PricePlans'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/pricing-plans" element={<PricePlans />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
