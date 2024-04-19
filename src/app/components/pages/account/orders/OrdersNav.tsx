'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LinksListOnMobile from '../orders/LinksListOnMobile';

interface Link {
  name: string;
  href: string;
}

const links: Link[] = [
  {
    name: 'All orders',
    href: '/account/orders/all',
  },
  {
    name: 'Unpaid',
    href: '/account/orders/unpaid',
  },
  {
    name: 'Processing',
    href: '/account/orders/processing',
  },
  {
    name: 'Shipped',
    href: '/account/orders/shipped',
  },
  {
    name: 'Review',
    href: '/account/orders/reviews',
  },
];

const OrdersNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between sm:border-b border-brand-gray/50 pb-4">
      <ul className="hidden md:flex items-center text-sm lg:text-xs xl:text-sm">
        {links.map((link, idx) => (
          <li
            key={link.name}
            className={`w-[7.5rem] lg:w-24 xl:w-[7.5rem] ${
              idx === 3 || idx === 4 ? 'pl-7 lg:pl-5 xl:pl-7' : ''
            }`}
          >
            <Link
              href={link.href}
              className={pathname === link.href ? 'font-bold' : ''}
            >{`${
              link.href === '/account/orders/unpaid' ||
              link.href === '/account/orders/processing' ||
              link.href === '/account/orders/shipped'
                ? `${link.name} (${'0'})`
                : link.name
            }`}</Link>
          </li>
        ))}
      </ul>
      <LinksListOnMobile />
      <button className="text-sm lg:text-xs xl:text-sm text-brand-gray/50">
        Delete history
      </button>
    </div>
  );
};

export default OrdersNav;
