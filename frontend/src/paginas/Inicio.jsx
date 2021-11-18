import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { inicioSesion } from "../acciones/inicioSesion";
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
    const [valor, setValor] = useState({ nombreUsuario: '', email: '', constasenia: '' });
    const [iniciarSesion, setIniciarSesion] = useState({ email1: '', constasenia1: '' });
    const dispatch = useDispatch()
    const onSubmitRegistro = (e) => {
        console.info(valor)
        dispatch(registrarUsuario(valor))
        e.preventDefault()
        setValor({ nombreUsuario: '', email: '', contrasenia: '' }) 
    }
    const onSubmitSesion = (e) => {
        console.info(iniciarSesion)
        dispatch(inicioSesion(iniciarSesion))
        e.preventDefault()
        setIniciarSesion({ email1: '', contrasenia1: '' }) 
    }
    const onChangeRegistro = (e) => {
        const { name, value } = e.target
        setValor({ ...valor, [name]: value })
    }
    const onChangeSesion = (e) => {
        const { name, value } = e.target
        setIniciarSesion({ ...inicioSesion, [name]: value })
    }
    const { nombreUsuario, email, contrasenia } = valor
    const {email1, contrasenia1 } = iniciarSesion
    return (
        <Box sx={{ width: 500, mx: 'auto' }} >
            <Paper align='center' sx={{ bgcolor: '#bbdefb' }} elevation={3}>
                <Box component="form"
                    sx={{ m: 5, p: 5 }}
                    noValidate
                    autoComplete="off" onSubmit={onSubmitRegistro}>
                    <Box pt={2} sx={{ mb: 3 }}>
                        <Typography variant="h4" color='dark.main'>
                            {visible ? "Registro de Usuario" : "Iniciar Sesion"}
                        </Typography> </Box>

                    <TextField
                        label="NOMBRE DE USUARIO"
                        name='nombreUsuario'
                        variant="standard"
                        color="warning"
                        focused
                        value={nombreUsuario}
                        sx={{ mb: 2 }}
                        onChange={onChangeRegistro}
                        type='text'
                        required
                    />
                    <TextField
                        label="E-MAIL"
                        variant="standard"
                        color="warning"
                        focused
                        value={email}
                        sx={{ mb: 2 }}
                        onChange={onChangeRegistro}
                        name='email'
                        type='email'
                        required
                    />
                    <TextField
                        label="CONTRASEÑA"
                        variant="standard"
                        color="warning"
                        focused
                        value={contrasenia}
                        sx={{ mb: 2 }}
                        onChange={onChangeRegistro}
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
            <Paper align='center' sx={{ bgcolor: '#bbdefb' }} elevation={3}>
                <Box component="form"
                    sx={{ m: 5, p: 5 }}
                    noValidate
                    autoComplete="off" onSubmit={onSubmitSesion}>
                    <Box pt={2} sx={{ mb: 3 }}>
                        <Typography variant="h4" color='dark.main'>
                            {!visible ? "Registro de Usuario" : "Iniciar Sesion"}
                        </Typography> </Box>

                    <TextField
                        label="E-MAIL"
                        variant="standard"
                        color="warning"
                        focused
                        value={email1}
                        sx={{ mb: 2 }}
                        onChange={onChangeSesion}
                        name='email'
                        type='email'
                        required
                    />
                    <TextField
                        label="CONTRASEÑA"
                        variant="standard"
                        color="warning"
                        focused
                        value={contrasenia1}
                        sx={{ mb: 2 }}
                        onChange={onChangeSesion}
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