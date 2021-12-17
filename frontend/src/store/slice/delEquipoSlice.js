import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Token from '../../components/Token'
import axios from "axios";

export const delEquipo= createAsyncThunk( 'eliminarEquipo/delEquipo', 
    async(id)=>
    {var header=Token()
        return await axios.delete(`http://localhost:4000/api/equipos/equipos/${id}`, {headers:header})})

export const deleteEquipoSlice= createSlice({
    name: 'eliminarEquipo',
    initialState: {
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