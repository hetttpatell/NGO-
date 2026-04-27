import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Initiatives from './pages/Initiatives'
import Gallery from './pages/Gallery'
import Connect from './pages/Connect'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="paper-texture" style={{ minHeight: '100vh' }}>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
