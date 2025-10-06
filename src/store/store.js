import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from '../feuteurs/characters/charactersSlice.js'

export const store = configureStore({
    reducer: {
        characters:charactersReducer
    }
})