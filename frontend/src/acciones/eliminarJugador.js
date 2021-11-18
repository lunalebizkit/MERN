import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const eliminarJugador= createAsyncThunk( 'jugador/eliminarJugador', 
    async(id)=> await axios.delete(`http://localhost:4000/api/jugador/jugador/${id}`))