import React, { useState } from 'react';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Classic White Shirt',
    price: 5999.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    category: 'shirts',
    description: 'Timeless white cotton shirt perfect for any occasion'
  },
  {
    id: 2,
    name: 'Navy Blazer',
    price: 19999.99,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35',
    category: 'suits',
    description: 'Sophisticated navy blazer for a sharp look'
  },
  {
    id: 4,
    name: 'Striped Dress Shirt',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c',
    category: 'shirts',
    description: 'Professional striped shirt for business wear'
  },
  {
    id: 5,
    name: 'Black Dress Pants',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1',
    category: 'pants',
    description: 'Classic black dress pants for formal occasions'
  },
  {
    id: 6,
    name: 'Gray Suit',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1555069519-127aadedf1ee',
    category: 'suits',
    description: 'Modern gray suit for business and formal events'
  },
  {
    id: 7,
    name: 'Traditional Sherwani',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1599032909756-5deb82fea3b0',
    category: 'sherwanis',
    description: 'Elegant traditional sherwani for special occasions'
  },
  {
    id: 8,
    name: 'Royal Blue Sherwani',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1599032909962-f4c5c5ac0c4b',
    category: 'sherwanis',
    description: 'Royal blue sherwani with intricate embroidery'
  }

];

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'shirts', name: 'Shirts' },
  { id: 'pants', name: 'Pants' },
  { id: 'suits', name: 'Suits' },
  { id: 'sherwanis', name: 'Sherwanis' }
];

const ProductGrid = () => {
  const { addToCart } = useShoppingCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="products">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      {/* Category Navigation */}
      <div className="flex overflow-x-auto mb-8">
        <div className="flex space-x-4 p-2 w-full justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 cursor-pointer rounded-full whitespace-nowrap transition-all duration-300 transform ${
                selectedCategory === category.id
                  ? 'bg-black text-white scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative h-64">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                ₹{product.price.toLocaleString()}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-black text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition-all"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
