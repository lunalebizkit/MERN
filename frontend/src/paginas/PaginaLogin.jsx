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
const PaginaLogin = () => {
    const { token } = useSelector(state => state.inicioSesion)
    const history = useHistory()
    const [usuario, setUsuario] = useState({ nombreUsuario: '', email: '', constasenia: '' });
    // useEffect(()=>{
    //     let traerToken= localStorage.getItem("token");
    //     if(traerToken !== undefined) {
    //         history.push("/paginaAgregarEquipo")}
        
    // }, [history]);
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        console.info(usuario)
        dispatch(inicioSesion(usuario))
        setUsuario({ nombreUsuario: '', email: '', contrasenia: '' })

    }
    const onChange = (e) => {
        const { name, value } = e.target
        setUsuario({ ...usuario, [name]: value })
    }
    useEffect(() => {
        if (token.token !== undefined) {
            localStorage.setItem('token', JSON.stringify(token.token))
            history.push("/paginaAgregarEquipo")
            console.log(token.token)
        }},[token]);
    const { nombreUsuario, email, contrasenia } = usuario
    return (<>
        <Box sx={{ width: 500, mx: 'auto' }} >
            <Paper align='center' sx={{ bgcolor: '#bbdefb' }} elevation={3}>
                <Box component="form"
                    sx={{ m: 5, p: 5 }}
                    noValidate
                    autoComplete="off" onSubmit={onSubmit}>
                    <Box pt={2} sx={{ mb: 3 }}>
                        <Typography variant="h4" color='dark.main'>
                            Iniciar Sesion  </Typography>
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