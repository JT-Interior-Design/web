import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';

import Navigation from '../components/navigation/Navigation';
import Carousel from '../components/Carousel';
import Loading from '../components/loading/Loading';
import project_img from '../nav_carousel/projects.jpg';
import blog_img from '../nav_carousel/fan.jpg';
// import about_img from '../nav_carousel/deer.jpg';
// import contact_img from '../nav_carousel/bedroom.jpg';

import './index.css';

export default () => (
  <PageTransition
    defaultStyle={{
      height: '100vh',
      transition: '1000ms ',
      opacity: '0',
    }}
    transitionStyles={{
      entered: { opacity: '1' },
      exiting: { opacity: '0' },
    }}
    transitionTime={1000}
  >
    <div className="Container">
      {/* <Loading className="Loading" /> */}
      <Navigation />
      <div className="Carousel-Container">
        <Carousel images={[project_img, blog_img]} />
      </div>
    </div>
  </PageTransition>
);
