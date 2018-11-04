import React from 'react';
import Link from 'gatsby-link';

const SubNav = ({ navLinks }) => (
  <div className="Nav">
    {navLinks.map((link, index) => {
      return (
        <Link
          to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
          className="NavLink NavLink--Nav"
          key={index}
        >
          {link === 'News' ? 'Blog' : link}
        </Link>
      );
    })}
  </div>
);

export default SubNav;
