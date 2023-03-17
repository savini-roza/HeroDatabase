import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'category',
    initialState: {
        category: {}
    },
    reducers: {
        changeCategory(state, { payload }) {
            return { ...state, category: payload }
        }
    }
})

export const { changeCategory } = slice.actions;

export const selectCategory = state => state.category;

export default slice.reducer;