import useQuantity from '@/app/hooks/useQuantity';
import Image from 'next/image';

const CartProduct = () => {
  const { qty, setQty, addQty, subsQty } = useQuantity();

  return (
    <div className="text-brand-dark py-8 sm:py-5">
      <div className="flex items-end lg:items-center justify-between">
        <div className="lg:w-2/3 flex items-center gap-2.5">
          <div className="w-20 h-[5.5rem] shrink-0 overflow-hidden">
            <Image
              src="/assets/images/img-t-shirt.jpg"
              alt="T shirt"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex flex-col xl:flex-row xl:items-center justify-between gap-2">
            <div className="">
              <p className="font-semibold">Classic t-shirt</p>
              <p className="text-xs">Size: M</p>
            </div>
            <div className="w-fit h-8 grid grid-cols-3 text-15 text-brand-dark bg-brand-gray-300 border border-brand-gray/50 rounded px-3">
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
        <div className="flex flex-col items-end gap-7 xl:gap-4">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <p className="text-17 pb-3 sm:pb-0">$35.00</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
