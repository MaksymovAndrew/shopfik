import { RootState } from '../../store/store';
import { Category } from '../../types/product';

export const selectAllProducts = (state: RootState) => state.products.items;

export const selectProductById = (state: RootState, productId: string) =>
    state.products.items.find((product) => product.id === productId);

export const selectProductsByCategory = (
    state: RootState,
    category: Category
) => state.products.items.filter((product) => product.category === category);
