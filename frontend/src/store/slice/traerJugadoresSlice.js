import { createSlice } from "@reduxjs/toolkit";
import { Jugadores } from "../../acciones/jugadores";

export const traerJugadoresSlice = createSlice({
    name: 'jugadores',
    initialState: {
        jugadores: [],
        cargando: false,
        error: null,
    },
    extraReducers: {
        [Jugadores.pending]: (state, action) => {
            state.cargando = true
        },
        [Jugadores.fulfilled]: (state, action) => {
            state.cargando = false;
            state.jugadores = action.payload.data
        },
        [Jugadores.rejected]: (state, action) => {
            state.jugadores = [];
            state.cargando = false;
            state.error = "Ocurrio un Error"
        }
    }
})
export default traerJugadoresSlice.reducer