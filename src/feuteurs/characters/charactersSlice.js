import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


 export const fetchRickMorty = createAsyncThunk('cards/fetchRickMorty' , async () => {


     const res = await axios.get('https://rickandmortyapi.com/api/character')
     return res.data.results;
 });


const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        characters: [],
        status: 'idle',
        error: null,
        info: { pages: 0, count: 0 },
        filters: {
            page: 1,
            name: '',
            status: 'all', // alive | dead | unknown | all
            species: ''
        },
        current: null // выбранный персонаж для страницы деталей
    },
    reducers: {
        setPage(state, action) {
            state.filters.page = action.payload;
        },
        setName(state, action) {
            state.filters.name = action.payload;
                state.filters.page = 1;
        },
        setStatus(state, action) {
            state.filters.page = 1;
            state.filters.status = action.payload;
        },
        setSpecies(state, action) {
            state.filters.page = 1;
            state.filters.species = action.payload;
        },
        clearCurrent(state) {
            state.current = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchRickMorty.pending, (state) => {
                state.status = 'idle'
            })
            .addCase(fetchRickMorty.fulfilled, (state, action) => {
                state.status = 'success'
                state.characters = action.payload;
            })
            .addCase(fetchRickMorty.rejected, (state , action) => {
                state.status = 'error'
                state.action = action.error.message;
            })
    }
})

export const { setPage, setName, setStatus, setSpecies, clearCurrent } = charactersSlice.actions

export default charactersSlice.reducer