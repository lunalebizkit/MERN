import React from 'react'
const Store= React.createContext();

function App (props) {
    const estadoInicial={ productos:[{id: 1, nombre: "Producto Uno", precio:33}, {id: 2, nombre: "Producto Dos", precio:50}],
 productoSeleccionado: 2};
    return (
        <Store.Provider value= {estadoInicial}>
            {props.children}
        </Store.Provider> 
    );
}
const ListaDeProducto= () =>{
    const ctx= React.useContext(Store)
    const {productos} = ctx;
    return(
        <div>
            <table>
                <thead>
                    <th>Numero</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </thead>
                <tbody>
                    {productos.map(prod => {
                        return ( 
                        <tr key= {prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.nombre}</td>
                            <td>{prod.precio}</td>
                        </tr>
                        )})}
                   
                </tbody>

            </table>
        </div>
    )
}
const MostrarProducto = () => {
    const ctx= React.useContext(Store);
    const {productoSeleccionado, productos}= ctx;
    const product= productos.find(p => p.id === productoSeleccionado);
    console.log(product);
    return(
        <div>
          <hr />
          <h3>Nombre: {product.nombre}</h3>
          <h4>Precio: $ {product.precio}</h4>
        </div>
    )
}


const Ejemplo2 = () => {
    return(
        <div>
            <App>
                <ListaDeProducto />
                <MostrarProducto />
            </App>
        </div>
    )
}
export default Ejemplo2