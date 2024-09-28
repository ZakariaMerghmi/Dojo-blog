import { Link } from "react-router-dom";
const BlogList = ({ blogs, title, deleteHandle }) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                   
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;
