import { createSlice } from "@reduxjs/toolkit";
const tareaSlice= createSlice({
    name: 'tarea',
    initialState: [],
    reducers: {
        agregar(state, {payload}) {
            state.push(payload)
        },
        eliminar(state, {payload}) {
          return state= state.filter(({id})=> id !== payload)
        }
    }
}
)
export const {agregar, eliminar} = tareaSlice.actions
export default tareaSlice.reducer