import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { inicioSesion } from "../acciones/inicioSesion";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const PaginaLogin = () => {
    const { usuario } = useSelector(state => state.inicioSesion)
    const history = useHistory()
    const [user, setUser] = useState({ email: '', constasenia: '' });
    useEffect(()=>{
        let traerToken=JSON.parse(localStorage.getItem("usuario"));
        if(traerToken && traerToken.usuario) {
            history.push("/paginaAgregarEquipo")}
    }, [history]);
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        if (user.email.length > 1){
            dispatch(inicioSesion(user))
        }        
        setUser({ email: '', contrasenia: '' })

    }
    const onChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    useEffect(() => {
        if (usuario.token !== undefined) {
            localStorage.setItem('usuario', JSON.stringify(usuario))
            sessionStorage.setItem('usuario', JSON.stringify(usuario))
            history.push("/paginaAgregarEquipo")
        }},[usuario, history]);
    const { email, contrasenia } = user
    return (<>
    
        <Box sx={{ width: 500, mx: 'auto' }} >
            <Paper align='center' sx={{ bgcolor: '#bbdefb' }} elevation={3}>           
                <Box component="form"
                    sx={{ m: 5, p: 5 }}
                    noValidate
                    autoComplete="off" onSubmit={onSubmit}>
                     <Stack direction="" spacing={2}>
                        <Avatar alt="A" src={'/login.jpg'}  sx={{ bgcolor:'#4a148c', width: 70, height: 70, mx: 'auto' }}/>   
                    </Stack>
                    <Box pt={2} sx={{ mb: 3 }}>                    
                        <Typography variant="h4" color='dark.main'>
                            Iniciar Sesion  
                        </Typography>
                    </Box>
                   
                    <TextField
                        label="E-MAIL"
                        variant="standard"
                        color="warning"                    
                        focused
                        value={email}
                        sx={{ mb: 2 }}
                        onChange={onChange}
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
                        onChange={onChange}
                        name='contrasenia'
                        type='password'
                        required
                    />
                    <Box p={2}>
                        <Button variant="contained" endIcon={<SendIcon />} type="submit" >Enviar</Button>
                    </Box>
                </Box>

            </Paper>
        </Box>
    </>)
}
export default PaginaLogin;