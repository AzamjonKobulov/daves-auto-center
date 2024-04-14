import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../../shared/Button';
import useAccordion from '@/app/hooks/useAccordion';

interface OtherFilterOnMobileProps {
  isFilterOpen: boolean;
  handleToggleFilter: () => void;
}

const OtherFilterOnMobile: React.FC<OtherFilterOnMobileProps> = ({
  isFilterOpen,
  handleToggleFilter,
}) => {
  const { toggleAccordion, accordionState } = useAccordion();

  return (
    <div
      className={`fixed left-0 inset-y-0 z-[80] w-72 ${
        isFilterOpen ? 'translate-x-0' : '-translate-x-full'
      } bg-white transition-all duration-200`}
    >
      <div className="w-full h-full relative overflow-auto pt-20 pb-10 px-5">
        <button className="absolute top-5 right-5" onClick={handleToggleFilter}>
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
        <div className="space-y-3">
          <div className="px-5">
            <button
              className="w-full flex items-center justify-between py-3"
              onClick={() => toggleAccordion(0)}
            >
              Availability
              <svg
                className={`transform ${
                  accordionState[0] ? 'rotate-180' : ''
                } transition-all duration-200`}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.04469 6.61656C2.2791 6.38222 2.59699 6.25057 2.92844 6.25057C3.2599 6.25057 3.57778 6.38222 3.81219 6.61656L9.99969 12.8041L16.1872 6.61656C16.4229 6.38886 16.7387 6.26287 17.0664 6.26571C17.3942 6.26856 17.7077 6.40002 17.9395 6.63178C18.1712 6.86354 18.3027 7.17706 18.3055 7.5048C18.3084 7.83255 18.1824 8.1483 17.9547 8.38406L10.8834 15.4553C10.649 15.6896 10.3311 15.8213 9.99969 15.8213C9.66824 15.8213 9.35035 15.6896 9.11594 15.4553L2.04469 8.38406C1.81036 8.14965 1.67871 7.83176 1.67871 7.50031C1.67871 7.16885 1.81036 6.85097 2.04469 6.61656Z"
                  fill="#232323"
                />
              </svg>
            </button>

            <AnimatePresence>
              {accordionState[0] && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3.5"
                >
                  <div className="space-y-3.5">
                    <label
                      htmlFor="inStock"
                      className="flex items-center gap-2.5 text-sm cursor-pointer"
                    >
                      <input type="checkbox" id="inStock" className="hidden" />
                      <div className="w-4 h-4 grid place-content-center border-[0.0938rem] border-brand-dark rounded-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-2.5 h-3.5 hidden"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </div>
                      In stock (5)
                    </label>
                    <label
                      htmlFor="outStock"
                      className="flex items-center gap-2.5 text-sm cursor-pointer"
                    >
                      <input type="checkbox" id="outStock" className="hidden" />
                      <div className="w-4 h-4 grid place-content-center border-[0.0938rem] border-brand-dark rounded-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-2.5 h-3.5 hidden"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </div>
                      Out of stock (0)
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="px-5">
            <button
              className="w-full flex items-center justify-between py-3"
              onClick={() => toggleAccordion(1)}
            >
              Price
              <svg
                className={`transform ${
                  accordionState[1] ? 'rotate-180' : ''
                } transition-all duration-200`}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.04469 6.61656C2.2791 6.38222 2.59699 6.25057 2.92844 6.25057C3.2599 6.25057 3.57778 6.38222 3.81219 6.61656L9.99969 12.8041L16.1872 6.61656C16.4229 6.38886 16.7387 6.26287 17.0664 6.26571C17.3942 6.26856 17.7077 6.40002 17.9395 6.63178C18.1712 6.86354 18.3027 7.17706 18.3055 7.5048C18.3084 7.83255 18.1824 8.1483 17.9547 8.38406L10.8834 15.4553C10.649 15.6896 10.3311 15.8213 9.99969 15.8213C9.66824 15.8213 9.35035 15.6896 9.11594 15.4553L2.04469 8.38406C1.81036 8.14965 1.67871 7.83176 1.67871 7.50031C1.67871 7.16885 1.81036 6.85097 2.04469 6.61656Z"
                  fill="#232323"
                />
              </svg>
            </button>

            <AnimatePresence>
              {accordionState[1] && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3.5"
                >
                  <div className="space-y-2.5">
                    {/* Range Slider filtered costs  */}
                    <p className="w-full flex items-center justify-between">
                      <span>$0.00</span>
                      <span>$300.00</span>
                    </p>

                    {/* Range Slider */}
                    <div className="w-full relative h-1.5 bg-brand-blue-1">
                      {/* Slider right track */}
                      <button className="w-2.5 h-2.5 shrink-0 absolute -left-px -top-0.5 grid place-content-center bg-white rounded-full">
                        <span className="w-2 h-2 block shrink-0  bg-brand-blue-1 rounded-full"></span>
                      </button>

                      {/* Slider left track */}
                      <button className="w-2.5 h-2.5 shrink-0 absolute -right-px -top-0.5 grid place-content-center bg-white rounded-full">
                        <span className="w-2 h-2 block shrink-0  bg-brand-blue-1 rounded-full"></span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="px-5">
            <button
              className="w-full flex items-center justify-between py-3"
              onClick={() => toggleAccordion(2)}
            >
              Size
              <svg
                className={`transform ${
                  accordionState[2] ? 'rotate-180' : ''
                } transition-all duration-200`}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.04469 6.61656C2.2791 6.38222 2.59699 6.25057 2.92844 6.25057C3.2599 6.25057 3.57778 6.38222 3.81219 6.61656L9.99969 12.8041L16.1872 6.61656C16.4229 6.38886 16.7387 6.26287 17.0664 6.26571C17.3942 6.26856 17.7077 6.40002 17.9395 6.63178C18.1712 6.86354 18.3027 7.17706 18.3055 7.5048C18.3084 7.83255 18.1824 8.1483 17.9547 8.38406L10.8834 15.4553C10.649 15.6896 10.3311 15.8213 9.99969 15.8213C9.66824 15.8213 9.35035 15.6896 9.11594 15.4553L2.04469 8.38406C1.81036 8.14965 1.67871 7.83176 1.67871 7.50031C1.67871 7.16885 1.81036 6.85097 2.04469 6.61656Z"
                  fill="#232323"
                />
              </svg>
            </button>
            <AnimatePresence>
              {accordionState[2] && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3.5"
                >
                  <div className="space-y-3.5">
                    <label
                      htmlFor="xs"
                      className="flex items-center gap-2.5 text-sm cursor-pointer"
                    >
                      <input type="checkbox" id="xs" className="hidden" />
                      <div className="w-4 h-4 grid place-content-center border-[0.0938rem] border-brand-dark rounded-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-2.5 h-3.5 hidden"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </div>
                      XS
                    </label>
                    <label
                      htmlFor="s"
                      className="flex items-center gap-2.5 text-sm cursor-pointer"
                    >
                      <input type="checkbox" id="s" className="hidden" />
                      <div className="w-4 h-4 grid place-content-center border-[0.0938rem] border-brand-dark rounded-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-2.5 h-3.5 hidden"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </div>
                      S
                    </label>
                    <label
                      htmlFor="m"
                      className="flex items-center gap-2.5 text-sm cursor-pointer"
                    >
                      <input type="checkbox" id="m" className="hidden" />
                      <div className="w-4 h-4 grid place-content-center border-[0.0938rem] border-brand-dark rounded-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-2.5 h-3.5 hidden"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </div>
                      M
                    </label>
                    <label
                      htmlFor="l"
                      className="flex items-center gap-2.5 text-sm cursor-pointer"
                    >
                      <input type="checkbox" id="l" className="hidden" />
                      <div className="w-4 h-4 grid place-content-center border-[0.0938rem] border-brand-dark rounded-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-2.5 h-3.5 hidden"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </div>
                      L
                    </label>
                    <label
                      htmlFor="xl"
                      className="flex items-center gap-2.5 text-sm cursor-pointer"
                    >
                      <input type="checkbox" id="xl" className="hidden" />
                      <div className="w-4 h-4 grid place-content-center border-[0.0938rem] border-brand-dark rounded-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-2.5 h-3.5 hidden"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </div>
                      XL
                    </label>
                    <label
                      htmlFor="2xl"
                      className="flex items-center gap-2.5 text-sm cursor-pointer"
                    >
                      <input type="checkbox" id="2xl" className="hidden" />
                      <div className="w-4 h-4 grid place-content-center border-[0.0938rem] border-brand-dark rounded-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-2.5 h-3.5 hidden"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </div>
                      2XL
                    </label>
                    <label
                      htmlFor="3xl"
                      className="flex items-center gap-2.5 text-sm cursor-pointer"
                    >
                      <input type="checkbox" id="3xl" className="hidden" />
                      <div className="w-4 h-4 grid place-content-center border-[0.0938rem] border-brand-dark rounded-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-2.5 h-3.5 hidden"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </div>
                      3XL
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center justify-center mt-16">
          <Button black className="h-11 text-17">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OtherFilterOnMobile;
