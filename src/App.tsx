import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Navigation
import Nav from "./SiteVitrine/Nav"

// Pages Site Vitrine
import Home from "./SiteVitrine/Home"
import Services from "./SiteVitrine/Services"
import Membres from "./SiteVitrine/Membres"
import Contact from "./SiteVitrine/Contact"

function App() {
  return (
    <Router>
      <Routes>
              <Route element={<Nav />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Services />} />
                <Route path="/membres" element={<Membres />} />
                <Route path="/contact" element={<Contact />} />   
              </Route>
      </Routes>
    </Router>
  )
}

export default App