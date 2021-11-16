import { useState, useEffect } from "react";
import { cargarEquipos } from '../store/slice/postEquiposSlice';
import { GetEquipo } from "../acciones/equipos";
import { useSelector, useDispatch } from "react-redux";
import { actualizarEquipo } from "../store/slice/actualizarEquipo";
import { limpiar } from "../store/slice/editEquipoSlice";
import * as React from 'react';
import TablaEquipo from "../components/TablaEquipo";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import SendIcon from '@mui/icons-material/Send';
import DoneIcon from '@mui/icons-material/Done';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField'

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
    }, [cargaEquipo, dispatch, estadoActualizado, estadoDel])

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
                <Grid item xs={4} sx={{ p: 3 }} >
                    <Paper sx={{ bgcolor: '#bbdefb' }}>
                        <Box component="form"
                            sx={{
                                '& > :not(style)': { m: 1, p: 2 },
                            }}
                            noValidate
                            autoComplete="off" onSubmit={handleSubmit}>
                            <Box pt={2}>
                                <Typography variant="h5" color='dark.main'>
                                    {visible ? "Agregar" : "Editar"} Equipo
                                </Typography> </Box>

                            <TextField label="Nombre"
                                variant="standard"
                                color="warning"
                                focused
                                name="nombre" type="text" value={nombre} onChange={handleChange}
                            />                          
                            <TextField name="deporte" type="text" value={deporte} onChange={handleChange} label="Deporte"
                                variant="standard"
                                color="warning"
                                focused
                            />
                            <Box p={2}>
                                {visible ? <Button variant="contained" endIcon={<SendIcon />} type="submit" >Enviar</Button>
                                    : <ButtonGroup variant="contained" aria-label="outlined primary button group" mb={2}><Button type="submit" startIcon={<DoneIcon />} color="success" variant="contained" >ACTUALIZAR</Button>
                                        <Button onClick={() => { dispatch(limpiar()); setValor({ nombre: '', deporte: '', _id: '' }); setVisible(true) }} startIcon={<CancelIcon />} color="error" variant="contained" >CANCELAR</Button>
                                    </ButtonGroup>}
                            </Box>
                        </Box>

                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <TablaEquipo />
                </Grid>

            </Grid>
        </>
    )

}
export default PaginaAgregarEquipo