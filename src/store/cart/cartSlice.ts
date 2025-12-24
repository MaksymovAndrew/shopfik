import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../../types/product';
import { CartState, CartItem } from './types';

const initialState: CartState = {
    items: [],
};

const saveCart = async (items: CartItem[]) => {
    try {
        await AsyncStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
        console.error('Error saving cart:', error);
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{ product: Product; size: string }>) => {
            const { product, size } = action.payload;
            const existingItem = state.items.find(
                (item) => item.product.id === product.id && item.size === size
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    id: `${product.id}-${size}`,
                    product,
                    size,
                    quantity: 1,
                });
            }
            saveCart(state.items);
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            saveCart(state.items);
        },

        incrementQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                saveCart(state.items);
            }
        },

        decrementQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                saveCart(state.items);
            }
        },

        clearCart: (state) => {
            state.items = [];
            saveCart(state.items);
        },

        loadCart: (state, action: PayloadAction<CartItem[]>) => {
            state.items = action.payload;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    loadCart,
} = cartSlice.actions;

export default cartSlice.reducer;
