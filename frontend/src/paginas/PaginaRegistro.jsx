import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { registrarUsuario } from "../acciones/registrarUsuario";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const PaginaRegistro = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const token = useSelector(state => state.registro.usuario)
    const [usuario, setUsuario] = useState({ nombreUsuario: '', email: '', constasenia: '' });
    const { nombreUsuario, email, contrasenia } = usuario;
    const onSubmitRegistro = (e) => {
        dispatch(registrarUsuario(usuario))
        e.preventDefault()
        setUsuario({ nombreUsuario: '', email: '', contrasenia: '' })        
    }
    const onChangeRegistro = (e) => {
        const { name, value } = e.target
        setUsuario({ ...usuario, [name]: value })
    }

     useEffect(()=>{
        let traerToken= JSON.parse(localStorage.getItem("usuario"));
        if(traerToken && traerToken.usuario) {
            history.push("/paginaAgregarEquipo")}        
    }, [history]);
    useEffect(() => {
        if (token.token !== undefined) {        
            localStorage.setItem('usuario', JSON.stringify(token))
            history.push("/paginaAgregarEquipo")
            console.log(token.token)
        }if(token.msj)
            { window.alert(token.msj)}},
            [token, history]);
    return (
        <Box sx={{ width: 500, mx: 'auto' }} >
            <Paper align='center' sx={{ bgcolor: '#bbdefb' }} elevation={3}>
                <Box component="form"
                    sx={{ m: 5, p: 5 }}
                    noValidate
                    autoComplete="off" onSubmit={onSubmitRegistro}>
                         <Stack direction="" spacing={2}>
                        <Avatar alt="A" src=""  sx={{ width: 70, height: 70, mx: 'auto' }}/>   
                    </Stack>
                    <Box pt={2} sx={{ mb: 3 }}>
                        <Typography variant="h4" color='dark.main'>
                            Registro de Usuario
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
                        <Button variant="contained" endIcon={<SendIcon />} type="submit" >Enviar</Button>
                            {/* <ButtonGroup variant="contained" aria-label="outlined primary button group" mb={2}><Button type="submit" startIcon={<DoneIcon />} color="success" variant="contained" >ACTUALIZAR</Button>
                                <Button onClick startIcon={<CancelIcon />} color="error" variant="contained" >CANCELAR</Button>
                            </ButtonGroup> */}
                    </Box>
                </Box>

            </Paper>

        </Box>
    )
}
export default PaginaRegistro