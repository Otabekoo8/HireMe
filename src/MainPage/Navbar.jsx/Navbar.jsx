import React, { useState, useEffect } from 'react';
import logo from '../../assets/image/logo.jpg';
import { NavLink } from 'react-router-dom';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='dark:text-white dark:bg-gray-800 xl:h-[100px]'>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 xl:py-0">
          <div className="logo my-[15px]">
            <img src={logo} alt="Logo" className='w-[70px] rounded-full' />
          </div>
          <div className="flex items-center xl:hidden">
            <button onClick={toggleMenu} className="text-2xl text-gray-900 dark:text-white">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className={`menu ${isMenuOpen ? 'block' : 'hidden'} xl:flex xl:space-x-9 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <ul className='flex flex-col xl:flex-row xl:space-x-9'>
              <li className='py-2 px-4 text-center hover:text-[#2F94F2] xl:text-[16px] font-bold'>
                <a href="#home">Home</a>
              </li>
              <li className='py-2 px-4 text-center hover:text-[#2F94F2] xl:text-[16px] font-bold'>
                <a href="#rent">Rent</a>
              </li>
              <li className='py-2 px-4 text-center hover:text-[#2F94F2] xl:text-[16px] font-bold'>
                <NavLink to="/top-creators">Ranking</NavLink>
              </li>
              <li className='py-2 px-4 text-center hover:text-[#2F94F2] xl:text-[16px] font-bold'>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="actions flex items-center gap-5 xl:ml-auto">
            <NavLink to="/register">
              <button className='hidden xl:block px-4 py-1 rounded-lg bg-[#2F94F2] text-[#fff]'>
                Log in
              </button>
            </NavLink>
            <a href='#' className='text-blue-600 font-[500] text-center flex items-center gap-2'>
              <i className='bx bx-question-mark text-white font-bold bg-yellow-500 rounded-full p-1'></i>
              Help <br/> center!
            </a>
            <button onClick={toggleDarkMode} className="text-2xl text-gray-900 dark:text-white">
              {darkMode ? <BsSunFill className="text-yellow-400" /> : <BsMoonStarsFill />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
