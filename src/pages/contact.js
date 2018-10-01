import React from 'react';
import g from 'glamorous';
import ContactSidebar from '../components/contact/ContactSidebar';
import ContactMain from '../components/contact/ContactMain';

export default class extends React.PureComponent {
  state = { selected: 0 };

  changeSelected = value => this.setState({ selected: value });

  render() {
    return (
      <g.Div
        backgroundColor="rgba(255, 255, 255, 0.8)"
        flex={1}
        padding="40px 30px"
        margin={20}
        display="flex"
        flexDirection="column"
      >
        <g.H1 marginTop={0}>Contact</g.H1>
        <g.Div display="flex" flex={1}>
          <ContactSidebar
            selected={this.state.selected}
            changeSelected={this.changeSelected}
          />
          <ContactMain selected={this.state.selected} />
        </g.Div>
      </g.Div>
    );
  }
}
