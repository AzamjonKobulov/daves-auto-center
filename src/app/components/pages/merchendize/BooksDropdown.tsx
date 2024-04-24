import React from 'react';

const BooksDropdown = () => {
  return (
    <div className="w-40 sm:w-60 lg:w-72 bg-white text-sm sm:text-base md:text-lg lg:text-xl py-[1.875rem] rounded-10 sm:rounded-20 shadow-privacy px-5 sm:px-6 lg:px-10">
      <div className="space-y-3.5">
        <p className="font-bold text-brand-dark border-b border-brand-gray pb-3.5">
          Dave’s products
        </p>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-brand-blue-1 hover:font-semibold">
              Book
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BooksDropdown;
