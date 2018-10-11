import React from 'react';
import g from 'glamorous';
import PageTransition from 'gatsby-plugin-page-transitions';
import Link from 'gatsby-link';

import ContactSidebar from '../components/contact/ContactSidebar';
import ContactMain from '../components/contact/ContactMain';

export default class extends React.PureComponent {
  state = { selected: 0 };

  changeSelected = value => this.setState({ selected: value });

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
          entered: { transform: 'translate(0%)' },
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
          <div className="Nav Nav--contact">
            <Link to="/" className="NavLink NavLink--Nav">
              Home
            </Link>
            <Link to="/about" className="NavLink NavLink--Nav">
              About
            </Link>
            <Link to="/projects" className="NavLink  NavLink--Nav">
              Projects
            </Link>
            <Link to="/blog" className="NavLink NavLink--Nav">
              News
            </Link>
          </div>
          <g.H1 marginTop={0}>Contact</g.H1>
          <g.Div display="flex" flex={1}>
            <ContactSidebar
              selected={this.state.selected}
              changeSelected={this.changeSelected}
            />
            <ContactMain selected={this.state.selected} />
          </g.Div>
        </g.Div>
      </PageTransition>
    );
  }
}
