import React, {
  Dispatch,
  SetStateAction,
  useRef,
  useState,
  useEffect,
} from 'react';

interface AccordionData {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  data: AccordionData;
  index: number;
  isOpen: number;
  onOpen: (index: number) => void;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  data,
  index,
  isOpen,
  onOpen,
}) => {
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
    <div className=" text-15 lg:text-17 bg-white rounded-10 overflow-hidden">
      <button
        className={`h-50 lg:h-sixty w-full flex items-center justify-between gap-5 px-5 py-3 sm:py-5 ${
          active ? 'text-brand-red' : ''
        }`}
        onClick={() => onOpen(index)}
      >
        <p className="max-w-80 sm:max-w-none text-left">{data.question}</p>
        <svg
          className={`transition-transform duration-300 transform ${
            active ? 'rotate-180' : ''
          }`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.955 6.61625C17.7206 6.38191 17.4027 6.25027 17.0713 6.25027C16.7398 6.25027 16.4219 6.38191 16.1875 6.61625L10 12.8038L3.8125 6.61625C3.57675 6.38855 3.26099 6.26256 2.93325 6.26541C2.6055 6.26826 2.29199 6.39972 2.06023 6.63148C1.82847 6.86324 1.69701 7.17676 1.69416 7.5045C1.69131 7.83225 1.8173 8.148 2.045 8.38375L9.11625 15.455C9.35066 15.6893 9.66855 15.821 10 15.821C10.3315 15.821 10.6493 15.6893 10.8838 15.455L17.955 8.38375C18.1893 8.14934 18.321 7.83146 18.321 7.5C18.321 7.16855 18.1893 6.85066 17.955 6.61625Z"
            fill="#232323"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-height duration-300"
        style={{ maxHeight: active ? contentHeight : 0 }}
      >
        <p className="lg:leading-5 px-5 sm:pr-16 pb-5">{data.answer}</p>
      </div>
    </div>
  );
};

export default FAQAccordion;
