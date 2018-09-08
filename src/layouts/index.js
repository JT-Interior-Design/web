import React from 'react';

import SvgButton from '../shared/SvgButton';
import './index.css';

export default ({ children }) => (
  <div className="Background-Wrapper">
    <header className="Social-Wrapper">
      {/* <SvgButton type="Email" to="https://www.google.com/" /> */}
      <SvgButton
        className="Social-Button"
        type="FaceBook"
        to="https://www.facebook.com/pg/stagstudiodesign/"
      />
      <SvgButton
        className="Social-Button"
        type="Instagram"
        to="https://www.instagram.com/jasontaylorinteriors/"
      />
      <SvgButton
        className="Social-Button"
        type="Twitter"
        to="https://twitter.com/search?f=tweets&q=DesignsStag"
      />
      <SvgButton
        className="Social-Button"
        type="Pinterest"
        to="https://www.pinterest.com/stagstudiodesigns/"
      />
    </header>
    <header />
    {children()}
    <footer />
  </div>
);
