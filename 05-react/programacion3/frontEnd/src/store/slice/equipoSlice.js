import { createSlice } from "@reduxjs/toolkit";
import { GetEquipo } from "../../acciones/equipos";
export const initialState= {
    cargando: false,
    listaEquipo: [],
    error: null,
    cantidadEquipos: 0
};
export const equipoSlice = createSlice({
    name: 'equipo',
    initialState: initialState,
    extraReducers: {
        [GetEquipo.pending]: (state, action)=>{
            state.cargando = true;
            state.cantidadEquipos= -1
        },
        [GetEquipo.fulfilled]: (state, action)=>{
            state.listaEquipo= action.payload.data;
            state.cantidadEquipos= action.payload.data.length;
            state.cargando= false;
            state.error= null
        },
        [GetEquipo.rejected]: (state, action) =>{
            state.listaEquipo= [];
            state.cargando= false;
            state.cantidadEquipos= 0;
            state.error= "No se pudo cargar el equipo"
        }
    }
})
export default equipoSlice.reducer;