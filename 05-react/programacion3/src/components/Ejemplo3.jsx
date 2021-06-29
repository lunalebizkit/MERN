import React from "react";

const Ejemplo= ()=> {
    const reducer= (state, accion)=>{
        switch (accion.type){
            case "SUMAR":
                return (state + accion.payload);
            case "RESTAR":
                return (state - accion.payload);
            case "RESETEAR":
                return estadoInicial;
            default:
                 return state;
        }
    }
    const estadoInicial= 0;
    const [state, dispatch] = React.useReducer(reducer, estadoInicial);
    return(
        <>
        <div> Contador : {state} </div>
        <button onClick= {()=> dispatch({type:"SUMAR", payload: 1}) }>Click + </button>
        <button onClick= {()=> dispatch({type:"RESTAR", payload:2}) }>Click - </button>
        <button onClick= {()=> dispatch({ type:"RESETEAR"}) }>Click Reset </button>
        </>
    )
}
export default Ejemplo;