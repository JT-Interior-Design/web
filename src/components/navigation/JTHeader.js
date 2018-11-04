import React from 'react';
import g from 'glamorous';

export default ({ className }) => (
  <div>
    <div className={`${className}`}>
      <g.H1
        fontFamily={'"PT Serif", serif'}
        marginTop={0}
        fontSize={43}
        marginBottom={6}
      >
        JASON TAYLOR
      </g.H1>
    </div>
    <p>INTERIORS</p>
  </div>
);
