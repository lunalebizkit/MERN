import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
const BASE_URL='http://localhost:4000/api/usuarios/signup';
export const registrarUsuario= createAsyncThunk('registro/registarUsuario', async(usuario)=>await axios.post(BASE_URL, usuario)
   
)