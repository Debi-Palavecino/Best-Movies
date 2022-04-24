import { ImgW300 } from "../ExportFiles"

const Card = ({nombre, imagen, detalle, votacion,})=>{
    return(
        <div >
            <div>
                <div>
                    <img alt="imagen" src={ImgW300+imagen} />
                </div>

                <div>
                    <h1>{nombre}</h1>
                    <p>{votacion}</p>
                
                </div>
            </div>
        </div>
    )
}
export default Card 