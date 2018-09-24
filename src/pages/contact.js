import React from 'react';
import g from 'glamorous';
import ContactSidebar from '../components/ContactSidebar';
import ContactMain from '../components/ContactMain';

export default () => (
  <g.Div
    backgroundColor="rgba(255, 255, 255, 0.7)"
    flex={1}
    padding="40px 30px"
    margin={20}
    display="flex"
    flexDirection="column"
  >
    <g.H1 marginTop={0}>Contact</g.H1>
    <g.Div display="flex" flex={1}>
      <ContactSidebar />
      <ContactMain />
    </g.Div>
  </g.Div>
);
