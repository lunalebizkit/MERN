import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL='http://localhost:4000/api/jugador/jugador/';
export const Jugadores= createAsyncThunk('traerJugadores/Jugadores', async(id)=> await axios.get(BASE_URL + id))