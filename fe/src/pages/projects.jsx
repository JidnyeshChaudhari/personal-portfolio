
import "../styles/projects.css";

const projects = [
  {
    id: 1,
    title: "Open-Meteo Weather Data Analytics Pipeline",
    technologies: [
      "Python",
      "Apache Airflow",
      "SQL",
      "dbt",
      "PostgreSQL",
    ],
    color: "blue",
    icon: "weather",
    metrics: [
      { value: "500+", label: "Weather records" },
      { value: "3", label: "Cities tracked" },
      { value: "3-layer", label: "dbt warehouse" },
    ],
    points: [
      "Analyzed and processed 500+ timestamped weather records across 3 cities using Python, SQL, and PostgreSQL, enabling historical trend analysis across temperature, humidity, precipitation, wind, pressure, and cloud-cover metrics.",
      "Built a 3-model dbt analytical warehouse across staging, intermediate, and mart layers, transforming raw API data into structured datasets for time-series analysis, city-level comparisons, and KPI reporting.",
      "Automated hourly data extraction, PostgreSQL loading, and dbt transformations through a 3-task Apache Airflow pipeline, replacing repeated manual execution with scheduled end-to-end data processing.",
      "Implemented 3 automated data-quality tests covering uniqueness, range validation, and referential integrity, and exposed processed data through FastAPI and a React dashboard for interactive weather analysis and visualization.",
    ],
    github: "https://github.com/JidnyeshChaudhari/de",
    demo: "",
  },
  {
    id: 2,
    title: "eBook Orders Sales & Customer Analysis Dashboard",
    technologies: ["Excel", "Power BI", "DAX"],
    color: "green",
    icon: "analytics",
    metrics: [
      { value: "744", label: "Hourly records" },
      { value: "1,769", label: "Orders analyzed" },
      { value: "4,310", label: "Books sold" },
    ],
    points: [
      "Cleaned and transformed 744 hourly records into a 4-field analytical dataset.",
      "Analyzed 1,769 orders and 4,310 books sold to identify sales trends and purchasing behavior.",
      "Built a Power BI dashboard with DAX measures, identifying 10 AM–8 PM as the dominant purchasing window.",
      "Compared weekday vs. weekend patterns, finding 3,236 books sold on weekdays vs. 1,074 on weekends.",
    ],
    github: "https://github.com/JidnyeshChaudhari/Analysis-of-eBook_OrdersData",
    demo: "",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h1>Projects</h1>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article
            className={`project-card project-${project.color}`}
            key={project.id}
          >
            <div className="project-icon" aria-hidden="true">
              {project.icon === "weather" ? "☀" : "▥"}
            </div>

            <div className="project-main">
              <h2>{project.title}</h2>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span className="technology-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <ul className="project-points">
                {project.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="project-metrics">
              {project.metrics.map((metric) => (
                <div className="project-metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository ↗
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
