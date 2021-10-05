import React from "react";
import { useSelector } from "react-redux";
const CantidadEquipo= ()=>{
    const cantidad= useSelector((state)=> state.equipo.cantidadEquipos)
    return (
        <p>
            Cantidad de Equipos: {cantidad}
        </p>
    )
}
export default CantidadEquipo