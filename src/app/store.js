import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from '../features/favourites/favouritesSlice';

export const store = configureStore({
    reducer: {
        favourites: favouriteReducer,
    },
})