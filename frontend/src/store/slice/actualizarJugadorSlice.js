import { createSlice } from "@reduxjs/toolkit";
import {actualizarJugador} from '../../acciones/actualizarJugador';
export const actualizarJugadorSlice= createSlice({
    name: 'actualizarJugador',
    initialState: {
        estado: '',
        enviando: false
    },
    extraReducers: {
        [actualizarJugador.pending]: (state, action)=>{state.enviando= true},
        [actualizarJugador.fulfilled]: (state, action)=>{state.estado= action.payload.data},
        [actualizarJugador.rejected]: (state, action)=>{state.estado= 'Fallo'}
    }
})
export default actualizarJugadorSlice.reducer