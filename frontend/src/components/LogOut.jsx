import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {limpiarToken} from '../store/slice/inicioSesionSlice';
import { limpiarNewUser } from "../store/slice/registrarUsuarioSlice";
import IconButton from '@mui/material/IconButton';
const LogOut= ()=>{
   // const user= useSelector(state=> state.inicioSesion.usuario)
    //const estado= useSelector(state=> state.registro.estado)
    const estado=useSelector(state=> state.inicioSesion.error)
    const nuevoUsuario=useSelector(state=> state.registro.error)
    const {usuario}=useSelector(state=> state.inicioSesion.usuario)
    //const usuario1=useSelector(state=> state.registro.usuario)
    const history= useHistory()
    const dispatch= useDispatch()
    const [visible, setVisible] = useState(true)
    const nombre=  usuario
    useEffect(()=>{
        setVisible(estado)
    }, [estado])
    useEffect(()=>{ 
        setVisible(nuevoUsuario)
      },[nuevoUsuario]);

    // useEffect(()=>{
    //   hidebutton();
    // }, [user, estado, history])

 
    const limpiarStorage= ()=>{ localStorage.removeItem('usuario')}; 
    
    return(
        <>{ !visible && <>
        <Typography>{nombre}</Typography>
        <IconButton color='error' onClick={()=>{dispatch(limpiarToken());dispatch(limpiarNewUser());limpiarStorage();history.push('/inicioSesion');}}>
             <PowerSettingsNewIcon/></IconButton></>} </>

             
    )
}
export default LogOut;