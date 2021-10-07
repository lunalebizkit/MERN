import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const postEquiposSlice= createSlice({
    name: 'postEquipo',
    initialState: {
        equipos: [],
        status: null
    }, 
    extraReducers: {}
})