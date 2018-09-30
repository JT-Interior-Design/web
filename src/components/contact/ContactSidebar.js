import React from 'react';
import g from 'glamorous';

const NavButton = g.button({
  width: '100%',
  display: 'block',
  textAlign: 'left',
  padding: '0 10px',
  height: 60,
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s',
  marginBottom: 10,
  '&:hover': {
    backgroundColor: '#eee',
  },
  '&:focus': {
    outline: 'none',
  },
  '&:active': {
    outline: 'none',
  },
});

export default ({ selected, changeSelected }) => (
  <g.Div
    flexBasis={250}
    padding="20px 10px"
    borderRight="2px solid #dedede"
    position="relative"
  >
    <g.Span
      position="absolute"
      right="0"
      top="20px"
      width={10}
      height={60}
      backgroundColor="#9eca50"
      transition="all 0.3s"
      transform={`translateY(${selected * 70}px)`}
    />
    <NavButton onClick={() => changeSelected(0)}>Request a Callback</NavButton>
    <NavButton onClick={() => changeSelected(1)}>Contact Us Directly</NavButton>
  </g.Div>
);
