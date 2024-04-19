'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LinksListOnMobile from './LinksListOnMobile';

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
    <div className="flex items-center justify-between sm:border-b border-brand-gray/50 pb-4">
      <ul className="hidden sm:flex items-center gap-10 text-sm">
        {links.map((link) => (
          <li key={link.name}>
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
    </div>
  );
};

export default OrdersNav;
