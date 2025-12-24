import { Product } from '../types/product';
import { products } from '../data/products';

export const getProductById = (id: string): Product | undefined => {
    return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: 'tshirt' | 'pants' | 'shoes'): Product[] => {
    return products.filter((product) => product.category === category);
};
