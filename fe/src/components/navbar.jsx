
import portfolio from "../data/portfolio.js";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Your name on the left */}
      <span className="navbar-name">{portfolio.name}</span>

      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>

      <a
        href={portfolio.resume.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {portfolio.resume.label}
      </a>
    </nav>
  );
}

export default Navbar;
