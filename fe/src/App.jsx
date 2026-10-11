
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Contact from "./components/Contact.jsx";
import "./index.css";

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
