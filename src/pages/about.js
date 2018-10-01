import React from 'react';

import SvgButton from '../components/shared/SvgButton';
import JTHeader from '../components/navigation/JTHeader';

export default () => (
  <div className="Container Container--Rel">
    <div className="About__Img__Container " />
    <div className="About__Content ">
      <div className="About__Logo__Container">
        <SvgButton className="About__Logo" type="Logo" to="/" />
        <div className="Border__Bottom" />
      </div>
      <JTHeader className="Name" />

      <p className="Text">
        J.T. is known for his innovation and ability to create solutions. His
        designs, though rooted in tradition, mean nothing without a meaningful
        and emotional connection to his clients.
        <br />
        <br />
      </p>
      <p className="Text">
        His unique process fosters a relationship between client and designer
        which produces awe inspiring results. His background in construction
        opens pathways of communication often missed, bringing to life
        previously unrealized visions. A "playful spirt", J.T. prides himself on
        cultivating relationships with unique and one-of-a-kind artisans from
        around the world. Combine that with his adventurous nature and you can't
        help but create spaces of warmth, joy and honesty.
      </p>
    </div>
  </div>
);
