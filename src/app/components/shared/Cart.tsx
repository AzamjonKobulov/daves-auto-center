import { motion } from 'framer-motion';

import CartProduct from './CartProduct';
import Button from './Button';
import Link from 'next/link';

const Cart: React.FC<{ onToggleCart: () => void }> = ({ onToggleCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] text-brand-dark bg-black/50"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="max-w-96 lg:max-w-[40rem] w-full relative min-h-screen flex flex-col justify-between bg-white ml-auto px-4 pt-16 lg:px-10 pb-10"
      >
        <div>
          <button
            onClick={onToggleCart}
            className="absolute top-8 right-8 lg:top-10 lg:right-50 pb-10"
          >
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
          <h2 className="text-2xl lg:text-4xl font-bold text-center">
            Your cart
          </h2>
          <div>
            <CartProduct />
            <CartProduct />
          </div>
        </div>

        <div className=" flex flex-col justify-between pt-8 lg:pt-12 border-t border-brand-gray">
          <div className="space-y-8 lg:space-y-14">
            <div className="space-y-5 lg:space-y-8 text-17">
              <div className="flex items-center justify-between">
                <p className="font-semibold uppercase">Shipping</p>
                <p>Calculate at Checkout</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold uppercase">Subtotal</p>
                <p>$73.00</p>
              </div>
            </div>
            <div className="text-center">
              <Button
                red
                className="w-full h-sixty lg:h-[4.625rem] mb-6 lg:mb-8"
              >
                check out
              </Button>
              <Link
                href="/merchendize"
                className="text-sm lg:text-17 hover:underline transition-all duration-200"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Cart;
