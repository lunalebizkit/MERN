import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
const BASE_URL='http://localhost:4000/api/jugador/jugador/';
export const crearJugador= createAsyncThunk('jugador/crearJugador', async(jugador)=>{
    let {id}= jugador;
    // console.info(BASE_URL + `${id}`)}
    await axios.post(BASE_URL + `${id}`, jugador)}
   
)