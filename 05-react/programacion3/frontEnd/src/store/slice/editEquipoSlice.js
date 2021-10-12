import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import materialize, {toast} from 'materialize-css'
import { GetEquipo } from "../../acciones/equipos";
export const editEquipo= createAsyncThunk( 'editarEquipo/editEquipoo', 
    async(id, {dispatch})=> await axios.get(`http://localhost:4000/api/tareas/equipos/${id}`));

export const editarEquipoSlice= createSlice({
    name: 'editarEquipo',
    initialState: {
        equipo: [],
        enviando: false,
        estado: ''
    
    },
    extraReducers: {
        [editEquipo.pending]: (state, action)=>{
            state.estado= "Enviando Datos"
        },
        [editEquipo.fulfilled]: (state, action)=>{
            state.estado= "Edicion con Exito!"
            state.equipo= action.payload.data
        },
        [editEquipo.rejected]: (state)=>{
            state.estado= "fallo la edicion"
        },      
    }
});
export default editarEquipoSlice.reducer