import Image from 'next/image';

const logos: string[] = [
  '/assets/images/logo-bottom-1.jpg',
  '/assets/images/logo-bottom-2.jpg',
  '/assets/images/logo-bottom-3.jpg',
  '/assets/images/logo-bottom-4.jpg',
  '/assets/images/logo-bottom-5.jpg',
  '/assets/images/logo-bottom-6.jpg',
  '/assets/images/logo-bottom-7.jpg',
  '/assets/images/logo-bottom-8.jpg',
  '/assets/images/logo-bottom-9.jpg',
  '/assets/images/logo-bottom-10.jpg',
  '/assets/images/logo-bottom-11.jpg',
  '/assets/images/logo-bottom-1.jpg',
  '/assets/images/logo-bottom-2.jpg',
  '/assets/images/logo-bottom-3.jpg',
  '/assets/images/logo-bottom-4.jpg',
  '/assets/images/logo-bottom-5.jpg',
  '/assets/images/logo-bottom-6.jpg',
  '/assets/images/logo-bottom-7.jpg',
  '/assets/images/logo-bottom-8.jpg',
  '/assets/images/logo-bottom-9.jpg',
  '/assets/images/logo-bottom-10.jpg',
  '/assets/images/logo-bottom-11.jpg',
  '/assets/images/logo-bottom-1.jpg',
  '/assets/images/logo-bottom-2.jpg',
  '/assets/images/logo-bottom-3.jpg',
  '/assets/images/logo-bottom-4.jpg',
  '/assets/images/logo-bottom-5.jpg',
  '/assets/images/logo-bottom-6.jpg',
  '/assets/images/logo-bottom-7.jpg',
  '/assets/images/logo-bottom-8.jpg',
  '/assets/images/logo-bottom-9.jpg',
  '/assets/images/logo-bottom-10.jpg',
  '/assets/images/logo-bottom-11.jpg',
  '/assets/images/logo-bottom-1.jpg',
  '/assets/images/logo-bottom-2.jpg',
  '/assets/images/logo-bottom-3.jpg',
  '/assets/images/logo-bottom-4.jpg',
  '/assets/images/logo-bottom-5.jpg',
  '/assets/images/logo-bottom-6.jpg',
  '/assets/images/logo-bottom-7.jpg',
  '/assets/images/logo-bottom-8.jpg',
  '/assets/images/logo-bottom-9.jpg',
  '/assets/images/logo-bottom-10.jpg',
  '/assets/images/logo-bottom-11.jpg',
];

const BottomLogoCarousel = () => {
  return (
    <div className="bg-white mt-8 md:mt-12 lg:mt-90 py-2">
      <div className="slider relative max-w-base mx-auto overflow-hidden">
        <div className="slide-track flex gap-5">
          {logos.map((logo, idx) => (
            <div key={idx} className="slide">
              <Image
                src={logo}
                alt="Brand Logo"
                width={74}
                height={74}
                className="w-auto transition-transform duration-1000"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomLogoCarousel;
