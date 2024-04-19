import OrdersNav from '@/app/components/pages/account/orders/OrdersNav';
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="space-y-8 lg:space-y-11">
        <h1 className="text-2xl lg:text-40 font-bold text-center capitalize">
          My orders
        </h1>
        <OrdersNav />
      </div>
      <div>{children}</div>
    </>
  );
};

export default Layout;
