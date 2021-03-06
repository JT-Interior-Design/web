import React, { Component, Fragment } from 'react';

import NavLink from '../shared/NavLink';
import JTHeader from './JTHeader';

import './navigation.css';

const Navigation = ({ onNavClick }) => {
  return (
    <div className="Nav__Container">
      <JTHeader className="Header" />
      <div className="Nav__Menu">
        <ul className="Menu__Link__Wrapper">
          <li>
            <NavLink
              className="NavLink"
              type="Portfolio"
              to="/projects"
              onClick={() => onNavClick('/projects')}
            />
          </li>
          <li>
            <NavLink
              className="NavLink"
              type="Seeds of Inspiration"
              to="/news"
              onClick={() => onNavClick('/news')}
            />
          </li>
          <li>
            <NavLink
              className="NavLink"
              type="About"
              to="/about"
              onClick={() => onNavClick('/about')}
            />
          </li>
          <li>
            <NavLink
              className="NavLink"
              type="Connect With Us"
              to="/contact"
              onClick={() => onNavClick('/contact')}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
