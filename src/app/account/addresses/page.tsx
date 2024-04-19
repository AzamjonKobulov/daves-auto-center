import React from 'react';

const page = () => {
  return (
    <div className="max-w-[43.125rem] mx-auto space-y-10">
      <div className="space-y-9 sm:space-y-8 text-center">
        <h1 className="text-2xl lg:text-40 font-bold capitalize">Addresses</h1>
        <p className="text-17">
          The following addresses will be used on the checkout page by default.
        </p>
      </div>

      <form className="grid sm:grid-cols-2 gap-8">
        <label htmlFor="billing" className="space-y-3">
          <div className="flex items-center justify-between text-brand-blue-1 border-b border-brand-gray/50">
            <input
              type="text"
              id="billing"
              className="flex-1 outline-none uppercase py-3"
              value="Billing address"
            />
            <button>edit</button>
          </div>
          <p className="max-w-[8.5625rem] leading-6 text-17">
            James Peterson 335 Street Centerville UT 84014 United States
          </p>
        </label>
        <label htmlFor="shipping" className="space-y-3">
          <div className="flex items-center justify-between text-brand-blue-1 border-b border-brand-gray/50">
            <input
              type="text"
              id="shipping"
              className="flex-1 outline-none uppercase py-3"
              value="Shipping address"
            />
            <button>edit</button>
          </div>
          <p className="leading-6 text-17">Please add shipping information</p>
        </label>
      </form>
    </div>
  );
};

export default page;
