import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import NavagationBar from './assets/components/NavagationBar';
import Home from './assets/components/Home';
import Portfolio from './assets/components/Portfolio';
import Contact from './assets/components/Contact';

function App() {

  return (
    <>
      <Router>
        <NavagationBar />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/contact" element={<Contact />}/> */}
          <Route path="/" element={<ScrollToSection id="home"><Home /></ScrollToSection>} />
          <Route path="/portfolio" element={<ScrollToSection id="portfolio"><Portfolio /></ScrollToSection>} />
          <Route path="/contact" element={<ScrollToSection id="contact"><Contact /></ScrollToSection>} />
        </Routes>
    </Router>

    
    <div id="home">
        <Home />
    </div>
    <div id="portfolio">
        <Portfolio />
    </div>
    <div id="contact">
        <Contact />
    </div>
  </>
  )
}

function ScrollToSection({ id, children }) {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the section smoothly when the route changes
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location, id]);

  return <div id={id}>{children}</div>;
}

export default App
