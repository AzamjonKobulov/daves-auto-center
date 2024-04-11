import React from 'react';

const ProcessSection = () => {
  return (
    <section>
      <div className="max-w-4xl mx-auto px-5">
        <div className="hidden md:flex items-center justify-between pl-7 pr-12">
          <div className="w-14 h-14 mx-auto shrink-0 bg-brand-blue-3/30 rounded-full p-2">
            <div className="w-full h-full r bg-brand-blue-3/35 rounded-full p-2">
              <div className="w-full h-full grid place-content-center bg-brand-blue-3 text-17 text-white font-bold rounded-full p-1">
                1
              </div>
            </div>
          </div>
          <div className="hidden md:block w-[10.625rem] h-px mx-auto bg-brand-gray"></div>
          <div className="w-14 h-14 mx-auto shrink-0 bg-brand-blue-3/30 rounded-full p-2">
            <div className="w-full h-full r bg-brand-blue-3/35 rounded-full p-2">
              <div className="w-full h-full grid place-content-center bg-brand-blue-3 text-17 text-white font-bold rounded-full p-1">
                2
              </div>
            </div>
          </div>
          <div className="hidden md:block w-[10.625rem] h-px mx-auto bg-brand-gray"></div>
          <div className="w-14 h-14 mx-auto shrink-0 bg-brand-blue-3/30 rounded-full p-2">
            <div className="w-full h-full r bg-brand-blue-3/35 rounded-full p-2">
              <div className="w-full h-full grid place-content-center bg-brand-blue-3 text-17 text-white font-bold rounded-full p-1">
                2
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center">
            <div className="w-14 h-14 mx-auto md:hidden shrink-0 bg-brand-blue-3/30 rounded-full p-2">
              <div className="w-full h-full r bg-brand-blue-3/35 rounded-full p-2">
                <div className="w-full h-full grid place-content-center bg-brand-blue-3 text-17 text-white font-bold rounded-full p-1">
                  1
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-lg lg:text-xl font-bold">Select Service</p>
              <p className="text-15 lg:text-base">
                Pick the repairs your <br className="hidden sm:block" /> vehicle
                requires.
              </p>
            </div>
            <div className="md:hidden w-[10.625rem] h-px mx-auto bg-brand-gray mt-8"></div>
          </div>
          <div className="space-y-4 text-center lg:pl-10">
            <div className="w-14 h-14 mx-auto shrink-0 md:hidden bg-brand-blue-3/30 rounded-full p-2">
              <div className="w-full h-full bg-brand-blue-3/35 rounded-full p-2">
                <div className="w-full h-full grid place-content-center bg-brand-blue-3 text-17 text-white font-bold rounded-full p-1">
                  2
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-lg lg:text-xl font-bold">
                Schedule an appointment
              </p>
              <p className="text-15 lg:text-base">
                Set a convenient date and <br className="hidden sm:block" />{' '}
                time <br className="sm:hidden" />
                for your appointment.
              </p>
            </div>
            <div className="md:hidden w-[10.625rem] h-px mx-auto bg-brand-gray mt-8"></div>
          </div>
          <div className="space-y-4 text-center">
            <div className="w-14 h-14 mx-auto shrink-0 md:hidden bg-brand-blue-3/30 rounded-full p-2">
              <div className="w-full h-full r bg-brand-blue-3/35 rounded-full p-2">
                <div className="w-full h-full grid place-content-center bg-brand-blue-3 text-17 text-white font-bold rounded-full p-1">
                  3
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-lg lg:text-xl font-bold">Get your car fixed</p>
              <p className="text-15 lg:text-base">
                Our skilled professionals wil <br /> promptly repair your car.
              </p>
            </div>
            <div className="md:hidden w-[10.625rem] h-px mx-auto bg-brand-gray mt-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
