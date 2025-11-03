import { Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { ContentfulProvider } from "./context/ContentfulContext"
import Home from './pages/Home/Home'
import Research from './pages/Research/Research'
import Team from './pages/Team/Team'
import Gallery from './pages/Gallery/Gallery'
import { useEffect, useMemo } from 'react'

function App() {

  const pageTitle = useMemo(() => {
    switch (window.location.pathname) {
      case '/':
        return 'Home'
      case '/research':
        return 'Research'
      case '/team':
        return 'Team'
      case '/gallery':
        return 'Gallery'
    }
    return 'SE-ALL Lab'
  }, [window.location.pathname])

  // automatically set the title of the page based on the current route
  useEffect(() => {
    document.title = `${pageTitle} | SE-ALL Lab` || 'SE-ALL Lab';
  }, [pageTitle])

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
