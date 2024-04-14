import React from 'react';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-2.5 mt-20">
      <button className="w-8 h-8 shrink-0 grid place-content-center bg-brand-blue-1 text-white text-15 rounded-full">
        1
      </button>
      <button className="w-8 h-8 shrink-0 grid place-content-center hover:bg-brand-blue-1 hover:text-white text-15 rounded-full transition-all duration-200">
        2
      </button>
      <button className="w-8 h-8 shrink-0 grid place-content-center hover:bg-brand-blue-1 hover:text-white text-15 rounded-full transition-all duration-200">
        3
      </button>
      <button className="w-8 h-8 shrink-0 grid place-content-center hover:bg-brand-blue-1 hover:text-white text-15 rounded-full transition-all duration-200">
        ...
      </button>
      <button className="w-8 h-8 shrink-0 grid place-content-center hover:bg-brand-blue-1 hover:text-white text-15 rounded-full transition-all duration-200">
        9
      </button>
      <button className="w-8 h-8 shrink-0 grid place-content-center group hover:bg-brand-blue-1 hover:text-white text-15 rounded-full transition-all duration-200">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:fill-white"
        >
          <path d="M4.80005 12L8.80005 7.99998L4.80005 3.99998L5.60005 2.39998L11.2 7.99998L5.60005 13.6L4.80005 12Z" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
