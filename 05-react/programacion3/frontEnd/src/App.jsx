import React from 'react';
import{ Switch, Route, Link} from "react-router-dom";
import Contador from './components/Contador';
import PaginaEquipo from './paginas/paginaEquipo';

// import Menu from './components/Menu';
// import Parent from './components/Parent';
//  import Ejemplo from './components/Ejemplo3'
//  import Ejemplo from './components/Reducer';
// import Parcial from './components/Parcial';

import PaginaInicio from './paginas/Inicio';

const App =()=> {
  
    return (
        <>           
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
                  <Link to="/paginaEquipo">Equipos</Link>
               </li>
           </ul>
         
           <div className="container">
               <Switch>
                   <Route exact path="/" component={PaginaInicio} />
                   <Route exact path="/contador" component={Contador} />
                   <Route exact path="/paginaEquipo" component={PaginaEquipo} />
                   <Route exact path="/paginaEquipo" component={PaginaEquipo} />
               </Switch>
           </div>
        </>
    
    );

};
export default App;