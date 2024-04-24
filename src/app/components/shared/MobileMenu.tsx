import Link from 'next/link';
import Image from 'next/image';
import LinksAccordions from './LinksAccordions';
import React from 'react';
import { useMobileMenu } from '@/app/contexts/MobileMenuContext';
import Socials from './Socials';

const MobileMenu = () => {
  const { isOpen, handleToggleMobMenu } = useMobileMenu();
  return (
    <div
      className={`lg:hidden fixed inset-0 z-[80] w-full min-h-screen overflow-auto bg-brand-blue-1 transition-all duration-200 pb-20 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="w-full relative top-0 space-y-10 pt-5 pb-20">
        <div className="sticky top-0 z-10 w-full bg-brand-blue-1 py-2">
          <Link href="/">
            <Image
              src="/assets/images/img-logo-mobile-menu.svg"
              alt="Logo"
              width={250}
              height={52}
              className="w-[15.625rem] h-[3.25rem] mx-auto"
            />
          </Link>
          <button
            className="absolute -top-1 sm:top-0 right-5"
            onClick={handleToggleMobMenu}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 24L25 4M5 4L25 24"
                stroke="#FFFC00"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <LinksAccordions />
      </div>

      <div className="relative z-10 flex items-center justify-center bg-brand-blue-1 py-3">
        <Socials />
      </div>
    </div>
  );
};

export default MobileMenu;
