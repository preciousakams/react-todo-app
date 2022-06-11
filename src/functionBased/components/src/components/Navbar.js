import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 1,
      path: '/categories',
      text: 'Categories',
    },
  ]
  return (
    <ul className="navBar">
      {links.map((link) => (
        <li key={link.id}>
      <NavLink to={link.path}>{link.text}</NavLink>
    </li>
      ))}
  </ul>
  )
}

export default Navbar