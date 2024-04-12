import Image from 'next/image';

const logos: string[] = [
  '/assets/images/logo-car-1.svg',
  '/assets/images/logo-car-2.svg',
  '/assets/images/logo-car-3.svg',
  '/assets/images/logo-car-4.svg',
  '/assets/images/logo-car-5.svg',
  '/assets/images/logo-car-6.svg',
  '/assets/images/logo-car-7.svg',
  '/assets/images/logo-car-8.svg',
  '/assets/images/logo-car-9.svg',
  '/assets/images/logo-car-10.svg',
  '/assets/images/logo-car-11.svg',
  '/assets/images/logo-car-12.svg',
  '/assets/images/logo-car-13.svg',
  '/assets/images/logo-car-14.svg',
  '/assets/images/logo-car-15.svg',
  '/assets/images/logo-car-16.svg',
  '/assets/images/logo-car-17.svg',
  '/assets/images/logo-car-18.svg',
  '/assets/images/logo-car-19.svg',
  '/assets/images/logo-car-20.svg',
  '/assets/images/logo-car-21.svg',
  '/assets/images/logo-car-22.svg',
  '/assets/images/logo-car-23.svg',
  '/assets/images/logo-car-24.svg',
  // Duplicate logos for seamless looping
  '/assets/images/logo-car-1.svg',
  '/assets/images/logo-car-2.svg',
  '/assets/images/logo-car-3.svg',
  '/assets/images/logo-car-4.svg',
  '/assets/images/logo-car-5.svg',
  '/assets/images/logo-car-6.svg',
  '/assets/images/logo-car-7.svg',
  '/assets/images/logo-car-8.svg',
  '/assets/images/logo-car-9.svg',
  '/assets/images/logo-car-10.svg',
  '/assets/images/logo-car-11.svg',
  '/assets/images/logo-car-12.svg',
  '/assets/images/logo-car-13.svg',
  '/assets/images/logo-car-14.svg',
  '/assets/images/logo-car-15.svg',
  '/assets/images/logo-car-16.svg',
  '/assets/images/logo-car-17.svg',
  '/assets/images/logo-car-18.svg',
  '/assets/images/logo-car-19.svg',
  '/assets/images/logo-car-20.svg',
  '/assets/images/logo-car-21.svg',
  '/assets/images/logo-car-22.svg',
  '/assets/images/logo-car-23.svg',
  '/assets/images/logo-car-24.svg',
  // Duplicate logos for seamless looping
  '/assets/images/logo-car-1.svg',
  '/assets/images/logo-car-2.svg',
  '/assets/images/logo-car-3.svg',
  '/assets/images/logo-car-4.svg',
  '/assets/images/logo-car-5.svg',
  '/assets/images/logo-car-6.svg',
  '/assets/images/logo-car-7.svg',
  '/assets/images/logo-car-8.svg',
  '/assets/images/logo-car-9.svg',
  '/assets/images/logo-car-10.svg',
  '/assets/images/logo-car-11.svg',
  '/assets/images/logo-car-12.svg',
  '/assets/images/logo-car-13.svg',
  '/assets/images/logo-car-14.svg',
  '/assets/images/logo-car-15.svg',
  '/assets/images/logo-car-16.svg',
  '/assets/images/logo-car-17.svg',
  '/assets/images/logo-car-18.svg',
  '/assets/images/logo-car-19.svg',
  '/assets/images/logo-car-20.svg',
  '/assets/images/logo-car-21.svg',
  '/assets/images/logo-car-22.svg',
  '/assets/images/logo-car-23.svg',
  '/assets/images/logo-car-24.svg',
  // Duplicate logos for seamless looping
  '/assets/images/logo-car-1.svg',
  '/assets/images/logo-car-2.svg',
  '/assets/images/logo-car-3.svg',
  '/assets/images/logo-car-4.svg',
  '/assets/images/logo-car-5.svg',
  '/assets/images/logo-car-6.svg',
  '/assets/images/logo-car-7.svg',
  '/assets/images/logo-car-8.svg',
  '/assets/images/logo-car-9.svg',
  '/assets/images/logo-car-10.svg',
  '/assets/images/logo-car-11.svg',
  '/assets/images/logo-car-12.svg',
  '/assets/images/logo-car-13.svg',
  '/assets/images/logo-car-14.svg',
  '/assets/images/logo-car-15.svg',
  '/assets/images/logo-car-16.svg',
  '/assets/images/logo-car-17.svg',
  '/assets/images/logo-car-18.svg',
  '/assets/images/logo-car-19.svg',
  '/assets/images/logo-car-20.svg',
  '/assets/images/logo-car-21.svg',
  '/assets/images/logo-car-22.svg',
  '/assets/images/logo-car-23.svg',
  '/assets/images/logo-car-24.svg',
  // Duplicate logos for seamless looping
  '/assets/images/logo-car-1.svg',
  '/assets/images/logo-car-2.svg',
  '/assets/images/logo-car-3.svg',
  '/assets/images/logo-car-4.svg',
  '/assets/images/logo-car-5.svg',
  '/assets/images/logo-car-6.svg',
  '/assets/images/logo-car-7.svg',
  '/assets/images/logo-car-8.svg',
  '/assets/images/logo-car-9.svg',
  '/assets/images/logo-car-10.svg',
  '/assets/images/logo-car-11.svg',
  '/assets/images/logo-car-12.svg',
  '/assets/images/logo-car-13.svg',
  '/assets/images/logo-car-14.svg',
  '/assets/images/logo-car-15.svg',
  '/assets/images/logo-car-16.svg',
  '/assets/images/logo-car-17.svg',
  '/assets/images/logo-car-18.svg',
  '/assets/images/logo-car-19.svg',
  '/assets/images/logo-car-20.svg',
  '/assets/images/logo-car-21.svg',
  '/assets/images/logo-car-22.svg',
  '/assets/images/logo-car-23.svg',
  '/assets/images/logo-car-24.svg',
];

const LogoCarouse = () => {
  return (
    <>
      <div className="slider relative mx-auto overflow-hidden mt-8 md:mt-12 lg:mt-90">
        <div className="slide-track flex">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="slide w-11 h-11 md:w-12 md:h-12 lg:w-74 lg:h-74"
            >
              <Image
                src={logo}
                alt="Car Brand Logo"
                width={74}
                height={74}
                className="w-full h-full transition-transform duration-1000"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoCarouse;
