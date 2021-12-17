import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Token from '../components/Token'
const BASE_URL='http://localhost:4000/api/jugador/jugador/';
export const Jugadores= createAsyncThunk('traerJugadores/Jugadores', async(id)=>{ 
    var header=Token()
    return await axios.get(BASE_URL + id, {headers:header})})