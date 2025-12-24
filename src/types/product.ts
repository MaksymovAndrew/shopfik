export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: 'tshirt' | 'pants' | 'shoes';
    description: string;
    sizes: string[];
}

export interface CartItem {
    id: string;
    product: Product;
    size: string;
    quantity: number;
}
