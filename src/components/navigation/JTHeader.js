import React, { Fragment } from 'react';
import g from 'glamorous';

// import './navigation.css';

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
