import React from "react";
import { useSelector } from "react-redux";
const CantidadEquipo= ()=>{
    const cantidad= useSelector((state)=> state.equipo.cantidadEquipo)
    return (
        <p>
            Cantidad: {cantidad}
        </p>
    )
}
export default CantidadEquipo