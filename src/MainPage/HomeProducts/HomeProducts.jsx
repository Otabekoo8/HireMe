import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Creator from '../Creators/Creators'; // Creator komponentini import qiling
import Work from '../Creators/Work';

const HomeProducts = () => {
  const [showAll, setShowAll] = useState(true); // By default, show products
  const [cart, setCart] = useState([]); // State to hold cart items

  const products = [
    { id: 1, name: 'eGlide Model 2 Electric Scooter for Rent In Tashkent', image: 'https://voltride.com/wp-content/uploads/2024/07/Electric-scooter-Segway-Ninebot-MAX-G2-front.png', description: 'Available for rent', price: '100,000 UZS', rating: 4.5, sold: 25 },
    { id: 2, name: 'Survival Camping Gear Set 3D model | Camping', image: 'https://m.media-amazon.com/images/I/91oVPqwyZ2L._AC_UF1000,1000_QL80_.jpg', description: 'Available for rent', price: '150,000 UZS', rating: 4.7, sold: 30 },
    { id: 3, name: 'Drones - A 3D model collection by oz10 S18x', image: 'https://img.freepik.com/free-photo/compass-lying-near-drone_23-2147833252.jpg?t=st=1726912149~exp=1726915749~hmac=5867a06985caab317cbc0fa6bf6239bb650854a0e4fa05a0e35053ca2ac4dea4&w=826', description: 'Available for rent', price: '200,000 UZS', rating: 3.2, sold: 15 },
    { id: 4, name: 'DIY 2024 Eco-Friendly Bike', image: 'https://img.freepik.com/free-photo/modern-eco-friendly-bicycle-outdoors_23-2148731283.jpg?t=st=1726912209~exp=1726915809~hmac=301d0aeb2a3b05962de36cac29aba17e9f04f2f87a5e1446a32d55aa441a9700&w=996', description: 'Available for rent', price: '120,000 UZS', rating: 4.0, sold: 20 },
    { id: 5, name: '20 Luxury Dining Tables for the Modern Dining Room', image: 'https://img.freepik.com/free-photo/conference-room-interior-modern-office-with-white-walls-monitor_181624-17709.jpg?t=st=1726912273~exp=1726915873~hmac=d4477672345fd5d4078827d28a5723c3b2f8c9fd590476a92f55927ba7d537c8&w=1380', description: 'Available for rent', price: '130,000 UZS', rating: 5.0, sold: 50 },
    { id: 6, name: 'Kawasaki Announces New 2024 Motorcycle Model', image: 'https://cars.usnews.com/images/new-features/widget-section/2019_Kawasaki_Ninja400_Base.jpg', description: 'Available for rent', price: '160,000 UZS', rating: 4.3, sold: 35 },
    { id: 7, name: 'Dining Room Trends 2024: Tasteful and Stylish', image: 'https://creativeeventservices.com/wp-content/uploads/2023/08/IMG_9986-scaled.jpg', description: 'Available for rent', price: '140,000 UZS', rating: 4.2, sold: 10 },
    { id: 8, name: 'Abdominal Personal Gym', image: 'https://reach2fitness.com/cdn/shop/products/51bpyzyxIjL_1ffb7eb6-3571-4c0f-abe2-a3472b387d87.jpg?v=1690372808', description: 'Available for rent', price: '110,000 UZS', rating: 3.9, sold: 5 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]); // Add selected product to cart
    alert(`${product.name} has been added to your cart!`); // Optional alert
  };

  return (
    <div className='dark:bg-gray-800 dark:text-white ' id='rent'>
      <div className="container mx-auto p-4">
        <div className="flex justify-between mb-3">
          <button
            className={`w-1/2 p-2 rounded hover:bg-blue-600 ${showAll ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'}`}
            onClick={() => setShowAll(true)}
          >
            Products
          </button>
          <button
            className={`w-1/2 p-2 rounded hover:bg-gray-600 ${!showAll ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'}`}
            onClick={() => setShowAll(false)}
          >
            Services
          </button>
        </div>
        {showAll ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[50px]">
            {products.map(product => (
              <div className="w-full max-w-sm dark:bg-gray-800 bg-white border border-gray-200 rounded-lg shadow" key={product.id}>
                <a href="#">
                  <div className="relative w-full h-[250px]">
                    <img className="absolute inset-0 w-full h-full object-cover rounded-t-lg" src={product.image} alt={product.name} />
                  </div>
                </a>
                <div className="flex flex-col justify-between px-5 pb-5 h-[220px]">
                  <div>
                    <a href="#">
                      <h5 className="text-lg font-semibold tracking-tight mt-[8px] text-gray-900 dark:text-white">{product.name}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-2">
                      {/* Rating stars */}
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${index < product.rating ? 'text-yellow-300' : 'text-gray-200'}`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-3 dark:text-white">{product.rating}</span>
                    </div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{product.price}</p>
                    <p className="text-gray-600 dark:text-white">Sold: {product.sold} times</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <button
                      onClick={() => addToCart(product)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Work /> // Services tugmasi bosilganda Creator komponentini ko'rsatish
        )}
      </div>
    </div>
  );
};

export default HomeProducts;
