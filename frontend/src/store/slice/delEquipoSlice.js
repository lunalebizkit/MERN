import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
export const delEquipo= createAsyncThunk( 'eliminarEquipo/delEquipo', 
    async(id, {dispatch})=> await axios.delete(`http://localhost:4000/api/tareas/equipos/${id}`))

export const deleteEquipoSlice= createSlice({
    name: 'eliminarEquipo',
    initialState: {
        valor: [],
        enviando: false,
        estado: '',
        respuesta: []
    
    },
    extraReducers: {
        [delEquipo.pending]: (state, action)=>{
            state.estado= "Enviando Datos"
        },
        [delEquipo.fulfilled]: (state, action)=>{
            state.estado= "Eliminado con Exito!"
            state.respuesta= action.payload.data
        },
        [delEquipo.rejected]: (state)=>{
            state.estado= "fallo la carga"
        },      
    }
});
export const {eliminarEquipo} = deleteEquipoSlice.actions
export default deleteEquipoSlice.reducer