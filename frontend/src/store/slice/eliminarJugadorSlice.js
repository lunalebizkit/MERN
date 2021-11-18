import {eliminarJugador} from '../../acciones/eliminarJugador';
import { createSlice } from '@reduxjs/toolkit';
export const eliminarJugadorSlice= createSlice({
    name: 'eliminarJugador',
    initialState:{
        error: null,
        estadoJugador: '',
        estado: ''
    },
    extraReducers:{
        [eliminarJugador.pending]: (state, action)=>{
            state.estado= 'eliminando'
        },
        [eliminarJugador.fulfilled]: (state, action)=>{
            state.estado= action.payload.data;
            state.estadoJugador= action.payload.data.mesagge
        },
        [eliminarJugador.rejected]: (state, action)=>{
            state.error= true;
            state.estado= 'Ocurrio un Error'
        }
    }
})
export default eliminarJugadorSlice.reducer