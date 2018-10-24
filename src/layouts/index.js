import React from 'react';
import SvgButton from '../components/shared/SvgButton';

import './index.css';

export default ({ children }) => (
  <div className="Background__Wrapper">
    <header className="Social__Wrapper">
      <SvgButton
        className="Social__Button"
        type="FaceBook"
        to="https://www.facebook.com/pg/stagstudiodesign/"
      />
      <SvgButton
        className="Social__Button"
        type="Instagram"
        to="https://www.instagram.com/jasontaylorinteriors/"
      />
      <SvgButton
        className="Social__Button"
        type="Twitter"
        to="https://twitter.com/search?f=tweets&q=DesignsStag"
      />
      <SvgButton
        className="Social__Button"
        type="Pinterest"
        to="https://www.pinterest.com/stagstudiodesigns/"
      />
    </header>

    {children()}
    <footer />
  </div>
);
