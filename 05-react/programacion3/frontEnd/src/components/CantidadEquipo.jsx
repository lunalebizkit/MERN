import React from "react";
import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
const CantidadEquipo= ()=>{
    const cantidad= useSelector((state)=> state.equipo.cantidadEquipos)
    return (
        <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
            Cantidad de Equipos: {cantidad}
        </Typography>
    )
}
export default CantidadEquipo