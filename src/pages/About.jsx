import React from 'react';

const About = () => {
  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl">About Us</h1>
      <p className="mt-4 text-lg">This is Simple React App For Mindmate Internship Task</p>
      <p>Developed by : AKASH MORWAL</p>
      <p>Email: amorwal5@gmail.com</p>
      <div className="flex justify-center space-x-4 mt-4">
          {/* GitHub Button */}
          <a
            href="https://github.com/yourusername" // Replace with your GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
          >
            GitHub
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/akash-morwal" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            LinkedIn
          </a>
        </div>
    </div>
  );
};

export default About;
