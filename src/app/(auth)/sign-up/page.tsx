import Button from '@/app/components/shared/Button';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="max-w-lg mx-auto space-y-8 py-16 lg:pt-32 lg:pb-60 px-5 xs:px-4">
      <h1 className="text-3xl lg:text-5xl font-bold text-black text-center">
        Create account
      </h1>
      <div className="space-y-8">
        <form
          action="#"
          className="space-y-4 text-brand-dark border-b border-brand-dark pb-8"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 outline-none border border-brand-dark placeholder:text-brand-dark p-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 outline-none border border-brand-dark placeholder:text-brand-dark p-3"
          />
          <Button roundedBlack className="w-full h-12">
            Log In
          </Button>
        </form>
        <div className="space-y-6">
          <div className="space-y-4">
            <Button
              blackBordered
              className="h-12 w-full group flex items-center justify-center gap-3"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-white"
              >
                <path d="M21 11.7898C21 15.9398 18.79 20.9998 12.13 20.9998C7.12461 21.033 3.03852 17.0051 3 11.9998C3.03852 6.99437 7.12461 2.96646 12.13 2.99972C14.2007 3.0074 16.2085 3.71189 17.83 4.99972C17.942 5.09125 18.0109 5.22533 18.02 5.36972C18.0206 5.51581 17.963 5.65613 17.86 5.75972C17.209 6.35492 16.5882 6.98237 16 7.63972C15.8289 7.82802 15.5422 7.85408 15.34 7.69972C14.4161 7.016 13.2888 6.6637 12.14 6.69972C9.18528 6.69972 6.79 9.095 6.79 12.0498C6.79 15.0045 9.18528 17.3998 12.14 17.3998C15.14 17.3998 16.41 16.1198 17.07 13.8498H12.5C12.2239 13.8498 12 13.6259 12 13.3498V10.6998C12 10.4236 12.2239 10.1998 12.5 10.1998H20.5C20.7302 10.1983 20.9244 10.3709 20.95 10.5998C20.9871 10.9953 21.0038 11.3925 21 11.7898Z" />
              </svg>
              Log in with Google
            </Button>
            <Button
              blackBordered
              className="h-12 w-full group flex items-center justify-center gap-3"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-white"
              >
                <path d="M22.5 12.3038C22.5 6.74719 18.0229 2.24268 12.5 2.24268C6.97715 2.24268 2.5 6.74719 2.5 12.3038C2.5 17.3255 6.15684 21.4879 10.9375 22.2427V15.2121H8.39844V12.3038H10.9375V10.0872C10.9375 7.56564 12.4305 6.1728 14.7146 6.1728C15.8088 6.1728 16.9531 6.36931 16.9531 6.36931V8.84529H15.6922C14.45 8.84529 14.0625 9.6209 14.0625 10.4166V12.3038H16.8359L16.3926 15.2121H14.0625V22.2427C18.8432 21.4879 22.5 17.3257 22.5 12.3038Z" />
              </svg>
              Log in with Facebook
            </Button>
            <Button
              blackBordered
              className="h-12 w-full group flex items-center justify-center gap-3"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-white"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.8462 6.56505C11.9594 6.66486 12.1104 6.71054 12.26 6.69021C13.2611 6.50561 14.1566 5.95258 14.77 5.14021C15.3664 4.38752 15.7156 3.46897 15.77 2.51021C15.7745 2.35133 15.7046 2.19945 15.5811 2.09945C15.4576 1.99944 15.2945 1.96275 15.14 2.00021C14.1751 2.25217 13.3121 2.79721 12.67 3.56021C12.0599 4.29728 11.7086 5.21419 11.67 6.17021C11.6686 6.32115 11.7329 6.46524 11.8462 6.56505ZM19.2025 9.22573C18.6109 9.7809 17.68 10.6544 17.68 12.5102C17.6661 14.1671 18.576 15.694 20.04 16.4702C20.2211 16.552 20.3382 16.7315 20.34 16.9302C20.34 17.0002 18.24 22.0002 15.72 22.0002C15.1683 22.0002 14.8006 21.8263 14.3979 21.6359C13.91 21.4052 13.3705 21.1502 12.39 21.1502C11.4236 21.1502 10.8828 21.3979 10.3851 21.6259C9.96094 21.8202 9.56815 22.0002 8.97001 22.0002C6.65001 22.0002 3.50001 17.1402 3.50001 12.7502C3.46015 11.5102 3.76846 10.2839 4.39001 9.21021C5.26661 7.72454 6.82762 6.77518 8.55001 6.68021C9.36168 6.68021 10.0261 6.91911 10.6546 7.14508C11.2186 7.34785 11.7536 7.54021 12.34 7.54021C12.8999 7.54021 13.3517 7.36489 13.8473 7.17257C14.4495 6.93894 15.1163 6.68021 16.12 6.68021C17.95 6.68021 19.68 8.00021 19.68 8.59021C19.68 8.77768 19.4781 8.96717 19.2025 9.22573Z"
                />
              </svg>
              Log in with Apple
            </Button>
          </div>

          <div className="space-y-9 text-center">
            <p className="flex items-center justify-center gap-1">
              Already have an account?
              <Link href="/log-in" className="underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
