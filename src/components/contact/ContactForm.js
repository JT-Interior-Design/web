import React from 'react';
import g from 'glamorous';
import createCosmic from 'cosmicjs';

import Input from './ContactFormInput';
import ContactFormTextArea from './ContactFormTextArea';

const InputGroup = g.div({
  flexBasis: '50%',
  marginBottom: 20,
  '&:nth-child(odd)': {
    paddingRight: 10,
  },
  '@media (max-width: 880px)': {
    flexBasis: '100%',
    padding: 0,
  },
});

const Label = g.label({
  display: 'block',
  fontSize: 16,
});

const initState = {
  name: '',
  email: '',
  telephone: '',
  address: '',
  city: '',
  postal_code: '',
  message: '',
};

export default class ContactForm extends React.Component {
  state = initState;

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const params = {
  //     title: this.state.name,
  //     content: this.state.message,
  //     type_slug: 'contact-submissions',
  //     metafields: Object.keys(this.state).map(key => ({
  //       key,
  //       type: 'text',
  //       value: this.state[key],
  //     })),
  //     options: {
  //       slug_field: false,
  //     },
  //   };
  //   const Cosmic = createCosmic();
  //   const bucket = Cosmic.bucket({
  //     slug: 'jt-interior-design',
  //   });

  //   bucket
  //     .addObject(params)
  //     .then(data => {
  //       this.setState(initState);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       this.setState(initState);
  //     });
  // };

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => console.log('sent'))
      .catch(error => alert(error));
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="Contact"
      >
        <input type="hidden" name="form-name" value="contact" />
        <g.Div display="flex" flexWrap="wrap" padding={20}>
          <InputGroup>
            <Label htmlFor="name">Name:</Label>
            <Input
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              placeholder="Enter name"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="Email">Email:</Label>
            <Input
              id="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
              placeholder="Enter email"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="Telephone">Telephone:</Label>
            <Input
              id="Telephone"
              name="telephone"
              value={this.state.telephone}
              onChange={this.handleChange}
              type="number"
              placeholder="Enter telephone"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="Address">Address:</Label>
            <Input
              id="Address"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              type="text"
              placeholder="Enter address"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="City">City:</Label>
            <Input
              id="City"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
              type="text"
              placeholder="Enter city"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="Postal Code">Postal Code:</Label>
            <Input
              id="Postal Code"
              value={this.state.postal_code}
              onChange={this.handleChange}
              name="postal_code"
              type="text"
              placeholder="Enter postal code"
            />
          </InputGroup>
          <g.Div width="100%" marginBottom={20}>
            <Label>Message(Optional): </Label>
            <ContactFormTextArea
              placeholder="Enter message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </g.Div>
          <g.Div width="100%">
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
              Submit
            </g.Button>
          </g.Div>
        </g.Div>
      </form>
    );
  }
}
