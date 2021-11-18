import { editarJugador } from '../../acciones/editarJugador';
import { createSlice } from '@reduxjs/toolkit';
export const editarJugadorSlice= createSlice({
    name: 'editarJugador',
    initialState: {
        estado: '',
        error: null
    },
    extraReducers:{
        [editarJugador.pending]: (state, action)=>{ state.estado= 'Eniviando'},
        [editarJugador.pending]: (state, action)=>{ state.estado= action.payload},
        [editarJugador]: ()=>{},
    }
})
export default editarJugadorSlice.reducer