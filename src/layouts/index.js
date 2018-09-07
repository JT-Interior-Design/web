import React from 'react';

import SocialButton from '../shared/SocialButton';
import './index.css';

export default ({ children }) => (
  <div className="Background-Wrapper">
    <header className="Social-Wrapper">
      {/* <SocialButton type="Email" to="https://www.google.com/" /> */}
      <SocialButton type="FaceBook" to="https://www.facebook.com/pg/stagstudiodesign/" />
      <SocialButton
        type="Instagram"
        to="https://www.instagram.com/jasontaylorinteriors/"
      />
      <SocialButton
        type="Twitter"
        to="https://twitter.com/search?f=tweets&q=DesignsStag"
      />
      <SocialButton type="Pinterest" to="https://www.pinterest.com/stagstudiodesigns/" />
    </header>
    <header />
    {children()}
    <footer />
  </div>
);

/*
TODO:
Header social links
twitter ✅
email ✅
facebook ✅
instagram ✅
pinterest ✅
*/
