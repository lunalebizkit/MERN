import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetEquipo } from "../acciones/equipos";
import { Link } from "react-router-dom";
const TablaEquipos= ()=>{
    const dispatch= useDispatch()
    const equipos= useSelector((state)=> state.equipo.listaEquipo)
    useEffect(()=>{
        dispatch(GetEquipo())
    }, [dispatch])
    const renderizarTablaEquipos=()=>{
        return equipos.map((equipo, i) =>{ 
        return(           
                <tr key={i}>
                    <td>{equipo.nombre}</td>
                    <td>{equipo.deporte}</td>
                    <td><Link to={`/equipos/${equipo.id}`}>Editar</Link></td>
                </tr>       
    )})}
    return(
        <>
         {renderizarTablaEquipos()}
        </>
    )
}
export default TablaEquipos