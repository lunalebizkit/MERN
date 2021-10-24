import React, { useState } from'react';

const CreadorTareas= (props)=>{
    const [nuevaTarea, setNuevaTarea]= useState('');

    const agregarNuevaTarea= e=> setNuevaTarea(e.target.value);

    const crearNuevaTarea= ()=>{
        props.usuario(nuevaTarea);
        setNuevaTarea('');
    }
    return(
        <div className= "my-1">
            <input type="text" className="form-control" 
            value={nuevaTarea}
            onChange={agregarNuevaTarea} 
            />
            <button className= "btn btn-success mt-1" onClick={crearNuevaTarea}>Agregar Tarea!</button>
        </div>
    )
}

export default CreadorTareas;