import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data , setData] = useState(null);
    const [Loading , setLoading] = useState(true);
    const [erreur , setEreur] = useState(null);
    useEffect(()=>{
        setTimeout( () =>{
            fetch(url)
            .then( response =>{
                return response.json();
            })
            .then(data=>{
                setData(data);
                setLoading(false);
                setEreur(null)
            })
            .catch(err =>{
                setLoading(false)
                setEreur(err.message);
            })
        },1000)
        }, [url]);
  return{data , Loading , erreur} ;
}
 
export default useFetch;