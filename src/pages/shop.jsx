import React from 'react';
import '../styling/shop.css';

import BlackHoodie from '../assets/products/blackHoodie.png';
import OliveHoodie from '../assets/products/oliveHoodie.png';
import GreyHoodie from '../assets/products/greyHoodie.png';
import StoneHoodie from '../assets/products/stoneHoodie.png';
import TshirtStone from '../assets/products/tshirtstone.png';

const products = [
  { id: 1, image: BlackHoodie, name: 'Oversized Hoodie in Black', price: '£50.00', alt: 'JPSGYM oversized hoodie in black' },
  { id: 2, image: OliveHoodie, name: 'Oversized Hoodie in Olive', price: '£50.00', alt: 'JPSGYM oversized hoodie in Olive' },
  { id: 3, image: TshirtStone, name: 'Oversized Unisex T-Shirt in Stone', price: '£30.00', alt: 'JPSGYM Oversized unisex T-Shirt' },
  { id: 4, image: GreyHoodie, name: 'Oversized Hoodie in Grey', price: '£55.00', alt: 'JPSGYM Oversized Hoodie in Grey' },
  { id: 5, image: StoneHoodie, name: 'Oversized Hoodie in Stone', price: '£55.00', alt: 'JPSGYM Oversized Hoodie in Stone' },
];

const Shop = () => {
  return (
    <div className="clothing-page">
      <header className="header">
        <h1>Our Products</h1>
        <p>Find the perfect gear for your workout</p>
      </header>

      <section className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.alt} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>

            {/* Size Selection Dropdown */}
            <select className="size-dropdown" defaultValue="M">
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
              <option value="XXL">2XL</option>
            </select>

            <button>Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Shop;

