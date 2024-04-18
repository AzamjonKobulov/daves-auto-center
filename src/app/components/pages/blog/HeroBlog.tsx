import React from 'react';

const HeroBlog = () => {
  return (
    <section className="h-64 xs:h-96 sm:h-[28rem] lg:h-[32rem] xl:h-[40rem] 4xl:h-[50rem] relative bg-blog bg-cover bg-no-repeat bg-center after:absolute after:inset-0 after:bg-black/30 xl:after:bg-black/20">
      <div className="max-w-base mx-auto h-full grid place-content-center px-5">
        <h1 className="max-w-4xl mx-auto relative z-10 text-center text-[1.9375rem] sm:text-5xl lg:text-6xl 2xl:text-70 font-bold text-white leading-[117%] sm:leading-none lg:leading-[117%]">
          RAM PROMASTER REPAIR & SERVICE IN UTAH
        </h1>
      </div>
    </section>
  );
};

export default HeroBlog;
