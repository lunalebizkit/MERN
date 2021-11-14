import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice';
import equipoSlice from './slice/equipoSlice';
import postEquiposReducer from './slice/postEquiposSlice';
import tareaReducer from './slice/tareaSlice'
import TraerTareaReducer from './slice/traerTareaSlice';
import EliminarEquipoReducer from './slice/delEquipoSlice';
import EditarEquipoReducer from './slice/editEquipoSlice';
import  actualizarEquipoReducer from './slice/actualizarEquipo';
import traerJugadoresReducer from './slice/traerJugadoresSlice';
import crearJugadorReducer from './slice/crearJugadorSlice';
export const store = configureStore({
  reducer: {
    contador: counterReducer,
    equipo: equipoSlice,
    enviarEquipo: postEquiposReducer,
    tareas: tareaReducer,
    traerTarea: TraerTareaReducer,
    eliminarEquipo: EliminarEquipoReducer,
    editarEquipo: EditarEquipoReducer,
    actualizarEquipo: actualizarEquipoReducer,
    jugador: traerJugadoresReducer,
    crearJugador: crearJugadorReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

});