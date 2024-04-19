import useQuantity from '@/app/hooks/useQuantity';
import Image from 'next/image';

const CartProduct = () => {
  const { qty, setQty, addQty, subsQty } = useQuantity();

  return (
    <div className="border-b border-brand-gray/50 text-brand-dark py-8 sm:py-5">
      <div className="flex items-end lg:items-center justify-between">
        <div className="lg:w-2/3 flex items-center gap-2.5">
          <div className="w-20 h-[5.5rem] sm:w-100 sm:h-100 shrink-0 overflow-hidden">
            <Image
              src="/assets/images/img-t-shirt.jpg"
              alt="T shirt"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-5">
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
        <p className="text-17 pb-3 sm:pb-0">$35.00</p>
      </div>
    </div>
  );
};

export default CartProduct;
