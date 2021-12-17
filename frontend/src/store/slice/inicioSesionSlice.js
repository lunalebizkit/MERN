import { inicioSesion} from "../../acciones/inicioSesion";
import { createSlice } from "@reduxjs/toolkit";
export const inicioSesionSlice= createSlice({
    name: 'usuario',
    initialState: {
        usuario: [],
        error: null,
        estado: ''
    },
    extraReducers:{
        [inicioSesion.pending]: (state, action)=>{
            state.estado= 'ENVIANDO'
        },
        [inicioSesion.fulfilled]: (state, action) =>{
            state.error= false;
            state.usuario= action.payload.data;
            state.estado= "Usuario Regsitrado";
        },
        [inicioSesion.rejected]: (state, action)=>{
            state.error= true;
            state.estado= 'OCURRIO UN ERROR!'
        }
    },
    reducers:{ limpiarToken: (state)=>{state.usuario= []}}
})
export default inicioSesionSlice.reducer
export const {limpiarToken}= inicioSesionSlice.actions