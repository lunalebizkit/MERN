import { registrarUsuario } from "../../acciones/registrarUsuario";
import { createSlice } from "@reduxjs/toolkit";
export const registroSlice= createSlice({
    name: 'usuario',
    initialState: {
        token: [],
        error: null,
        estado: ''
    },
    extraReducers:{
        [registrarUsuario.pending]: (state, action)=>{
            state.estado= 'ENVIANDO'
        },
        [registrarUsuario.fulfilled]: (state, action) =>{
            state.error= false;
            state.token= action.payload.data;
            state.estado= "Usuario Regsitrado";
        },
        [registrarUsuario.rejected]: (state, action)=>{
            state.error= true;
            state.estado= 'OCURRIO UN ERROR!'
        }
    }
})
export default registroSlice.reducer