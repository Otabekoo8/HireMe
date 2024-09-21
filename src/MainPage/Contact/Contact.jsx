import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const SubscriptionInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');
  const [formErrors, setFormErrors] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    let errors = '';
    if (!name || !email || !message) {
      errors = 'Please fill out all fields.';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors) {
      setFormErrors(errors);
      setFormStatus('');
    } else {
      setFormErrors('');
      // Here you can add form submission logic (e.g., sending data to a server)
      console.log('Form submitted:', formData);
      setFormStatus('Your message has been received!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <div className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen p-8' id='contact'>
      <div className="container mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8">Contact Information</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="flex-1 bg-gray-200 p-8 rounded-lg shadow-lg dark:bg-gray-700">
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-3xl text-gray-600 mr-4" />
              <p className="text-xl">Tashkent, Uzbekistan</p>
            </div>
            <div className="flex items-center mb-6">
              <FaPhoneAlt className="text-3xl text-gray-600 mr-4" />
              <p className="text-xl">+998 71 123 45 67</p>
            </div>  
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-3xl text-gray-600 mr-4" />
              <p className="text-xl">info@example.com</p>
            </div>

            {/* Social Media Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Find Us on Social Media</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-2xl text-gray-600 hover:text-blue-600">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" className="text-2xl text-gray-600 hover:text-blue-400">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" className="text-2xl text-gray-600 hover:text-pink-500">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Section */}
          <div className="flex-1 bg-gray-200 p-8 rounded-lg shadow-lg dark:bg-gray-700">
            <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                rows="4"
              />
              {formErrors && <p className="text-red-500">{formErrors}</p>}
              <button
                type="submit"
                className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
              {formStatus && <p className="text-green-500 mt-4">{formStatus}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionInfo;
