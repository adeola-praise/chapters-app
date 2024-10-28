import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import NavItem from './NavItem';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <div className='w-[10px] h-[10px]'><img src={logo} alt="Logo" className=" mr-3" /></div>
          <span className="text-2xl font-bold text-gray-800">Restaurant</span>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <NavItem text="Home" link="/" />
          <NavItem text="Menu" link="/menu" />
          <NavItem text="About Us" link="/about" />
          <NavItem text="Contact" link="/contact" />
        </ul>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl text-gray-800 cursor-pointer" onClick={toggleMenu}>
          <MenuOutlined />
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center bg-white border-t border-gray-200 md:hidden font-medium text-gray-700">
          <NavItem text="Home" link="/" onClick={toggleMenu} />
          <NavItem text="Menu" link="/menu" onClick={toggleMenu} />
          <NavItem text="About Us" link="/about" onClick={toggleMenu} />
          <NavItem text="Contact" link="/contact" onClick={toggleMenu} />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
