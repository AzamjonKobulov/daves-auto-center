'use client';

import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const slideImages = [
  '/assets/images/img-engine-blog.png',
  '/assets/images/img-engine-blog.png',
  '/assets/images/img-engine-blog.png',
  '/assets/images/img-engine-blog.png',
  '/assets/images/img-engine-blog.png',
  '/assets/images/img-engine-blog.png',
  '/assets/images/img-engine-blog.png',
  '/assets/images/img-engine-blog.png',
  '/assets/images/img-engine-blog.png',
  '/assets/images/img-engine-blog.png',
  '/assets/images/img-engine-blog.png',
  '/assets/images/img-engine-blog.png',
  '/assets/images/img-engine-blog.png',
  '/assets/images/img-engine-blog.png',
  '/assets/images/img-engine-blog.png',
];

const SliderSection = () => {
  return (
    <section>
      <div className="slider-section-blog max-w-base mx-auto px-5">
        <Swiper
          cssMode={true}
          slidesPerView={1}
          spaceBetween={40}
          navigation={{
            nextEl: '.next',
            prevEl: '.prev',
          }}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {slideImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-56 xs:h-64 sm:h-[24rem] md:h-[28rem] lg:h-[40rem] 4xl:h-[45.375rempx] rounded-10 lg:rounded-20 overflow-hidden">
                <Image
                  src={image}
                  alt="Slide Image"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover rounded-10 lg:rounded-20"
                ></Image>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-between mt-6">
          <button className="prev w-12 h-12 relative z-10 group shrink-0 grid place-content-center bg-brand-blue-1 border border-transparent rounded-full hover:bg-white hover:border-brand-blue-1 transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-7 h-7 fill-white group-hover:fill-brand-blue-1"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
          <button className="next w-12 h-12 relative z-10  group shrink-0 grid place-content-center bg-brand-blue-1 border border-transparent rounded-full hover:bg-white hover:border-brand-blue-1 transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-7 h-7 rotate-180 fill-white group-hover:fill-brand-blue-1"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
