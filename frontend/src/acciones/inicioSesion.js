import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
const BASE_URL='http://localhost:4000/api/usuarios/signin';
export const inicioSesion= createAsyncThunk('registro/inicioSesion', async(usuario)=>await axios.post(BASE_URL, usuario)
   
)