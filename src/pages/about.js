import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';

import Logo from '../components/shared/icons/Logo';
import JTHeader from '../components/navigation/JTHeader';
import SubNav from '../components/navigation/subNav';
import { TRANSITION_TIME } from '../GLOBALS';

export default () => (
  <PageTransition
    defaultStyle={{
      transition: `${TRANSITION_TIME}ms`,
      height: '100vh',
      transform: 'translateX(100%)',
    }}
    transitionStyles={{
      entering: { transform: 'translateX(100%)' },
      entered: { transform: 'none' },
    }}
    transitionTime={TRANSITION_TIME}
  >
    <div className="Container">
      <SubNav navLinks={['Home', 'Contact', 'Projects', 'News']} />

      <div className="About__Img__Container " />
      <div className="About__Content ">
        <div className="About__Logo__Container">
          <Logo className="About__Logo" />
          <div className="Border__Bottom" />
        </div>
        <JTHeader className="Name" />
        {/* prettier-ignore */}
        <p className="Text">
          J.T. is known for his innovation and ability to create solutions. His designs, though rooted in tradition, mean nothing without a meaningful and emotional connection to his clients.
          <br />
          <br />
        </p>
        {/* prettier-ignore */}
        <p className="Text">
          His unique process fosters a relationship between client and designer
          which produces awe inspiring results. His background in construction opens pathways of communication often missed, bringing to life previously unrealized visions. A "playful spirit", J.T. prides himself on cultivating relationships with unique and one-of-a-kind artisans from around the world. Combine that with his adventurous nature and you can't help but create spaces of warmth, joy and honesty.
        </p>
      </div>
    </div>
  </PageTransition>
);
