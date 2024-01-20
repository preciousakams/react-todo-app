import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

const NavBar = () => (
  <nav className="navBar">
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {/* <li className="aboutNav">
        <DropdownButton id="dropdown-basic-button" title="About">
          <Dropdown.Item href="/author">Author</Dropdown.Item>
          <Dropdown.Item href="/app">About App</Dropdown.Item>
        </DropdownButton>
      </li> */}
    </ul>
    <Outlet />
  </nav>
);
export default NavBar;
