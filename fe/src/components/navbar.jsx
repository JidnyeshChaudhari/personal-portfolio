
import portfolio from "../data/portfolio.js";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="navbar-name"
        onClick={closeMenu}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {portfolio.name}
      </Link>

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={
          menuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {menuOpen && (
        <button
          type="button"
          className="menu-backdrop"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        />
      )}

      <div
        id="mobile-navigation"
        className={`navbar-links ${menuOpen ? "menu-open" : ""}`}
      >
        <Link to="/#about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/education" onClick={closeMenu}>
          Education
        </Link>

        <Link to="/experience" onClick={closeMenu}>
          Experience
        </Link>

        <Link to="/projects" onClick={closeMenu}>
          Projects
        </Link>

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
