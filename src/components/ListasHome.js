import useFetchMovieList from "../hooks/useFetchMovieLists";
import useFetchPelis from "../hooks/useFetchPelis"
import '../style/contenedorDeListas.scss'
const Listashome = ()=>{
    const [info, ] =useFetchMovieList("popular","Es")
    const{peliculas} = useFetchPelis("popular")
    return(
        <div className="listConteiner">
            <div className="conteinerBestMovies">
                            <div className="conteinerTitle">
                                <h2>Mejores Peliculas</h2>
                            </div>
                {info.map(element=>(
                        <div className="conteinerElementsTitle">
                            <ul>
                                <li><h4>{element.original_title}</h4></li>
                            </ul>
                        </div>
                ))
                }
            </div>
            <div className="conteinerBestMovies">
                        <div className="conteinerTitle">
                            <h2>Populares</h2>
                        </div>
                {peliculas.map(element=>(
                    <div className="conteinerElementsTitle">
                        <div>
                           <h4>{element.original_title}</h4>
                        </div> 
                    </div>
                ))
                }
            </div>
        </div>
    )
}
export default Listashome