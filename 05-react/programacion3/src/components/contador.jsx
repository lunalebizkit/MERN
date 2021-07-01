import { useState } from "react";


const Contador= () => {
  
    const [nombre, setNombre]= useState("Ale");
    const [numero, setNumero]= useState(10);
    function sumar() {
        setNumero(numero + 1);
    };
    const nombreCompleto= ()=> {
        setNombre("Luna Vega, Alexandro");
    };
    const volverNombre= function(nombre) {setNombre("Ale")};
    
    
     
    
    return(
 
        <>
        <h1>Bienvendido <span color= "blue"><i>{nombre}</i></span> a Programacion 3</h1>
        <h2><u>Contador:</u> {numero}</h2>
        <button onClick= {sumar}> + </button>
        <button onClick = {()=> {setNumero(numero - 1)}}> - </button>
        <br></br>
        <button onClick= {nombreCompleto} >Cambiar Nombre Completo</button>
        <button onClick= {volverNombre} >Volver a Nombre</button>
    

        </>
    );
};

export default Contador;