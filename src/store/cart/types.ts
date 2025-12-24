import { Product } from '../../types/product';

export interface CartItem {
    id: string;
    product: Product;
    size: string;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}