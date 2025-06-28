import { Link } from 'react-router-dom';
import './Blog.css';
import BlogNavbar from './BlogNavbar';

const Blog = () => {
    return (
        <>
            <BlogNavbar />
            <div className="blog-page">

                <h1>Blog</h1>
                <p>Hello blog, welcome to my guys</p>
            </div>
        </>
    );
}

export default Blog;