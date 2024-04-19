import Button from '@/app/components/shared/Button';
import useQuantity from '@/app/hooks/useQuantity';
import Image from 'next/image';

const Product = () => {
  const { qty, setQty, addQty, subsQty } = useQuantity();

  return (
    <div className="border-b border-brand-gray/50 py-8 sm:py-4">
      <div className="flex xl:grid grid-cols-2 gap-8 xl:gap-20 justify-between sm:items-center">
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
          <div className="w-full flex flex-col sm:flex-row lg:flex-col xl:flex-row sm:items-center lg:items-start xl:items-center gap-5 sm:gap-10 lg:gap-2 justify-between">
            <div className="">
              <p className="text-17 font-semibold">Classic t-shirt</p>
              <p className="text-sm">Size: M</p>
            </div>
            <div className="w-fit h-10 grid grid-cols-3 text-15 text-brand-dark bg-brand-gray-300 border border-brand-gray/50 rounded px-3">
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
        <div className="flex flex-col-reverse sm:flex-row gap-5 justify-between items-end sm:items-center lg:justify-end lg:gap-8">
          <p className="text-17 pb-3 sm:pb-0">$35.00</p>
          <div className="flex items-center gap-3">
            <Button red className="h-11 hidden md:block w-full sm:w-auto">
              add to cart
            </Button>

            <button>
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
          </div>
        </div>
      </div>
      <div className=" flex justify-end">
        <Button red className="h-11 md:hidden w-full sm:w-auto mt-8 sm:mt-0">
          add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
