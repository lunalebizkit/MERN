import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const editarJugador= createAsyncThunk( 'jugador/editarJugador', 
    async(id)=> await axios.get(`http://localhost:4000/api/jugador/jugadores/${id}`))