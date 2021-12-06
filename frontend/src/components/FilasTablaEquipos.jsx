import React, { useEffect, useState} from "react";
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
import { Button, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import { GetEquipo } from "../acciones/equipos";
import ButtonGroup from '@mui/material/ButtonGroup';

const FilasTablaEquipos = () => {
    const dispatch = useDispatch()
    const equipo = useSelector((state) => state.equipo.listaEquipo)
    const paginas= useSelector(state=> state.equipo.cantidadPaginas)
    const [totalPaginas, setTotalPaginas]= useState(0);
    useEffect(()=>{ setTotalPaginas(paginas)},[paginas]);
    const paginasBoton= new Array(totalPaginas).fill(null).map((v, i)=>i);
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
          <Grid sx={{p:2}} align= 'center'>
             <ButtonGroup variant="contained" aria-label="outlined primary button group">{paginasBoton.map(i =>(<Button key={1} onClick={()=>dispatch(GetEquipo(i))}>{i + 1}</Button>))}</ButtonGroup> 
             </Grid>
        </>
    )
}
export default FilasTablaEquipos