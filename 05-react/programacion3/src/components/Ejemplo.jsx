
const MiTitulo = (props)=> {
    return ( <div>
        {props.valor && <h1>{props.valor}</h1>}
        {!props.valor && <h1>No tiene valor</h1>}
        {props.children}
    </div>
    )
}
const Ejemplo= function() {
    return(
        <>
        <MiTitulo valor= {"titulo Uno"}>
            <h2>Este es un children</h2>
            <p>Parrafo como children</p>
        </MiTitulo>
        <MiTitulo valor= {"Titulo Dos"}/>
        <MiTitulo>
            <h2>Otro children</h2>
            <b>Otro negrita de children</b>
        </MiTitulo>
        </>
    )
}
export default Ejemplo