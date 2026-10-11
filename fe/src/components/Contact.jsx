import portfolio from "../data/portfolio.js";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-info">
        <h2>Contact</h2>
        <a href={`mailto:${portfolio.contact.email}`}>
          {portfolio.contact.email}
        </a>
      </div>

      <div className="social-links">
        <a
          href={portfolio.resume.url}
          aria-label="Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={portfolio.resume.icon} alt="" />
        </a>

        <a
          href={portfolio.social.linkedin}
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={portfolio.icons.linkedin} alt="" />
        </a>

        <a
          href={portfolio.social.github}
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={portfolio.icons.github} alt="" />
        </a>
      </div>
    </section>
  );
}

export default Contact;