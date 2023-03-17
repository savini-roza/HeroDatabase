import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'heroesList',
    initialState: {
        heroesList: []
    },
    reducers: {
        changeHeroesList(state, { payload }) {
            return { ...state, heroesList: payload }
        }
    }
})

export const { changeHeroesList } = slice.actions;

export const selectHeroesList = state => state.heroesList;

export default slice.reducer;