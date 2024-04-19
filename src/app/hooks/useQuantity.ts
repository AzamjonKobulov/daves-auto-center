'use client';

import { useState } from 'react';

const useQuantity = () => {
  const [qty, setQty] = useState<number>(1);

  const addQty = () => setQty((qty) => qty + 1);
  const subsQty = () => setQty(qty > 1 ? qty - 1 : 1);
  return { qty, setQty, addQty, subsQty };
};

export default useQuantity;
