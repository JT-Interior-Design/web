import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { Email, FaceBook, Instagram, Twitter, Pinterest } from './icons';

import './socialButton.css';

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
    default:
      return null;
  }
};

const SocialButton = ({ type, to }) => (
  <a className="Social-Button" href={`${to}`}>
    {selector(type)}
  </a>
);

SocialButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SocialButton;
