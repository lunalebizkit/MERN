import React from "react";
const paginaAgregarEquipo= ()=>{
    const agregarEquipo=()=> console.log("agrega")
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col s5">
                    <div className="card">
                        <div className="card-content">
                            <form onSubmit={agregarEquipo} action="">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input type="text" placeholder="Agregar Equipo" />

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input type="text" placeholder="Agregar Deporte" />

                                    </div>
                                </div>
                                <button type="submit" className="btn light-blue darken-4">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}
export default paginaAgregarEquipo