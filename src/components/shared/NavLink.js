import React from 'react';
import PropTypes from 'prop-types';

const NavButton = ({ type, to, className, onClick }) => (
  <a
    href={to}
    onClick={e => {
      e.preventDefault();
      onClick();
    }}
    className={`${className}`}
  >
    {type}
  </a>
);

NavButton.propTypes = {
  type: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default NavButton;
