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
    <div className="relative grid md:grid-cols-5 lg:grid-cols-2 gap-7 lg:gap-10 2xl:gap-16">
      <div className="md:col-span-3 lg:col-span-1 lg:sticky top-0">
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
