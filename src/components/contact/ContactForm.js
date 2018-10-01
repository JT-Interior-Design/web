import React from 'react';
import g from 'glamorous';
import Input from './ContactFormInput';
import ContactFormTextArea from './ContactFormTextArea';

const InputGroup = g.div({
  flexBasis: '50%',
  marginBottom: 20,
  '&:nth-child(odd)': {
    paddingRight: 10,
  },
});

const Label = g.label({
  display: 'block',
  fontSize: 16,
});

const phoneNumberFormatter = n => {
  console.log(n);
  // const num = n.replace(/[^0-9]/g, '');
  // if (num.length >= 8) {
  //   return `(${num.substr(0, 3)}) ${num.substr(3, 3)}-${num.substr(6)}`;
  // }
  // if (num.length >= 3 && num.length < 8) {
  //   return `${num.substr(0, 3)}-${num.substr(3)}`;
  // }
  // return num;
};

// const handleInput = i => {
//   console.log(i);
//   const input = phoneNumberFormatter(i);
// };

// class ContactForm extends React {
//   render() {
//     return (
//       <g.Form>
//         <g.Div display="flex" flexWrap="wrap" padding={20}>
//           <InputGroup>
//             <Label htmlFor="name">Name:</Label>
//             <Input id="name" type="text" placeholder="Enter name" />
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor="Email">Email:</Label>
//             <Input id="Email" type="text" placeholder="Enter email" />
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor="Telephone">Telephone:</Label>
//             <Input
//               onChange={e => phoneNumberFormatter(e)}
//               id="Telephone"
//               type="number"
//               placeholder="Enter telephone"
//             />
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor="Address">Address:</Label>
//             <Input id="Address" type="text" placeholder="Enter address" />
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor="City">City:</Label>
//             <Input id="City" type="text" placeholder="Enter city" />
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor="Postal Code">Postal Code:</Label>
//             <Input
//               id="Postal Code"
//               type="text"
//               placeholder="Enter postal code"
//             />
//           </InputGroup>
//           <g.Div width="100%">
//             <Label>Message(Optional): </Label>
//             <ContactFormTextArea placeholder="Enter message" />
//           </g.Div>
//         </g.Div>
//       </g.Form>
//     );
//   }
// }

// export default ContactForm;

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
        <Input id="Telephone" type="number" placeholder="Enter telephone" />
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
      <g.Div width="100%">
        <Label>Message(Optional): </Label>
        <ContactFormTextArea placeholder="Enter message" />
      </g.Div>
    </g.Div>
  </g.Form>
);
