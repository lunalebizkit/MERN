import { editarJugador } from '../../acciones/editarJugador';
import { createSlice } from '@reduxjs/toolkit';
export const editarJugadorSlice= createSlice({
    name: 'editarJugador',
    initialState: {
        estado: '',
        error: null,
        player: []
    },
    reducers:{
        limpiarPlayer: (state)=>{state.player = []}
    },
    extraReducers:{
        [editarJugador.pending]: (state, action)=>{ state.estado= 'Eniviando'},
        [editarJugador.fulfilled]: (state, action)=>{ state.player= action.payload.data},
        [editarJugador.rejected]: (state, action)=>{ state.error= true; state.estado= "Hubo un Error"},
    }
})
export default editarJugadorSlice.reducer
export const {limpiarPlayer}= editarJugadorSlice.actions