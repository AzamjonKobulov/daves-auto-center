'use client';

import { motion, AnimatePresence } from 'framer-motion';
import useDropdown from '@/app/hooks/useDropdown';
import DoubleRangePriceSlider from './DoubleRangePriceSlider';

const PriceDropdown = () => {
  const { isOpen, handleToggleDropdown, dropdownRef } = useDropdown();

  return (
    <div className="h-full relative" ref={dropdownRef}>
      <button
        className="w-full h-full flex items-center justify-between px-8"
        onClick={handleToggleDropdown}
      >
        Price
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
            className="absolute z-20 w-full h-20 flex items-end justify-center bg-white rounded-10 shadow-review mt-3.5 pt-3 pb-7 px-4"
          >
            <DoubleRangePriceSlider
              min={0}
              max={300}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PriceDropdown;
