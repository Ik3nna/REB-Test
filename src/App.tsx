import ProductCard from "./productCard"
import { useState, useEffect } from 'react';

function App() {
    const [selectedVariants, setSelectedVariants] = useState<{ [productId: number]: string }>({});

    const handleVariantChange = (productId: number, variantName: string) => {
        setSelectedVariants((prev) => ({
            ...prev,
            [productId]: variantName,
        }));
    };

    useEffect(() => {
        const initialVariants: { [productId: number]: string } = {};
      
        productsData.forEach((product) => {
          const firstInStock = product.variants?.find((v) => v.inStock);
          if (firstInStock) {
            initialVariants[product.id] = firstInStock.name;
          }
        });
      
        setSelectedVariants(initialVariants);
    }, []);

    return (
        <main className="container">
        {productsData.map((product)=>(
            <ProductCard 
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
                category={product.category}
                rating={product.rating}
                variants={product.variants}
                selectedVariant={selectedVariants[product.id]}
                onVariantChange={(variant) => handleVariantChange(product.id, variant)}
            />
        ))}
        </main>
    )
}

export default App

const productsData = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
      variants: [
        { name: "Blue", inStock: true },
        { name: "Black", inStock: false },
        { name: "Olive", inStock: true }
      ]
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description: "Slim-fitting style, contrast raglan long sleeve...",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
      variants: [
        { name: "Small", inStock: false },
        { name: "Medium", inStock: true },
        { name: "Large", inStock: false }
      ]
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: "Great outerwear jackets for Spring/Autumn/Winter...",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.7, count: 500 },
      variants: [
        { name: "Black", inStock: true },
        { name: "Gray", inStock: true }
      ]
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description: "The color could be slightly different...",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
      variants: [
        { name: "Red", inStock: false },
        { name: "White", inStock: false }
      ]
    },
    {
      id: 5,
      title: "John Hardy Women's Dragon Bracelet",
      price: 695,
      description: "Inspired by the mythical water dragon...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 4.6, count: 400 },
      variants: [
        { name: "6.5 inch", inStock: true },
        { name: "7 inch", inStock: true },
        { name: "7.5 inch", inStock: false }
      ]
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 168,
      description: "Return or exchange any order within 30 days...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3.9, count: 70 },
      variants: [
        { name: "Size 5", inStock: true },
        { name: "Size 6", inStock: false }
      ]
    },
    {
      id: 7,
      title: "White Gold Plated Princess Ring",
      price: 9.99,
      description: "Created Wedding Engagement Solitaire Diamond Promise Ring...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3, count: 400 },
      variants: [
        { name: "Size 6", inStock: true },
        { name: "Size 7", inStock: true }
      ]
    },
    {
      id: 8,
      title: "Pierced Owl Tunnel Earrings",
      price: 10.99,
      description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 1.9, count: 100 },
      variants: [
        { name: "10mm", inStock: false },
        { name: "12mm", inStock: false }
      ]
    },
    {
      id: 9,
      title: "WD 2TB External Hard Drive",
      price: 64,
      description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: { rate: 3.3, count: 203 },
      variants: [
        { name: "Black", inStock: true },
        { name: "Silver", inStock: true }
      ]
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB",
      price: 109,
      description: "Easy upgrade for faster boot up...",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 470 },
      variants: [
        { name: "1TB", inStock: false }
      ]
    },
    {
      id: 11,
      title: "Silicon Power 256GB SSD",
      price: 109,
      description: "High transfer speeds and SLC Cache Technology.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating: { rate: 4.8, count: 319 },
      variants: [
        { name: "256GB", inStock: true },
        { name: "512GB", inStock: false }
      ]
    },
    {
      id: 12,
      title: "WD 4TB Gaming Drive for PS4",
      price: 114,
      description: "Expand your PS4 gaming experience.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: { rate: 4.8, count: 400 },
      variants: [
        { name: "4TB", inStock: true }
      ]
    },
    {
      id: 13,
      title: "Acer SB220Q 21.5” Monitor",
      price: 599,
      description: "Full HD (1920 x 1080), 75Hz refresh rate.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 250 },
      variants: [
        { name: "21.5\"", inStock: true },
        { name: "23.8\"", inStock: false }
      ]
    },
    {
      id: 14,
      title: "Samsung 49-Inch CHG90 Curved Monitor",
      price: 999.99,
      description: "QLED, HDR, 144Hz, Ultra-wide 32:9 format.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      rating: { rate: 2.2, count: 140 },
      variants: [
        { name: "49\"", inStock: false }
      ]
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Jacket",
      price: 56.99,
      description: "Warm fleece inner, zippered pockets, detachable hood.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      rating: { rate: 2.6, count: 235 },
      variants: [
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: false }
      ]
    },
    {
      id: 16,
      title: "Lock and Love Faux Leather Moto Jacket",
      price: 29.95,
      description: "2 pockets front, button detail, denim-style hood.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      rating: { rate: 2.9, count: 340 },
      variants: [
        { name: "XS", inStock: true },
        { name: "S", inStock: false }
      ]
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker",
      price: 39.99,
      description: "Striped lining, adjustable drawstring waist, long sleeve.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      rating: { rate: 3.8, count: 679 },
      variants: [
        { name: "Black", inStock: true },
        { name: "Yellow", inStock: false }
      ]
    },
    {
      id: 18,
      title: "MBJ Women's Boat Neck Tee",
      price: 9.85,
      description: "Ribbed sleeves, stretchy fabric, great for comfort.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      rating: { rate: 4.7, count: 130 },
      variants: [
        { name: "M", inStock: false },
        { name: "L", inStock: false }
      ]
    },
    {
      id: 19,
      title: "Opna Women's Moisture T-Shirt",
      price: 7.95,
      description: "Lightweight, breathable, V-neck, moisture-wicking.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      rating: { rate: 4.5, count: 146 },
      variants: [
        { name: "Pink", inStock: true },
        { name: "Blue", inStock: true }
      ]
    },
    {
      id: 20,
      title: "DANVOUY Women's T Shirt Casual Cotton",
      price: 12.99,
      description: "Soft cotton, letter print, V-neck, great for all seasons.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      rating: { rate: 3.6, count: 145 },
      variants: [
        { name: "Green", inStock: false },
        { name: "White", inStock: false }
      ]
    }
];
  
