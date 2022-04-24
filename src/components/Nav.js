import '../style/navegador.scss'
import {Link } from "react-router-dom"
const Nav =()=>{

    return(
        <div className="menu">
            <div className="menu-list">
                <button className="linksConteiner">
                    <Link className='linksColorLetras'  to="/">Home</Link>
                </button>
                <button className="linksConteiner">
                    <Link className='linksColorLetras' to="/MejoresPeliculas">Best movies</Link>
                </button>
                <button className="linksConteiner">
                    <Link className='linksColorLetras' to="/UltimosLanzamientos">Ultimos Lanzamientos</Link>
                </button>
                <button className="linksConteiner">
                    <Link className='linksColorLetras' to="/Populares">Populares</Link>
                </button>
                <button className="linksConteiner">
                    <Link className='linksColorLetras' to="/Busqueda">Busqueda</Link>
                </button>
            </div>
        </div>
    )
}
export default Nav