import { useState } from "react";

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const EmailIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
);

function Contact() {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [touched, setTouched] = useState({});

    const validate = () => {
        if (!name.trim()) return "Please enter your name.";
        if (!email.trim()) return "Please enter your email.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
        if (!message.trim()) return "Please enter a message.";
        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTouched({ name: true, email: true, message: true });
        const err = validate();
        if (err) { setError(err); return; }

        try {
            const res = await fetch("https://formspree.io/f/xyknlerv", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setError("");
                setSuccess(true);
                setEmail(""); setName(""); setMessage("");
                setTouched({});
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch {
            setError("Network error. Please try again.");
        }
    };

    const hasError = (field) => touched[field] && !{ name, email, message }[field].trim();

    return (
        <section className="contact-section">
            <div className="contact-inner">
                <h1 className="contact-heading">Contact Me</h1>
                <div className="divider" />

                {/* ── Social Links ── */}
                <div className="contact-socials">
                    <a className="contact-social-link" href="mailto:jowill0102@gmail.com" aria-label="Email">
                        <EmailIcon />
                        <span>jowill0102@gmail.com</span>
                    </a>
                    <a className="contact-social-link" href="https://github.com/joel5959" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <GitHubIcon />
                        <span>joel5959</span>
                    </a>
                    <a className="contact-social-link" href="https://www.linkedin.com/in/joel-williams22/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <LinkedInIcon />
                        <span>joel-williams22</span>
                    </a>
                </div>

                <div className="contact-form">
                    <div className="field-group">
                        <label className="field-label" htmlFor="name">Name</label>
                        <input
                            id="name"
                            className={`field-input${hasError("name") ? " error" : ""}`}
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onBlur={() => setTouched(t => ({ ...t, name: true }))}
                        />
                    </div>

                    <div className="field-group">
                        <label className="field-label" htmlFor="email">Email</label>
                        <input
                            id="email"
                            className={`field-input${hasError("email") ? " error" : ""}`}
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => setTouched(t => ({ ...t, email: true }))}
                        />
                    </div>

                    <div className="field-group">
                        <label className="field-label" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className={`field-textarea${hasError("message") ? " error" : ""}`}
                            placeholder="Send a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onBlur={() => setTouched(t => ({ ...t, message: true }))}
                        />
                    </div>

                    {error && <p className="error-msg">{error}</p>}

                    <div className="submit-row">
                        <button className="submit-btn" onClick={handleSubmit}>
                            Send Message
                        </button>
                        {success && <span className="success-msg">✓ Message sent!</span>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;