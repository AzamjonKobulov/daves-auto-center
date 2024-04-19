import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../../shared/Button';

interface WhoIsDaveProps {
  onToggleDave: () => void;
  onToggleCallWith: () => void;
}

const WhoIsTyson: React.FC<WhoIsDaveProps> = ({
  onToggleCallWith,
  onToggleDave,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="sm:fixed inset-0  sm:grid place-content-center z-[60] sm:bg-black/50 sm:px-5"
    >
      <div className="custom-scrollbar sm:w-4/5 lg:w-auto xl:w-auto fixed inset-0 z-[70] mx-auto lg:mx-0 lg:max-w-4xl xl:max-w-5xl w-full sm:relative bg-white sm:rounded-10 lg:rounded-20 shadow-privacy overflow-auto sm:my-5 pt-14 sm:pt-16 px-5 pb-5 lg:p-10 xl:p-sixty">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-16">
          <button
            className="absolute top-5 right-5 lg:top-8 lg:right-8"
            onClick={onToggleDave}
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
          <div className="flex flex-col gap-6 lg:pb-10 xl:pb-0">
            <div className="h-3/5 aspect-square sm:aspect-auto rounded-10 overflow-hidden">
              <Image
                src="/assets/images/img-dave.png"
                alt="Tyson"
                width={400}
                height={700}
                className="w-full h-full object-cover object-center lg:object-[73%] "
              />
            </div>
            <div className="h-2/5 rounded-10 overflow-hidden">
              <iframe
                className="w-full h-full "
                src="https://www.youtube.com/embed/6D_ykLlRcp4"
                title="A Tour of our shop here in Utah"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col justify-between lg:gap-10 lg:pb-10 xl:pb-0">
            <div className="space-y-8 lg:space-y-3 text-brand-dark text-15 sm:text-17">
              <h2 className="text-2xl sm:text-4xl lg:text-[3.125rem] font-bold">
                Dave
              </h2>
              <div className="space-y-2">
                <p className="leading-6 lg:leading-7">
                  At only fifteen years of age, Dave started fixing cars in
                  southern Florida for a taxi cab and limo company in 1975.
                  Besides throwing a paper route, its the only job he has ever
                  done. He worked for many different dealerships, mostly
                  European and Japanese imports, before opening his first shop
                  in 1990. He started in an unheated storage shed and the
                  business has grown into a state of the art facility with a 25
                  bay repair shop and full auto machine shop in Centerville.
                </p>
                <p className="leading-6 lg:leading-7">
                  Dave is an ASE master mechanic with over 35 years experience
                  fixing cars and helping people. He holds a master machinist
                  certificate and is a long standing member of ASA and AAA.
                </p>
              </div>
              <div className="space-y-1">
                <p>Available hours:</p>
                <p className="text-xs sm:text-17">
                  Tue 9 am - 4 pm (Lunch break 12 pm - 1 pm)
                </p>
                <p className="text-xs sm:text-17">
                  Thu 9 am - 4 pm (Lunch break 12 pm - 1 pm)
                </p>
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
              className="h-sixty sm:h-16 w-full mt-auto mb-20 lg:mb-0"
              onClick={() => {
                onToggleDave();
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
