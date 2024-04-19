'use client';

import Image from 'next/image';
import Button from '@/app/components/shared/Button';
import useQuantity from '@/app/hooks/useQuantity';

const OrderReview = () => {
  const { qty, setQty, addQty, subsQty } = useQuantity();

  return (
    <div className="max-w-2xl mx-auto space-y-10 sm:space-y-9 sm:px-6 py-10 lg:py-12">
      <div className="flex items-stretch sm:items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-20 h-[5.5rem] sm:w-100 sm:h-100 shrink-0 overflow-hidden">
            <Image
              src="/assets/images/img-t-shirt.jpg"
              alt="T shirt"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="">
              <p className="text-17 font-semibold">Classic t-shirt</p>
              <p className="text-sm">Size: M</p>
            </div>
            <div className="w-fit h-10 sm:hidden grid grid-cols-3 text-15 text-brand-dark bg-brand-gray-300 border border-brand-gray/50 rounded px-3">
              <button
                className="h-full min-w-5 grid place-content-center"
                onClick={subsQty}
              >
                -
              </button>
              <p className="h-full min-w-5 grid place-content-center">{qty}</p>
              <button
                className="h-full min-w-5 grid place-content-center"
                onClick={addQty}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button className="hidden sm:flex items-center gap-2.5 text-15">
          Go back
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6666 13.6117C13.0356 11.6207 11.5873 10.491 10.3213 10.2223C9.05559 9.95401 7.85058 9.91334 6.70592 10.1007V13.6663L1.33325 7.84801L6.70592 2.33301V5.72201C8.82225 5.73867 10.6213 6.49801 12.1033 7.99967C13.5849 9.50134 14.4396 11.372 14.6666 13.6117Z"
              stroke="#898989"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className="flex sm:hidden flex-col items-end justify-between">
          <button>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 4H16L15 3H10L9 4H5.5V6H19.5M6.5 19C6.5 19.5304 6.71071 20.0391 7.08579 20.4142C7.46086 20.7893 7.96957 21 8.5 21H16.5C17.0304 21 17.5391 20.7893 17.9142 20.4142C18.2893 20.0391 18.5 19.5304 18.5 19V7H6.5V19Z"
                fill="#898989"
              />
            </svg>
          </button>
          <p className="text-17">$35.00</p>
        </div>
      </div>
      <div className="space-y-6 sm:space-y-4">
        <div className="flex gap-2.5">
          <div className="w-50 h-50 shrink-0 grid place-content-center bg-brand-blue-1 text-white text-xs font-semibold rounded-full">
            AP
          </div>
          <div className="space-y-1.5">
            <div>
              <div className="flex items-center gap-4">
                <p className="text-17 font-semibold">Addison P</p>
                <p className="hidden sm:block text-xs text-brand-gray">
                  (You can edit your information in the profile)
                </p>
              </div>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={idx}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0008 16.6857L12.2591 16.8419L16.4091 19.3519L16.4092 19.352C16.7888 19.5818 17.2536 19.2443 17.1533 18.813L16.0534 14.0932L15.9849 13.7994L16.2129 13.6019L19.8829 10.4219L19.8831 10.4217C20.2198 10.1302 20.0356 9.58279 19.6007 9.54819L19.598 9.54798L14.768 9.13797L14.4676 9.11247L14.3499 8.83486L12.4599 4.37485L12.4593 4.37329C12.2908 3.97193 11.7098 3.97193 11.5413 4.37329L11.5405 4.37523L9.65053 8.82523L9.53277 9.10249L9.23261 9.12797L4.40261 9.53797L4.39996 9.5382L4.39996 9.53819C3.96505 9.57279 3.78084 10.1202 4.11757 10.4117L4.11774 10.4119L7.78774 13.5919L8.01574 13.7894L7.94727 14.0833L6.84732 18.803L12.0008 16.6857ZM12.0008 16.6857L11.7423 16.8415M12.0008 16.6857L11.7423 16.8415M11.7423 16.8415L7.59231 19.3415L7.59142 19.342M11.7423 16.8415L7.59142 19.342M7.59142 19.342C7.21186 19.5717 6.7472 19.2344 6.84727 18.8033L7.59142 19.342Z"
                      stroke="#FFC700"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <p className="sm:hidden text-xs text-brand-gray">
              (You can edit your information in the profile)
            </p>
          </div>
        </div>
        <form action="#">
          <textarea
            id="symptoms"
            className="h-32 lg:h-40 w-full border border-brand-gray/50 resize-none rounded outline-brand-blue/70 text-sm sm:text-15 placeholder:text-xs placeholder:sm:text-15 placeholder:text-brand-dark p-4"
            placeholder="Write your review here."
          ></textarea>
          <Button blue className="w-full h-12 sm:h-sixty lg:h-16">
            Send a message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default OrderReview;
