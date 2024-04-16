import React from 'react';
import Image from 'next/image';
import Button from '../../shared/Button';

interface Offer {
  img: string;
  text: string;
  cost: string;
}

interface OfferBoxProps {
  offer: Offer;
  index: number;
}

const OfferBox: React.FC<OfferBoxProps> = ({ offer, index }) => {
  return (
    <div className="flex flex-col justify-between space-y-2 text-brand-dark">
      <div>
        <div className="h-80 xl:h-60 overflow-hidden">
          <Image
            src={offer.img}
            alt="Special Offer"
            width={1000}
            height={500}
            className={index !== 0 ? 'w-4/5' : ''}
          />
        </div>
        <div className="space-y-2 mt-2.5">
          <p
            className={`text-17 leading-7 ${index === 2 ? 'lg:max-w-52' : ''}`}
          >
            {offer.text}
          </p>
          <h5 className="text-xl font-bold">{offer.cost}</h5>
        </div>
      </div>
      <Button redOutline className="h-sixty">
        make an appointment
      </Button>
    </div>
  );
};

export default OfferBox;
