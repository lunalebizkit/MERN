import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {limpiarToken} from '../store/slice/inicioSesionSlice'
import IconButton from '@mui/material/IconButton';
const LogOut= ()=>{
    const user= useSelector(state=> state.inicioSesion.estado)
    const estado= useSelector(state=> state.registro.estado)
    const {usuario}=useSelector(state=> state.inicioSesion)
    const history= useHistory()
    const dispatch= useDispatch()
    const [visible, setVisible] = useState(false)
    useEffect(()=>{
      var token= JSON.parse(localStorage.getItem('usuario'))
      if (token && token.usuario) {
        setVisible(true);
        temporizador()
      }           
    }, [user, estado])
    useEffect(()=>{
        limpiarStorage();
        setVisible(!visible);
        history.push('/inicioSesion');
    }, [usuario, history]);
    const limpiarStorage= ()=>{ localStorage.removeItem('usuario')}; 
    const temporizador=()=>{setTimeout(console.log('3 segundos', 3000))}
    return(
        <>{ !visible && <>
        <Typography>{usuario.usuario}</Typography>
        <IconButton color='error' onClick={()=>dispatch(limpiarToken())}>
             <PowerSettingsNewIcon/></IconButton></>} </>
             
    )
}
export default LogOut;