import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice';
import equipoSlice from './slice/equipoSlice';

export default configureStore({
  reducer: { 
    contador: counterReducer,
    equipo: equipoSlice},
});