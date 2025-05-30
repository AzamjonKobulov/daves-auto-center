import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../../shared/Button';

interface WhoIsTysonProps {
  onToggleTyson: () => void;
  onToggleCallWith: () => void;
}

const WhoIsTyson: React.FC<WhoIsTysonProps> = ({
  onToggleTyson,
  onToggleCallWith,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 sm:grid place-content-center z-[60] sm:bg-black/50 overflow-auto sm:overflow-visible sm:px-5"
      onClick={onToggleTyson}
    >
      <div className="sm:w-4/5 lg:w-auto mx-auto lg:mx-0 lg:max-w-4xl xl:max-w-5xl w-full sm:relative bg-white sm:rounded-10 lg:rounded-20 shadow-privacy overflow-auto sm:my-5 pt-14 sm:pt-16 px-5 pb-5 md:p-10 xl:p-sixty">
        <div
          className="h-max grid lg:grid-cols-2 gap-8 xl:gap-16"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button
            className="absolute top-5 right-5 lg:top-8 lg:right-8"
            onClick={(e) => {
              e.stopPropagation();
              onToggleTyson();
            }}
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
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="lg:h-full sm:h-[600px] aspect-square sm:aspect-auto rounded-10 overflow-hidden">
            <Image
              src="/assets/images/img-tyson.png"
              alt="Tyson"
              width={400}
              height={700}
              className="w-full h-full object-cover object-top lg:object-center"
            />
          </div>
          <div className="flex flex-col justify-between lg:gap-10">
            <div className="space-y-8 text-brand-dark text-15 sm:text-17">
              <h2 className="text-2xl sm:text-4xl lg:text-[3.125rem] font-bold">
                Tyson
              </h2>
              <ul className="list-disc px-5 xl:px-7">
                <li>
                  Tyson has been Dave&apos;s right hand guy for more than 28
                  years. He&apos;s the lead mechanic and Shop Foreman
                </li>
                <li>
                  Tyson is an ASE master tech with L1R Automotive
                  Advanced Engine Performance and F1 Compressed Natural Gas
                  Vehicle ASE certs
                </li>
                <li>
                  He does any type of mechanical repair, on all makes and
                  models, gasoline and diesel
                </li>
                <li>
                  His specialty is driveability diagnosis, engine fault code
                  diagnosis, and electrical diagnosis.
                </li>
              </ul>
              <div className="space-y-1">
                <p>Available hours:</p>
                <p className="text-xs sm:text-17">Tue & Thu: 9 am - 4 pm</p>
                <p className="text-xs sm:text-17">(Lunch break 12 pm - 1 pm)</p>
              </div>
            </div>
            <form action="#">
              <textarea
                className="h-40 w-full lg:hidden resize-none text-15 outline-brand-blue-1/70 border border-brand-gray/50 rounded-10 mt-8 mb-4 p-4"
                placeholder="Write questions that you would like to ask Tyson, so he could prepare for the call and help you resolve your problem."
              ></textarea>
            </form>
            <Button
              blue
              className="h-sixty sm:h-16 w-full mt-auto mb-10 lg:mb-0"
              onClick={() => {
                onToggleTyson();
                onToggleCallWith();
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhoIsTyson;
