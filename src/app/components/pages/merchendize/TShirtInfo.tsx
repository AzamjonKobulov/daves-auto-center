import { Dispatch, SetStateAction } from 'react';
import Button from '../../shared/Button';
import TshirtDetailAccordion from './TshirtDetailAccordion';
import CustomerReviews from './CustomerReviews';

interface TShirtInfoProps {
  sizes: string[];
  selectedSize: string;
  setSelectedSize: Dispatch<SetStateAction<string>>;
  qty: number;
  addQty: () => void;
  subsQty: () => void;
}

const TShirtInfo: React.FC<TShirtInfoProps> = ({
  sizes,
  selectedSize,
  setSelectedSize,
  qty,
  addQty,
  subsQty,
}) => {
  return (
    <div className="md:col-span-2 lg:col-span-1 space-y-16">
      <div className="space-y-8 lg:space-y-10">
        <div className="space-y-3">
          <h2 className="text-2xl lg:text-4xl font-bold">
            Classic t-shirt with the truck
          </h2>
          <p className="lg:text-17">$35.00</p>
        </div>
        <div className="space-y-3">
          <p className="lg:text-17">Size</p>
          <div className="flex items-center gap-2.5 text-brand-dark">
            {sizes.map((size) => (
              <button
                key={size}
                className={`w-10 h-10 shrink-0 grid place-content-center ${
                  selectedSize === size
                    ? 'bg-brand-blue-1 border-none text-white'
                    : 'bg-white border border-brand-gray/50'
                }  text-15 uppercase  rounded`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="lg:text-17">Quantity</p>
          <div className="w-fit h-10 grid grid-cols-3 text-15 text-brand-dark border border-brand-gray/50 rounded px-3">
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
        <Button red className="h-50 lg:h-sixty w-full text-sm lg:text-base">
          add to cart
        </Button>
      </div>
      <TshirtDetailAccordion />
      <CustomerReviews />
    </div>
  );
};

export default TShirtInfo;
