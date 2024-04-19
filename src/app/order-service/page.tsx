'use client';

import { useState } from 'react';
import Button from '../components/shared/Button';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Page = () => {
  const [value, onChange] = useState<Value>(new Date());

  console.log(value);

  return (
    <>
      <section className="pb-32 lg:pb-56">
        <div className="max-w-base mx-auto space-y-10 px-5">
          <h1 className="text-[1.9375rem] sm:text-5xl md:text-6xl lg:text-70 font-bold  leading-[117%] sm:leading-none lg:leading-[117%]">
            Order a service
          </h1>
          <div className="lg:h-[29.75rem] flex flex-col lg:flex-row gap-10 lg:gap-0 lg:items-start justify-between bg-white rounded-10 lg:rounded-20 shadow-base overflow-hidden pt-10 pb-6 px-4 xs:px-8 lg:mt-11">
            <div className="h-full flex-1 flex flex-col justify-between lg:py-7 lg:px-2">
              <div>
                <h2 className="text-xl sm:text-4xl font-bold">
                  Zoom call with Dave
                </h2>
                <p className="text-17 mt-2">$1000/25 min</p>
                <p className="max-w-md text-17 mt-6">
                  You can ask Dave any questions - either regarding your car, or
                  your business.
                </p>
              </div>

              <p className="max-w-md text-2xl font-bold my-10 lg:my-0">
                Please choose convinient time before cheking out.
              </p>
            </div>
            <div className="pb-10 lg:px-4">
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Button red className="w-full sm:w-2/3 lg:w-2/5 h-70">
              Check out
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
