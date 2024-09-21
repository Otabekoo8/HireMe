import React, { useState, useEffect } from 'react';
import Creator from '../Creators/Creators';
import Work from '../Creators/Work';

const HomeProducts = () => {
  const [showAll, setShowAll] = useState(true);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const products = [
    { id: 1, name: 'eGlide Model 2 Electric Scooter for Rent In Tashkent', image: 'https://voltride.com/wp-content/uploads/2024/07/Electric-scooter-Segway-Ninebot-MAX-G2-front.png', description: 'Available for rent', price: '100,000 UZS', rating: 4.5, sold: 25, owner: 'Ali', address: 'Tashkent, Street 1', status: 1 },
    { id: 2, name: 'Survival Camping Gear Set 3D model | Camping', image: 'https://m.media-amazon.com/images/I/91oVPqwyZ2L._AC_UF1000,1000_QL80_.jpg', description: 'Available for rent', price: '150,000 UZS', rating: 4.7, sold: 30, owner: 'Olim', address: 'Samarkand, Street 2', status: 2 },
    { id: 3, name: 'Drones - A 3D model collection by oz10 S18x', image: 'https://img.freepik.com/free-photo/compass-lying-near-drone_23-2147833252.jpg?t=st=1726912149~exp=1726915749~hmac=5867a06985caab317cbc0fa6bf6239bb650854a0e4fa05a0e35053ca2ac4dea4&w=826', description: 'Available for rent', price: '200,000 UZS', rating: 3.2, sold: 15, owner: 'Aziz', address: 'Andijan, Street 3', status: 3 },
    { id: 4, name: 'DIY 2024 Eco-Friendly Bike', image: 'https://img.freepik.com/free-photo/modern-eco-friendly-bicycle-outdoors_23-2148731283.jpg?t=st=1726912209~exp=1726915809~hmac=301d0aeb2a3b05962de36cac29aba17e9f04f2f87a5e1446a32d55aa441a9700&w=996', description: 'Available for rent', price: '120,000 UZS', rating: 4.0, sold: 20, owner: 'Nodir', address: 'Bukhara, Street 4', status: 1 },
    { id: 5, name: '20 Luxury Dining Tables for the Modern Dining Room', image: 'https://img.freepik.com/free-photo/conference-room-interior-modern-office-with-white-walls-monitor_181624-17709.jpg?t=st=1726912273~exp=1726915873~hmac=d4477672345fd5d4078827d28a5723c3b2f8c9fd590476a92f55927ba7d537c8&w=1380', description: 'Available for rent', price: '130,000 UZS', rating: 5.0, sold: 50, owner: 'Farruh', address: 'Tashkent, Street 5', status: 2 },
    { id: 6, name: 'Kawasaki Announces New 2024 Motorcycle Model', image: 'https://cars.usnews.com/images/new-features/widget-section/2019_Kawasaki_Ninja400_Base.jpg', description: 'Available for rent', price: '160,000 UZS', rating: 4.3, sold: 35, owner: 'Jasur', address: 'Namangan, Street 6', status: 3 },
    { id: 7, name: 'Dining Room Trends 2024: Tasteful and Stylish', image: 'https://creativeeventservices.com/wp-content/uploads/2023/08/IMG_9986-scaled.jpg', description: 'Available for rent', price: '140,000 UZS', rating: 4.2, sold: 10, owner: 'Sanjar', address: 'Fergana, Street 7', status: 1 },
    { id: 8, name: 'Abdominal Personal Gym', image: 'https://reach2fitness.com/cdn/shop/products/51bpyzyxIjL_1ffb7eb6-3571-4c0f-abe2-a3472b387d87.jpg?v=1690372808', description: 'Available for rent', price: '110,000 UZS', rating: 3.9, sold: 5, owner: 'Rustam', address: 'Tashkent, Street 8', status: 2 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
    if (product.status === 1) {
      setCountdown(3600); // 1 soat (3600 soniya)
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
    setCountdown(0);
  };

  const formatCountdown = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;
    return `${hours}h ${minutes}m ${secondsRemaining}s`;
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className='dark:bg-gray-800 dark:text-white' id='rent'>
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
              <div className={`w-full max-w-sm dark:bg-gray-800 h-[350px] bg-white border border-gray-200 rounded-lg shadow transform transition duration-300 hover:scale-105`} key={product.id}>
                <a href="#" onClick={() => openModal(product)}>
                  <div className="relative w-full h-[250px]">
                    <img className="absolute inset-0 w-full h-full object-cover rounded-t-lg" src={product.image} alt={product.name} />
                  </div>
                </a>
                <div className="flex flex-col justify-between px-5 pb-5 h-[220px]">
                  <div>
                    <h5 className="text-lg font-semibold tracking-tight mt-[8px] text-gray-900 dark:text-white">{product.name}</h5>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Work />
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
          <div className="bg-white rounded-lg p-5 max-w-md mx-auto">
            <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
            <p>Owner: {selectedProduct.owner}</p>
            <p>Address: {selectedProduct.address}</p>
            <p>Status: {selectedProduct.status === 1 ? 'Occupied' : selectedProduct.status === 2 ? 'Available' : 'Pending'}</p>
            {selectedProduct.status === 1 && (
              <p>Time remaining: {formatCountdown(countdown)}</p>
            )}
            <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeProducts;
