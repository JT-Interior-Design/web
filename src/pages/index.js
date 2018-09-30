import React from 'react';

import Navigation from '../components/navigation/Navigation';
import Carousel from '../components/Carousel';
import Loading from '../components/loading/Loading';
import project_img from '../nav_carousel/projects.jpg';
import blog_img from '../nav_carousel/fan.jpg';
// import about_img from '../nav_carousel/deer.jpg';
// import contact_img from '../nav_carousel/bedroom.jpg';

import './index.css';

export default () => (
  <div className="Container">
    <Loading className="Loading" />
    <Navigation />
    <div className="Carousel-Container">
      <Carousel images={[project_img, blog_img]} />
    </div>
  </div>
);
