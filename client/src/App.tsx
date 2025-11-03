import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import { ContentfulProvider } from "./context/ContentfulContext"
import Home from './pages/Home/Home'
import Research from './pages/Research/Research'
import Team from './pages/Team/Team'
import Gallery from './pages/Gallery/Gallery'
import { useEffect, useMemo } from 'react'
import NotFound from './pages/NotFound'

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
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContentfulProvider>
  )
}

export default App
