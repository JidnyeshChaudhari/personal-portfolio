
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./pages/education.jsx";
import Experience from "./pages/experience.jsx";

import "./index.css";

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="portfolio-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
