import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/slice/counterSlice";
const Contador= () => {
    const contador= useSelector((state)=> state.contador.value);
    const dispatch= useDispatch();  
    const [nombre, setNombre]= useState("Ale");
    const nombreCompleto= ()=> {
        console.log('Se toco el boton');
        setNombre("Luna Vega, Alexandro");
    };
    const volverNombre= function(nombre) {setNombre("Ale")};    
    return(
 
        <>
        <h1>Bienvendido <span color= "blue"><i>{nombre}</i></span> a Programacion 3</h1>
        <h2><u>Contador:</u> {contador}</h2>
        <button onClick= {()=>dispatch(increment())}> + </button>
        <button onClick = {()=> dispatch(decrement())}> - </button>
        <br></br>
        <button onClick= {nombreCompleto} >Cambiar Nombre Completo</button>
        <button onClick= {volverNombre} >Volver a Nombre</button>
        <br />
        <button aria-label="Valor Incremental"
            onClick={()=> dispatch(increment())}> Increment</button>
        <button aria-label="Valor Decremental" onClick={()=> dispatch(decrement())}>Decrement</button>
        <button className="btn btn-success m-2" aria-label="Valor Incremental por..." onClick={()=> dispatch(incrementByAmount(7))}>Incremento x7</button>     

        </>
    );
};
export default Contador;