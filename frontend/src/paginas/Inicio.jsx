import React, { useState, useEffect } from "react";
import {useDispatch} from 'react-redux';
import { registrarUsuario } from "../acciones/registrarUsuario";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import SendIcon from '@mui/icons-material/Send';
import DoneIcon from '@mui/icons-material/Done';

const PaginaInicio = () => {
    const [visible, setVisible] = useState(true);
    const [valor, setValor] = useState({ nombreUsuario: '', email: '', constasenia: ''});
    const dispatch= useDispatch()
    const onSubmit= (e)=>{      
        console.info(valor)  
        dispatch(registrarUsuario(valor))   
        e.preventDefault()
        setValor({ nombreUsuario: '', email: '', contrasenia: ''})
    }
    const onChange= (e)=>{
        const {name, value} = e.target
        setValor({...valor, [name]: value })
    }
    const {nombreUsuario, email, contrasenia}= valor
    return (
        <Box sx={{ width: 500, mx: 'auto' }} >
            <Paper align='center' sx={{ bgcolor: '#bbdefb' }} elevation={3}>
                <Box component="form"
                    sx={{ m: 5, p: 5 }}
                    noValidate
                    autoComplete="off" onSubmit={onSubmit}>
                    <Box pt={2}sx={{mb:3}}>
                        <Typography variant="h4" color='dark.main'>
                            {visible ? "Registro de Usuario" : "Iniciar Sesion"}
                        </Typography> </Box>

                    <TextField
                        label="NOMBRE DE USUARIO"
                        name= 'nombreUsuario'
                        variant="standard"
                        color="warning"
                        focused
                        value= {nombreUsuario}
                        sx={{mb: 2}}
                        onChange= {onChange}
                        type='text'
                        required
                    />
                    <TextField
                        label="E-MAIL"
                        variant="standard"
                        color="warning"
                        focused
                        value= {email}
                        sx={{mb:2}}
                        onChange= {onChange}
                        name='email'
                        type= 'email'
                        required
                    />
                      <TextField
                        label="CONTRASEÑA"
                        variant="standard"
                        color="warning"
                        focused
                        value= {contrasenia}
                        sx={{mb:2}}
                        onChange= {onChange}
                        name='contrasenia'
                        type='password'
                        required
                    />
                    <Box p={2}>
                        {visible ? <Button variant="contained" endIcon={<SendIcon />} type="submit" >Enviar</Button>
                            : <ButtonGroup variant="contained" aria-label="outlined primary button group" mb={2}><Button type="submit" startIcon={<DoneIcon />} color="success" variant="contained" >ACTUALIZAR</Button>
                                <Button onClick startIcon={<CancelIcon />} color="error" variant="contained" >CANCELAR</Button>
                            </ButtonGroup>}
                    </Box>
                </Box>

            </Paper>
        </Box>
    )
}
export default PaginaInicio;