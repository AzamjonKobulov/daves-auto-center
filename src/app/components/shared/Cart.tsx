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
      onClick={onToggleCart}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="h-full max-w-96 xl:max-w-md w-full relative min-h-screen flex flex-col justify-between bg-white ml-auto pt-10 pb-10"
      >
        <div
          className="overflow-auto"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleCart();
            }}
            className="absolute top-5 right-5"
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
          <h2 className="sticky top-0 text-2xl font-bold text-center bg-white pb-3">
            Your cart
          </h2>
          <div className="h-fit divide-y divide-brand-gray/50 overflow-auto px-4 lg:px-6">
            {Array.from({ length: 8 }).map((_, idx) => (
              <CartProduct key={idx} />
            ))}
          </div>
        </div>

        <div className="sticky bottom-0 flex flex-col justify-between bg-white pt-5 border-t border-brand-gray px-4 lg:px-7">
          <div className="space-y-8">
            <div className="space-y-2 text-sm">
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
              <Button red className="w-full h-12 lg:h-50 text-sm mb-3">
                check out
              </Button>
              <Link
                href="/merchendize"
                className="text-sm hover:underline transition-all duration-200"
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
