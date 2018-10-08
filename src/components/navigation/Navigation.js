import React, { Component, Fragment } from 'react';

import NavLink from '../shared/NavLink';
import Hamburger from '../shared/icons/Hamburger';
import JTHeader from './JTHeader';

import './navigation.css';

class Navigation extends Component {
  state = {
    animating: false,
    isOpen: false,
  };

  animateOut = () => {
    this.setState(
      prevState => ({
        animating: true,
      }),
      () => {
        TweenLite.to(this.incomingRef, 1, {
          left: this.state.isOpen ? '-6%' : '95%',
          ease: Sine.easeInOut,
          onComplete: () =>
            this.setState(prevState => ({
              animating: false,
              isOpen: !prevState.isOpen,
            })),
        });
      }
    );
    console.log(this.state.animating);
  };

  render() {
    return (
      <div className="Nav-Container">
        <JTHeader className="Header" />
        <div className="Nav-Menu">
          <ul className="Menu-Link-Wrapper">
            <li>
              <NavLink className="NavLink" type="See My Work" to="/projects" />
            </li>
            <li>
              <NavLink className="NavLink" type="News" to="/projects" />
            </li>
            <li>
              <NavLink className="NavLink" type="About" to="/about/" />
            </li>
            <li>
              <NavLink className="NavLink" type="WORK WITH ME" to="/contact" />
            </li>
          </ul>
        </div>
        <div
          style={{
            width: '20',
            position: 'absolute',
            left: '-6%',
            top: '50%',
            cursor: 'pointer',
          }}
          onClick={
            !this.state.animating ? this.animateOut : this.state.animateIn
          }
          ref={node => (this.incomingRef = node)}
        >
          <Hamburger />
        </div>
      </div>
    );
  }
}

export default Navigation;
