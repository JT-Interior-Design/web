import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Logo from './icons/Logo';
import './nav_link.css';

const selector = type => {
  switch (type) {
    case 'Logo':
      return <Logo />;
    default:
      return type;
  }
};

const NavButton = ({ type, to, className }) => (
  <Link className={`${className}`} to={`${to}`}>
    {selector(type)}
  </Link>
);

NavButton.propTypes = {
  type: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default NavButton;
