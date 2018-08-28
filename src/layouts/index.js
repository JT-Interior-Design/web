import React from 'react';

export default ({ children }) => (
  <div style={{ padding: '15px' }}>
    <header />
    {children()}
    <footer />
  </div>
);
