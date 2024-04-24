'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import AvailabilityDropdown from '@/app/components/pages/merchendize/AvailabilityDropdown';
import OtherFilterOnMobile from '@/app/components/pages/merchendize/OtherFilterOnMobile';
import PriceDropdown from '@/app/components/pages/merchendize/PriceDropdown';
import SizeDropdown from '@/app/components/pages/merchendize/SizeDropdown';
import SortList from '@/app/components/pages/merchendize/SortList';
import TShirt from '@/app/components/shared/TShirt';
import Pagination from '@/app/components/pages/merchendize/Pagination';

const Page = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const handleToggleFilter = () => {
    setIsFilterOpen((open) => !open);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <>
      <section className="pt-6 md:pt-10 pb-20 sm:pb-28 md:pb-36 lg:pb-72">
        <div className="max-w-base mx-auto space-y-5 lg:space-y-10 px-5">
          <h1 className="text-[1.9375rem] sm:text-5xl md:text-6xl lg:text-70 font-bold leading-[117%] sm:leading-none lg:leading-[117%]">
            Welcome to Dave’s shop
          </h1>
          <div className="flex items-center justify-between text-15 lg:text-17">
            <button className="lg:hidden" onClick={handleToggleFilter}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_210_13841)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13 9.9999C13 10.5303 12.7893 11.039 12.4142 11.4141C12.0391 11.7892 11.5304 11.9999 11 11.9999C10.4696 11.9999 9.96086 11.7892 9.58579 11.4141C9.21071 11.039 9 10.5303 9 9.9999C9 9.46946 9.21071 8.96076 9.58579 8.58568C9.96086 8.21061 10.4696 7.9999 11 7.9999C11.5304 7.9999 12.0391 8.21061 12.4142 8.58568C12.7893 8.96076 13 9.46946 13 9.9999ZM14.874 10.9999C14.6516 11.8581 14.1504 12.6182 13.4493 13.1608C12.7481 13.7034 11.8866 13.9978 11 13.9978C10.1134 13.9978 9.2519 13.7034 8.55074 13.1608C7.84957 12.6182 7.34844 11.8581 7.126 10.9999H5C4.73478 10.9999 4.48043 10.8945 4.29289 10.707C4.10536 10.5195 4 10.2651 4 9.9999C4 9.73468 4.10536 9.48033 4.29289 9.29279C4.48043 9.10525 4.73478 8.9999 5 8.9999H7.126C7.34844 8.14166 7.84957 7.38158 8.55074 6.83897C9.2519 6.29636 10.1134 6.00195 11 6.00195C11.8866 6.00195 12.7481 6.29636 13.4493 6.83897C14.1504 7.38158 14.6516 8.14166 14.874 8.9999H25C25.2652 8.9999 25.5196 9.10525 25.7071 9.29279C25.8946 9.48033 26 9.73468 26 9.9999C26 10.2651 25.8946 10.5195 25.7071 10.707C25.5196 10.8945 25.2652 10.9999 25 10.9999H14.874ZM22.874 18.9999C22.6516 18.1417 22.1504 17.3816 21.4493 16.839C20.7481 16.2964 19.8866 16.002 19 16.002C18.1134 16.002 17.2519 16.2964 16.5507 16.839C15.8496 17.3816 15.3484 18.1417 15.126 18.9999H5C4.73478 18.9999 4.48043 19.1053 4.29289 19.2928C4.10536 19.4803 4 19.7347 4 19.9999C4 20.2651 4.10536 20.5195 4.29289 20.707C4.48043 20.8945 4.73478 20.9999 5 20.9999H15.126C15.3484 21.8581 15.8496 22.6182 16.5507 23.1608C17.2519 23.7034 18.1134 23.9978 19 23.9978C19.8866 23.9978 20.7481 23.7034 21.4493 23.1608C22.1504 22.6182 22.6516 21.8581 22.874 20.9999H25C25.2652 20.9999 25.5196 20.8945 25.7071 20.707C25.8946 20.5195 26 20.2651 26 19.9999C26 19.7347 25.8946 19.4803 25.7071 19.2928C25.5196 19.1053 25.2652 18.9999 25 18.9999H22.874ZM21 19.9999C21 20.5303 20.7893 21.039 20.4142 21.4141C20.0391 21.7892 19.5304 21.9999 19 21.9999C18.4696 21.9999 17.9609 21.7892 17.5858 21.4141C17.2107 21.039 17 20.5303 17 19.9999C17 19.4695 17.2107 18.9608 17.5858 18.5857C17.9609 18.2106 18.4696 17.9999 19 17.9999C19.5304 17.9999 20.0391 18.2106 20.4142 18.5857C20.7893 18.9608 21 19.4695 21 19.9999Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_210_13841">
                    <rect
                      width="22"
                      height="18"
                      fill="white"
                      transform="translate(4 6)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <OtherFilterOnMobile
              isFilterOpen={isFilterOpen}
              handleToggleFilter={handleToggleFilter}
            />
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[70] bg-black/50"
                  onClick={handleToggleFilter}
                ></motion.div>
              )}
            </AnimatePresence>

            <div className="max-w-2xl w-full hidden lg:flex items-center justify-between lg:pr-6">
              <div className="w-full grid grid-cols-3 divide-x-2 divide-brand-gray bg-white rounded-10 py-2.5">
                <AvailabilityDropdown />
                <PriceDropdown />
                <SizeDropdown />
              </div>
            </div>
            <SortList />
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
            {Array.from({ length: 12 }).map((_, idx) => (
              <TShirt key={idx} />
            ))}
          </div>

          <Pagination />
        </div>
      </section>
    </>
  );
};

export default Page;
