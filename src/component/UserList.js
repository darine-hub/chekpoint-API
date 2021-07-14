import axios from "axios";
import React, { useEffect, useState } from "react";


const App = () => {
 const [data, setData] = useState([]); // where to store the returned data
 const [error, setError] = useState(null); // where to store the coming errors
 useEffect(() => {
   function fetchData() {
     // the function to fetch data from the api
     axios.get("https://jsonplaceholder.typicode.com/users")
 
       .then(res => setData(res.data))
       .catch(err => setError(err)); // if there is an error here what you have to do.
   }

   fetchData();
 }, []);

 return (
   <div>
        <label>Liste Des Utilisateurs</label>
     <ol>
        
       {data.map((elem,index)=> (
         <li>
           {elem.name}
         </li>
       ))}
     </ol>
   </div>
 );
};
export default App;