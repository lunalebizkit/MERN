import React, { createContext } from "react"

const Store= React.createContext();

const Padre= (props)=>{
    const nombre= "Jorge"
    return(
          
        <Store.Provider value= {nombre}>
        <h1>Yo soy el Padre, mi nombre es {nombre}</h1>
            {props.children}
        </Store.Provider>     
    )
}

const Hijo1= (props) =>{
    const hijo1nombre= "Angel"
    return(
        <Store.Consumer>
            {(value) =>{
                return(
                    <>
                    <h2>Soy yo {hijo1nombre} el primer hijo de {value}</h2>
                    {props.children}
                    </>
                )
            }}
        </Store.Consumer>  
    )
}
const Hijo2= (props) => {
    return(
        <Store.Consumer>
        {(value) =>{
        return(
            <div>
                <h3>Soy el segundo hijo de {value}</h3>
            {props.children}
            </div>
        )}}
        </Store.Consumer>
    )
}
const Hijo3 = (props) => {
    const value= React.useContext(Store);
    return(
        <>
        <h3>Yo soy el tercer hijo de {value}</h3>
        {props.children}
        </>
    )
}
const Nieto = (props) =>{
    return(
    <Store.Consumer>
    {(value)=>{
        return(
        <div>
            <h5>Yo soy nieto del primer hijo y mu abuelo es {value}</h5>
        </div>
    )}}
    </Store.Consumer>)
}
const Nieto1 = () =>{
    const value = React.useContext(Store);
    return(
        <div>
            <h5>Yo soy nieto del tercer hijo y mu abuelo es {value}</h5>
        </div>
    )}

const Ejemplo1= ()=> {
    return(
        <div>
            <Padre>
                <Hijo1>
                    <Nieto />
                </Hijo1>
                <Hijo2>
                    <p>Yo no tengo hijos, por eso mi papa no es abuelo por parte mia</p>
                </Hijo2>
                <Hijo3>
                    <Nieto1></Nieto1>
                </Hijo3>
            </Padre>
        </div>
    )
}
export default Ejemplo1