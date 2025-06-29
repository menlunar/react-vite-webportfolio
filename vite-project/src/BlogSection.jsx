const BlogSection = ({ title, date, content }) => {
    return (
        <div className="blog-section">
            <h2>{title}</h2>
            <small>{date}</small>
            <p>{content}</p>
        </div>
    );
};

export default BlogSection;