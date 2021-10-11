import React, { useState, useEffect } from "react";
import 'materialize-css';
import { GetEquipo } from "../acciones/equipos";
import{enviarValor} from '../store/slice/postEquiposSlice'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CantidadEquipo from "../components/CantidadEquipo";
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
   
    const handleSubmit =  (e) => ()=> {        
        let array= [valor];
    
        e.preventDefault(valor)
         console.log(array)
         setValor({ nombre: '', deporte: '' })
    }
    const renderizarTablaEquipos=()=>{
        return equipos.map(equipo =>{ 
        return(           
                <tr key={equipo.id}>
                    <td>{equipo.nombre}</td>
                    <td>{equipo.deporte}</td>
                    <td><Link to={`/equipos/${equipo.id}`}>Editar</Link></td>
                </tr>       
    )})}
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
                        <CantidadEquipo />
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