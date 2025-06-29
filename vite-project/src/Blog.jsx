import './Blog.css';
import BlogNavbar from './BlogNavbar';
import Footer from './Footer';
import BlogSection from './BlogSection';


const Blog = () => {
    return (
        <>
            <BlogNavbar />
            <div className="blog-page">

                <h1>Blog</h1>
                {/* <p>Hello blog, welcome to my guys</p> */}
                <BlogSection
                    title="My First Post"
                    date="June 29, 2025"
                    content="Hello blog, welcome to my guys"
                />

                <BlogSection
                    title="Another Post"
                    date="June 28, 2025"
                    content="I've just added posting in my blog section. Nice."
                />
            </div>
            <Footer />
        </>
    );
}


export default Blog;