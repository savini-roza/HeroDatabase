import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'hero',
    initialState: {
        hero: {}
    },
    reducers: {
        changeHero(state, { payload }) {
            return { ...state, hero: payload }
        }
    }
})

export const { changeHero } = slice.actions;

export const selectHero = state => state.hero;

export default slice.reducer;