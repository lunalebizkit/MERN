import axios from 'axios';
import Token from '../components/Token'

import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL='http://localhost:4000/api/equipos';
export const GetEquipo=createAsyncThunk('equipo/GetEquipo', async (pagina)=>{
 var header=Token()
   return await axios.get(`${BASE_URL}/equipos/?pagina=${pagina}`, {headers:header})});
 