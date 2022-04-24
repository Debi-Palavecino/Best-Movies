import { useEffect,useState } from "react"
import { ApiKey,BaseUrl, } from "../ExportFiles"
import '../style/cardsStyle.scss'
import Card from "./Card"
const Busqueda = ()=>{
    const [valorDelInput, setValorDelInput] =useState("")
    const [endpoint, setEndpoint] =useState("")
    const [peliculas,setPeliculas]=useState([])
    useEffect(() => {
        fetch(`${BaseUrl}search/movie${ApiKey}&query=${endpoint}`)
            .then(res => res.json())
            .then(data => {setPeliculas(data.results)
               
            }).catch(error=>{
                console.log(error)
            })
    }, [endpoint])
    const handleChangeInput =(e)=>{
        setValorDelInput(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setEndpoint(valorDelInput)
    }
    return(
        <div>
            <h1>Busqueda</h1>
            <form onSubmit={handleSubmit}>
                    
                <label for="Busqueda">Busqueda</label>
                <input type="text" id="Busqueda" name="Busqueda" value={valorDelInput} onChange={handleChangeInput}/>
                      
            </form>
            <div className="cardsConteiner cards">
                {peliculas && peliculas.map(element=>{
                    return(
                        
                        <Card key={element.id}
                        nombre ={element.title} 
                            imagen={element.poster_path}
                            
                        />
                        
                    )
                })}
                   
            </div>
        </div>
    )
}
export default Busqueda;