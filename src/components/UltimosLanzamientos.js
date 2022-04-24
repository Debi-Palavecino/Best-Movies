import useFetchPelis from "../hooks/useFetchPelis"
import Card from "./Card"
import '../style/cardsStyle.scss'
const UltimosLanzamientos = () =>{
    const {peliculas} = useFetchPelis("upcoming")

    return (
        <div>
        <h2>ultimas pelis</h2>

            <div className="cardsConteiner cards" >
                {peliculas.map(element => (
                <Card key={element.id}                
                nombre ={element.title} 
                imagen={element.poster_path}
                votacion={element.vote_average}/>
                ))}
            </div>
        </div>
    )
}


export default UltimosLanzamientos