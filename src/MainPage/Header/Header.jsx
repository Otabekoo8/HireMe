import React, { useState } from 'react';
import back from "../../assets/image/back.jpg";
import head1 from "../../assets/image/headers.jpg";
import head2 from "../../assets/image/head2.jpg";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: head1,
      text: "RentMe — Talantlarni kashf etish va imkoniyatlarni yaratish!"
    },
    {
      src: back,
      text: "RentMe — Sizga mos ish, biz bilan birga!"
    },
    {
      src: head2,
      text: "RentMe — Ish izlovchilar va topuvchilar uchrashadigan manzil!"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div id="controls-carousel" className="relative w-full" style={{ height: '90vh' }}>
      <div className="relative w-full h-full overflow-hidden ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute block w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center justify-center w-full h-full text-center px-4">
              <div className="">
                <p className="text-[38px] text-white font-semibold mb-4">{image.text}</p>
                <NavLink to="/">
              <button className='hidden xl:block xl:w-[150px] xl:h-[45px] bg-[#2F94F2] text-[#fff] rounded-sm'>
                Batafsil
              </button>
            </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Header;
