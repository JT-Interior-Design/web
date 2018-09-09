import React from 'react';

import SvgButton from '../components/shared/SvgButton';
import './index.css';

export default ({ children }) => (
  <div className="Background_Wrapper">
    <header className="Social_Wrapper">
      {/* <SvgButton type="Email" to="https://www.google.com/" /> */}
      <SvgButton
        className="Social_Button"
        type="FaceBook"
        to="https://www.facebook.com/pg/stagstudiodesign/"
      />
      <SvgButton
        className="Social_Button"
        type="Instagram"
        to="https://www.instagram.com/jasontaylorinteriors/"
      />
      <SvgButton
        className="Social_Button"
        type="Twitter"
        to="https://twitter.com/search?f=tweets&q=DesignsStag"
      />
      <SvgButton
        className="Social_Button"
        type="Pinterest"
        to="https://www.pinterest.com/stagstudiodesigns/"
      />
    </header>
    {children()}
    <footer />
  </div>
);
