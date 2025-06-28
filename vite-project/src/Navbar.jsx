import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">Menric G. Lunar</Link>
                    <Link
                        to="/blog"
                        style={{
                            marginLeft: '1rem',
                            color: 'lightblue',
                            textDecoration: 'none',
                            fontWeight: 'normal'
                        }}
                    >
                        Vamfire Ryts?
                    </Link>
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;