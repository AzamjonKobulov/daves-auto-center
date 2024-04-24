import React from 'react';

const MenWomenDropdown = () => {
  return (
    <div className="w-40 sm:w-80 md:w-96 lg:w-[29.375rem] grid sm:grid-cols-2 gap-5 sm:gap-7 lg:gap-10 bg-white text-sm sm:text-base md:text-lg lg:text-xl py-5 sm:py-[1.875rem] rounded-10 sm:rounded-20 shadow-privacy px-5 sm:px-6 lg:px-10">
      <div className="space-y-3.5">
        <p className="font-bold text-brand-dark border-b border-brand-gray pb-3.5">
          Men
        </p>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-brand-blue-1 hover:font-semibold">
              T-shirts
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-blue-1 hover:font-semibold">
              Polo
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-blue-1 hover:font-semibold">
              hoodies
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-blue-1 hover:font-semibold">
              hats
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-blue-1 hover:font-semibold">
              Pants
            </a>
          </li>
        </ul>
      </div>
      <div className="space-y-3.5">
        <p className="font-bold text-brand-dark border-b border-brand-gray pb-3.5">
          Women
        </p>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-brand-blue-1 hover:font-semibold">
              T-shirts
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-blue-1 hover:font-semibold">
              Polo
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-blue-1 hover:font-semibold">
              hoodies
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-blue-1 hover:font-semibold">
              hats
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-blue-1 hover:font-semibold">
              Pants
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenWomenDropdown;
