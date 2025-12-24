import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import settingsReducer from './settings/settingsSlice';
import productsReducer from './products/productsSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        settings: settingsReducer,
        products: productsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;