import React from 'react';
import g from 'glamorous';
import Input from './ContactFormInput';

const InputGroup = g.div({
  flexBasis: '50%',
  marginBottom: 20,
});

const Label = g.label({
  display: 'block',
  fontSize: 16,
});

export default () => (
  <g.Form>
    <g.Div display="flex" flexWrap="wrap" padding={20}>
      <InputGroup>
        <Label htmlFor="name">Name:</Label>
        <Input id="name" type="text" placeholder="Enter name" />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="Email">Email:</Label>
        <Input id="Email" type="text" placeholder="Enter email" />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="Telephone">Telephone:</Label>
        <Input id="Telephone" type="text" placeholder="Enter telephone" />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="Address">Address:</Label>
        <Input id="Address" type="text" placeholder="Enter address" />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="City">City:</Label>
        <Input id="City" type="text" placeholder="Enter city" />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="Postal Code">Postal Code:</Label>
        <Input id="Postal Code" type="text" placeholder="Enter postal code" />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="Region">Region:</Label>
        <Input id="Region" type="text" placeholder="Enter region" />
      </InputGroup>
    </g.Div>
  </g.Form>
);