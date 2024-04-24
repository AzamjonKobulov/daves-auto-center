'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenWomenDropdown from './MenWomenDropdown';
import BooksDropdown from './BooksDropdown';

interface Tab {
  name: string;
  path: string;
  dropdown: React.ReactNode;
}

const tabs: Tab[] = [
  {
    name: 'Dave’s Apparel',
    path: '/merchendize/apparel',
    dropdown: <MenWomenDropdown />,
  },
  {
    name: 'New Products',
    path: '/merchendize/products',
    dropdown: <MenWomenDropdown />,
  },
  {
    name: 'Books',
    path: '/merchendize/books',
    dropdown: <BooksDropdown />,
  },
];

const MerchendizeNav = () => {
  const [hoveredTab, setHoveredTab] = useState<number | null>(null); // Changed the type to number

  const handleMouseEnter = (index: number) => {
    // Accepts index instead of path
    setHoveredTab(index);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <div className="h-9 lg:h-50 bg-brand-blue/10">
      <div className="h-full max-w-base mx-auto px-5">
        <div className="h-full min-w-max flex items-center">
          {tabs.map((link, idx) => (
            <div
              key={link.name}
              onMouseEnter={() => handleMouseEnter(idx)} // Passes the index
              onMouseLeave={handleMouseLeave}
              className={`h-full relative grid place-content-center text-xs lg:text-base cursor-pointer px-5 lg:px-8 ${
                hoveredTab === idx ? 'bg-brand-blue/20' : ''
              }`}
            >
              {link.name}
              <AnimatePresence>
                {hoveredTab === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute ${
                      idx === 2 ? 'right-0 xs:left-0' : 'left-0'
                    } top-0 mt-10 lg:mt-16 z-20`}
                  >
                    {link.dropdown}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchendizeNav;
