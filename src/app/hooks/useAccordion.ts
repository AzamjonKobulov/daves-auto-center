// useAccordion.ts

import { useState } from 'react';

const useAccordion = () => {
  const [accordionState, setAccordionState] = useState<boolean[]>([
    false,
    false,
  ]);

  const toggleAccordion = (index: number) => {
    setAccordionState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  return { toggleAccordion, accordionState };
};

export default useAccordion;
