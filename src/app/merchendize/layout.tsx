import React from 'react';
import MerchendizeNav from '../components/pages/merchendize/MerchendizeNav';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <MerchendizeNav />
      {children}
    </div>
  );
};

export default Layout;
