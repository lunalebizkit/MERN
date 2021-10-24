import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice';
import equipoSlice from './slice/equipoSlice';
import postEquiposReducer from './slice/postEquiposSlice';
import tareaReducer from './slice/tareaSlice'
import TraerTareaReducer from './slice/traerTareaSlice';
import EliminarEquipoReducer from './slice/delEquipoSlice';
import EditarEquipoReducer from './slice/editEquipoSlice';
import  actualizarEquipoReducer from './slice/actualizarEquipo';
export const store = configureStore({
  reducer: {
    contador: counterReducer,
    equipo: equipoSlice,
    enviarEquipo: postEquiposReducer,
    tareas: tareaReducer,
    traerTarea: TraerTareaReducer,
    eliminarEquipo: EliminarEquipoReducer,
    editarEquipo: EditarEquipoReducer,
    actualizarEquipo: actualizarEquipoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['equipo/GetEquipo/fulfilled', 'traerTarea/traerTareaDB/fulfilled',
         'postEquipos/cargarEquipos/fulfilled', 'editarEquipo/editEquipo/fulfilled', 'eliminarEquipo/delEquipo/fulfilled'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),

});