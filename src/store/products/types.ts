import { Product } from '../../types/product';

export interface Review {
    id: string;
    productId: string;
    text: string;
    rating: number;
    userName: string;
    date: string;
}

export interface ProductsState {
    items: Product[];
    reviews: Review[];
}