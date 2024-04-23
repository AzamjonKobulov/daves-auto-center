'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Link from 'next/link';
import Image from 'next/image';

import Socials from '../shared/Socials';
import MobileMenu from '../shared/MobileMenu';
import { useMobileMenu } from '@/app/contexts/MobileMenuContext';
import ChatButton from '../shared/ChatButton';
import Menu from '../shared/Menu';
import { usePathname } from 'next/navigation';
import { useAccount } from '@/app/contexts/AccountContext';
import Cart from '../shared/Cart';

const Navbar = () => {
  const { handleToggleMobMenu } = useMobileMenu();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const { setIsNavMobileOpen, handleToggleNavMobile } = useAccount();

  const pathname = usePathname();

  const handleToggleMenu = () => {
    setIsMenuOpen((open) => !open);
    document.body.classList.toggle('overflow-hidden');
  };

  const handleToggleCart = () => {
    setIsCartOpen((open) => !open);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <header className="sticky top-0 z-50 lg:h-100 bg-brand-blue text-white">
      <AnimatePresence>
        {isMenuOpen && <Menu onToggleMenu={handleToggleMenu} />}
        {isCartOpen && <Cart onToggleCart={handleToggleCart} />}
      </AnimatePresence>
      <MobileMenu />
      <ChatButton />
      <nav className="max-w-base mx-auto flex items-center justify-between py-2 lg:py-4 px-5">
        {/* Logo & Socials */}
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/images/logo.svg"
              alt="Logo"
              className="w-[10.375rem] h-8 sm:w-56 sm:h-12 lg:w-80 lg:h-16 xl:w-auto xl:h-auto"
              width={388}
              height={63}
            />
          </Link>
          {/* Socials */}
          <div className="flex items-center gap-5">
            <div className="hidden lg:block">
              <Socials />
            </div>
            <p className="text-17 hidden xl:block">
              Total followers: 1.300.000
            </p>
          </div>
        </div>

        {/* Cart & My Account */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Menu Button */}
          <button className="hidden lg:block" onClick={handleToggleMenu}>
            {isMenuOpen ? (
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 30L30 10"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M10 10L30 30"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            ) : (
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 sm:w-auto sm:h-auto"
              >
                <path
                  d="M6.66669 12H33.3334M6.66669 20H33.3334M6.66669 28H33.3334"
                  stroke="white"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
          {/* Cart */}
          <button onClick={handleToggleCart}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sm:w-auto sm:h-auto"
            >
              <path
                d="M21.25 22.5C19.8625 22.5 18.75 23.6125 18.75 25C18.75 25.663 19.0134 26.2989 19.4822 26.7678C19.9511 27.2366 20.587 27.5 21.25 27.5C21.913 27.5 22.5489 27.2366 23.0178 26.7678C23.4866 26.2989 23.75 25.663 23.75 25C23.75 24.337 23.4866 23.7011 23.0178 23.2322C22.5489 22.7634 21.913 22.5 21.25 22.5ZM1.25 2.5V5H3.75L8.25 14.4875L6.55 17.55C6.3625 17.9 6.25 18.3125 6.25 18.75C6.25 19.413 6.51339 20.0489 6.98223 20.5178C7.45107 20.9866 8.08696 21.25 8.75 21.25H23.75V18.75H9.275C9.19212 18.75 9.11263 18.7171 9.05403 18.6585C8.99542 18.5999 8.9625 18.5204 8.9625 18.4375C8.9625 18.375 8.975 18.325 9 18.2875L10.125 16.25H19.4375C20.375 16.25 21.2 15.725 21.625 14.9625L26.1 6.875C26.1875 6.675 26.25 6.4625 26.25 6.25C26.25 5.91848 26.1183 5.60054 25.8839 5.36612C25.6495 5.1317 25.3315 5 25 5H6.5125L5.3375 2.5M8.75 22.5C7.3625 22.5 6.25 23.6125 6.25 25C6.25 25.663 6.51339 26.2989 6.98223 26.7678C7.45107 27.2366 8.08696 27.5 8.75 27.5C9.41304 27.5 10.0489 27.2366 10.5178 26.7678C10.9866 26.2989 11.25 25.663 11.25 25C11.25 24.337 10.9866 23.7011 10.5178 23.2322C10.0489 22.7634 9.41304 22.5 8.75 22.5Z"
                fill="white"
              />
            </svg>
          </button>
          {/* My Account */}
          {pathname.startsWith(
            '/account' ||
              '/account/orders' ||
              '/account/appointments' ||
              '/account/policy' ||
              '/account/favorites' ||
              '/account/addresses'
          ) ? (
            <button onClick={handleToggleNavMobile}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-8 sm:h-8 lg:hidden"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7ZM8 13C6.67392 13 5.40215 13.5268 4.46447 14.4645C3.52678 15.4021 3 16.6739 3 18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21H18C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 16.6739 20.4732 15.4021 19.5355 14.4645C18.5979 13.5268 17.3261 13 16 13H8Z"
                  fill="white"
                />
              </svg>
            </button>
          ) : (
            <Link
              href="/account"
              className="lg:h-11 lg:hidden grid place-content-center lg:bg-white lg:text-black border border-transparent lg:rounded-md hover:bg-transparent lg:hover:text-white lg:hover:border-white transition-all duration-200 lg:px-8"
            >
              <span className="hidden lg:block">My account</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-8 sm:h-8 lg:hidden"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7ZM8 13C6.67392 13 5.40215 13.5268 4.46447 14.4645C3.52678 15.4021 3 16.6739 3 18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21H18C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 16.6739 20.4732 15.4021 19.5355 14.4645C18.5979 13.5268 17.3261 13 16 13H8Z"
                  fill="white"
                />
              </svg>
            </Link>
          )}
          <Link
            href="/account"
            className="lg:h-11 hidden lg:grid place-content-center lg:bg-white lg:text-black border border-transparent lg:rounded-md hover:bg-transparent lg:hover:text-white lg:hover:border-white transition-all duration-200 lg:px-8"
          >
            <span className="hidden lg:block">My account</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-8 sm:h-8 lg:hidden"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7ZM8 13C6.67392 13 5.40215 13.5268 4.46447 14.4645C3.52678 15.4021 3 16.6739 3 18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21H18C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 16.6739 20.4732 15.4021 19.5355 14.4645C18.5979 13.5268 17.3261 13 16 13H8Z"
                fill="white"
              />
            </svg>
          </Link>
          {/* Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => {
              handleToggleMobMenu();
              setIsNavMobileOpen(false);
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 sm:w-auto sm:h-auto"
            >
              <path
                d="M6.66669 12H33.3334M6.66669 20H33.3334M6.66669 28H33.3334"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
