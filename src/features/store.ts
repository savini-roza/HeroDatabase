import { configureStore } from '@reduxjs/toolkit';
import heroReducer from './heroSlice';
import categoryReducer from './categorySlice';
import heroesListReducer from './heroesListSlice';
import categoriesListReducer from './categoriesListSlice';

export default configureStore({
    reducer: {
        hero: heroReducer,
        category: categoryReducer,
        heroesList: heroesListReducer,
        categoriesList: categoriesListReducer
    }
})
