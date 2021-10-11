import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const traerTareaDB= createAsyncThunk('traerTarea/traerTareaDB', async({limit})=>{
    return axios({
        method: 'get',
        url: `http://localhost:4000/api/tareas/equipos`,

        params:{
            _limit: limit
        },
    }).then((res)=> res)
})
const traerTareaSlice= createSlice({
    name: 'traerTarea',
    initialState: {
        lista: [],
        status: null,
    },
    extraReducers: {
        [traerTareaDB.pending]: (state, action)=>{
            state.status= "Cargando"
        },
        [traerTareaDB.fulfilled]: (state, {payload})=>{
            state.lista= payload
            state.status= "exitoso"
        },
        [traerTareaDB.rejected]: (state, action)=>{
            state.status= "fallo"
        }
    }
})
export default traerTareaSlice.reducer