import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editEquipo } from "../store/slice/editEquipoSlice";
import { delEquipo } from "../store/slice/delEquipoSlice";
const TablaEquipos= ()=>{
    const dispatch= useDispatch()
    const equipos= useSelector((state)=> state.equipo.listaEquipo)
    const eliminar= (id)=>{
        if (window.confirm("¿Estas seguro de eliminar?")) {
            dispatch(delEquipo(id))
        }
    }
    const renderizarTablaEquipos=()=>{
        return equipos.map(({nombre, deporte, _id}) =>{ 
        return(           
                <tr key={_id}>
                    <td>{nombre}</td>
                    <td>{deporte}</td>
                    <td><button onClick={()=> dispatch(editEquipo(_id))} className="btn-floating btn-small waves-effect waves-light"><i className="material-icons right">edit</i></button></td>
                    <td><button onClick={()=>eliminar(_id)} className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons right">delete</i></button></td>
                </tr>       
    )})}
    return(
        <>
         {renderizarTablaEquipos()}
        </>
    )
}
export default TablaEquipos