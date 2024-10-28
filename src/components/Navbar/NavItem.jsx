import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ text, link, onClick }) => (
  <li className="hover:text-primary transition duration-300">
    <Link to={link} onClick={onClick}>
      {text}
    </Link>
  </li>
);

export default NavItem;
