import * as React from "react";
import {  useSelector, useDispatch } from "react-redux";
import { eliminarJugador } from "../acciones/eliminarJugador";
import {editarJugador} from '../acciones/editarJugador';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'; 

const FilasTablaJugador= ()=>{   
    const {jugadores}= useSelector((state)=> state.jugador.jugadores)
    //const [totalPaginas, setTotalPaginas]= useState(0);
    const dispatch= useDispatch()
    const eliminar= (id)=>{
        dispatch(eliminarJugador(id))
    }
    const botonEditaJugador= (id)=>{
        dispatch(editarJugador(id))
    }
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
                            <TableCell>                            
                                <IconButton color="secondary"
                                    onClick={()=> {botonEditaJugador(_id)}} >
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={()=>{eliminar(_id)}} color="error" >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
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