import React from 'react';
import FilasTablaEquipos from '../components/FilasTablaEquipos'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography'

export default function TablaEquipo() {
    return (

        <TableContainer sx={{ maxHeight: 400, bgcolor: '#bbdefb'}} color="secondary" component={Paper} >
            <Table stickyHeader aria-label="sticky table">
                <TableHead >
                    <TableRow >
                        <TableCell sx={{bgcolor: 'warning.main' }}> <Typography color='white' variant='h6'>Nombre </Typography></TableCell>
                        <TableCell sx={{bgcolor: 'warning.main' }}> <Typography color='white' variant='h6'>Deporte</Typography></TableCell>
                        <TableCell sx={{bgcolor: 'warning.main' }}> <Typography color='white' variant='h6'>Jugadores </Typography></TableCell>
                        <TableCell sx={{bgcolor: 'warning.main' }}> <Typography color='white' variant='h6'>Acciones </Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <FilasTablaEquipos />
                </TableBody>
            </Table>
        </TableContainer>

    )
}