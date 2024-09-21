import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p className="text-sm">Phone: <span className="font-semibold">+998 33 282 87 07</span></p>
            <p className="text-sm">Email: <span className="font-semibold">InnovatorsHub@gmail.com</span></p>
            <p className="text-sm">Address: <span className="font-semibold">Namangan Region, Uchqo'rg'on District</span></p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Social Media</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400">
                <FaFacebookF className="mr-1" /> Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-300">
                <FaTwitter className="mr-1" /> Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-400">
                <FaInstagram className="mr-1" /> Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Our Location</h3>
            <div className="h-48 bg-gray-700 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12025.68437164057!2d72.08388111791268!3d41.10349369622556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcacee44d44947%3A0x613ccb3f9b0b5949!2sUchqo'rg'on%20iqtisodiyot%20va%20kasb-xunar%20kolleji!5e0!3m2!1sru!2s!4v1726723098481!5m2!1sru!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
