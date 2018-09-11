import React from 'react';

import Carousel from '../components/Carousel';
import SvgButton from '../components/shared/SvgButton';
import Loading from '../components/loading/Loading';
import NavLink from '../components/shared/NavLink';
import project_img from '../nav_carousel/projects.jpg';
import blog_img from '../nav_carousel/fan.jpg';
// import about_img from '../nav_carousel/deer.jpg';
// import contact_img from '../nav_carousel/bedroom.jpg';

import './index.css';

export default () => (
  <div className="Container">
    <Loading className="Loading" />
    <div className="Nav-Container">
      <div>
        <div className="Header">
          <span>JASON</span>
          <SvgButton className="Logo" type="Logo" to="/" />
          <span>TAYLOR</span>
        </div>
        <p>classic design, rooted in tradition, wistfully adorned.</p>
      </div>
      <div className="Nav-Menu">
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
      <Carousel images={[project_img, blog_img]} />
    </div>
  </div>
);
