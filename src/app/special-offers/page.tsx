import React from 'react';
import OfferBox from '../components/pages/special-offers/OfferBox';

const offers = [
  {
    img: '/assets/images/img-spec-offer-1.png',
    text: 'Ford 6.7L Disaster Prevention Bypass kit install on trucks from 2011-2022 - Kit from S & S Diesel',
    cost: '$1,850 plus tax',
  },
  {
    img: '/assets/images/img-spec-offer-2.png',
    text: 'Duramax CP3 pump conversion from the CP4 pump  - trucks from 2011-2016 LML',
    cost: '$6,500 plus tax',
  },
  {
    img: '/assets/images/img-spec-offer-3.png',
    text: 'Fass Fuel system Install  – 2011-2016 Duramax LML  – 100Gph system',
    cost: 'Starting at $1800',
  },
  {
    img: '/assets/images/img-spec-offer-4.png',
    text: 'Heater grid delete and upgrade to the Banks Power Monster Ram kit  – 2019-2023 Ram 2500/3500 Cummins 6.7L',
    cost: 'Range $2,000-$2,300  plus tax Installed',
  },
  {
    img: '/assets/images/img-spec-offer-5.png',
    text: 'Heater grid delete and upgrade to the Banks Power Monster Ram kit - 2013-2018 Ram 2500/3500 Cummins 6.7L',
    cost: 'Range $2,000-$2,300  plus tax Installed',
  },
];

const Page = () => {
  return (
    <>
      <section className="pb-28 lg:pb-52">
        <div className="max-w-base mx-auto px-5">
          <div className="space-y-5">
            <h1 className="text-[1.9375rem] sm:text-5xl md:text-6xl lg:text-70 font-bold leading-[117%] sm:leading-none lg:leading-[117%]">
              Special offers by Dave
            </h1>
            <p className="lg:text-17 lg:pr-10 lg:leading-7">
              Here you can find prices for our kits.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 xl:gap-20 bg-white rounded-10 lg:rounded-20 shadow-base overflow-hidden mt-10 lg:mt-11 px-4 pb-14 lg:px-11 lg:pt-11">
            {offers.map((offer, index) => (
              <OfferBox key={index} offer={offer} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
