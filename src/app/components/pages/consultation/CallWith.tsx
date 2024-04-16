import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../../shared/Button';

interface CallWithProps {
  onToggleCallWith: () => void;
}

const CallWith: React.FC<CallWithProps> = ({ onToggleCallWith }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="sm:fixed inset-0 flex items-center justify-center z-[60] sm:bg-black/50 sm:px-5 sm:py-5"
    >
      <div className="lg:max-w-4xl xl:max-w-5xl w-full max-h-full oveflow-auto fixed sm:relative inset-0 z-[60] mx-auto  bg-white sm:rounded-10 lg:rounded-20 shadow-privacy overflow-auto pt-14 sm:pt-16 px-5 pb-5 lg:p-10 xl:p-50">
        <button
          className="absolute top-5 right-5 lg:top-8 lg:right-8"
          onClick={onToggleCallWith}
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
        <div className="space-y-5">
          <h2 className="text-2xl lg:text-[2rem] text-center font-bold text-brand-dark">
            Please fill out the from
          </h2>
          <div className="">
            <form
              action="#"
              className="min-h-max w-full grid md:grid-cols-2 gap-5 text-brand-dark"
            >
              <label htmlFor="Need" className="space-y-5">
                <span className="text-17"> Vehicle</span>
                <input
                  type="text"
                  id="Need"
                  className="h-12 w-full border border-brand-gray/50 rounded outline-brand-blue/70 text-15 placeholder:text-brand-dark/50 px-4"
                  placeholder="Need"
                />
              </label>
              <label htmlFor=" Vehicle" className="flex items-end">
                <input
                  type="text"
                  id=" Vehicle"
                  className="h-12 w-full border border-brand-gray/50 rounded outline-brand-blue/70 text-15 placeholder:text-brand-dark/50 px-4"
                  placeholder="Model"
                />
              </label>
              <div className="grid grid-cols-2 gap-5">
                <label htmlFor="Year" className="">
                  <input
                    type="text"
                    id="Year"
                    className="h-12 w-full border border-brand-gray/50 rounded outline-brand-blue/70 text-15 placeholder:text-brand-dark/50 px-4"
                    placeholder="Year"
                  />
                </label>
                <label htmlFor="VIN">
                  <input
                    type="text"
                    id="VIN"
                    className="h-12 w-full border border-brand-gray/50 rounded outline-brand-blue/70 text-15 placeholder:text-brand-dark/50 px-4"
                    placeholder="VIN"
                  />
                </label>
              </div>
              <label htmlFor="Mileage">
                <input
                  type="text"
                  id="Mileage"
                  className="h-12 w-full border border-brand-gray/50 rounded outline-brand-blue/70 text-15 placeholder:text-brand-dark/50 px-4"
                  placeholder="Mileage"
                />
              </label>
              <label
                htmlFor="symptoms"
                className="flex flex-col justify-between space-y-2"
              >
                <span>
                  What are the current symptoms (not what you think is wrong,
                  but the symptoms that are occuring)?   
                </span>
                <textarea
                  id="symptoms"
                  className="h-20 w-full border border-brand-gray/50 resize-none rounded outline-brand-blue/70 text-15 placeholder:text-brand-dark/50 p-4"
                  placeholder="Write here"
                ></textarea>
              </label>
              <label
                htmlFor="pattern"
                className="flex flex-col justify-between space-y-2"
              >
                <span>
                  The frequency that said symptom occurs, or pattern when it
                  happens
                </span>
                <textarea
                  id="pattern"
                  className="h-20 w-full border border-brand-gray/50 resize-none rounded outline-brand-blue/70 text-15 placeholder:text-brand-dark/50 p-4"
                  placeholder="Write here"
                ></textarea>
              </label>
              <label
                htmlFor="trouble"
                className="flex flex-col justify-between space-y-2"
              >
                <span>Any engine or trouble fault codes?</span>
                <textarea
                  id="trouble"
                  className="h-20 w-full border border-brand-gray/50 resize-none rounded outline-brand-blue/70 text-15 placeholder:text-brand-dark/50 p-4"
                  placeholder="Write here"
                ></textarea>
              </label>
              <label
                htmlFor="done"
                className="flex flex-col justify-between space-y-2"
              >
                <span>
                  Work done?  I.e - What has been done to try and fix the
                  problem, and if parts were replaced where were they purchased
                  from and the brand of the part?
                </span>
                <textarea
                  id="done"
                  className="h-20 w-full border border-brand-gray/50 resize-none rounded outline-brand-blue/70 text-15 placeholder:text-brand-dark/50 p-4"
                  placeholder="Write here"
                ></textarea>
              </label>
              <label
                htmlFor="history"
                className="flex flex-col justify-between space-y-2"
              >
                <span>What is the service and repair history?</span>
                <textarea
                  id="history"
                  className="h-20 w-full border border-brand-gray/50 resize-none rounded outline-brand-blue/70 text-15 placeholder:text-brand-dark/50 p-4"
                  placeholder="Write here"
                ></textarea>
              </label>
              <label
                htmlFor="modifications"
                className="flex flex-col justify-between space-y-2"
              >
                <span>
                  Have aftermarket modifications been done to the vehicle?
                </span>
                <textarea
                  id="modifications"
                  className="h-20 w-full border border-brand-gray/50 resize-none rounded outline-brand-blue/70 text-15 placeholder:text-brand-dark/50 p-4"
                  placeholder="Write here"
                ></textarea>
              </label>
              <label
                htmlFor="logging"
                className="flex flex-col justify-between space-y-2"
              >
                <span>Can you provide scanner data and or logging?</span>
                <textarea
                  id="logging"
                  className="h-20 w-full border border-brand-gray/50 resize-none rounded outline-brand-blue/70 text-15 placeholder:text-brand-dark/50 p-4"
                  placeholder="Write here"
                ></textarea>
              </label>{' '}
              <label
                htmlFor="information"
                className="flex flex-col justify-between space-y-2"
              >
                <span>Any additional information that might be helpful?</span>
                <textarea
                  id="information"
                  className="h-20 w-full border border-brand-gray/50 resize-none rounded outline-brand-blue/70 text-15 placeholder:text-brand-dark/50 p-4"
                  placeholder="Write here"
                ></textarea>
              </label>
              <Button
                blue
                className="h-sixty sm:h-16 col-span-2 mt-auto mb-20 lg:mb-0"
                onClick={() => {
                  onToggleCallWith();
                }}
              >
                Continue
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CallWith;
