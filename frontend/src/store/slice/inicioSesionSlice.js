import { inicioSesion} from "../../acciones/inicioSesion";
import { createSlice } from "@reduxjs/toolkit";
export const inicioSesionSlice= createSlice({
    name: 'usuario',
    initialState: {
        token: [],
        error: null,
        estado: ''
    },
    extraReducers:{
        [inicioSesion.pending]: (state, action)=>{
            state.estado= 'ENVIANDO'
        },
        [inicioSesion.fulfilled]: (state, action) =>{
            state.error= false;
            state.token= action.payload.data;
            state.estado= "Usuario Regsitrado";
        },
        [inicioSesion.rejected]: (state, action)=>{
            state.error= true;
            state.estado= 'OCURRIO UN ERROR!'
        }
    }
})
export default inicioSesionSlice.reducer