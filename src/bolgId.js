import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
const BlogId = () => {
    const { id } = useParams();
    const history = useHistory()
    const{ data: blog , Loading , Erreur} = useFetch('http://localhost:8000/blogs/' + id);
    const HandleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        });
        history.push('/')
    }
    return ( 
        <div className="blog-details">
            {Loading && <div>Loading ...</div>}
            {Erreur && <div>cannot rearch this kind of information</div>}
            {blog && (
            <article>
                <h1>{blog.title}</h1>
                <h4>written by {blog.author}</h4>
                <p>
                    {blog.body}
                </p>
                <button onClick={HandleDelete}>Delete</button>
            </article>
            )}
        </div>
     );
}
 
export default BlogId;