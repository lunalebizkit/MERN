import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Token from '../components/Token'
export const editarJugador= createAsyncThunk( 'jugador/editarJugador', 
    async(id)=>{ 
        var header=Token()
        return await axios.get(`http://localhost:4000/api/jugador/jugadores/${id}`,{headers:header})})