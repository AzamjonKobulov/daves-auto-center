'use client';

import TShirtDetails from '@/app/components/pages/merchendize/TShirtDetails';
import TShirt from '@/app/components/shared/TShirt';

const Page = () => {
  return (
    <>
      <section className="relative pt-10 pb-36">
        <div className="max-w-base mx-auto space-y-sixty lg:space-y-36 px-5">
          <TShirtDetails />
          <div className="space-y-10 lg:space-y-24">
            <div className="space-y-5 sm:space-y-8 lg:space-y-sixty">
              <h2 className="text-3xl lg:text-5xl font-bold text-black text-center">
                You may also like
              </h2>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <TShirt key={idx} />
                ))}
              </div>
            </div>
            <div className="space-y-5 sm:space-y-8 lg:space-y-sixty">
              <h2 className="text-3xl lg:text-5xl font-bold text-black text-center">
                Bestsellers
              </h2>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <TShirt key={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
