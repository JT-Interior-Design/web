import React from 'react';
import PropTypes from 'prop-types';

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

const NavButton = ({ type, to, className, onClick }) => (
  <a
    href={to}
    onClick={e => {
      e.preventDefault();
      onClick();
    }}
    className={`${className}`}
    // to={`${to}`}
  >
    {selector(type)}
  </a>
);

NavButton.propTypes = {
  type: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default NavButton;
