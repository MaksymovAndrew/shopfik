export type Category = 'tshirt' | 'pants' | 'shoes';

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: Category;
    description: string;
    sizes: string[];
}

export interface CartItem {
    id: string;
    product: Product;
    size: string;
    quantity: number;
}
