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
        <div className="h-56 grid place-content-center xs:block overflow-hidden">
          <Image
            src={offer.img}
            alt="Special Offer"
            width={1000}
            height={500}
            className="w-[90%] xs:w-2/3 mx-auto sm:mx-0 sm:w-full md:w-4/5 lg:w-full sm:h-full object-cover"
          />
        </div>
      </div>
      <div className="space-y-2.5">
        <div className="space-y-2">
          <p
            className={`text-17 leading-7 ${index === 2 ? 'lg:max-w-64' : ''}`}
          >
            {offer.text}
          </p>
          <h5 className="text-xl font-semibold text-center sm:text-start">
            {offer.cost}
          </h5>
        </div>
        <Button redOutline className="w-full sm:w-auto h-sixty">
          make an appointment
        </Button>
      </div>
    </div>
  );
};

export default OfferBox;
