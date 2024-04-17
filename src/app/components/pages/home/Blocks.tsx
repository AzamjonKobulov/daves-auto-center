import Image from 'next/image';
import Link from 'next/link';
const Blocks = () => {
  return (
    <div className="max-w-base mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 lg:mt-14 px-5">
      {/* Repair questions + consultation */}
      <Link
        href="/consultation"
        className="sm:col-span-2 relative flex flex-col justify-between group bg-white shadow-feature rounded-2xl sm:rounded-20 overflow-hidden"
      >
        {/* Qustions Image */}
        <Image
          src="/assets/images/repair-question.svg"
          alt="Questions"
          className="hidden sm:block absolute w-2/3 bottom-0 left-0"
          width={586}
          height={381}
        />
        <Image
          src="/assets/images/repair-question-mobile.svg"
          alt="Questions"
          className="sm:hidden absolute h-2/3 w-4/5 bottom-0 left-0"
          width={586}
          height={381}
        />
        {/* Texts */}
        <div className="relative z-10 space-y-1 lg:space-y-2.5 pt-2.5 px-5 xl:px-10 sm:pt-7 xl:pt-12">
          <div className="flex items-center justify-between">
            <p className="text-xl lg:text-23 font-bold">
              Repair questions + consultation
            </p>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-3 transition-all duration-200"
            >
              <path
                d="M6.61619 2.54494C6.38185 2.77935 6.25021 3.09723 6.25021 3.42869C6.25021 3.76014 6.38185 4.07803 6.61619 4.31244L12.8037 10.4999L6.61619 16.6874C6.38849 16.9232 6.2625 17.2389 6.26535 17.5667C6.26819 17.8944 6.39966 18.208 6.63142 18.4397C6.86318 18.6715 7.17669 18.8029 7.50444 18.8058C7.83218 18.8086 8.14794 18.6826 8.38369 18.4549L15.4549 11.3837C15.6893 11.1493 15.8209 10.8314 15.8209 10.4999C15.8209 10.1685 15.6893 9.8506 15.4549 9.61619L8.38369 2.54494C8.14928 2.3106 7.8314 2.17895 7.49994 2.17895C7.16848 2.17895 6.8506 2.3106 6.61619 2.54494Z"
                fill="#232323"
              />
            </svg>
          </div>
          <p className="text-15 lg:text-17">
            Do you have any questions for Dave? Click here
          </p>
        </div>
        <Image
          src="/assets/images/img-man.png"
          alt="Repair questions + consultation"
          width={329}
          height={240}
          className="h-48 w-44 sm:w-1/3 sm:h-60 md:h-80 md:w-auto  relative z-10 sm:-mt-10 lg:-mt-16 ml-auto group-hover:scale-110 transition-all duration-200"
        />
      </Link>
      {/* Special offers */}
      <Link
        href="/special-offers"
        className="flex flex-col justify-between group bg-white shadow-feature rounded-2xl sm:rounded-20 overflow-hidden"
      >
        {/* Texts */}
        <div className="relative z-10 space-y-1 lg:space-y-2.5 pt-2.5 px-5 xl:px-10 sm:pt-7 xl:pt-12">
          <div className="flex items-center justify-between">
            <p className="text-xl lg:text-23 font-bold">Special offers</p>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-3 transition-all duration-200"
            >
              <path
                d="M6.61619 2.54494C6.38185 2.77935 6.25021 3.09723 6.25021 3.42869C6.25021 3.76014 6.38185 4.07803 6.61619 4.31244L12.8037 10.4999L6.61619 16.6874C6.38849 16.9232 6.2625 17.2389 6.26535 17.5667C6.26819 17.8944 6.39966 18.208 6.63142 18.4397C6.86318 18.6715 7.17669 18.8029 7.50444 18.8058C7.83218 18.8086 8.14794 18.6826 8.38369 18.4549L15.4549 11.3837C15.6893 11.1493 15.8209 10.8314 15.8209 10.4999C15.8209 10.1685 15.6893 9.8506 15.4549 9.61619L8.38369 2.54494C8.14928 2.3106 7.8314 2.17895 7.49994 2.17895C7.16848 2.17895 6.8506 2.3106 6.61619 2.54494Z"
                fill="#232323"
              />
            </svg>
          </div>
          <p className="text-15 lg:text-17">
            Check out out special offers from Dave!
          </p>
        </div>
        <Image
          src="/assets/images/img-special-offer.svg"
          alt="Special offers"
          width={329}
          height={240}
          className="mx-auto group-hover:scale-110 transition-all duration-200 px-5"
        />
      </Link>
      {/* Existing customers */}
      <Link
        href="/"
        className="sm:h-auto flex flex-col justify-between group bg-white shadow-feature rounded-2xl sm:rounded-20 overflow-hidden"
      >
        {/* Texts */}
        <div className="relative z-10 space-y-1 lg:space-y-2.5 pt-2.5 px-5 xl:px-10 sm:pt-7 xl:pt-12">
          <div className="flex items-center justify-between">
            <p className="text-xl lg:text-23 font-bold">Existing customers</p>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-3 transition-all duration-200"
            >
              <path
                d="M6.61619 2.54494C6.38185 2.77935 6.25021 3.09723 6.25021 3.42869C6.25021 3.76014 6.38185 4.07803 6.61619 4.31244L12.8037 10.4999L6.61619 16.6874C6.38849 16.9232 6.2625 17.2389 6.26535 17.5667C6.26819 17.8944 6.39966 18.208 6.63142 18.4397C6.86318 18.6715 7.17669 18.8029 7.50444 18.8058C7.83218 18.8086 8.14794 18.6826 8.38369 18.4549L15.4549 11.3837C15.6893 11.1493 15.8209 10.8314 15.8209 10.4999C15.8209 10.1685 15.6893 9.8506 15.4549 9.61619L8.38369 2.54494C8.14928 2.3106 7.8314 2.17895 7.49994 2.17895C7.16848 2.17895 6.8506 2.3106 6.61619 2.54494Z"
                fill="#232323"
              />
            </svg>
          </div>
          <p className="text-15 lg:text-17">Here you can check the progress</p>
        </div>
        <Image
          src="/assets/images/img-ford.png"
          alt="Existing customers"
          width={329}
          height={240}
          className="hidden sm:block sm:h-auto group-hover:scale-110 transition-all duration-200"
        />
        <Image
          src="/assets/images/img-ford-mobile.png"
          alt="Existing customers"
          width={329}
          height={240}
          className="sm:hidden group-hover:scale-110 transition-all duration-200"
        />
      </Link>
      {/* Engines */}
      <Link
        href="https://monsterengines.com/"
        className="flex flex-col justify-between group bg-white shadow-feature rounded-2xl sm:rounded-20 overflow-hidden"
      >
        {/* Texts */}
        <div className="relative z-10 space-y-1 lg:space-y-2.5 pt-2.5 px-5 xl:px-10 sm:pt-7 xl:pt-12">
          <div className="flex items-center justify-between">
            <p className="text-xl lg:text-23 font-bold">Engines</p>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-3 transition-all duration-200"
            >
              <path
                d="M6.61619 2.54494C6.38185 2.77935 6.25021 3.09723 6.25021 3.42869C6.25021 3.76014 6.38185 4.07803 6.61619 4.31244L12.8037 10.4999L6.61619 16.6874C6.38849 16.9232 6.2625 17.2389 6.26535 17.5667C6.26819 17.8944 6.39966 18.208 6.63142 18.4397C6.86318 18.6715 7.17669 18.8029 7.50444 18.8058C7.83218 18.8086 8.14794 18.6826 8.38369 18.4549L15.4549 11.3837C15.6893 11.1493 15.8209 10.8314 15.8209 10.4999C15.8209 10.1685 15.6893 9.8506 15.4549 9.61619L8.38369 2.54494C8.14928 2.3106 7.8314 2.17895 7.49994 2.17895C7.16848 2.17895 6.8506 2.3106 6.61619 2.54494Z"
                fill="#232323"
              />
            </svg>
          </div>
          <p className="text-15 lg:text-17">
            We handle tasks of any complexity. We create engines and also repair
            yours.
          </p>
        </div>
        <Image
          src="/assets/images/img-engine.png"
          alt="Engines"
          width={329}
          height={240}
          className="w-2/3 hidden sm:block ml-auto group-hover:scale-110 transition-all duration-200"
        />
        <Image
          src="/assets/images/img-engine-mobile.png"
          alt="Engines"
          width={329}
          height={240}
          className="sm:hidden ml-auto group-hover:scale-110 transition-all duration-200"
        />
      </Link>
      {/* Merchandize */}
      <Link
        href="/merchendize/apparel"
        className="flex flex-col justify-between group bg-white shadow-feature rounded-2xl sm:rounded-20 overflow-hidden"
      >
        {/* Texts */}
        <div className="relative z-10 space-y-1 lg:space-y-2.5 pt-2.5 px-5 xl:px-10 sm:pt-7 xl:pt-12">
          <div className="flex items-center justify-between">
            <p className="text-xl lg:text-23 font-bold">Merchandize</p>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-3 transition-all duration-200"
            >
              <path
                d="M6.61619 2.54494C6.38185 2.77935 6.25021 3.09723 6.25021 3.42869C6.25021 3.76014 6.38185 4.07803 6.61619 4.31244L12.8037 10.4999L6.61619 16.6874C6.38849 16.9232 6.2625 17.2389 6.26535 17.5667C6.26819 17.8944 6.39966 18.208 6.63142 18.4397C6.86318 18.6715 7.17669 18.8029 7.50444 18.8058C7.83218 18.8086 8.14794 18.6826 8.38369 18.4549L15.4549 11.3837C15.6893 11.1493 15.8209 10.8314 15.8209 10.4999C15.8209 10.1685 15.6893 9.8506 15.4549 9.61619L8.38369 2.54494C8.14928 2.3106 7.8314 2.17895 7.49994 2.17895C7.16848 2.17895 6.8506 2.3106 6.61619 2.54494Z"
                fill="#232323"
              />
            </svg>
          </div>
          <p className="text-15 lg:text-17">Check out Dave’s merch!</p>
        </div>
        <Image
          src="/assets/images/img-merchandize.png"
          alt="Merchandize"
          width={329}
          height={240}
          className="w-full -mt-10 sm:mt-0 lg:-mt-14 group-hover:scale-110 transition-all duration-200"
        />
      </Link>
    </div>
  );
};

export default Blocks;
