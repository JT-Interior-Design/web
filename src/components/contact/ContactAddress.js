import React from 'react';
import g from 'glamorous';

export default () => (
  <g.Div padding={20}>
    <g.H2
      marginBottom={20}
      marginTop={0}
      textTransform="uppercase"
      letterSpacing={3}
    >
      Jason Taylor
    </g.H2>
    <g.P marginBottom={10}>jasontaylor@email.com</g.P>
    <g.P>123-456-7890</g.P>
    <g.H3>Office</g.H3>
    <g.Address>No. 123, ABC Street, City</g.Address>
  </g.Div>
);
