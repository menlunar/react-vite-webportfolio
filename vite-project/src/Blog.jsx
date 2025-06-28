import './Blog.css';
import BlogNavbar from './BlogNavbar';
import { Footer } from './Footer';


const Blog = () => {
    return (
        <>
            <BlogNavbar />
            <div className="blog-page">

                <h1>Blog</h1>
                <p>Hello blog, welcome to my guys</p>
            </div>
            <Footer />
        </>
    );
}

export default Blog;