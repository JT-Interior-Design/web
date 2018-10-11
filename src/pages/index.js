import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
import { navigateTo } from 'gatsby-link';

import Navigation from '../components/navigation/Navigation';
import Carousel from '../components/Carousel';
import Loading from '../components/loading/Loading';
import project_img from '../nav_carousel/projects.jpg';
import blog_img from '../nav_carousel/fan.jpg';
// import about_img from '../nav_carousel/deer.jpg';
// import contact_img from '../nav_carousel/bedroom.jpg';

import './index.css';

export default class extends React.Component {
  state = {
    defaultStyles: {
      opacity: 0,
    },
    transitionStyles: {
      entering: {
        opacity: 0,
      },
      entered: {
        opacity: 1,
      },
    },
  };

  handleNavClick = to => {
    console.log(to);
    let defaultStyles, transitionStyles;
    switch (to) {
      case '/about':
        defaultStyles = {
          transform: 'translateX(-100%)',
        };
        transitionStyles = {
          entering: { transform: 'translateX(-100%)' },
          entered: { transform: 'translate(0%)' },
        };
        break;
      case '/contact':
        defaultStyles = {
          transform: 'translateY(-100%)',
        };
        transitionStyles = {
          entering: { transform: 'translateY(-100%)' },
          entered: { transform: 'translate(0%)' },
        };
        break;
      default:
        return;
    }
    this.setState({ defaultStyles, transitionStyles }, () => navigateTo(to));
  };

  render() {
    let loading = false;
    if (!sessionStorage.getItem('loading')) {
      loading = true;
      sessionStorage.setItem('loading', 'loading');
    }
    return (
      <PageTransition
        defaultStyle={{
          height: '100vh',
          transition: '500ms ',
          ...this.state.defaultStyles,
        }}
        transitionStyles={this.state.transitionStyles}
        transitionTime={1000}
      >
        <div className="Container">
          {loading ? <Loading className="Loading" /> : null}
          <Navigation onNavClick={this.handleNavClick} />
          <div className="Carousel-Container">
            <Carousel images={[project_img, blog_img]} />
          </div>
        </div>
      </PageTransition>
    );
  }
}
