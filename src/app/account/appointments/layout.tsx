'use client';

import AppointmentsNav from '@/app/components/pages/account/appointments/AppointmentsNav';
import { usePathname } from 'next/navigation';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-2xl lg:text-40 font-bold text-center capitalize">
          {pathname.endsWith('return-policy')
            ? 'Return policy'
            : 'Shiping info'}
        </h1>
        <AppointmentsNav />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
