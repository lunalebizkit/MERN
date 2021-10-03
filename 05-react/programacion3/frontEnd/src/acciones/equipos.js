import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL='http://localhost:4500';
export const GetEquipo=createAsyncThunk('equipos/getEquipos', async ()=>{await axios.get(`${BASE_URL}/equipos`)}); 