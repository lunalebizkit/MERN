import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editEquipo } from "../store/slice/editEquipoSlice";
import { delEquipo } from "../store/slice/delEquipoSlice";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
const TablaEquipos= ()=>{
    const dispatch= useDispatch()
    const equipos= useSelector((state)=> state.equipo.listaEquipo)
    const eliminar= (id)=>{
        if (window.confirm("¿Estas seguro de eliminar?")) {
            dispatch(delEquipo(id))
        }
    }
    const renderizarTablaEquipos=()=>{
        return equipos.map(({nombre, deporte, _id}) =>{ 
        return(           
                <TableRow key={_id}>
                    <TableCell>{nombre}</TableCell>
                    <TableCell>{deporte}</TableCell>
                    <TableCell><IconButton color= "secondary"
                         onClick={()=> dispatch(editEquipo(_id))} >
                            <EditIcon /></IconButton>
                    <IconButton onClick={()=>eliminar(_id)} color="error" ><DeleteIcon /></IconButton></TableCell>
                </TableRow>       
    )})}
    return(
        <>
         {renderizarTablaEquipos()}
        </>
    )
}
export default TablaEquipos