import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregar } from "../store/slice/tareaSlice";
import Tarea from "../components/Tarea";
import TraerTarea from "../components/TraerTarea";
const AgregarTarea= ()=>{
    const [tareaTexto, setTareaTexto]= useState('')
    const dispatch= useDispatch()
    const tomarTexto= (e)=>{
        e.preventDefault(tareaTexto)
        setTareaTexto(e.target.value)
    }

    return(
        <>
        <div className="container">
        <input type="text" name="ingresarTarea" value={tareaTexto} onChange={tomarTexto} />
        <button className="btn btn-blue" onClick={()=>{ 
            dispatch(agregar({'tarea': tareaTexto, 'id': Date.now().toString()}))
            setTareaTexto('')}}>Enviar</button>
        </div>
       <Tarea />
       <TraerTarea />
        </>
    )
}
export default AgregarTarea