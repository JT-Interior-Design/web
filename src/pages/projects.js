import React from 'react';
import g from 'glamorous';
import PageTransition from 'gatsby-plugin-page-transitions';
import Link from 'gatsby-link';

export default class extends React.PureComponent {
  render() {
    return (
      <PageTransition
        defaultStyle={{
          transition: '500ms',
          height: '100vh',
          transform: 'translateY(100%)',
        }}
        transitionStyles={{
          entering: { transform: 'translateY(100%)' },
          entered: { transform: 'none' },
        }}
        transitionTime={500}
      >
        <g.Div
          backgroundColor="rgba(255, 255, 255, 0.8)"
          flex={1}
          padding="40px 30px"
          margin={20}
          display="flex"
          flexDirection="column"
          height="88%"
        >
          <div className="Nav">
            <Link to="/" className="NavLink NavLink--Nav">
              Home
            </Link>
            <Link to="/about" className="NavLink NavLink--Nav">
              About
            </Link>
            <Link to="/contact" className="NavLink  NavLink--Nav">
              Contact
            </Link>
            <Link to="/blog" className="NavLink NavLink--Nav">
              News
            </Link>
          </div>
        </g.Div>
      </PageTransition>
    );
  }
}
