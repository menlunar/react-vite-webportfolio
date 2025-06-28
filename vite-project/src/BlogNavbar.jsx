// BlogNavbar.jsx
import { Link } from 'react-router-dom';

const BlogNavbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">Menric G. Lunar ⏾</Link>
                </div>

            </nav>
        </header>
    );
};

export default BlogNavbar;