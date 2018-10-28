import React from 'react';
import _ from 'lodash';

import './Carousel.css';
import SvgButton from '../components/shared/SvgButton';

import { TweenMax, Power3, SlowMo, Sine } from 'gsap';

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

export function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

export function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener)
    // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

class Carousel extends React.Component {
  state = {
    images: [...this.props.images],
    animating: false,
    currentImage: 0,
    incomingImage: 1,
  };

  componentDidMount() {
    disableScroll();

    window.addEventListener(
      'wheel',
      _.throttle(
        e => {
          e.deltaY > 0 ? this.next() : this.previous();
        },
        1600,
        { trailing: false }
      )
    );
  }

  next = () => {
    if (this.state.animating) return;
    let incoming = (this.state.currentImage + 1) % this.state.images.length;
    this.setState(
      prevState => ({
        incomingImage: incoming,
        animating: true,
      }),
      () => {
        TweenMax.fromTo(
          this.incomingImgRef,
          0.8,
          { yPercent: 100 },
          {
            yPercent: 0,
            ease: Sine.easeInOut,
            onComplete: () =>
              this.setState({
                currentImage: incoming,
                animating: false,
              }),
          }
        );
      }
    );
  };

  previous = () => {
    if (this.state.animating) return;
    let incoming =
      this.state.currentImage - 1 >= 0
        ? this.state.currentImage - 1
        : this.state.images.length - 1;
    this.setState(
      prevState => ({
        incomingImage: incoming,
        animating: true,
      }),
      () => {
        TweenMax.fromTo(
          this.incomingImgRef,
          0.8,
          { yPercent: -100 },
          {
            yPercent: 0,
            ease: Sine.easeInOut,
            onComplete: () =>
              this.setState({
                currentImage: incoming,
                animating: false,
              }),
          }
        );
      }
    );
  };

  render() {
    return (
      <div className="Carousel" style={{ height: this.props.height }}>
        <img
          ref={node => (this.currentImgRef = node)}
          className="Carousel__img"
          src={this.state.images[this.state.currentImage]}
          alt=""
        />
        {this.state.animating ? (
          <img
            ref={node => (this.incomingImgRef = node)}
            className="Carousel__img Carousel__img--animate"
            src={this.state.images[this.state.incomingImage]}
            alt=""
          />
        ) : null}
        <SvgButton type="Mouse" to="/" className="Mouse" />
      </div>
    );
  }
}

export default Carousel;
