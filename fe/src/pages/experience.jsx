
import "../styles/experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-entry">
        <div className="experience-logo">
          <img
            src="/assets/shakham_logo.png"
            alt="Shakham Inc."
          />
        </div>

        <div className="experience-content">
          <h3 className="experience-role">Business Analyst</h3>

          <p className="experience-company">
            <a
              href="https://www.shakham.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-company-link"
            >
              Shakham Inc.
            </a>
            <span>·</span> Full-time
          </p>

          <p className="experience-dates">
            Sep 2025 – Present
          </p>

          <p className="experience-location">
            Pune, Maharashtra, India <span>·</span> On-site
          </p>

          <div className="experience-contributions">
            <h4>Key Contributions</h4>

            <ul>
              <li>
                Market research and competitive analysis to support
                product development.
              </li>
              <li>
                Cross-functional coordination and requirement gathering
                to improve product usability.
              </li>
              <li>
                Product research and analysis to support business
                decisions and user-centric improvements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
