import { Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { ContentfulProvider } from "./context/ContentfulContext"
import Home from './pages/Home/Home'
import Research from './pages/Research/Research'
import Team from './pages/Team/Team'
import Gallery from './pages/Gallery/Gallery'

function App() {
  return (
    <ContentfulProvider>
      <div className="bg-white flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ContentfulProvider>
  )
}

export default App
