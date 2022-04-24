import useFetchPelis from "../hooks/useFetchPelis"
import Card from "./Card"
import '../style/cardsStyle.scss'
const Populares = () =>{
 const{peliculas, isLoanding} = useFetchPelis("popular")
  
    return (
        <div className="cardsConteiner cards">
        <h2>peliculas popu</h2>

        {isLoanding && <p>ESTA CARGANDO</p>}
 {peliculas.map(element => (
        <Card key={element.id}
        className='cardStyle'
        nombre ={element.title} 
       imagen={element.poster_path}
       votacion={element.vote_average}
       
   />
        ))}
        </div>

        
    )
}


export default Populares