import { useState, useEffect } from "react";
import { cargarEquipos } from '../store/slice/postEquiposSlice';
import { GetEquipo } from "../acciones/equipos";
import { useSelector, useDispatch } from "react-redux";
import TablaEquipos from "../components/TablaEquipos";
import { actualizarEquipo } from "../store/slice/actualizarEquipo";
import { limpiar } from "../store/slice/editEquipoSlice";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import SendIcon from '@mui/icons-material/Send';
import DoneIcon from '@mui/icons-material/Done';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';

const PaginaAgregarEquipo = () => {

    const dispatch = useDispatch()
    const [valor, setValor] = useState({ nombre: '', deporte: '', _id: '' });
    const [visible, setVisible] = useState(true);
    const equipoEditar = useSelector(state => state.editarEquipo.equipo)
    const estadoDel = useSelector(state => state.eliminarEquipo.respuesta)
    const cargaEquipo = useSelector(state => state.enviarEquipo.estado);
    const { estado } = useSelector(state => state.eliminarEquipo);
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
        if (_id != null) {
            setVisible(false)
        }
    }, [equipoEditar])
    useEffect(() => {
        setValor({ nombre: '', deporte: '', _id: '' })
        setVisible(true)
    }, [estado])
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
            <Grid container spacing={1} align="center" >

                <Grid item xs={5} sx={{ p: 8 }} >
                    <Paper>
                        <Box component="form"
                            sx={{
                                '& > :not(style)': { m: 2 },
                            }}
                            noValidate
                            autoComplete="off" onSubmit={handleSubmit}>
                            <Box pt={2}>
                                <Typography variant="h5" gutterBottom component="div">
                                    {visible ? "Agregar" : "Editar"} Equipo
                                </Typography> </Box>

                            <Input name="nombre" type="text" value={nombre} onChange={handleChange} placeholder="Agregar Equipo" />


                            <Input name="deporte" type="text" value={deporte} onChange={handleChange} placeholder="Agregar Deporte" />

                            <Box p={2}>
                                {visible ? <Button variant="contained" endIcon={<SendIcon />} type="submit" >Enviar</Button>
                                    : <ButtonGroup variant="contained" aria-label="outlined primary button group" mb={2}><Button type="submit" startIcon={<DoneIcon />} color="success" variant="contained" >ACTUALIZAR</Button>
                                        <Button onClick={() => { dispatch(limpiar()); setValor({ nombre: '', deporte: '', _id: '' }); setVisible(true) }} startIcon={<CancelIcon />} color="error" variant="contained" >CANCELAR</Button>
                                    </ButtonGroup>}
                            </Box>
                        </Box>

                    </Paper>
                </Grid>

                <Grid item xs={6}>
                    <TableContainer sx={{ maxHeight: 400, }} color="secondary" component={Paper} >
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