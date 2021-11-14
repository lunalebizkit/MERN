import { createSlice} from '@reduxjs/toolkit';
import {crearJugador} from '../../acciones/crearJugador'
export const crearJugadorSlice= createSlice({
    name: 'crearJugador',
    initialState:{
        estado: [],
        error: null
    },
    extraReducers:{
        [crearJugador.pending]: (state, action)=>{
            state.estado= 'ENVIANDO'
        },
        [crearJugador.fulfilled]: (state, action) =>{
            state.error= false;
            state.estado= action.payload
        },
        [crearJugador.rejected]: (state, action)=>{
            state.error= true;
            state.estado= 'OCURRIO UN ERROR!'
        }
    }
})
export default crearJugadorSlice.reducer