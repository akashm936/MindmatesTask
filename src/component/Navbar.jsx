import React from 'react';

const Navbar = ({ user, onLogin, onLogout }) => {
  return (
    <nav className="bg-gray-800 p-2 text-white">
      <ul className="flex justify-evenly">
        <li><a href="/" className="hover:text-gray-400">Home</a></li>
        <li><a href="/about" className="hover:text-gray-400">About</a></li>
        <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
        <li>
          {!user ? (
            <button onClick={onLogin} className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-400 text-sm">
              Login
            </button>
          ) : (
            <button onClick={onLogout} className="bg-indigo-600 px-4  py-2 rounded-md hover:bg-red-700">
              Logout
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
