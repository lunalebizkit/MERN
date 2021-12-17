import axios from 'axios';
import Token from '../components/Token'
import {createAsyncThunk} from '@reduxjs/toolkit';
const BASE_URL='http://localhost:4000/api/jugador/jugador/';
export const crearJugador= createAsyncThunk('jugador/crearJugador', async(jugador)=>{
    let {id}= jugador;
    var header=Token()
    // console.info(BASE_URL + `${id}`)}
   return await axios.post(BASE_URL + `${id}`, {headers:header}, jugador)}
   
)