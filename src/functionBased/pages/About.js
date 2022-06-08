import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const About = () => (
  <>
    <div className="aboutDiv">
      <h4>This is the about page</h4>
    </div>
    <ul className="aboutList">
      <li>
        <NavLink to="/about/author">Author</NavLink>
      </li>
      <li>
        <NavLink to="/about/app">About App</NavLink>
      </li>
    </ul>
    <Outlet />
  </>
);
export default About;
