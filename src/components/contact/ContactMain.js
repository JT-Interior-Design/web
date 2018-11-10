import React from 'react';
import g from 'glamorous';
import ContactForm from './ContactForm';
import ContactAddress from './ContactAddress';

export default ({ selected }) => (
  <g.Div
    padding={20}
    flex={1}
    css={{
      '@media (max-width: 880px)': {
        width: '100%',
        padding: 0,
      },
    }}
  >
    <g.Div
      position="relative"
      overflow="hidden"
      height="100%"
      css={{
        '@media (max-width: 880px)': {
          overflowY: 'scroll',
        },
      }}
    >
      <g.Div
        position="absolute"
        top={0}
        left={0}
        height="100%"
        transition="all 0.5s ease-in-out"
        transform={`translateY(${selected ? '-100%' : '0'})`}
        css={{
          '@media (max-width: 880px)': {
            transform: 'none',
            position: 'static',
            height: 'auto',
          },
        }}
      >
        <ContactForm />
      </g.Div>
      <g.Div
        position="absolute"
        top={0}
        left={0}
        height="100%"
        transition="all 0.5s ease-in-out"
        transform={`translateY(${selected ? '0' : '100%'})`}
        css={{
          '@media (max-width: 880px)': {
            position: 'static',
            transform: 'none',
            height: 'auto',
          },
        }}
      >
        <ContactAddress />
      </g.Div>
    </g.Div>
  </g.Div>
);
