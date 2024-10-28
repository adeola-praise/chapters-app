import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Restaurant Name</h1>
        <nav>
          <Link to="/" className="mr-4 text-gray-700">Home</Link>
          <Link to="/menu" className="mr-4 text-gray-700">Menu</Link>
          <Link to="/cart" className="text-gray-700">Cart</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
