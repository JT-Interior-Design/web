import React from 'react';
import g from 'glamorous';

export default props => {
  const Border = g.span({
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: 2,
    bottom: 0,
    left: 0,
    backgroundColor: '#bdbdbd',

    '&::after': {
      position: 'absolute',
      content: '""',
      display: 'block',
      width: '100%',
      height: 4,
      bottom: 0,
      left: 0,
      backgroundColor: '#9eca50',
      transform: 'scale(0, 1)',
      transformOrigin: 'left',
      transition: 'all 0.5s',
    },
  });

  return (
    <g.Div
      position="relative"
      maxWidth={400}
      css={{
        '@media (max-width: 880px)': {
          maxWidth: '100%',
        },
      }}
    >
      <g.Input
        css={{
          width: '100%',
          display: 'block',
          padding: '5px 10px',
          border: 'none',
          backgroundColor: 'transparent',
          fontSize: 18,
          '&:focus': {
            outline: 'none',

            '& + .border::after': {
              transform: 'scale(1,1)',
            },
          },
          '&::placeholder': {
            color: '#999',
          },
        }}
        {...props}
      />
      <Border className="border" />
    </g.Div>
  );
};
