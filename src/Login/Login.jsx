import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isWorker, setIsWorker] = useState(false);
  const [userType, setUserType] = useState('');

  const handleRegisterToggle = () => {
    setIsRegistering(true); // Set to true to switch to the register state
    setUserType(''); // Clear userType for registration
  };

  const handleUserType = (type) => {
    setUserType(type);
    if (type === 'worker') {
      setIsWorker(true);
    } else {
      setIsWorker(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md transition-all duration-500 ease-in-out transform hover:scale-105">
        {!isRegistering ? (
          <div className="login-form">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>
              <NavLink to="/" className="mt-[50px]">
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors mt-[50px]"
                >
                  Login
                </button>
              </NavLink>
            </form>
            <p
              onClick={handleRegisterToggle}
              className="mt-4 text-center text-indigo-500 hover:underline cursor-pointer"
            >
              Don't have an account? Register
            </p>
          </div>
        ) : (
          <div className="register-form">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>
              {userType === '' ? (
                <div>
                  <h3 className="text-center text-lg font-bold mt-6">What are you looking for?</h3>
                  <div className="flex justify-around mt-4">
                    <button
                      onClick={() => handleUserType('client')}
                      className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors"
                    >
                      Looking for services
                    </button>
                    <button
                      onClick={() => handleUserType('worker')}
                      className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Looking for a job
                    </button>
                  </div>
                </div>
              ) : null}

              {isWorker && (
                <div className="worker-info-form mt-6">
                  <h3 className="text-lg font-bold">Worker Information</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Education</label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Profession</label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Experience</label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Previous workplace</label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Your phone number</label>
                      <input
                        type="tel"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Submit Worker Information
                    </button>
                  </div>
                </div>
              )}
              {userType === 'client' && <p className="text-center mt-6">Redirecting to the homepage...</p>}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
