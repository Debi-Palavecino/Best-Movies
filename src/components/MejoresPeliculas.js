import Card from "./Card";
import useFetchMovieList from "../hooks/useFetchMovieLists";
import {useState} from 'react'
import '../style/cardsStyle.scss'


const MejoresPeliculas = ()=>{
   
    const [paginas, setPaginas]=useState(1)
    const [info, ] =useFetchMovieList("popular","Es",paginas)
    

    const handleNextPage =()=>{
          setPaginas(paginas+1)  
    }   
    const handlePreviewPage =()=>{
        const page =paginas ===0 ? 1 : paginas-1
        setPaginas(page)
  }   
  console.log(info)
  
     return(
        <div className="cardsConteiner cards">
            {info.map(element=>{
                return(
                    
                    <Card key={element.id}
                     nombre ={element.title} 
                        imagen={element.poster_path}
                        votacion={element.vote_average}
                        
                        
                    />
                    
                )
            })
            }
            <button disabled={paginas===1} onClick={handlePreviewPage}>Less</button>
            <button onClick={handleNextPage}>Next</button>
         
        </div>    
    )
}
export default MejoresPeliculas;