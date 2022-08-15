import axios from "axios";
import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
export const actualizarEquipo= createAsyncThunk('actualizarEquip/actualizarEquipo',
 async(valor)=>{
 const {_id, nombre, deporte}= valor;

 return await axios(
    {method: 'put',
    url:`http://localhost:4000/api/equipos/equipos/${_id}`,
    data: {nombre, deporte}}
   )})      
  
export const actualizarEquipoSlice= createSlice({
    name: 'actualizarEquip',
    initialState: {
        equipo: [],
        enviando: false,
        estado: ''
    
    },
    extraReducers: {
        [actualizarEquipo.pending]: (state, action)=>{
            state.estado= "Enviando Datos"
        },
        [actualizarEquipo.fulfilled]: (state, action)=>{
            state.estado= "Actualizacion con Exito!"
            state.equipo= action.payload.data
        },
        [actualizarEquipo.rejected]: (state)=>{
            state.estado= "fallo la actualizacion"
        },      
    }
});
export default actualizarEquipoSlice.reducer