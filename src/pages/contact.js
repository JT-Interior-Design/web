import React from 'react';
import g from 'glamorous';
import PageTransition from 'gatsby-plugin-page-transitions';

import ContactSidebar from '../components/contact/ContactSidebar';
import ContactMain from '../components/contact/ContactMain';
import SubNav from '../components/navigation/subNav';
import TRANSITION_TIME from '../GLOBALS';

export default class extends React.PureComponent {
  state = { selected: 0 };

  changeSelected = value => this.setState({ selected: value });

  render() {
    return (
      <PageTransition
        defaultStyle={{
          transition: '750ms',
          height: '100vh',
          transform: 'translateY(100%)',
        }}
        transitionStyles={{
          entering: { transform: 'translateY(100%)' },
          entered: { transform: 'none' },
        }}
        transitionTime={750}
      >
        <g.Div
          backgroundColor="rgba(255, 255, 255, 0.8)"
          flex={1}
          padding="40px 30px"
          margin={20}
          display="flex"
          flexDirection="column"
          height="88%"
          borderRadius={4}
        >
          <SubNav navLinks={['Home', 'Projects', 'About', 'News']} />

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
