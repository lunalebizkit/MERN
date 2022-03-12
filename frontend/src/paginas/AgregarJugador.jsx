import * as React from 'react';
import TablaJugadores from '../components/TablaJugadores';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Jugadores } from '../acciones/jugadores';
import { useEffect } from 'react';
import { limpiarPlayer } from '../store/slice/editarJugadorSlice';
import { crearJugador } from '../acciones/crearJugador';
import { actualizarJugador } from '../acciones/actualizarJugador';

export default function AgregarJugador() {
    const { estado } = useSelector(state => state.crearJugador)
    const estadoJugador = useSelector(state => state.eliminarJugador.estado)
    const updateJugador= useSelector(state=>state.actualizarJugador.estado)
    const { player } = useSelector(state => state.editarJugador)
    const [jugador, setJugador] = useState({ nombre: '', apellido: '' })
    const [visible, setVisible] = useState(true);
    let { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Jugadores(id))
    }, [dispatch, id, estado, estadoJugador, updateJugador])
    
    useEffect(() => {
        const { _id, apellido, nombre } = player
        if (_id != null) {
            setJugador({ _id, apellido, nombre })
            setVisible(null)
        }
    }, [player])

    const onSubmit = (e) => {
        const {_id} = jugador
        console.log(_id)
        if (_id){
            if (nombre.length > 1) {
                if (apellido.length > 1) {
                    dispatch(actualizarJugador(jugador))
                    setJugador({ nombre: '', apellido: '' })
                    dispatch(limpiarPlayer())
                    setVisible(!visible)
                }
            }
            // dispatch(actualizarJugador(jugador))
            // setJugador({ nombre: '', apellido: '' })
            // dispatch(limpiarPlayer())
            // setVisible(!visible)
             e.preventDefault()
        }else{
            if (nombre.length > 1) {
                if (apellido.length > 1) {
                    dispatch(crearJugador(jugador))
                    setJugador({ nombre: '', apellido: '' })
                    dispatch(limpiarPlayer())
                    setVisible(!visible)
                }
            }
           
            e.preventDefault()
        }
    
    }
    const onChange = (e) => {
        const {_id}= player
        if (_id) {
            let {name, value} =e.target
            console.log(_id)
           setJugador({...jugador, [name]: value, _id})
        } else{
            let { name, value } = e.target
            setJugador({ ...jugador, [name]: value, id })
        }
      

    }
    const { nombre, apellido } = jugador
    return (<>

        <Stack direction='row' spacing={2}>
            <Grid item xs={6} align='center' ml={0}>
                <Paper sx={{ bgcolor: "#bbdefb", height: 300, width: 350, p: 2 }} elevation={6} >
                    <Box component="form" sx={{
                        m: 1, width: 300
                    }} noValidate
                        autoComplete="off" onSubmit={onSubmit}>
                              <Box pt={2}>
                                <Typography variant="h5" color='dark.main'>
                                    {visible ? "Agregar" : "Editar"} Jugador
                                </Typography> </Box>
                        <TextField type="text" label="Nombre"
                            variant="standard"
                            color="warning"
                            focused
                            name="nombre" value={nombre} onChange={onChange}
                        />
                        <TextField type="text" label="Apellido"
                            variant="standard"
                            color="warning"
                            focused
                            name="apellido" value={apellido} onChange={onChange}
                        />

                        <Box mt={5}>
                            <Button variant="contained" endIcon={<SendIcon />} type="submit" >Enviar</Button>
                        </Box>
                    </Box>
                </Paper> 
            </Grid>
            <Grid item m={2} xs={6}>
                <TablaJugadores />
            </Grid>
        </Stack>

    </>)
}