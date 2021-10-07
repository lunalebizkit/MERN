import axios from "axios";
import React, { useState, useEffect } from "react";
import M from 'materialize-css';
import 'materialize-css';
import { GetEquipo } from "../acciones/equipos";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const PaginaAgregarEquipo = () => {
    const dispatch= useDispatch()
    const equipos= useSelector((state)=> state.equipo.listaEquipo)
    useEffect(()=>{
        dispatch(GetEquipo())
    }, [dispatch])
    const [valor, setValor] = useState({ nombre: '', deporte: '' });    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValor({ ...valor, [name]: value })
    }
    const handleSubmit =  (e) => {
             axios({
            method: 'post',
            url: 'http://localhost:4000/api/tareas/equipos',
            data: valor 
        })
            .then(res => {
                console.log(res.data)
                M.toast({ html: 'I am a toast!' })
                M.toast({ html: 'Tareas Almacenada' })
            })
            .catch(res => console.log(res))
        e.preventDefault();
        console.log(valor);
        setValor({ nombre: '', deporte: '' })
    }
    const renderizarTablaEquipos= ()=>{
        return equipos.map(equipo=>{
            return(
                <tr key= {equipo.id}>
                    <td>{equipo.nombre}</td>
                    <td>{equipo.deporte}</td>
                    <td><Link to={`/equipos/${equipo.id}`}>Editar</Link></td>
                </tr>
            )
        })
    }
    // const traerEquipo = async () => {
    //     await axios('http://localhost:4000/api/tareas/equipos')
    //         .then(res => res.data)           
    // }
    //  traerEquipo()
       
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
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col s7">
                        <table className="striped blue">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Deporte</th>
                                </tr>                              
                            </thead>
                            <tbody>
                                {renderizarTablaEquipos()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )

}
export default PaginaAgregarEquipo