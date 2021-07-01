import React from "react";
const fecha= new Date().toString();
const Ejemplo= ()=> {
    const estadoInicial= {resultado: 0,
       tiempo: fecha };

    const reducer= (state, accion)=>{
        console.info(`El estado es ${state.resultado} - y es ejecutado por ${accion.payload}`);

        switch(accion.type) {
            case "SUMAR":
                return {...state, resultado: state.resultado + accion.payload};
            case "RESTAR":
                return {...state, resultado: state.resultado - accion.payload};
            case "RESETEAR":
                return {...state, resultado: estadoInicial.resultado};
            case "ACTUALIZAR":
                return {...state, tiempo: accion.payload }
            default:
                 return state;
        }
    }
   
    const [state, dispatch] = React.useReducer(reducer, estadoInicial);
    return(
        <>
        <div> Contador : {state.resultado} </div>
        <div> Fecha : {state.tiempo} </div>
        <button onClick= {()=> dispatch({type:"SUMAR", payload: 1}) }>Click + </button>
        <button onClick= {()=> dispatch({type:"RESTAR", payload:2}) }>Click - </button>
        <button onClick= {()=> dispatch({ type:"RESETEAR"}) }>Click Reset </button>
        <button onClick= {()=> dispatch({ type:"ACTUALIZAR", payload: Date().toString()}) }>Fecha Actual </button>
        </>
    )
}
export default Ejemplo;