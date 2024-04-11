import React from 'react';
import Button from './Button';
import Image from 'next/image';

import Socials from './Socials';

const BookSection = () => {
  return (
    <section>
      <div className="max-w-base mx-auto px-5">
        <div className="w-full flex flex-col lg:flex-row lg:items-stretch bg-white rounded-xl overflow-hidden">
          <div className="lg:h-[32.875rem] lg:flex-1 rounded-b-none">
            <Image
              src="/assets/images/img-manager.png"
              alt="Phone"
              width={701}
              height={452}
              className="w-[110%] lg:w-full h-full object-cover"
            />
          </div>
          <div className="p-5 lg:py-sixty lg:pl-16 lg:pr-36">
            <div className="h-full lg:max-w-md w-full flex flex-col justify-between gap-20 lg:gap-0">
              <div className="space-y-5">
                <Socials bgTiktok="bg-brand-dark" />
                <p className="text-xl lg:text-2xl">Book a trusted mechanic</p>
                <Button redOutline className="w-full sm:w-auto h-sixty">
                  Make an appointment
                </Button>
              </div>

              <div className="space-y-5 text-brand-dark">
                <div className="flex gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 11.925C11.2422 11.925 10.5155 11.6221 9.9797 11.0829C9.44388 10.5438 9.14286 9.8125 9.14286 9.05C9.14286 8.2875 9.44388 7.55623 9.9797 7.01707C10.5155 6.4779 11.2422 6.175 12 6.175C12.7578 6.175 13.4845 6.4779 14.0203 7.01707C14.5561 7.55623 14.8571 8.2875 14.8571 9.05C14.8571 9.42755 14.7832 9.8014 14.6397 10.1502C14.4961 10.499 14.2856 10.816 14.0203 11.0829C13.755 11.3499 13.44 11.5617 13.0934 11.7062C12.7467 11.8506 12.3752 11.925 12 11.925ZM12 1C9.87827 1 7.84344 1.84812 6.34315 3.35779C4.84285 4.86746 4 6.91501 4 9.05C4 15.0875 12 24 12 24C12 24 20 15.0875 20 9.05C20 6.91501 19.1571 4.86746 17.6569 3.35779C16.1566 1.84812 14.1217 1 12 1Z"
                      fill="#033E6A"
                    />
                  </svg>
                  <a href="#" className="lg:text-17">
                    335 S. Frontage Rd. <br /> Centerville, UT 84014
                  </a>
                </div>
                <div className="flex gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM11.07 7.581C10.8849 7.581 10.7073 7.65454 10.5764 7.78544C10.4455 7.91634 10.372 8.09388 10.372 8.279V13.86C10.372 14.246 10.684 14.558 11.07 14.558H16.651C16.7448 14.5616 16.8384 14.5461 16.9261 14.5127C17.0138 14.4792 17.0939 14.4284 17.1615 14.3633C17.2292 14.2982 17.283 14.2201 17.3197 14.1337C17.3565 14.0473 17.3754 13.9544 17.3754 13.8605C17.3754 13.7666 17.3565 13.6737 17.3197 13.5873C17.283 13.5009 17.2292 13.4228 17.1615 13.3577C17.0939 13.2926 17.0138 13.2418 16.9261 13.2083C16.8384 13.1749 16.7448 13.1594 16.651 13.163H11.767V8.279C11.767 8.09405 11.6936 7.91666 11.5629 7.78579C11.4322 7.65492 11.2549 7.58126 11.07 7.581Z"
                      fill="#033E6A"
                    />
                  </svg>
                  <a href="#" className="lg:text-17">
                    Mon - Fri: 8AM - 5:30PM
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
