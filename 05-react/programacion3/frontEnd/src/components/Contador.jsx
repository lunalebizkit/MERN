import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/slice/counterSlice";


const Contador= () => {
    const count= useSelector((state)=> state.counter.value);
    const dispatch= useDispatch();
  
    const [nombre, setNombre]= useState("Ale");
    const [numero, setNumero]= useState(10);
    function sumar() {
        setNumero(numero + 1);
    };
    const nombreCompleto= ()=> {
        console.log('Se toco el boton');
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
        <br />
        <button aria-label="Valor Incremental"
            onClick={()=> dispatch(increment())}> Increment</button>
        <span>{count}</span>
        <button aria-label="Valor Decremental" onClick={()=> dispatch(decrement())}>Decrement</button>
        <button className="btn btn-success m-2" aria-label="Valor Incremental por..." onClick={()=> dispatch(incrementByAmount(7))}>Incremento x7</button>
      

        </>
    );
};

export default Contador;