import React, { useState, useEffect } from 'react';
// import Contador from './components/Contador';
// import Menu from './components/Menu';
// import Parent from './components/Parent';
//  import Ejemplo from './components/Ejemplo3'
//  import Ejemplo from './components/Reducer';
import FilasTareas from './components/FilasTareas';
import Control from './components/Control';
import CreadorTareas from './components/CreadorTareas';
import Tareas from './components/Tareas';



function App() {
    const [nombreUsuario, setNombreUsuario] = useState('Ale');
    const [tareasItems, setTareasItems] = useState([
        { nombre: 'Tarea uno', hecho: true },
        { nombre: 'Tarea dos', hecho: false },
        { nombre: 'Tarea tres', hecho: true }

    ]);
    const [completado, setCompletado] = useState(true);
    useEffect(() => {
        let datos = localStorage.getItem('tareas');
        if (datos != null) {
            setTareasItems(JSON.parse(datos))
        } else {
            setNombreUsuario('Ejemplos de Ale');
            setTareasItems([
                { nombre: 'Ejemplo de Tarea uno', hecho: true },
                { nombre: 'Ejemplo de Tarea dos', hecho: false },
                { nombre: 'Ejemplo de Tarea tres', hecho: true }
            ])
            setCompletado(true);
        }
    }, []);
    useEffect(()=>{
        localStorage.setItem('tareas', JSON.stringify(tareasItems))
    }, [tareasItems]);
    const creadorDeTarea = (nombreTarea) => {
        if (!tareasItems.find(tareas => tareas.nombre === nombreTarea)) {
            setTareasItems([...tareasItems, { nombre: nombreTarea, hecho: false }]);
        }
    };
    const estadoTareas = tareas => {
        setTareasItems(tareasItems.map(tarea => (tarea.nombre === tareas.nombre ? { ...tarea, hecho: !tarea.hecho } : tarea)))
    }
    const filasTareas = (hechoValor) => {
        return tareasItems
            .filter(tarea => tarea.hecho === hechoValor)
            .map(tarea => (
                < FilasTareas tarea={tarea} key={tarea.nombre} estadoTareas={estadoTareas} />
            ))
    };
    return (
        <>
            <Control nombreUsuario={nombreUsuario} lista={tareasItems} />
            <CreadorTareas usuario={creadorDeTarea} />
            <table className="table table-dark table-bordered">
                <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>Realizada</th>
                    </tr>
                </thead>
                <tbody>
                    {filasTareas(false)}
                </tbody>
            </table>

            <div className="bg-secondary-text-white text-center p-2">
                <Tareas
                    descripcion="Tarea Completada"
                    estaCompleto={completado}
                    vuelta={checked => setCompletado(checked)}
                />
            </div>
            {
                completado && (
                    <table className="table table-striped table-bordered">
                        <thead color= "dark">
                            <tr>
                                <th>Tarea</th>
                                <th>Realizada</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filasTareas(true)}
                        </tbody>

                    </table>
                )
            }

        </>
    );

};
export default App;