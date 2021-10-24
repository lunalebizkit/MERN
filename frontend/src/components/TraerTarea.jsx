import React, {useEffect} from "react";
import {useDispatch} from 'react-redux'
import { traerTareaDB } from "../store/slice/traerTareaSlice";
const TraerTarea = ()=> {
    const dispatch= useDispatch()
    useEffect(()=> {dispatch(traerTareaDB({ limit: '5'}))}, [dispatch])
    return(
        <>
        <h1>EQUIPOS...</h1>
        </>
    )
}
export default TraerTarea