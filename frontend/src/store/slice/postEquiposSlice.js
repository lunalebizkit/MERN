import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
export const cargarEquipos= createAsyncThunk( 'postEquipos/cargarEquipos', 
    async(valor)=>{
    return await axios.post('http://localhost:4000/api/equipos/equipos', valor)})
export const postEquiposSlice= createSlice({
    name: 'postEquipos',
    initialState: {
        valor: [],
        enviando: false,
        estado: '',
        respuesta: ""
    },reducer:{
        enviarValor: (state, action) =>{
            state.enviando= "enviando"
            state.valor = action.payload
           
        }
    },
    extraReducers: {
        [cargarEquipos.pending]: (state, action)=>{
            state.estado= "Enviando Datos"
        },
        [cargarEquipos.fulfilled]: (state, action)=>{
            state.estado= "cargado con Exito!"
            state.respuesta= action.payload.data.status
        },
        [cargarEquipos.rejected]: (state)=>{
            state.estado= "fallo la carga"
        },

    }
});

export const {enviarValor} = postEquiposSlice.actions
export default postEquiposSlice.reducer