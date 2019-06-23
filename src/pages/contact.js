import React from 'react';
import g from 'glamorous';
import PageTransition from 'gatsby-plugin-page-transitions';

import ContactSidebar from '../components/contact/ContactSidebar';
import ContactMain from '../components/contact/ContactMain';
import SubNav from '../components/navigation/subNav';

import '../components/contact/contact.css';

export default class extends React.PureComponent {
  state = { selected: 0, openModal: false };

  changeSelected = value => this.setState({ selected: value });

  displayModal = () => {
    this.setState({ openModal: true });
  };

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
        {this.state.openModal ? (
          <div className="contact-modal">
            <div className="contact-modal__box">
              <p className="contact-modal__text">
                Thanks for reaching out we will get back to you soon!
              </p>
              <g.Button
                type="submit"
                border="none"
                border="1px solid #9eca50"
                color="white"
                backgroundColor="#9eca50"
                padding="10px 30px"
                textTransform="uppercase"
                borderRadius={4}
                fontSize={16}
                letterSpacing={3}
                fontFamily="PT Serif"
                cursor="pointer"
                onClick={() =>
                  this.setState({ openModal: !this.state.openModal })
                }
                css={{
                  '&:hover': {
                    backgroundColor: '#fff',
                    color: '#9eca50',
                  },
                  '&:focus': {
                    outline: 'none',
                  },
                  '&:active': {
                    outline: 'none',
                  },
                }}
              >
                Return
              </g.Button>
            </div>
          </div>
        ) : null}
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
              height: 'auto',
              minHeight: '95%',
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
            <ContactMain
              selected={this.state.selected}
              displayModal={this.displayModal}
            />
          </g.Div>
        </g.Div>
      </PageTransition>
    );
  }
}
