import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/product';
import { ProductsState, Review } from './types';

const initialState: ProductsState = {
    items: [],
    reviews: [],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadProducts: (state, action: PayloadAction<Product[]>) => {
            state.items = action.payload;
        },

        addReview: (state, action: PayloadAction<Review>) => {
            state.reviews.push(action.payload);
        },
    },
});

export const { loadProducts, addReview } = productsSlice.actions;

export default productsSlice.reducer;