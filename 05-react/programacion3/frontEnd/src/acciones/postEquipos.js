import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const PostEquipo= createAsyncThunk('postEquipos/PostEquipo', async (valor)=> await axios({
    method: 'post',
    url: 'http://localhost:4000/api/tareas/equipos',
    data: valor
})
    .then(res => res.data)
    .catch(res => console.log(res)))