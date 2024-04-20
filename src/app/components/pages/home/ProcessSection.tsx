const ProcessSection = () => {
  return (
    <section>
      <div className="max-w-4xl mx-auto px-5">
        <div className="hidden md:flex items-center justify-between pl-16 pr-20">
          {/* Step 1 */}
          <div className="pulsate-animation grid place-content-center text-white text-17 font-bold mb-5">
            <p className="relative z-10">1</p>
            <span style={{ '--i': 0 } as React.CSSProperties}></span>
            <span style={{ '--i': 1 } as React.CSSProperties}></span>
            <span style={{ '--i': 2 } as React.CSSProperties}></span>
            <span style={{ '--i': 3 } as React.CSSProperties}></span>
          </div>
          {/* Step 2 */}
          <div className="hidden md:block w-[10.625rem] h-px mx-auto bg-brand-gray"></div>
          <div className="pulsate-animation grid place-content-center text-white text-17 font-bold mb-5">
            <p className="relative z-10">2</p>
            <span style={{ '--i': 0 } as React.CSSProperties}></span>
            <span style={{ '--i': 1 } as React.CSSProperties}></span>
            <span style={{ '--i': 2 } as React.CSSProperties}></span>
            <span style={{ '--i': 3 } as React.CSSProperties}></span>
          </div>
          {/* Step 3 */}
          <div className="hidden md:block w-[10.625rem] h-px mx-auto bg-brand-gray"></div>
          <div className="pulsate-animation grid place-content-center text-white text-17 font-bold mb-5">
            <p className="relative z-10">3</p>
            <span style={{ '--i': 0 } as React.CSSProperties}></span>
            <span style={{ '--i': 1 } as React.CSSProperties}></span>
            <span style={{ '--i': 2 } as React.CSSProperties}></span>
            <span style={{ '--i': 3 } as React.CSSProperties}></span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Step 1 Mobile */}
          <div className="space-y-4 text-center">
            <div className="pulsate-animation mx-auto grid lg:hidden place-content-center text-white text-17 font-bold mb-8 mt-5">
              <p className="relative z-10">1</p>
              <span style={{ '--i': 0 } as React.CSSProperties}></span>
              <span style={{ '--i': 1 } as React.CSSProperties}></span>
              <span style={{ '--i': 2 } as React.CSSProperties}></span>
              <span style={{ '--i': 3 } as React.CSSProperties}></span>
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
          {/* Step 2 Mobile */}
          <div className="space-y-4 text-center lg:pl-10">
            <div className="pulsate-animation mx-auto grid lg:hidden place-content-center text-white text-17 font-bold mb-8">
              <p className="relative z-10">2</p>
              <span style={{ '--i': 0 } as React.CSSProperties}></span>
              <span style={{ '--i': 1 } as React.CSSProperties}></span>
              <span style={{ '--i': 2 } as React.CSSProperties}></span>
              <span style={{ '--i': 3 } as React.CSSProperties}></span>
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
          {/* Step 3 Mobile */}
          <div className="space-y-4 text-center">
            <div className="pulsate-animation mx-auto grid lg:hidden place-content-center text-white text-17 font-bold mb-8">
              <p className="relative z-10">3</p>
              <span style={{ '--i': 0 } as React.CSSProperties}></span>
              <span style={{ '--i': 1 } as React.CSSProperties}></span>
              <span style={{ '--i': 2 } as React.CSSProperties}></span>
              <span style={{ '--i': 3 } as React.CSSProperties}></span>
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
