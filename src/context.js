// import React, { useContext, useEffect, useState } from "react";

// const AppContext = React.createContext();

//  export const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`
// const AppProvider = ({ children })=>{

//     const[isLoading, setIsLoading] = useState(true);
//     const[movie, setMovie] = useState([]);
//     const[isError,setIsError] = useState({show:"false",msg:""});
//     const[query,setQuery] = useState("avenger");
//     const getMovies = async (url) =>{
//         try{
//           const res = await fetch(url); 
//            const data = await  res.json();
//            console.log(data);
//            if(data.Response === "True"){
//             setIsLoading(false);
//             setMovie(data.Search);
//            }
//            else{
//             setIsError({
//                 show: true,
//                 msg : data.error
//             })
//            }
//         } catch(error){
//             console.log(error);
//         }
//     }

//     useEffect(() =>{
//         getMovies(`${API_URL}&s=${query}`);
//     },[query]);


//  return <AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>
//         {children}
//     </AppContext.Provider>
// }

// const useGlobalContext = ()=>{
//     return useContext(AppContext);
// }

// export {AppContext,AppProvider,useGlobalContext};

import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("hacker");
  const { isLoading, isError, movie } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };