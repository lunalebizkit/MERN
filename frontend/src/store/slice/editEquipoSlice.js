import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
export const editEquipo= createAsyncThunk( 'editarEquipo/editEquipo', 
    async(id, {dispatch})=> await axios.get(`http://localhost:4000/api/equipos/equipos/${id}`));

export const editarEquipoSlice= createSlice({
    name: 'editarEquipo',
    initialState: {
        equipo: [],
        enviando: false,
        estado: ''
    
    },
    reducers:{
        limpiar: (state)=>{
            state.equipo= []
        }
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
export const {limpiar}= editarEquipoSlice.actions