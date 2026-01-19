import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import { ContentfulProvider } from "./context/ContentfulContext";
import Home from "./pages/Home/Home";
import Focus from "./pages/Research/Focus/Focus";
import Projects from "./pages/Research/Projects/Projects";
import Publications from "./pages/Research/Publications/Publications";
import Software from "./pages/Research/Software/Software";
import Team from "./pages/Team/Team";
import Gallery from "./pages/Gallery/Gallery";
import { useEffect, useMemo } from "react";
import NotFound from "./pages/NotFound";

function App() {
  const { pathname } = useLocation();

  const pageTitle = useMemo(() => {
    const map: Record<string, string> = {
      "/": "Home",
      "/research/focus": "Focus",
      "/research/projects": "Projects",
      "/research/publications": "Publications",
      "/research/software": "Software",
      "/team": "Team",
      "/gallery": "Gallery",
    };
    return map[pathname];
  }, [pathname]);

  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | Plurise Lab` : "Plurise Lab";
  }, [pageTitle]);

  return (
    <ContentfulProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/research/focus" element={<Focus />} />
          <Route path="/research/projects" element={<Projects />} />
          <Route path="/research/publications" element={<Publications />} />
          <Route path="/research/software" element={<Software />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContentfulProvider>
  );
}

export default App;
