import {registrarUsuario} from '../../acciones/registrarUsuario';
import { createSlice } from '@reduxjs/toolkit';
export const registrarUsuarioSlice= createSlice({
    name: 'registrarUsuario',
    initialState: {
        estado:'',
        error: null,
        token: []
    },
    extraReducers:{
        [registrarUsuario.pending]: (action, state)=>{
            state.error= null;
            state.estado= 'enviando Datos'
        },
        [registrarUsuario.fulfilled]: (state, action)=>{
            state.error= false;
            state.token= action.payload.data
        },
        [registrarUsuario.rejected]: (state, action)=>{
            state.error= true;
            state.estado= 'Ocurrio un Error!!'
        }
    }
})
export default registrarUsuarioSlice.reducer