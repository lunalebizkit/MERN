import * as React from "react";
import {  useSelector } from "react-redux";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const FilasTablaJugador= ()=>{   
    const {jugadores}= useSelector((state)=> state.jugador.jugadores)
    const renderizarTablaJugador=()=>{
        if (jugadores === undefined) {            
                return( <TableRow key={0}>
                        <TableCell>No hay jugadores</TableCell>             
                        </TableRow> )
        }if(jugadores.length === 0) {
            return( <TableRow key={0}>
                        <TableCell>No hay jugadores</TableCell>             
                        </TableRow> )
        }else {return jugadores.map(({nombre,  _id, apellido}) =>{ 
            return(           
                        <TableRow key={_id}>
                            <TableCell>{nombre}</TableCell>                   
                            <TableCell>{apellido}</TableCell>
                        </TableRow>       
                        )})
        }
    }
    return(
        <>
         {renderizarTablaJugador()}
        </>
    )
}
export default FilasTablaJugador