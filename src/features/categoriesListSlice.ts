import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'categoriesList',
    initialState: {
        heroesList: []
    },
    reducers: {
        changeCategoriesList(state, { payload }) {
            return { ...state, categoriesList: payload }
        }
    }
})

export const { changeCategoriesList } = slice.actions;

export const selectCategoriesList = state => state.categoriesList;

export default slice.reducer;