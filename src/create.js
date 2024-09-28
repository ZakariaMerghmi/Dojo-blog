import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('');
    const [Wait , setWait] = useState(false);
    const history = useHistory();
    const HandleData = (e) =>{
        e.preventDefault(); // in order to not delete info after click on submit//
        const blog = {title , body , author };
        setWait(true);
        fetch('http://localhost:8000/blogs/' , {
            method:'POST',
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify(blog),
            
        }).then(()=>{
            console.log('new blog added');
            setWait(false);
            history.push('/');
        })
    }
    return ( 
        
        <div className="create">
            <h1>add a new blog</h1>,
        <form onSubmit={HandleData}>
            <label >Blog Title</label>
            <input 
            type="text"
            required 
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />
            <label >Blog Paragraphe</label>
            <textarea
             required
             value={body}
            onChange={(e)=> setBody(e.target.value)}
            ></textarea>
            <label >Blog Author</label>
            <select 
            required
            value={author}
            onChange={(e)=> setAuthor(e.target.value)}
            >
                <option value="mario">Mario</option>
                <option value="zakaria">Zakaria</option>
                <option value="thomas">Thomas</option>
            </select>
            {!Wait && <button>Add Blog</button>}
            {Wait && <button disabled>Adding blog ...</button>}
            
        </form>
        </div>       
     );
}
 
export default Create;