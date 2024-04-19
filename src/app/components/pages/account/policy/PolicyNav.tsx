'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LinksListOnMobile from './LinksListPolicyOnMobile';

interface Link {
  name: string;
  href: string;
}

const links: Link[] = [
  {
    name: 'Shipping info',
    href: '/account/policy/shipping-info',
  },
  {
    name: 'Return policy',
    href: '/account/policy/return-policy',
  },
];

const PolicyNav = () => {
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
    </div>
  );
};

export default PolicyNav;
