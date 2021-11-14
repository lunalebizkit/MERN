import * as React from 'react';
import { useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../paginas/template/Title';
import Typography from '@mui/material/Typography';
import FilasTablaJugador from './FilasTablaJugador';
const TablaJugadores=()=> {
    const {nombre}= useSelector(state=> state.jugador.jugadores)
    return (        
          
            <TableContainer sx={{ maxHeight: 400, width: 500}} elevation={3}>
            <Title children= {nombre} posicion= {'center'}/>
                <Table stickyHeader aria-label="sticky table">
                
                    <TableHead sx={{bgcolor: 'warning.main' }}>
                        <TableRow sx={{ bgcolor: "#0d47a1" }}>
                            <TableCell sx={{bgcolor: 'warning.main' }}>
                                <Typography color='white' variant='h6'>Nombre </Typography></TableCell>
                            <TableCell sx={{bgcolor: 'warning.main' }}><Typography color='white' variant='h6'>
                                Apellido</Typography></TableCell>
                         
                        </TableRow>
                    </TableHead>
                    <TableBody>
                       <FilasTablaJugador />
                    </TableBody>
                </Table>
            </TableContainer>
        
    )
}
export default TablaJugadores