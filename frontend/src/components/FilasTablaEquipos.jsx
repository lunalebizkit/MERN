import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from 'react-router-dom';
import { editEquipo } from "../store/slice/editEquipoSlice";
import { delEquipo } from "../store/slice/delEquipoSlice";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import IconButton from '@mui/material/IconButton';

const FilasTablaEquipos = () => {
    const dispatch = useDispatch()
    const equipo = useSelector((state) => state.equipo.listaEquipo)
    console.log(equipo)
    const eliminar = (id) => {       
        if(window.confirm("estas Seguro de eliminar?")) {
            dispatch(delEquipo(id))
        }}
    const renderizarTablaEquipos = () => {
        return equipo.map(({ nombre, deporte, _id, jugadores }) => {
            return (
                <TableRow key={_id}>
                    <TableCell>{nombre}</TableCell>
                    <TableCell>{deporte}</TableCell>
                    <TableCell> {jugadores.length}</TableCell>
                    <TableCell><IconButton color="secondary"
                        onClick={() => dispatch(editEquipo(_id))} >
                        <EditIcon /></IconButton>
                        <IconButton onClick={()=>{eliminar(_id)}} color="error" ><DeleteIcon />
                        </IconButton>
                        <IconButton color="primary" component={RouterLink} to={'AgregarJugador/' + _id} >
                            < GroupAddIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>


            )
        })
    }
    return (
        <>
            {renderizarTablaEquipos()}
          
        </>
    )
}
export default FilasTablaEquipos