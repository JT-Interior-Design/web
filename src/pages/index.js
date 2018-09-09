import React from 'react';

import Carousel from '../components/Carousel';
import SvgButton from '../components/shared/SvgButton';
import NavLink from '../components/shared/NavLink';
import project_img from '../nav_carousel/projects.jpg';
import blog_img from '../nav_carousel/living_room.jpg';
import contact_img from '../nav_carousel/bedroom.jpg';
// import about_img from '../nav_carousel/about.jpg';

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
    <div className="Carousel-Container">
      <Carousel images={[project_img, blog_img, contact_img]} />
    </div>
  </div>
);

{
  /* // B5C780 -> green color from logo */
}
