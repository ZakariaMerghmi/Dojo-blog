import { Link } from "react-router-dom";
const Notfound = () => {
    return ( 
        <div className="erreur">
             <h1>Sorry</h1>
             <h4>cannot find this page</h4>
             <Link to='/'>Go to Home page</Link>
        </div>
       
     );
}
 
export default Notfound;