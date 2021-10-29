import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL='http://localhost:4000/api/tareas';
export const GetEquipo=createAsyncThunk('equipo/GetEquipo', async (condicion)=>await axios.get(`${BASE_URL}/equipos/`, condicion)); 