import { AnimatePresence, motion } from 'framer-motion';

import useAccordion from '@/app/hooks/useAccordion';

const TshirtDetailAccordion = () => {
  const { toggleAccordion, accordionState } = useAccordion();
  return (
    <div className="space-y-5">
      <div className="min-h-12 border-b  border-brand-gray/50 transition-all duration-200">
        <button
          className="w-full flex items-center justify-between lg:text-17 font-bold mb-3"
          onClick={() => toggleAccordion(0)}
        >
          Description
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

        {accordionState[0] && (
          <div>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              voluptatibus facere totam iure aliquid porro minus exercitationem
              explicabo harum ea, voluptatum quis quam, impedit ad similique
              tempora nisi inventore possimus.
            </p>
          </div>
        )}
      </div>
      <div className="min-h-12 border-b  border-brand-gray/50 transition-all duration-200">
        <button
          className="w-full flex items-center justify-between lg:text-17 font-bold mb-3"
          onClick={() => toggleAccordion(1)}
        >
          Size guide
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

        {accordionState[1] && (
          <div>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              voluptatibus facere totam iure aliquid porro minus exercitationem
              explicabo harum ea, voluptatum quis quam, impedit ad similique
              tempora nisi inventore possimus.
            </p>
          </div>
        )}
      </div>
      <div className="min-h-12 border-b  border-brand-gray/50 transition-all duration-200">
        <button
          className="w-full flex items-center justify-between lg:text-17 font-bold mb-3"
          onClick={() => toggleAccordion(2)}
        >
          Shipping
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

        {accordionState[2] && (
          <div>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              voluptatibus facere totam iure aliquid porro minus exercitationem
              explicabo harum ea, voluptatum quis quam, impedit ad similique
              tempora nisi inventore possimus.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TshirtDetailAccordion;
