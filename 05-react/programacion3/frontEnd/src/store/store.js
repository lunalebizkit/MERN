import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice';
import equipoSlice from './slice/equipoSlice';

export const store= configureStore({
  reducer: { 
    contador: counterReducer,
    equipo: equipoSlice},
});