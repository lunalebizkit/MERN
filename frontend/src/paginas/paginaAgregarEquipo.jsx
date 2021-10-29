import { useState, useEffect } from "react";
import { cargarEquipos } from '../store/slice/postEquiposSlice';
import { GetEquipo } from "../acciones/equipos";
import { useSelector, useDispatch } from "react-redux";
import CantidadEquipo from "../components/CantidadEquipo";
import TablaEquipos from "../components/TablaEquipos";
import { actualizarEquipo } from "../store/slice/actualizarEquipo";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const PaginaAgregarEquipo = () => {
    
    const dispatch = useDispatch()
    const [valor, setValor] = useState({ nombre: '', deporte: '', _id: '' });
    const [visible, setVisible] = useState(true);
    const equipoEditar = useSelector(state => state.editarEquipo.equipo)
    const estadoDel = useSelector(state => state.eliminarEquipo.respuesta)
    const cargaEquipo = useSelector(state => state.enviarEquipo.estado)
    const estadoActualizado = useSelector(state => state.actualizarEquipo.estado);
    useEffect(() => {
        dispatch(GetEquipo())
    }, [cargaEquipo, dispatch])
    useEffect(() => {
        dispatch(GetEquipo())
    }, [estadoActualizado, dispatch])
    useEffect(() => {
        dispatch(GetEquipo())
    }, [estadoDel, dispatch])
    useEffect(() => {
        const { _id, nombre, deporte } = equipoEditar;
        setValor({ nombre, deporte, _id });
        if(_id != null) {
            setVisible(false)    
        }       
    }, [equipoEditar])

    const handleChange = (e) => {
        const { _id } = equipoEditar
        if (_id) {
            const { name, value } = e.target;
            setValor({ ...valor, [name]: value })
            
        }
        const { name, value } = e.target;
        setValor({ ...valor, [name]: value })
        
    }

    const handleSubmit = (e) => {
        const { _id } = valor
        if (_id) {
            dispatch(actualizarEquipo(valor))
            setValor({ nombre: '', deporte: '', _id: '' })
            e.preventDefault(valor)
             setVisible(!visible)
        } else {
            dispatch(cargarEquipos(valor))
            setValor({ nombre: '', deporte: '', _id: '' })
            e.preventDefault(valor)
        }
    }

    const { nombre, deporte } = valor
    return (
        <>
            <Grid container spacing={3}>

                <Grid item xs={4} sx={{ p: 5 }} >
                    <Paper>
                        <Box component="form"
                            sx={{
                                '& > :not(style)': { m: 1 },
                            }}
                            noValidate
                            autoComplete="off" onSubmit={handleSubmit}>

                            <Input name="nombre" type="text" value={nombre} onChange={handleChange} placeholder="Agregar Equipo" />


                            <Input name="deporte" type="text" value={deporte} onChange={handleChange} placeholder="Agregar Deporte" />


                           {visible ? <Button variant="contained" endIcon={<SendIcon />} type="submit" >Enviar</Button>
                           : <Button type="submit" startIcon={<SaveIcon />} color="secondary" variant= "contained" >ACTUALIZAR</Button>}

                        </Box>

                    </Paper>
                </Grid>

                <Grid item xs={8}>
                    <CantidadEquipo />
                    <TableContainer sx={{ maxHeight: 440, }} >
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead >
                                <TableRow >
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Deporte</TableCell>
                                    <TableCell>Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TablaEquipos />
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </Grid>
        </>
    )

}
export default PaginaAgregarEquipo