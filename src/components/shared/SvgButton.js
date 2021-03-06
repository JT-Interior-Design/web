import React from 'react';
import PropTypes from 'prop-types';

import { Email, FaceBook, Instagram, Twitter, Pinterest, Mouse } from './icons';

import './svg_button.css';

const selector = type => {
  switch (type) {
    case 'Email':
      return <Email />;
    case 'FaceBook':
      return <FaceBook />;
    case 'Instagram':
      return <Instagram />;
    case 'Twitter':
      return <Twitter />;
    case 'Pinterest':
      return <Pinterest />;

    case 'Mouse':
      return <Mouse />;
    default:
      return type;
  }
};

const SvgButton = ({ type, to, className }) => (
  <a className={`${className}`} href={`${to}`}>
    {selector(type)}
  </a>
);

SvgButton.propTypes = {
  type: PropTypes.string.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default SvgButton;
