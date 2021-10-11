import React, {useState, useEffect} from "react";
const Inicio = ()=>{
    return <h2>Programacion 3</h2>
}
const PaginaInicio = ()=>{
    const [visible, setVisible] = useState(false);
    useEffect(()=>{
        console.info("MOUNT: Iniciando pagina de Incio...");
        return ()=>{
            console.info("UNMOUNT: Abandonando la pagina de Inicio...");
        }
    }, []);
    return (
        <div>
            <h1>Bienvenidos a Programacion</h1>
            <button onClick= {()=> setVisible(!visible)}>Ver / Ocultar</button>
            {visible && <Inicio />}
        </div>
    )
}
export default PaginaInicio;