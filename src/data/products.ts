import { Product } from '../types/product';

export const products: Product[] = [
    {
        id: '1',
        name: 'Classic White T-Shirt',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
        category: 'tshirt',
        description:
            '<p><strong>Premium Cotton T-Shirt</strong></p><p>Made from 100% organic cotton for ultimate comfort.</p><ul><li>Breathable fabric</li><li>Classic fit</li><li>Machine washable</li></ul>',
        sizes: ['S', 'M', 'L', 'XL'],
    },
    {
        id: '2',
        name: 'Black Premium Tee',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
        category: 'tshirt',
        description:
            '<p><strong>Premium Black T-Shirt</strong></p><p>Stylish and comfortable, perfect for any occasion.</p><ul><li>Soft cotton blend</li><li>Modern cut</li><li>Fade resistant</li></ul>',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        id: '3',
        name: 'Graphic Print Tee',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
        category: 'tshirt',
        description:
            '<p><strong>Trendy Graphic T-Shirt</strong></p><p>Express yourself with our unique graphic designs.</p><ul><li>High-quality print</li><li>Comfortable fit</li><li>Durable fabric</li></ul>',
        sizes: ['M', 'L', 'XL'],
    },
    {
        id: '4',
        name: 'Vintage Style Tee',
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800',
        category: 'tshirt',
        description:
            '<p><strong>Vintage Inspired T-Shirt</strong></p><p>Classic vintage look with modern comfort.</p><ul><li>Retro design</li><li>Soft wash finish</li><li>Relaxed fit</li></ul>',
        sizes: ['S', 'M', 'L', 'XL'],
    },
    {
        id: '5',
        name: 'Slim Fit Jeans',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
        category: 'pants',
        description:
            '<p><strong>Modern Slim Fit Jeans</strong></p><p>Perfect balance of style and comfort.</p><ul><li>Stretch denim</li><li>5-pocket design</li><li>Slim through hip and thigh</li></ul>',
        sizes: ['28', '30', '32', '34', '36'],
    },
    {
        id: '6',
        name: 'Cargo Pants',
        price: 69.99,
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800',
        category: 'pants',
        description:
            '<p><strong>Functional Cargo Pants</strong></p><p>Utility meets style with multiple pockets.</p><ul><li>Durable fabric</li><li>Multiple pockets</li><li>Adjustable waist</li></ul>',
        sizes: ['28', '30', '32', '34', '36', '38'],
    },
    {
        id: '7',
        name: 'Chino Pants',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800',
        category: 'pants',
        description:
            '<p><strong>Classic Chino Pants</strong></p><p>Versatile pants for casual or smart-casual wear.</p><ul><li>Cotton twill</li><li>Straight fit</li><li>Easy care</li></ul>',
        sizes: ['28', '30', '32', '34', '36'],
    },
    {
        id: '8',
        name: 'Classic Sneakers',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800',
        category: 'shoes',
        description:
            '<p><strong>Timeless Sneaker Design</strong></p><p>Comfortable everyday sneakers for any style.</p><ul><li>Cushioned insole</li><li>Rubber sole</li><li>Breathable upper</li></ul>',
        sizes: ['7', '8', '9', '10', '11', '12'],
    },
    {
        id: '9',
        name: 'Running Shoes',
        price: 119.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
        category: 'shoes',
        description:
            '<p><strong>Performance Running Shoes</strong></p><p>Engineered for comfort and speed.</p><ul><li>Responsive cushioning</li><li>Lightweight design</li><li>Superior traction</li></ul>',
        sizes: ['7', '8', '9', '10', '11', '12', '13'],
    },
    {
        id: '10',
        name: 'Leather Boots',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800',
        category: 'shoes',
        description:
            '<p><strong>Premium Leather Boots</strong></p><p>Durable and stylish for all seasons.</p><ul><li>Genuine leather</li><li>Waterproof</li><li>Comfortable fit</li></ul>',
        sizes: ['7', '8', '9', '10', '11', '12'],
    },
];
