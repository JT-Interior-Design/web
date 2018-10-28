import React from 'react';
import Link from 'gatsby-link';

const SubNav = ({ navLinks }) => (
  <div>
    {navLinks.map((link, index) => {
      return (
        <Link
          to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
          className="NavLink NavLink--Nav NavLink--Pos"
          key={index}
        >
          {link}
        </Link>
      );
    })}
  </div>
);

export default SubNav;
