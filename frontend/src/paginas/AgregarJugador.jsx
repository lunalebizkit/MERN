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
import {crearJugador} from '../acciones/crearJugador'
export default function AgregarJugador() {  
   const {estado} =useSelector(state=> state.crearJugador)

    let { id } = useParams();
    const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(Jugadores(id))
    }, [dispatch, id, estado])
    const [jugador, setJugador]= useState({nombre: '', apellido: '', id: ''})
    const onSubmit= (e)=>{      
        dispatch(crearJugador(jugador))
        setJugador({nombre: '', apellido: '', id: ''})
        e.preventDefault()
    }
    const onChange= (e)=>{
        let {name, value}=e.target
        setJugador({...jugador, [name]: value, id: id})
       
    }
    const {nombre, apellido}= jugador
    return (<>
 
        <Stack direction='row' spacing= {2}>
            <Grid item xs={6} align='center' ml={0}>
                <Paper sx={{ bgcolor: "#e3f2fd", height: 300, width: 350 }} elevation={6} >
                    <Box component="form" sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }} noValidate 
                        autoComplete="off" onSubmit= {onSubmit}>
                        <Typography variant="h5" m={2} align='center'>Agregar Jugador</Typography>
                        <TextField 
                            sx={{ bgcolor: "#e3f2fd" }}
                            required
                            name= 'nombre'
                            type= 'text'
                            id="outlined-required"
                            label="Required"
                            defaultValue="Nombre"
                            value={nombre}
                            onChange= {onChange}
                        
                        />
                        <TextField
                            sx={{ bgcolor: "#e3f2fd" }}
                            required
                            name= 'apellido'
                            type= 'text'
                            id="outlined-required"
                            label="Required"
                            defaultValue="Apellido"
                            value={apellido}
                            onChange= {onChange}
                        />
                        <Box p={2}>
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