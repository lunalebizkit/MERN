import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GetEquipo } from "../acciones/equipos";
const PaginaEquipo= ()=>{
    const dispatch= useDispatch();
    const equipos= useSelector((state) => state.equipo.listaEquipo);
    useEffect(()=>{
        dispatch(GetEquipo());
    }, [dispatch])
    const renderEquipo= ()=>{
       return equipos.map( equip =>{
           return (
               <tr key={equip.id}>
                <td>{equip.nombre}</td>
                <td>{equip.talle}</td>
                <td>{equip.precio}</td>
                <td><Link to={`/equipos/${equip.id}`}>Editar</Link></td>
               </tr>
           )
       })
    }
    return(
        <>
        <h2 className="bg-info text-center">Lista de Equipos</h2>
        <table>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Deporte</th>
                <th>Deporte</th>
                </tr>
            </thead>
            <tbody>
            {renderEquipo()}
            </tbody>
        </table>
        </>
    )
}
export default PaginaEquipo;