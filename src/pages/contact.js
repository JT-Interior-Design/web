import React from 'react';
import g from 'glamorous';
import PageTransition from 'gatsby-plugin-page-transitions';

import ContactSidebar from '../components/contact/ContactSidebar';
import ContactMain from '../components/contact/ContactMain';
import SubNav from '../components/navigation/subNav';

export default class extends React.PureComponent {
  state = { selected: 0 };

  changeSelected = value => this.setState({ selected: value });

  render() {
    return (
      <PageTransition
        defaultStyle={{
          transition: '750ms',
          height: 'calc(100vh - 50px)',
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
          height="95%"
          borderRadius={4}
          css={{
            '@media (max-width: 880px)': {
              padding: 20,
              paddingTop: 50,
              marginRight: 0,
              marginLeft: 0,
            },
          }}
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
