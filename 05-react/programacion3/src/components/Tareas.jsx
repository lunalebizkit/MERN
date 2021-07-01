import React from 'react';
const Tareas= (props) =>{
    return (
        <div  className="form-check">
            <input type="checkbox"
            className="form-check-input"
            checked={props.estaCompleto}
            onChange={e=> props.vuelta(e.target.checked)} 
            />
            <label htmlFor="form-check-label">
            <strong><em> Mostrar {props.descripcion} </em></strong>
            </label>
        </div>
        )
}
export default Tareas;