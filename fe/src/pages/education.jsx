
import "../styles/education.css";

const educationDetails = [
  {
    id: "mba",
    degree: "MBA in Business Analytics",
    institution: "Institute of Management and Career Courses",
    abbreviation: "IMCC",
    institutionUrl: "https://imcc.mespune.in/",
    location: "Pune, Maharashtra, India",
    dates: "Dec 2024 – Apr 2026",
    logo: "/assets/imcc.jpg",
    logoAlt: "Institute of Management and Career Courses logo",
  },
  {
    id: "bsc",
    degree: "Bachelor of Science (B.Sc.) in Chemistry",
    institution:
      "Kavayitri Bahinabai Chaudhari North Maharashtra University",
    abbreviation: "KBCNMU",
    institutionUrl: "https://nmu.ac.in/en-us/",
    location: "Jalgaon, Maharashtra, India",
    dates: "Jun 2020 – Apr 2023",
    logo: "/assets/kbcnmu.png",
    logoAlt: "Kavayitri Bahinabai Chaudhari North Maharashtra University logo",
  },
];

function LocationPin() {
  return (
    <svg
      className="education-location-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-heading">
        <h2>Education</h2>
        <span className="education-heading-line" />
      </div>

      <div className="education-list">
        {educationDetails.map((item) => (
          <article className="education-entry" key={item.id}>
            <div className="education-timeline" aria-hidden="true">
              <span className="education-timeline-dot" />
            </div>

            <div className="education-logo-container">
              <img
                className="education-logo"
                src={item.logo}
                alt={item.logoAlt}
                loading="lazy"
              />
            </div>

            <div className="education-content">
              <h3 className="education-degree">{item.degree}</h3>

              <p className="education-institution">
                <a
                  href={item.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.institution} ({item.abbreviation})
                </a>
              </p>

              <p className="education-location">
                <LocationPin />
                <span>{item.location}</span>
              </p>
            </div>

            <p className="education-dates">{item.dates}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
