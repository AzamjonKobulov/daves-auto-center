import { useMobileMenu } from '@/app/contexts/MobileMenuContext';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';

interface Links {
  name: string;
  path: string;
}

interface AccordionData {
  theme: string;
  links: Links[];
}

interface LinksAccordionProps {
  data: AccordionData;
  index: number;
  isOpen: number;
  onOpen: (index: number) => void;
}

const LinksAccordion: React.FC<LinksAccordionProps> = ({
  data,
  index,
  isOpen,
  onOpen,
}) => {
  const { handleToggleMobMenu } = useMobileMenu();

  const active = isOpen === index;
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (active && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [active]);

  return (
    <div className={`px-5 ${active ? 'pb-5' : ''}`}>
      <button
        className="h-50 lg:h-sixty w-full flex items-center justify-between gap-5 px-5 py-4 sm:py-5"
        onClick={() => onOpen(index)}
      >
        <p className="max-w-80 sm:max-w-none text-left mg:text-lg">
          {data.theme}
        </p>

        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 transform ${
            active ? 'rotate-180' : ''
          }`}
        >
          <path
            d="M2.04469 6.61631C2.2791 6.38197 2.59699 6.25033 2.92844 6.25033C3.2599 6.25033 3.57778 6.38197 3.81219 6.61631L9.99969 12.8038L16.1872 6.61631C16.4229 6.38861 16.7387 6.26262 17.0664 6.26547C17.3942 6.26832 17.7077 6.39978 17.9395 6.63154C18.1712 6.8633 18.3027 7.17682 18.3055 7.50456C18.3084 7.83231 18.1824 8.14806 17.9547 8.38381L10.8834 15.4551C10.649 15.6894 10.3311 15.821 9.99969 15.821C9.66824 15.821 9.35035 15.6894 9.11594 15.4551L2.04469 8.38381C1.81036 8.1494 1.67871 7.83152 1.67871 7.50006C1.67871 7.16861 1.81036 6.85072 2.04469 6.61631Z"
            fill="white"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className="flex flex-col gap-3 overflow-hidden transition-height duration-300 pl-8"
        style={{ maxHeight: active ? contentHeight : 0 }}
      >
        {data.links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="text-sm md:text-base text-white/50 lg:leading-5 hover:text-white transition-all duration-200"
            onClick={handleToggleMobMenu}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinksAccordion;
