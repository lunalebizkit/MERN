import React, {useEffect, useState} from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Link} from "react-router-dom";
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import SportsSoccerSharpIcon from '@mui/icons-material/SportsSoccerSharp';
import SportsKabaddiSharpIcon from '@mui/icons-material/SportsKabaddiSharp';
import SportsScoreOutlinedIcon from '@mui/icons-material/SportsScoreOutlined';
import SportsOutlinedIcon from '@mui/icons-material/SportsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

export default function MainListItems() {
  const history= useHistory()
 const user= useSelector(state=> state.inicioSesion.error)
 const usuarioRegistrado= useSelector(state=> state.registro.error)
const [visible, setVisible]=useState(false)

useEffect(()=>{
 setVisible(user)
},[user]);

// useEffect(()=>{
//   setVisible(usuarioRegistrado)
//  },[ usuarioRegistrado]);

  return (
    <>  {visible ?
      <>
    <ListItem  button onClick={()=>history.push('/inicioSesion')}>
      <ListItemIcon>
        <PersonOutlineSharpIcon color='warning' />
      </ListItemIcon>
      <Link to="/inicioSesion">Iniciar Sesion</Link>
    </ListItem>
    <ListItem button onClick={()=>history.push('/registro')}>
    <ListItemIcon>
      <PersonAddAltSharpIcon color='primary'/>
    </ListItemIcon>
    <Link to="/registro">Registro</Link>
  </ListItem> 
  </>
    :  
    <>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon color='secondary'/>
      </ListItemIcon>
      <Link to="/paginaAgregarEquipo">Equipos</Link>
    </ListItem>  
   <ListItem button>
      <ListItemIcon>
       <SportsSoccerSharpIcon sx={{color:'#d81b60'}} />
      </ListItemIcon>
      <Link to="#">Deportes</Link>
    </ListItem> 
    <ListItem button>
      <ListItemIcon>
       <SportsKabaddiSharpIcon sx={{color: '#cddc39'}}/>
      </ListItemIcon>
      <Link to="#">Jugadores</Link>
    </ListItem> 
    <ListItem button>
      <ListItemIcon>
       <SportsEsportsOutlinedIcon sx={{color: '#ef6c00'}}/>
      </ListItemIcon>
      <Link to="#">Ligas</Link>
    </ListItem> 
    <ListItem button>
      <ListItemIcon>
       < SportsScoreOutlinedIcon sx={{color: '#795548'}}/>
      </ListItemIcon>
      <Link to="#">Torneos</Link>
    </ListItem> 
    <ListItem button>
      <ListItemIcon>
      < SportsOutlinedIcon sx={{color: '#ffc400'}}/>
      </ListItemIcon>
      <Link to="#">Partidos</Link>
    </ListItem> 
    </>
  }</>
)};
 
