import React from 'react';
export default function FilasTareas (props) {
    return (
        <tr key={props.tarea.nombre}>
            <td>{props.tarea.nombre}</td>
            <td>
                <input 
                type="checkbox"  
                checked={props.tarea.hecho} 
                onChange={()=>props.estadoTareas(props.tarea)}/>
            </td>
        </tr>
    )
};