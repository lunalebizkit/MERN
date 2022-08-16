import React, {useEffect, useState} from 'react';
import FilasTablaEquipos from '../components/FilasTablaEquipos'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Button, Grid } from "@mui/material";
import { GetEquipo } from "../acciones/equipos";
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';

export default function TablaEquipo() {
    const dispatch= useDispatch();
    const paginas= useSelector(state=> state.equipo.cantidadPaginas)
    const [totalPaginas, setTotalPaginas]= useState(0);
    useEffect(()=>{ setTotalPaginas(paginas)},[paginas]);
    const paginasBoton= new Array(totalPaginas).fill(null).map((v, i)=>i);
    return (
<>
        <TableContainer sx={{ maxHeight: 500, bgcolor: '#bbdefb'}} color="secondary" component={Paper} >
            <Table >
                <TableHead >
                    <TableRow >
                        <TableCell sx={{bgcolor: 'warning.main' }}> <Typography color='white' variant='h6'>Nombre </Typography></TableCell>
                        <TableCell sx={{bgcolor: 'warning.main' }}> <Typography color='white' variant='h6'>Deporte</Typography></TableCell>
                        <TableCell sx={{bgcolor: 'warning.main' }}> <Typography color='white' variant='h6'>Jugadores </Typography></TableCell>
                        <TableCell sx={{bgcolor: 'warning.main' }}> <Typography color='white' variant='h6'>Acciones </Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    <FilasTablaEquipos />
                </TableBody>
            </Table>
        </TableContainer>
        <Grid sx={{p:2}} align= 'center'>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">{paginasBoton.map(i =>(<Button key={i +1} onClick={()=>dispatch(GetEquipo(i))}>{i + 1}</Button>))}</ButtonGroup> 
        </Grid>
</>
    )
}