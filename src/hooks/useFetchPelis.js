import { useState,useEffect } from "react"

const useFetchPelis = (categoria) =>{
    const [peliculas,setPeliculas] = useState ([])
    const [isLoanding,setIsLoanding] =useState (false)


    useEffect(() => {
    setIsLoanding(true)   
    fetch(`https://api.themoviedb.org/3/movie/${categoria}?api_key=36eef0f3ec35bf9f2c93121f86888240&language=es`)
    .then(res=>res.json())
    .then(data => { 
        setPeliculas(data.results)
        setIsLoanding(false) 
    })
    
    },[categoria])
    return ({ peliculas:peliculas,
            isLoanding:isLoanding
    })


}

export default useFetchPelis