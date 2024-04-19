'use client';

import { usePathname } from 'next/navigation';
import AccountNav from '../components/pages/account/AccountNav';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="max-w-base mx-auto flex gap-5  lg:pt-24 lg:pb-56 lg:px-5">
      <AccountNav />
      <div
        className={`flex-1 min-h-[31rem] ${
          pathname === '/account/favorites'
            ? 'bg-brand-gray-100 lg:bg-white'
            : 'bg-white'
        } rounded-20 shadow-privacy px-5 pt-10 pb-12 lg:px-11 lg:pt-8 lg:pb-14`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
