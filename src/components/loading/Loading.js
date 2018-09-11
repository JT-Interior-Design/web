import React from 'react';

import LoadingSvg from './LoadingSvg';

import './loading.css';

const Loading = ({ className }) => (
  <div className={`${className}`}>
    <LoadingSvg />
  </div>
);

export default Loading;
