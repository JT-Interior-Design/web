import React from 'react';
import PropTypes from 'prop-types';

import { Google, FaceBook, Instagram, Twitter, Pinterest } from './icons';
const selector = type => {
  switch (type) {
    case 'Google':
      return <Google />;
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

const SocialButton = ({ type }) => <div>{selector(type)}</div>;

SocialButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SocialButton;
