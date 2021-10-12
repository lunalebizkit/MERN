import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import materialize, {toast} from 'materialize-css'
import { GetEquipo } from "../../acciones/equipos";
export const delEquipo= createAsyncThunk( 'eliminarEquipo/delEquipo', 
    async(id, {dispatch})=> await axios.delete(`http://localhost:4000/api/tareas/equipos/${id}`)
    .then( function (response) {materialize.toast(response.data.status)})
    .then(() => dispatch(GetEquipo()))
    .catch(res => console.log(res)))

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