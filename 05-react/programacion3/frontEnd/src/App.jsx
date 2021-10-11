import React from 'react';
import{ Switch, Route, Link} from "react-router-dom";
import Contador from './components/Contador';
import PaginaEquipo from './paginas/paginaEquipo';
import PaginaAgregarEquipo from './paginas/paginaAgregarEquipo';
import BarraNavegacion from './components/BarraNavegacion'
// import Menu from './components/Menu';
// import Parent from './components/Parent';
//  import Ejemplo from './components/Ejemplo3'
//  import Ejemplo from './components/Reducer';
// import Parcial from './components/Parcial';
import AgregarTarea from './paginas/AgregarTarea';
import PaginaInicio from './paginas/Inicio';

const App =()=> {
  
    return (
        <>           
           <BarraNavegacion />
           <ul>
               <li>
                  <Link to="/">Inicio</Link>
               </li>
               <li>
                  <Link to="/contador">Contador</Link>
               </li>
               <li>
                  <Link to="/paginaEquipo">Equipos</Link>
               </li>
               <li>
                  <Link to="/paginaAgregarEquipo">Agregar Equipos</Link>
               </li>
               <li>
                  <Link to="/paginaAgregarTarea">Agregar Tarea</Link>
               </li>
           </ul>
         
           <div className="container">
               <Switch>
                   <Route exact path="/" component={PaginaInicio} />
                   <Route exact path="/contador" component={Contador} />
                   <Route exact path="/paginaEquipo" component={PaginaEquipo} />
                   <Route exact path="/paginaAgregarEquipo" component={PaginaAgregarEquipo} />
                   <Route exact path="/paginaAgregarTarea" component={AgregarTarea} />
               </Switch>
           </div>
        </>
    
    );

};
export default App;