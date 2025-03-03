import React from 'react';
import { SanityLive } from './SanityLive';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Render the children (i.e., the content of your pages) */}
      {children}
      {/* Render the SanityLive component for live data fetching/updating */}
      <SanityLive />
    </div>
  );
};

export default Layout;