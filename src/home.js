import { useState, useEffect } from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
    // Destructure data, Loading, and erreur from useFetch
    const { data: blogs, Loading, erreur } = useFetch('http://localhost:8000/blogs');

    // State to manage blogs after deletion
    const [updatedBlogs, setUpdatedBlogs] = useState(blogs);

    // Sync updatedBlogs with fetched blogs whenever they change
    useEffect(() => {
        setUpdatedBlogs(blogs);
    }, [blogs]);

    // Delete handler to remove a blog from the list

    return (
        <div className="home">
            {erreur && <div>Cannot reach data from this resource</div>}
            {Loading && <div>Loading...</div>}
            {updatedBlogs && <BlogList blogs={updatedBlogs} title="All Blogs!"  />}
        </div>
    );
}

export default Home;
