'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useDropdown from '@/app/hooks/useDropdown';
import Link from 'next/link';

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

const LinksListAppointmentsOnMobile = () => {
  const [selected, setSelected] = useState<string>(links[0].name);
  const { isOpen, handleToggleDropdown, dropdownRef } = useDropdown();

  return (
    <div className="md:hidden h-full w-80 mx-auto relative" ref={dropdownRef}>
      <button
        className="w-full h-11 flex items-center justify-between gap-4 border border-brand-dark rounded-md px-4 lg:px-8"
        onClick={handleToggleDropdown}
      >
        {selected}
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={` ${
            isOpen ? 'rotate-180' : 'rotate-0'
          } transition-all duration-200`}
        >
          <path
            d="M2.04469 7.30869C2.2791 7.07436 2.59699 6.94271 2.92844 6.94271C3.2599 6.94271 3.57778 7.07436 3.81219 7.30869L9.99969 13.4962L16.1872 7.30869C16.4229 7.081 16.7387 6.955 17.0664 6.95785C17.3942 6.9607 17.7077 7.09216 17.9395 7.32392C18.1712 7.55568 18.3027 7.8692 18.3055 8.19694C18.3084 8.52469 18.1824 8.84044 17.9547 9.07619L10.8834 16.1474C10.649 16.3818 10.3311 16.5134 9.99969 16.5134C9.66824 16.5134 9.35035 16.3818 9.11594 16.1474L2.04469 9.07619C1.81036 8.84178 1.67871 8.5239 1.67871 8.19244C1.67871 7.86099 1.81036 7.5431 2.04469 7.30869Z"
            fill="#232323"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full absolute right-0 z-20 bg-white rounded-10 shadow-review overflow-hidden mt-3.5"
          >
            <ul>
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    className={`flex items-center gap-1 hover:bg-brand-blue/5 cursor-pointer transition-all duration-200 py-1.5 ${
                      selected !== link.name ? 'pl-8' : 'pl-2'
                    }`}
                    onClick={() => {
                      setSelected(link.name);
                      handleToggleDropdown();
                    }}
                    href={link.href}
                  >
                    {selected === link.name && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49996 13.4749L4.60829 10.5833C4.45248 10.4275 4.24115 10.3399 4.02079 10.3399C3.80044 10.3399 3.58911 10.4275 3.43329 10.5833C3.27748 10.7391 3.18994 10.9504 3.18994 11.1708C3.18994 11.2799 3.21143 11.3879 3.25319 11.4887C3.29494 11.5895 3.35614 11.6811 3.43329 11.7583L6.91663 15.2416C7.24163 15.5666 7.76663 15.5666 8.09163 15.2416L16.9083 6.42494C17.0641 6.26913 17.1516 6.0578 17.1516 5.83744C17.1516 5.61709 17.0641 5.40576 16.9083 5.24994C16.7525 5.09413 16.5411 5.00659 16.3208 5.00659C16.1004 5.00659 15.8891 5.09413 15.7333 5.24994L7.49996 13.4749Z"
                          fill="#232323"
                        />
                      </svg>
                    )}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LinksListAppointmentsOnMobile;
