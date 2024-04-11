import React from 'react';
import Button from '../../shared/Button';

const WhoWeAreSection = () => {
  return (
    <section>
      <div className="max-w-base mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 bg-white rounded-10 overflow-hidden pt-5 lg:py-5">
          {/* Texts */}
          <div className="max-w-md space-y-7 px-5 sm:px-0 sm:ml-5 lg:ml-[3.75rem]">
            <div className="space-y-[1.125rem] text-15 sm:text-base leading-[1.0625rem] sm:leading-5">
              <div className="space-y-2.5">
                <h2 className="text-xl sm:text-2xl">Who We Are</h2>
                <p className="text-15 lg:text-base pr-5">
                  Dave’s Auto Center has been family owned & operated since
                  1990. We are a full service automotive repair shop & custom
                  machine shop. We are the best equipped auto shop & machine
                  shop in Utah!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4">
                {/* Years Of experience */}
                <div className="sm:h-24 flex gap-2 sm:border-r border-brand-gray pr-4">
                  <p className="text-4xl sm:text-5xl font-bold">33</p>
                  years family <br /> run business.
                </div>
                <div>
                  <p>We specialize in:</p>
                  <ul className="list-disc pl-6">
                    <li>Engine repairs & overhauls</li>
                    <li>Medium duty truck repair</li>
                    <li>Diesel repair specialists</li>
                    <li>European/Import repair</li>
                  </ul>
                </div>
              </div>
              <div className="max-w-96 w-full space-y-2.5">
                <p className="font-bold text-xl whitespace-nowrap sm:text-2xl">
                  Dave’s Auto is Monster engines
                </p>
                <Button redOutline className="w-full h-50 sm:h-sixty">
                  Check out our engines here
                </Button>
              </div>
            </div>
          </div>
          {/* Video */}
          <div className="h-[15.625rem] sm:h-full flex-1 rounded-b-10 sm:rounded-b-none lg:rounded-r-10 overflow-hidden">
            <iframe
              className="w-full h-[15.625rem] sm:h-[23.9375rem]"
              src="https://www.youtube.com/embed/r44RKWyfcFw"
              title="Welcome to Silicon Valley"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
