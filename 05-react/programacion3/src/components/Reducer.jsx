
export default function Ejemplo () {
    const arr = [1, 2, 3, 4, 5];
    const reductora= (estado, valor)=>{
        const resultado= estado + valor;
        return resultado;
    };
    const estadoInical = 0;
    const resultadoFinal= arr.reduce(reductora, estadoInical);
    return (
        <>
        Reducer: {resultadoFinal}
        </>
    )
} 