'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Link {
  name: string;
  path: string;
}

const links: Link[] = [
  {
    name: 'Dave’s Apparel',
    path: '/merchendize/apparel',
  },
  {
    name: 'Dave’s Products',
    path: '/merchendize/products',
  },
  {
    name: 'New arrivals',
    path: '/merchendize/arrivals',
  },
  {
    name: 'Books',
    path: '/merchendize/books',
  },
];

const MerchendizeNav = () => {
  const pathname = usePathname();

  return (
    <div className="h-9 lg:h-50 bg-brand-blue/10 px-5">
      <div className="h-full max-w-base mx-auto">
        <div className="h-full flex items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`h-full grid place-content-center text-xs lg:text-base px-2 lg:px-3 ${
                pathname === link.path ? 'bg-brand-blue/20' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchendizeNav;
