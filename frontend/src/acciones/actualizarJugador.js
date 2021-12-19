import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const actualizarJugador= createAsyncThunk('update/actualizarJugador', async(jugador)=>{
    const{_id}= jugador
    return await axios.put(`http://localhost:4000/api/jugador/jugador/${_id}`, jugador)})