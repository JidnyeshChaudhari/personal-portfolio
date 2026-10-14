import portfolio from "../data/portfolio.js";

function Hero() {
  return (
    <section className="hero">
      <img
        src="/assets/profileimage.png"
        alt={portfolio.name}
        className="profile-image"
      />

      <div className="hero-text">
        <h1>{portfolio.name}</h1>

        <p>
          {portfolio.role} at{" "}
          <a
            href={portfolio.company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="company-link"
          >
            {portfolio.company.name}
          </a>
        </p>
      </div>
    </section>
  );
}

export default Hero;


