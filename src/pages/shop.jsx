import React, { useState } from 'react';
import '../styling/shop.css';
import BlackHoodie from '../assets/products/blackHoodie.png';
// import OliveHoodie from '../assets/products/oliveHoodie.png';
// import GreyHoodie from '../assets/products/greyHoodie.png';
import StoneHoodie from '../assets/products/stoneHoodie.png';


// Updated product data with multiple images for each product
const products = [
  {
    id: 1,
    images: [BlackHoodie, StoneHoodie],
    name: 'Oversized Hoodie in Black',
    price: '£50.00',
    alt: 'JPSGYM oversized hoodie in black',
  },
  // {
  //   id: 2,
  //   images: [OliveHoodie, OliveHoodieAlt],
  //   name: 'Oversized Hoodie in Olive',
  //   price: '£50.00',
  //   alt: 'JPSGYM oversized hoodie in olive',
  // },
  // {
  //   id: 4,
  //   images: [GreyHoodie, GreyHoodieAlt],
  //   name: 'Oversized Hoodie in Grey',
  //   price: '£55.00',
  //   alt: 'JPSGYM oversized hoodie in grey',
  // },
  // {
  //   id: 5,
  //   images: [StoneHoodie, StoneHoodieAlt],
  //   name: 'Oversized Hoodie in Stone',
  //   price: '£55.00',
  //   alt: 'JPSGYM oversized hoodie in stone',
  // },
];

const Shop = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(products.map(() => 0));

  const handleImageChange = (productId, imgIndex) => {
    setCurrentImageIndex((prevState) => {
      const newState = [...prevState];
      const productIndex = products.findIndex((product) => product.id === productId);
      newState[productIndex] = imgIndex;
      return newState;
    });
  };

  return (
    <div className="clothing-page">
      <header className="header">
        <h1>Our Products</h1>
        <p>Find the perfect gear for your workout</p>
      </header>

      <section className="products">
        {products.map((product, index) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.images[currentImageIndex[index]]}
              alt={product.alt}
              className="product-image"
            />
            <div className="thumbnail-container">
              {product.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`${product.alt} thumbnail`}
                  className={`thumbnail ${currentImageIndex[index] === imgIndex ? 'active' : ''}`}
                  onClick={() => handleImageChange(product.id, imgIndex)}
                />
              ))}
            </div>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>

            {/* Size Selection Dropdown */}
            <select className="size-dropdown" defaultValue="Select Size">
              <option disabled>Select Size</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
              <option value="XXL">2XL</option>
            </select>

            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Shop;


