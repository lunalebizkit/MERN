import { Switch, Route } from "react-router-dom";
//import Contador from './components/Contador';
import PaginaAgregarEquipo from './paginas/paginaAgregarEquipo';
import React from 'react';
// import AgregarTarea from './paginas/AgregarTarea';
// import PaginaInicio from './paginas/Inicio';
import AgregarJugador from './paginas/AgregarJugador';
import PaginaLogin from "./paginas/PaginaLogin";
import PaginaRegistro from "./paginas/PaginaRegistro";
const MiRuteador = ()=>{
    return(
        <Switch>
            
              <Route exact path="/registro" component={PaginaRegistro} />
              <Route exact path="/paginaAgregarEquipo" component={PaginaAgregarEquipo} />
              {/* <Route exact path="/paginaAgregarTarea" component={AgregarTarea} /> */}
              <Route path="/AgregarJugador/:id" component={AgregarJugador} />
              <Route path="/" component={PaginaLogin} />
        </Switch>
    )
}
export default MiRuteador;