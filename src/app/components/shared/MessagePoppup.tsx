import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import { useState } from 'react';

interface MessagePoppupProps {
  onToggleMessage: () => void;
}

const MessagePoppup: React.FC<MessagePoppupProps> = ({ onToggleMessage }) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-5"
    >
      <div className="max-w-5xl w-full h-4/5 lg:h-[95%] relative flex items-center justify-center bg-white text-brand-dark rounded-10 lg:rounded-20 shadow-privacy py-10 sm:py-16 lg:pt-28 lg:pb-40 px-7">
        <button
          onClick={onToggleMessage}
          className="absolute top-5 right-5 lg:top-8 lg:right-8"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 20L4 4M20 4L4 20"
              stroke="#232323"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <AnimatePresence>
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-3 text-center"
            >
              <h2 className="text-2xl sm:text-4xl lg:text-[3.125rem] lg:leading-[3.625rem] font-bold">
                Thank you for your message!
              </h2>
              <p className="sm:text-lg lg:text-xl">
                We will answer you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-2xl w-full space-y-10 lg:space-y-16 text-center"
            >
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-4xl lg:text-[3.125rem] lg:leading-[3.625rem] font-bold">
                  Dear client, <br /> welcome to Dave&apos;s auto!
                </h2>
                <p className="sm:text-lg lg:text-xl">
                  If you have any questions. please contact us:
                </p>
              </div>
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-2.5">
                  <a
                    href="tel:+1 (801) 921-6600"
                    className="h-12 sm:h-sixty lg:h-16 group flex items-center justify-center bg-brand-blue-1 text-white text-sm lg:text-17 font-medium border border-transparent rounded-10 hover:bg-white hover:border-brand-blue-1 hover:text-brand-blue-1 transition-all duration-200 gap-2.5"
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-white group-hover:fill-brand-blue-1 transition-all duration-200"
                    >
                      <path d="M22.2388 16.4138C22.0716 17.6841 21.4477 18.8502 20.4837 19.6942C19.5196 20.5382 18.2813 21.0023 17 21.0001C9.55626 21.0001 3.50001 14.9438 3.50001 7.50005C3.49771 6.21876 3.9619 4.98045 4.80588 4.01639C5.64986 3.05234 6.81592 2.42847 8.08626 2.2613C8.4075 2.22208 8.7328 2.2878 9.01362 2.44865C9.29444 2.60951 9.5157 2.85686 9.64438 3.1538L11.6244 7.57412V7.58537C11.7229 7.81267 11.7636 8.06083 11.7428 8.30769C11.722 8.55455 11.6404 8.79242 11.5053 9.00005C11.4884 9.02537 11.4706 9.0488 11.4519 9.07224L9.50001 11.386C10.2022 12.8129 11.6947 14.2922 13.1403 14.9963L15.4222 13.0547C15.4446 13.0359 15.4681 13.0184 15.4925 13.0022C15.7 12.8639 15.9387 12.7794 16.187 12.7565C16.4353 12.7336 16.6854 12.7729 16.9147 12.871L16.9269 12.8766L21.3434 14.8557C21.6409 14.9839 21.8889 15.205 22.0503 15.4858C22.2116 15.7667 22.2778 16.0922 22.2388 16.4138Z" />
                    </svg>
                    (801) 823-4194
                  </a>
                  <a
                    href="mailto:admin@davesautoutah.com"
                    className="h-12 sm:h-sixty lg:h-16 group flex items-center justify-center bg-brand-blue-1 text-white text-sm lg:text-17 font-medium border border-transparent rounded-10 hover:bg-white hover:border-brand-blue-1 hover:text-brand-blue-1 transition-all duration-200 gap-2.5"
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.5 4H4.5C3.4 4 2.51 4.9 2.51 6L2.5 18C2.5 19.1 3.4 20 4.5 20H20.5C21.6 20 22.5 19.1 22.5 18V6C22.5 4.9 21.6 4 20.5 4ZM20.5 8L12.5 13L4.5 8V6L12.5 11L20.5 6V8Z"
                        fill="white"
                      />
                    </svg>
                    davesautorepairutah.com
                  </a>
                </div>
                <form action="#">
                  <textarea
                    id="symptoms"
                    className="h-32 lg:h-40 w-full border border-brand-gray/50 resize-none rounded outline-brand-blue/70 text-sm sm:text-15 placeholder:text-xs placeholder:sm:text-15 placeholder:text-brand-dark p-4"
                    placeholder="Write your message here. We will answer you shortly."
                  ></textarea>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsSuccess(true);
                    }}
                    blue
                    className="w-full h-12 sm:h-sixty lg:h-16"
                  >
                    Send a message
                  </Button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MessagePoppup;
