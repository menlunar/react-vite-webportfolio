import { Link } from 'react-router-dom';
import './Blog.css';
import Navbar from './Navbar';

const Blog = () => {
    return (
        <>
            <Navbar />
            <div className="blog-page">
                <div className="blog-nav">
                    <Link to="/" className="back-link">← Home</Link>
                </div>
                <h1>Blog</h1>
                <p>This is the blog page content.</p>
            </div>
        </>
    );
}

export default Blog;