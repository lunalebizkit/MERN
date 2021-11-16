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
import Paper from '@mui/material/Paper';
const TablaJugadores=()=> {
    const {nombre}= useSelector(state=> state.jugador.jugadores)
    return (        
          
            <TableContainer sx={{ maxHeight: 400, width: 500, bgcolor: "#bbdefb" }} elevation={3} component={Paper}>
            <Title color='white' nombre= {nombre} posicion= {'center'}/>
                <Table stickyHeader aria-label="sticky table">                
                    <TableHead >
                        <TableRow>
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