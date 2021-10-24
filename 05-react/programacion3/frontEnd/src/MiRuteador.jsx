import { Switch, Route } from "react-router-dom";
import Contador from './components/Contador';
import PaginaEquipo from './paginas/paginaEquipo';
import PaginaAgregarEquipo from './paginas/paginaAgregarEquipo';
import React from 'react';
import AgregarTarea from './paginas/AgregarTarea';
import PaginaInicio from './paginas/Inicio';
const MiRuteador = ()=>{
    return(
        <Switch>
              <Route exact path="/" component={PaginaInicio} />
              <Route exact path="/contador" component={Contador} />
              <Route exact path="/paginaEquipo" component={PaginaEquipo} />
              <Route exact path="/paginaAgregarEquipo" component={PaginaAgregarEquipo} />
              <Route exact path="/paginaAgregarTarea" component={AgregarTarea} />
        </Switch>
    )
}
export default MiRuteador;