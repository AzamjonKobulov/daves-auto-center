'use client';

import { useState, useEffect } from 'react';
import LinksAccordion from './LinksAccordion';

const accordionData = [
  {
    theme: 'Engine Services',
    links: [
      {
        name: 'Generator Engine Repair',
        path: '/',
      },
      {
        name: 'Warranty',
        path: '/',
      },
      {
        name: 'Engine Repair',
        path: '/',
      },
      {
        name: 'Engine Rebuilds',
        path: '/',
      },
      {
        name: 'Engine Soda Blasting',
        path: '/',
      },
      {
        name: 'Check Engine Light',
        path: '/',
      },
      {
        name: 'Machine Shop',
        path: '/',
      },
      {
        name: 'Catepillar Engine Repair',
        path: '/',
      },
    ],
  },
  {
    theme: 'Diesel Services',
    links: [
      {
        name: 'Diesel Repair',
        path: '/',
      },
      {
        name: 'Diesel Engines',
        path: '/',
      },
      {
        name: 'Diesel Performance',
        path: '/',
      },
      {
        name: 'Dodge Cummins',
        path: '/',
      },
      {
        name: 'Power Stroke',
        path: '/',
      },
      {
        name: 'Chevy Duramax',
        path: '/',
      },
      {
        name: 'Catepillar Engine Repair',
        path: '/',
      },
    ],
  },
  {
    theme: 'Services',
    links: [
      {
        name: 'Sprinter Van Repair',
        path: '/',
      },
      {
        name: 'Ram ProMaster Repair',
        path: '/',
      },
      {
        name: 'Ford Transit Repair',
        path: '/',
      },
      {
        name: 'Medium Duty Truck Repair',
        path: '/',
      },
      {
        name: 'Generator Engine Repair',
        path: '/',
      },
      {
        name: 'Box Truck Repair',
        path: '/',
      },
      {
        name: 'Fleet Services',
        path: '/',
      },
      {
        name: 'Transmissions',
        path: '/',
      },
      {
        name: 'Fuel Injection Service',
        path: '/',
      },
      {
        name: 'Timing Belts',
        path: '/',
      },
      {
        name: 'Towing Davies County',
        path: '/',
      },
      {
        name: 'Auto Air Conditioning Repair',
        path: '/',
      },
      {
        name: 'Van Repair & Service in Utah',
        path: '/',
      },
      {
        name: 'Car Overheating Diagnosis & Repair ',
        path: '/',
      },
      {
        name: 'Service Areas',
        path: '/',
      },
    ],
  },
  {
    theme: 'Contact',
    links: [
      {
        name: 'Appointment',
        path: '/',
      },
      {
        name: 'Contact Us',
        path: '/',
      },
    ],
  },
  {
    theme: 'About',
    links: [
      {
        name: 'About Us',
        path: '/',
      },
      {
        name: 'Careers',
        path: '/',
      },
      {
        name: 'Blog (recent jobs)',
        path: '/',
      },
      {
        name: 'Videos',
        path: '/',
      },
      {
        name: 'Financing',
        path: '/',
      },
    ],
  },
  {
    theme: 'Blog',
    links: [
      {
        name: 'Blog',
        path: '/',
      },
      {
        name: 'Blog',
        path: '/',
      },
      {
        name: 'Blog',
        path: '/',
      },
    ],
  },
];

const FAQAccordions = () => {
  const [isOpen, setIsOpen] = useState<number>(-1);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        target instanceof Element &&
        isOpen !== -1 &&
        !target.closest('.accordion')
      ) {
        setIsOpen(-1);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const handleAccordionClick = (index: number) => {
    if (isOpen === index) {
      setIsOpen(-1);
    } else {
      setIsOpen(index);
    }
  };

  return (
    <div className="h-full overflow-auto px-8">
      <div className="divide-y divide-white/50">
        {accordionData.map((data, index) => (
          <LinksAccordion
            key={data.theme}
            data={data}
            isOpen={isOpen}
            onOpen={handleAccordionClick}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQAccordions;
