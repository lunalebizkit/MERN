import { createSlice} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from "axios";
export const postEquiposSlice= createSlice({
    name: 'postEquipos',
    initialState: {
        valor: [],
        enviando: false,
        estado: ''
    }, 
    reducers: {
        enviarValor: (state, action) =>{
            state.enviando= "enviando"
            state.valor = action.payload
           
        }
    }
});
// const cargar= async ()=> await axios({
//     method: 'post',
//     url: 'http://localhost:4000/api/tareas/equipos',
//     data: {valor}
// })
//     .then(res => res.data)
//     .catch(res => console.log(res))
export const {enviarValor} = postEquiposSlice.actions
export default postEquiposSlice.reducer