import React from 'react';

import SocialButton from '../shared/SocialButton';
import backgroundImg from '../JTI WEBSITE Content/backgroundImg.jpg';

export default ({ children }) => (
  <div style={{ padding: 15, height: '100vh', backgroundImage: `url(${backgroundImg})` }}>
    <header>
      <SocialButton type="Google" />
      <SocialButton type="FaceBook" />
      <SocialButton type="Instagram" />
      <SocialButton type="Twitter" />
      <SocialButton type="Pinterest" />
    </header>
    <header />
    {children()}
    <footer />
  </div>
);

/*
Header social links

twitter ✅
email ✅
facebook ✅
instagram ✅
pinterest 

*/
