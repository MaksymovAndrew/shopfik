import { RootState } from '../../store/store';

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotal = (state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);

export const selectCartCount = (state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0);
