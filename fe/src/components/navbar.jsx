
import portfolio from "../data/portfolio.js";
import { useState } from "react";

function Navbar() {
  // Track whether the mobile navigation drawer is open.
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the drawer after a navigation link is selected.
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Your name on the left side of the navbar. */}
      <span className="navbar-name">{portfolio.name}</span>

      {/* Toggle button for the mobile navigation drawer. */}
      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        {/* CSS transforms these lines into a close icon when open. */}
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Dimmed backdrop; clicking it closes the drawer. */}
      {menuOpen && (
        <button
          type="button"
          className="menu-backdrop"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        />
      )}

      {/* Navigation links for desktop and the mobile drawer. */}
      <div
        id="mobile-navigation"
        className={`navbar-links ${menuOpen ? "menu-open" : ""}`}
      >
        {/* Close the drawer after selecting a section. */}
        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#education" onClick={closeMenu}>
          Education
        </a>

        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        {/* Open the resume in a new browser tab. */}
        <a
          href={portfolio.resume.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          {portfolio.resume.label}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
