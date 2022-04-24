import { ImgW300 } from "../ExportFiles"
const CardCarrousel = ({imagen})=>{
    return(
        <div >
            <img alt="imagen" src={ImgW300+imagen} />
        </div>

    )
}
export default CardCarrousel 