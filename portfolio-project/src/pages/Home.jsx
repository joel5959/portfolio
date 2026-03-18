const skills = [
    {
        category: "Languages",
        items: ["JavaScript", "Python", "Dart", "Java", "C#"],
    },
    {
        category: "Frameworks",
        items: ["React", "Next.js", "Flutter", ".NET"],
    },
    {
        category: "Tools",
        items: ["Git", "Docker"],
    },
    {
        category: "Databases",
        items: ["MySQL", "MongoDB"],
    },
];

function Home() {
    return (
        <section className="home-section">
            <div className="home-inner">

                {/* ── About ── */}
                <div className="home-about">
                    <h1 className="home-heading">About Me</h1>
                    <p className="home-bio">
                        Hi, I'm Joel, a Full-Stack Developer and current Computer Programming &amp; Analysis
                        student at Durham College. With a 3.92 GPA and a passion for clean, efficient code,
                        I specialize in building secure web applications and interactive mobile experiences.
                        I enjoy bridging the gap between complex back-end logic and intuitive front-end design
                        using tools like React, Next.js, and Flutter.
                    </p>
                    <div className="home-divider" />
                </div>

                {/* ── Skills ── */}
                <div className="home-skills">
                    <h2 className="skills-heading">Skills</h2>
                    <div className="skills-grid">
                        {skills.map((group) => (
                            <div className="skill-group" key={group.category}>
                                <span className="skill-category">{group.category}</span>
                                <div className="skill-tags">
                                    {group.items.map((item) => (
                                        <span className="skill-tag" key={item}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Home;