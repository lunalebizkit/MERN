import React from "react";
import axios from "axios";
import { useState } from "react";
const PaginaAgregarEquipo= ()=>{
    const [valor, setValor]= useState({nombre: '', deporte: ''});
    const handleChange= (e) => {
        const {name, value}= e.target;
        setValor({...valor,  [name]: value})
       
    }
    const handleSubmit= (e)=>{
        axios.post('http://localhost:4000/api/tareas/equipos', valor)
        .then(res => console.log(res.data))
        .catch(res => console.log(res))
        e.preventDefault();
        console.log(valor)}
    // constructor() {
    //     super();
    //     this.state= {
    //         nombre: '',
    //         deporte: ''
    //     }
    //     this.agregarEquipo= this.agregarEquipo.bind(this)
    // }
    // const agregarEquipo= e=> setEstado(e.target.value);
      
       const {nombre, deporte}= valor
    return(
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

                </div>
            </div>
        </div>
        </>
    )

}
export default PaginaAgregarEquipo