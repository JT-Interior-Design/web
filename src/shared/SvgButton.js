import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { Email, FaceBook, Instagram, Twitter, Pinterest, Logo } from './icons';

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
    case 'Logo':
      return <Logo />;
    default:
      return null;
  }
};

const SocialButton = ({ type, to, className }) => (
  <a className={`${className}`} href={`${to}`}>
    {selector(type)}
  </a>
);

SocialButton.propTypes = {
  type: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default SocialButton;
