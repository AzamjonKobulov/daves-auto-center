'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Button from '@/app/components/shared/Button';

const FavoriteTShirt = () => {
  const [liked, setLiked] = useState<boolean>(true);

  const handleToggleLiked = () => {
    setLiked((liked) => !liked);
  };

  return (
    <Link
      href=""
      className="relative space-y-8 group bg-white lg:border border-brand-gray rounded-10 hover:shadow-privacy transition-all duration-200"
    >
      <div className="relative pt-7 lg:pt-11 px-8 lg:px-9">
        <button
          onClick={handleToggleLiked}
          className="absolute top-2.5 right-2.5 xs:top-5 xs:right-5 z-10"
        >
          {liked ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 xs:w-auto xs:h-auto"
            >
              <path
                d="M22.5 8.8125C22.5 15.375 12.7697 20.6869 12.3553 20.9062C12.2461 20.965 12.124 20.9958 12 20.9958C11.876 20.9958 11.7539 20.965 11.6447 20.9062C11.2303 20.6869 1.5 15.375 1.5 8.8125C1.50174 7.27146 2.11468 5.79404 3.20436 4.70436C4.29404 3.61468 5.77146 3.00174 7.3125 3C9.24844 3 10.9434 3.8325 12 5.23969C13.0566 3.8325 14.7516 3 16.6875 3C18.2285 3.00174 19.706 3.61468 20.7956 4.70436C21.8853 5.79404 22.4983 7.27146 22.5 8.8125Z"
                fill="#EB0001"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 xs:w-auto xs:h-auto"
            >
              <path
                d="M16.6875 3.1875C14.7188 3.1875 13.0069 4.07531 12 5.56313C10.9931 4.07531 9.28125 3.1875 7.3125 3.1875C5.82119 3.18924 4.39146 3.78243 3.33694 4.83694C2.28243 5.89146 1.68924 7.32119 1.6875 8.8125C1.6875 11.55 3.39375 14.3991 6.75937 17.2791C8.30161 18.5932 9.96751 19.7549 11.7338 20.7478C11.8156 20.7918 11.9071 20.8148 12 20.8148C12.0929 20.8148 12.1844 20.7918 12.2662 20.7478C14.0325 19.7549 15.6984 18.5932 17.2406 17.2791C20.6062 14.3991 22.3125 11.55 22.3125 8.8125C22.3108 7.32119 21.7176 5.89146 20.6631 4.83694C19.6085 3.78243 18.1788 3.18924 16.6875 3.1875ZM12 19.6041C10.4616 18.7163 2.8125 14.0363 2.8125 8.8125C2.81374 7.61941 3.28825 6.47553 4.13189 5.63189C4.97553 4.78825 6.11941 4.31374 7.3125 4.3125C9.21375 4.3125 10.8103 5.32781 11.4797 6.96281C11.5221 7.06598 11.5942 7.15422 11.6868 7.21632C11.7795 7.27842 11.8885 7.31158 12 7.31158C12.1115 7.31158 12.2205 7.27842 12.3132 7.21632C12.4058 7.15422 12.4779 7.06598 12.5203 6.96281C13.1897 5.32781 14.7863 4.3125 16.6875 4.3125C17.8806 4.31374 19.0245 4.78825 19.8681 5.63189C20.7118 6.47553 21.1863 7.61941 21.1875 8.8125C21.1875 14.0363 13.5384 18.7163 12 19.6041Z"
                fill="#EB0001"
              />
            </svg>
          )}
        </button>
        <Image
          src="/assets/images/img-t-shirt.png"
          alt="T-shirt"
          width={215}
          height={222}
          className="w-full h-full group-hover:scale-125 transition-all duration-200"
        ></Image>
      </div>
      <div className="space-y-1 text-center p-4">
        <p className="text-[0.8125rem] lg:text-sm">T-shirt with a truck</p>
        <p className="font-medium text-base lg:text-sm">$30.00</p>
      </div>
      <Button
        red
        className="hidden lg:group-hover:block h-11 w-3/4 absolute left-1/2 bottom-1/4 -translate-x-1/2 !text-sm !px-5 xl:!text-17 xl:!px-8"
      >
        add to cart
      </Button>
      <button
        onClick={handleToggleLiked}
        className="hidden lg:group-hover:block absolute bottom-2.5 right-2.5"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
            fill="#898989"
          />
        </svg>
      </button>
    </Link>
  );
};

export default FavoriteTShirt;
