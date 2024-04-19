'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LinksListOnMobile from './LinksListAppointmentsOnMobile';

interface Link {
  name: string;
  href: string;
}

const links: Link[] = [
  {
    name: 'Zoom call',
    href: '/account/appointments/zoom-call',
  },
  {
    name: 'Appointment in the shop',
    href: '/account/appointments/appointments-in-shop',
  },
];
const AppointmentsNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between sm:border-b border-brand-gray/50 pb-4">
      <ul className="hidden md:flex items-center text-sm lg:text-xs xl:text-sm">
        {links.map((link, idx) => (
          <li
            key={link.name}
            className={` ${
              idx === 1 ? 'w-56' : 'w-[7.5rem] lg:w-24 xl:w-[7.5rem]'
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

export default AppointmentsNav;
