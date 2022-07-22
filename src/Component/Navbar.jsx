import React from 'react';
import {  NavLink } from 'react-router-dom';

const links = [
  { to: '/', title: 'Home' },
  { to: '/About', title: 'About' },
  { to: '/Contact', title: 'Contact' },
  { to: '/User', title: 'User' },
  { to: '/Login', title: 'Login' },
];
const baseStyle = {
  color: 'black',
};

const activeStyle = {
  color: 'red',
};
const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        border: '1px solid red',
      }}
    >
      {links.map(e => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={e.to}
        >
          {e.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
