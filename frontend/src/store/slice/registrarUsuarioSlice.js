import {registrarUsuario} from '../../acciones/registrarUsuario';
import { createSlice } from '@reduxjs/toolkit';
export const registrarUsuarioSlice= createSlice({
    name: 'registrarUsuario',
    initialState: {
        estado:'',
        error: true,
        usuario: []
    },
    extraReducers:{
        [registrarUsuario.pending]: (action, state)=>{
            state.error= true;
            state.estado= 'enviando Datos'
        },
        [registrarUsuario.fulfilled]: (state, action)=>{
            state.error= false;
            state.usuario= action.payload.data;
            state.estado= "Usuario Creado"
        },
        [registrarUsuario.rejected]: (state, action)=>{
            state.error= true;
            state.estado= 'Ocurrio un Error!!'
        }
    },
    reducers:{ limpiarNewUser: (state)=>{
        state.usuario= [];
         state.error= true}}
})
export default registrarUsuarioSlice.reducer;
export const {limpiarNewUser}= registrarUsuarioSlice.actions