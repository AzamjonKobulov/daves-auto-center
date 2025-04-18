'use client';

import { useState, useEffect } from 'react';
import FAQAccordion from './FAQAccordion';

const accordionData = [
  {
    question: 'What is the warranty of your work?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa voluptatibus aspernatur? Incidunt culpa magnam numquam, illum, consectetur, officia fugit sit alias ratione cumque impedit mollitia fugiat iusto adipisci in!',
  },
  {
    question: 'Why is my check engine light on?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa voluptatibus aspernatur? Incidunt culpa magnam numquam, illum, consectetur, officia fugit sit alias ratione cumque impedit mollitia fugiat iusto adipisci in!',
  },
  {
    question: 'How often should I change my oil?',
    answer:
      "Oil change intervals can vary based on your vehicle's make, model, and usage. However, a general guideline is to change your engine oil every 3,000 to 5,000 miles (4,800 to 8,000 kilometers) or every three to six months, whichever comes first. Modern vehicles and synthetic oils may allow for longer intervals, so it's essential to consult your vehicle's owner's manual for manufacturer-recommended oil change schedules.",
  },
  {
    question: 'What maintenance should I be doing?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa voluptatibus aspernatur? Incidunt culpa magnam numquam, illum, consectetur, officia fugit sit alias ratione cumque impedit mollitia fugiat iusto adipisci in!',
  },
  {
    question: 'Are your mechanics quialified?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa voluptatibus aspernatur? Incidunt culpa magnam numquam, illum, consectetur, officia fugit sit alias ratione cumque impedit mollitia fugiat iusto adipisci in!',
  },
];

const FAQAccordions = () => {
  const [isOpen, setIsOpen] = useState<number>(0);

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
    <div className="space-y-2.5">
      {accordionData.map((data, index) => (
        <FAQAccordion
          key={data.question}
          data={data}
          isOpen={isOpen}
          onOpen={handleAccordionClick}
          index={index}
        />
      ))}
    </div>
  );
};

export default FAQAccordions;
