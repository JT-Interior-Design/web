import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import './nav_link.css';

const NavButton = ({ type, to, className }) => (
  <Link className={`${className}`} to={`${to}`}>
    {type}
  </Link>
);

NavButton.propTypes = {
  type: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default NavButton;
