import React from 'react';
import g from 'glamorous';

export default () => (
  <g.Div padding={20}>
    <g.H2
      marginBottom={20}
      marginTop={0}
      textTransform="uppercase"
      letterSpacing={3}
      css={{
        '@media (max-width: 880px)': {
          fontSize: 24,
        },
        '& ~ p': {
          fontSize: 15,
        },
      }}
    >
      Jason Taylor
    </g.H2>
    <g.P marginBottom={10}>jtaylor@jasontaylorinteriors.com</g.P>
    <g.P>(917)882-0799</g.P>
    <g.H3>Office</g.H3>
    <g.Address>
      929 Landings Drive <br /> Chattanooga TN, 37402
    </g.Address>
  </g.Div>
);
