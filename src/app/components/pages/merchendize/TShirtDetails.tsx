'use client';

import { useState } from 'react';

import TShritImages from './TShritImages';
import TShirtInfo from './TShirtInfo';
import useQuantity from '@/app/hooks/useQuantity';

const images = [
  '/assets/images/img-t-shirt.png',
  '/assets/images/img-t-shirt-2.png',
];
const sizes = ['s', 'm', 'l', '2xl', '3xl'];

const TShirtDetails = () => {
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);
  const { qty, setQty, addQty, subsQty } = useQuantity();

  return (
    <div className="relative flex flex-col lg:flex-row justify-between gap-16">
      <div className="lg:sticky">
        <TShritImages images={images} />
      </div>
      <TShirtInfo
        sizes={sizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        qty={qty}
        addQty={addQty}
        subsQty={subsQty}
      />
    </div>
  );
};

export default TShirtDetails;
