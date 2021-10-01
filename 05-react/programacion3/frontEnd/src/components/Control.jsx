import React from 'react';
export default function Control (props) {
    return(
        <h4 className="bg-primary text-white text-center p-4">
            Tareas de {props.nombreUsuario} ({props.lista.filter(tarea=> !tarea.hecho).length} tareas por hacer)
        </h4>
    )
}
