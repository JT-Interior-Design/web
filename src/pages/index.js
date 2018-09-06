import React from 'react';
import Link from 'gatsby-link';
import img1 from '../JTI WEBSITE Content/Visual Design/20160414_164352.jpg';
import img2 from '../JTI WEBSITE Content/Visual Design/20160505_161529.jpg';
import img3 from '../JTI WEBSITE Content/Visual Design/20170705_090251.jpg';

import img5 from '../JTI WEBSITE Content/Visual Design/20161128_131912.jpg';
import Carousel from '../components/Carousel';

export default () => (
  <div style={{ display: 'flex' }}>
    <div style={{ flex: '0 1 50%', marginRight: 20 }}>
      <Link to="/">Hello world!</Link>
    </div>
    <div style={{ height: '95vh', flex: '0 1 50%' }}>
      <Carousel images={[img1, img2, img3, img5]} />
    </div>
  </div>
);
