import React, { useState, useEffect } from "react";
import { cargarEquipos } from '../store/slice/postEquiposSlice';
import { GetEquipo } from "../acciones/equipos";
import { useSelector, useDispatch } from "react-redux";
import CantidadEquipo from "../components/CantidadEquipo";
import TablaEquipos from "../components/TablaEquipos";
import { editEquipo } from "../store/slice/editEquipoSlice";
import {actualizarEquipo} from "../store/slice/actualizarEquipo";


const PaginaAgregarEquipo = () => {
    const dispatch = useDispatch()
    const [valor, setValor] = useState({ nombre: '', deporte: '', _id: '' });
    const equipoEditar = useSelector(state => state.editarEquipo.equipo)
    const estadoDel = useSelector(state => state.eliminarEquipo.respuesta)
    const cargaEquipo = useSelector(state => state.enviarEquipo.estado)
    const estadoActualizado = useSelector(state => state.actualizarEquipo.estado)
    useEffect(() => {
        dispatch(GetEquipo())
    }, [cargaEquipo, dispatch])
    useEffect(() => {
        dispatch(GetEquipo())
    }, [estadoActualizado, dispatch])
    useEffect(() => {
        dispatch(GetEquipo())
    }, [estadoDel, dispatch])
   useEffect(()=>{
    const { _id, nombre, deporte } = equipoEditar
    setValor({nombre, deporte, _id})
   }, [equipoEditar])
    const handleChange = (e) => {
        const { _id } = equipoEditar
        if (_id) {
            const { name, value } = e.target;
        setValor({ ...valor, [name]: value })
        }
        const { name, value } = e.target;
        setValor({ ...valor, [name]: value })   
    }

    const handleSubmit = (e) => {
        const { _id, nombre, deporte } = equipoEditar
        console.log(_id)
        if (_id) {
            setValor({nombre, deporte}) 
            console.log(valor) 
            dispatch(actualizarEquipo(valor))
            setValor({ nombre: '', deporte: '', _id: '' })  
            e.preventDefault(valor)              
        }else{
        dispatch(cargarEquipos(valor))
        setValor({ nombre: '', deporte: '', _id: '' })
        e.preventDefault(valor)}
    }

    const { nombre, deporte } = valor
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col s5">
                        <div className="card">
                            <div className="card-content">
                                <form onSubmit={handleSubmit} action="">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input name="nombre" type="text" value={nombre} onChange={handleChange} placeholder="Agregar Equipo" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input name="deporte" type="text" value={deporte} onChange={handleChange} placeholder="Agregar Deporte" />

                                        </div>
                                    </div>
                                    <button type="submit" className="btn light-blue darken-4">Enviar</button>
                                    {/* <button className="btn lime accent-4">ACTUALIZAR</button> */}
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col s7">
                        <CantidadEquipo />
                        <table className="striped blue">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Deporte</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TablaEquipos />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )

}
export default PaginaAgregarEquipo