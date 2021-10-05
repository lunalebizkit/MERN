import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL='http://localhost:4000';
export const GetEquipo=createAsyncThunk('equipo/getEquipo', async ()=>{await axios.get(`${BASE_URL}/equipos`)}); 
const hola=async  ()=> console.log('esto es algo' + await axios.get(`${BASE_URL}/equipos`))
hola()