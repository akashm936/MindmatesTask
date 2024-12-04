import React from 'react';

const ContactUs = () => {
  return (
    <div className="text-center mt-12" >
      <h1 className="text-3xl">Contact Us</h1>
      <p className="mt-4 text-lg">Developed By AKASH MORWAL</p>
      <p>Email : amorwal5@gmail.com</p>
      <p>Phone No: +91 8956055703</p>
      <div className="flex justify-center space-x-4 mt-4">
        
        <a
          href="https://github.com/akashm936"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
        >
          GitHub
        </a>

        
        <a
          href="https://www.linkedin.com/in/akash-morwal" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          LinkedIn
        </a>

        <a
          href="https://akashm936.github.io/akashportfolio/" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
        >
          Portfolio
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
