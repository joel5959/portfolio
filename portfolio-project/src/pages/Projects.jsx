const projects = [
    {
        title: "Type Racer",
        description: "Test your typing speed against 3 AIs to see who's the fastest typer.",
        tags: ["Flutter", "Dart", "Firebase"],
        github: "https://github.com/joel5959/Type_Racer",
    },
    {
        title: "Products Website",
        description: "This was a website that I built for a school project to simulate a e-commerce website.",
        tags: ["React", "Next.js", "Node.js", "Contentful API"],
        github: "https://github.com/joel5959/products_website",
    },
    {
        title: "Blackjack",
        description: "Made a game of Blackjack using C# and Unity",
        tags: ["C#", "Unity"],
        github: "https://github.com/stacktech4024/OOP-3-Final-Project-Unity",
    },
];

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
);

function Projects() {
    return (
        <section className="projects-section">
            <div className="projects-inner">
                <div className="projects-header">
                    <h1 className="projects-heading">Projects</h1>
                    <p className="projects-subheading">A selection of things I've built.</p>
                    <div className="projects-divider" />
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.title}>
                            <div className="card-body">
                                <div className="card-top">
                                    <h2 className="card-title">{project.title}</h2>
                                    <a
                                        className="card-github-link"
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`GitHub – ${project.title}`}
                                    >
                                        <GitHubIcon />
                                    </a>
                                </div>
                                <p className="card-description">{project.description}</p>
                                <div className="card-tags">
                                    {project.tags.map((tag) => (
                                        <span className="card-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;