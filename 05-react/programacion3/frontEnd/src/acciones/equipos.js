import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL='http://localhost:4000/equipos';
export const GetEquipo=createAsyncThunk('equipo/getEquipos', async ()=>{await axios.get(`${BASE_URL}/equipos`)}); 