import React from 'react';
import g from 'glamorous';
import ContactForm from './ContactForm';
import ContactAddress from './ContactAddress';

export default () => (
  <g.Div padding={20} flex={1}>
    <ContactForm />
    <ContactAddress />
  </g.Div>
);
