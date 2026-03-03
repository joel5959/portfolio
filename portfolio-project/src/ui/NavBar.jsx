import { Link, useLocation } from "react-router-dom";

export default function NavBar({ links }) {
    const location = useLocation();

    const getPath = (link) => (link === "Home" ? "/" : `/${link.toLowerCase()}`);

    return (
        <>
            <nav className="glass-nav">
                <Link to="/" className="glass-nav-brand">
                    Joel Williams
                </Link>
                <ul className="glass-nav-links">
                    {links.map((link) => {
                        const path = getPath(link);
                        const isActive = location.pathname === path;
                        return (
                            <li key={link}>
                                <Link
                                    to={path}
                                    className={`glass-nav-link${isActive ? " active" : ""}`}
                                >
                                    {link}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className="nav-spacer" />
        </>
    );
}