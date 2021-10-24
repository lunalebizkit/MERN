import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { eliminar } from "../store/slice/tareaSlice";
export  default function Tarea() {
    const dispatch= useDispatch()
    const tareas= useSelector(state => state.tareas)
    const renderizarTarea= tareas.map(({tarea, id}) =>{
        return(
        <>
        <h2 key={id}>{tarea}</h2>
        <button onClick={()=>dispatch(eliminar(id))}>Eliminar</button>
        </>)
    })

    
    return(
        <>
        {renderizarTarea}
        </>
    )
}