import React from 'react';
import Link from 'gatsby-link';

import SvgButton from '../shared/SvgButton';
import NavLink from '../shared/NavLink';

import './index.css';

export default () => (
  <div className="Container">
    <div className="Nav-Container">
      <div className="Header">
        <span>JASON</span>
        <SvgButton className="Logo" type="Logo" to="/" />
        <span>TAYLOR</span>
      </div>
      <p>classic design, rooted in tradition, wistfully adorned.</p>
      <div className="Nav-Menu">
        <div className="Menu-Header">Navigation</div>
        <ul className="Menu-Link-Wrapper">
          <li>
            <NavLink className="NavLink" type="Projects" to="/projects" />
          </li>
          <li>
            <NavLink className="NavLink" type="Blog" to="/projects" />
          </li>
          <li>
            <NavLink className="NavLink" type="About" to="/projects" />
          </li>
          <li>
            <NavLink className="NavLink" type="Contact" to="/projects" />
          </li>
        </ul>
      </div>
    </div>
    <div className="Carousel-Container">this will be the carousel</div>
  </div>
);

// Classic design, rooted in tradition, wistfully adorned.
// B5C780 -> green color from logo
