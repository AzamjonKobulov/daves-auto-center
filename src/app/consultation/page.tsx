'use client';

import { useState } from 'react';

import Image from 'next/image';
import Button from '../components/shared/Button';
import WhoIsTyson from '../components/pages/consultation/WhoIsTyson';
import WhoIsDave from '../components/pages/consultation/WhoIsDave';
import CallWith from '../components/pages/consultation/CallWith';
import { AnimatePresence } from 'framer-motion';

const Page = () => {
  const [isTysonOpen, setIsTysonOpen] = useState<boolean>(false);
  const [isDaveOpen, setIsDaveOpen] = useState<boolean>(false);
  const [isCallWithOpen, setIsCallWithOpen] = useState<boolean>(false);

  const handleToggleTysonOpen = () => {
    setIsTysonOpen((open) => !open);
    document.body.classList.toggle('overflow-hidden');
  };
  const handleToggleDaveOpen = () => {
    setIsDaveOpen((open) => !open);
    document.body.classList.toggle('overflow-hidden');
  };
  const handleToggleCallWithOpen = () => {
    setIsCallWithOpen((open) => !open);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <>
      <section className="pb-32 lg:pb-56">
        <AnimatePresence>
          {isTysonOpen && (
            <WhoIsTyson
              onToggleTyson={handleToggleTysonOpen}
              onToggleCallWith={handleToggleCallWithOpen}
            />
          )}
          {isDaveOpen && (
            <WhoIsDave
              onToggleDave={handleToggleDaveOpen}
              onToggleCallWith={handleToggleCallWithOpen}
            />
          )}
          {isCallWithOpen && (
            <CallWith onToggleCallWith={handleToggleCallWithOpen} />
          )}
        </AnimatePresence>
        <div className="max-w-base mx-auto px-5">
          <div className="space-y-5">
            <h1 className="text-[1.9375rem] sm:text-5xl md:text-6xl lg:text-70 font-bold  leading-[117%] sm:leading-none lg:leading-[117%]">
              Repair questions & consultations
            </h1>
            <p className="max-w-3xl lg:text-17 lg:pr-10 lg:leading-7">
              Dave and his best mechanics are ready to help you with the
              questions you have. Please see the availavle options:
            </p>
          </div>
          <div className="space-y-10 lg:space-y-24">
            <div className="lg:h-[330px] flex flex-col lg:flex-row lg:items-center bg-white rounded-10 lg:rounded-20 shadow-base overflow-hidden mt-10 lg:mt-11">
              <div className="lg:w-1/2 h-full flex flex-col justify-between space-y-8 lg:space-y-5 pt-9 pb-10 px-6 lg:py-12 lg:px-10">
                <div className="max-w-md space-y-2.5">
                  <h2 className="text-xl sm:text-4xl font-bold">
                    For service at Centerville shop
                  </h2>
                  <p className="text-15 sm:text-17">
                    If you want to come to our shop, please make an appointment.
                  </p>
                </div>
                <div className="grid xs:grid-cols-2 gap-2.5 px-0">
                  <Button redOutline className="h-sixty lg:whitespace-nowrap">
                    Make an appointment
                  </Button>
                  <Button redOutline className="h-sixty">
                    Email questions
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 h-full">
                <Image
                  src="/assets/images/img-consultation.jpeg"
                  alt="Auto Center"
                  width={1000}
                  height={700}
                  className="w-full h-full object-cover"
                ></Image>
              </div>
            </div>

            <div className="space-y-8 lg:space-y-10 bg-white text-brand-dark rounded-10 lg:rounded-20 shadow-base py-9 px-6 lg:pt-12 lg:px-10 lg:pb-32">
              <h2 className="text-xl sm:text-4xl font-bold">Other options</h2>
              <div className="grid xss:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <div className="xs:border border-brand-gray/50 rounded-10 lg:rounded-20 px-7 xs:px-4 pb-6">
                  <div className="h-90 flex items-center border-b border-brand-gray/50">
                    <h5 className="text-lg font-bold uppercase">Free</h5>
                  </div>
                  <div className="space-y-8 pt-4">
                    <div className="space-y-2.5">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1">
                          <svg
                            width="14"
                            height="12"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.66634 0C1.31272 0 0.97358 0.140476 0.723532 0.390524C0.473484 0.640573 0.333008 0.979711 0.333008 1.33333V10.6667C0.333008 11.0203 0.473484 11.3594 0.723532 11.6095C0.97358 11.8595 1.31272 12 1.66634 12H12.333C12.6866 12 13.0258 11.8595 13.2758 11.6095C13.5259 11.3594 13.6663 11.0203 13.6663 10.6667V1.33333C13.6663 0.979711 13.5259 0.640573 13.2758 0.390524C13.0258 0.140476 12.6866 0 12.333 0H1.66634ZM4.74967 3.75333C4.76447 3.62588 4.80885 3.50364 4.87927 3.39639C4.94969 3.28913 5.04421 3.19981 5.15527 3.13557C5.26634 3.07132 5.39089 3.03393 5.51898 3.02636C5.64707 3.0188 5.77515 3.04127 5.89301 3.092C6.22901 3.236 6.93834 3.56 7.83701 4.07867C8.46832 4.44005 9.07822 4.8376 9.66367 5.26933C9.76656 5.34589 9.85012 5.44544 9.90769 5.56003C9.96526 5.67463 9.99524 5.80109 9.99524 5.92933C9.99524 6.05758 9.96526 6.18404 9.90769 6.29864C9.85012 6.41323 9.76656 6.51278 9.66367 6.58933C9.07821 7.02065 8.46831 7.41776 7.83701 7.77867C7.20858 8.14518 6.5595 8.47506 5.89301 8.76667C5.77516 8.81754 5.64705 8.84013 5.51891 8.83263C5.39077 8.82514 5.26616 8.78776 5.15505 8.72349C5.04394 8.65922 4.94941 8.56984 4.87902 8.46251C4.80863 8.35517 4.76433 8.23285 4.74967 8.10533C4.66906 7.38283 4.62989 6.65631 4.63234 5.92933C4.63234 4.89533 4.70701 4.11667 4.74967 3.75333Z"
                              fill="#033E6A"
                            />
                          </svg>

                          <p className="text-17 font-semibold">
                            Diagnostic video
                          </p>
                        </div>

                        <p className="text-sm">
                          Here you can watch a video that will help you to
                          assess your car’s condition{' '}
                        </p>
                      </div>
                      <Button
                        redOutline
                        className="w-full h-10 text-15 rounded-md"
                      >
                        watch
                      </Button>
                    </div>
                    <div className="space-y-2.5">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.99967 1.33337C11.6817 1.33337 14.6663 4.31804 14.6663 8.00004C14.6663 11.682 11.6817 14.6667 7.99967 14.6667C4.31767 14.6667 1.33301 11.682 1.33301 8.00004C1.33301 4.31804 4.31767 1.33337 7.99967 1.33337ZM7.99967 10.6667C7.82286 10.6667 7.65329 10.7369 7.52827 10.862C7.40325 10.987 7.33301 11.1566 7.33301 11.3334C7.33301 11.5102 7.40325 11.6798 7.52827 11.8048C7.65329 11.9298 7.82286 12 7.99967 12C8.17649 12 8.34605 11.9298 8.47108 11.8048C8.5961 11.6798 8.66634 11.5102 8.66634 11.3334C8.66634 11.1566 8.5961 10.987 8.47108 10.862C8.34605 10.7369 8.17649 10.6667 7.99967 10.6667ZM7.99967 4.33337C7.35873 4.33337 6.74405 4.58799 6.29083 5.0412C5.83762 5.49441 5.58301 6.1091 5.58301 6.75004C5.58301 6.92685 5.65325 7.09642 5.77827 7.22144C5.90329 7.34647 6.07286 7.41671 6.24967 7.41671C6.42649 7.41671 6.59605 7.34647 6.72108 7.22144C6.8461 7.09642 6.91634 6.92685 6.91634 6.75004C6.91656 6.5534 6.9703 6.36052 7.0718 6.1921C7.17329 6.02367 7.31872 5.88605 7.49248 5.79399C7.66624 5.70192 7.86178 5.65889 8.05813 5.6695C8.25449 5.68011 8.44425 5.74397 8.60708 5.85422C8.76991 5.96448 8.89965 6.11697 8.98241 6.29535C9.06516 6.47374 9.0978 6.67128 9.07683 6.8668C9.05585 7.06232 8.98206 7.24845 8.86335 7.40522C8.74465 7.56199 8.58551 7.6835 8.40301 7.75671C7.95234 7.93671 7.33301 8.39804 7.33301 9.16671V9.33337C7.33301 9.51018 7.40325 9.67975 7.52827 9.80478C7.65329 9.9298 7.82286 10 7.99967 10C8.17649 10 8.34605 9.9298 8.47108 9.80478C8.5961 9.67975 8.66634 9.51018 8.66634 9.33337C8.66634 9.17071 8.69967 9.08937 8.84034 9.02004L8.89834 8.99337C9.41888 8.78397 9.85037 8.40001 10.1188 7.90732C10.3873 7.41463 10.476 6.8439 10.3698 6.29296C10.2635 5.74203 9.96893 5.24521 9.5365 4.88769C9.10408 4.53016 8.56076 4.33419 7.99967 4.33337Z"
                              fill="#033E6A"
                            />
                          </svg>

                          <p className="text-17 font-semibold">
                            Submit a question
                          </p>
                        </div>

                        <p className="text-sm">
                          You can submit a question for future video
                        </p>
                      </div>
                      <Button
                        redOutline
                        className="w-full h-10 text-15 rounded-md"
                      >
                        submit
                      </Button>
                    </div>
                    <div className="space-y-2.5">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="8" cy="8" r="8" fill="#023E6A" />
                            <path
                              d="M11.3337 5.77198C11.3337 5.18476 10.8155 4.66663 10.2283 4.66663H5.77234C5.18513 4.66663 4.66699 5.18476 4.66699 5.77198V10.2279C4.66699 10.8152 5.18513 11.3333 5.77234 11.3333H8.0176V8.8117H7.18858V7.70635H8.0176V7.2573C8.0176 6.49737 8.57027 5.84106 9.26112 5.84106H10.1592V6.94642H9.26112C9.15749 6.94642 9.05386 7.05005 9.05386 7.2573V7.70635H10.1592V8.8117H9.05386V11.3333H10.2283C10.8155 11.3333 11.3337 10.8152 11.3337 10.2279V5.77198Z"
                              fill="white"
                            />
                          </svg>

                          <p className="text-17 font-semibold">Social media</p>
                        </div>

                        <p className="text-sm">
                          You can find common answer in our social media
                        </p>
                        <div className="flex items-center gap-2.5 mt-2.5">
                          {/* Instagram */}
                          <a
                            href="#"
                            className="w-6 h-6 shrink-0 grid place-content-center bg-gradient-to-t from-[#EEA054] via-[#D64763] to-[#B62A99] rounded-full"
                          >
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 h-3"
                            >
                              <path
                                d="M14.5808 0H2.41923C1.04615 0 0 1.04615 0 2.41923V14.5808C0 15.9538 1.04615 17 2.41923 17H14.5808C15.9538 17 17 15.9538 17 14.5808V2.41923C17 1.04615 15.9538 0 14.5808 0ZM8.5 13.6C11.3115 13.6 13.6 11.3769 13.6 8.69615C13.6 8.23846 13.5346 7.71538 13.4038 7.32308H14.8423V14.2538C14.8423 14.5808 14.5808 14.9077 14.1885 14.9077H2.81154C2.48462 14.9077 2.15769 14.6462 2.15769 14.2538V7.25769H3.66154C3.53077 7.71538 3.46539 8.17308 3.46539 8.63077C3.4 11.3769 5.68846 13.6 8.5 13.6ZM8.5 11.6385C6.66923 11.6385 5.23077 10.2 5.23077 8.43462C5.23077 6.66923 6.66923 5.23077 8.5 5.23077C10.3308 5.23077 11.7692 6.66923 11.7692 8.43462C11.7692 10.2654 10.3308 11.6385 8.5 11.6385ZM14.7769 4.64231C14.7769 5.03461 14.45 5.36154 14.0577 5.36154H12.2269C11.8346 5.36154 11.5077 5.03461 11.5077 4.64231V2.87692C11.5077 2.48462 11.8346 2.15769 12.2269 2.15769H14.0577C14.45 2.15769 14.7769 2.48462 14.7769 2.87692V4.64231Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                          {/* Facebook */}
                          <a
                            href="#"
                            className="w-6 h-6 shrink-0 grid place-content-center bg-brand-blue-2 rounded-full"
                          >
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 h-3"
                            >
                              <path
                                d="M17 2.81865C17 1.32124 15.6788 0 14.1813 0H2.81865C1.32124 0 0 1.32124 0 2.81865V14.1813C0 15.6787 1.32124 17 2.81865 17H8.54404V10.5699H6.43005V7.7513H8.54404V6.60622C8.54404 4.66839 9.95337 2.99481 11.715 2.99481H14.0052V5.81346H11.715C11.4508 5.81346 11.1865 6.07772 11.1865 6.60622V7.7513H14.0052V10.5699H11.1865V17H14.1813C15.6788 17 17 15.6787 17 14.1813V2.81865Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                          {/* Youtube */}
                          <a
                            href="#"
                            className="w-6 h-6 shrink-0 grid place-content-center bg-brand-red rounded-full"
                          >
                            <svg
                              width="18"
                              height="13"
                              viewBox="0 0 18 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 h-3"
                            >
                              <path
                                d="M18 4.98989C18 4.59595 17.9343 4.13636 17.9343 3.61111C17.8686 3.08586 17.8029 2.5606 17.7372 2.10101C17.6058 1.57576 17.4088 1.18182 17.0146 0.853537C16.6861 0.525254 16.2263 0.328279 15.7664 0.262622C14.2555 0.0656525 12.0219 0 9.00001 0C5.97811 0 3.67883 0.0656525 2.23357 0.262622C1.77372 0.328279 1.31387 0.525254 0.985402 0.853537C0.656934 1.18182 0.394157 1.57576 0.26277 2.10101C0.131383 2.5606 0.0656975 3.0202 0.0656975 3.61111C4.00863e-06 4.13636 0 4.59595 0 4.98989C0 5.38383 0 5.84343 0 6.49999C0 7.15656 0 7.68181 0 8.0101C0 8.40404 0.0656975 8.86364 0.0656975 9.38889C0.131391 9.91414 0.197076 10.4394 0.26277 10.899C0.394157 11.4242 0.591241 11.8182 0.985402 12.1465C1.31387 12.4747 1.77372 12.6717 2.23357 12.7374C3.74452 12.9343 5.97811 13 9.00001 13C12.0219 13 14.3212 12.9343 15.7664 12.7374C16.2263 12.6717 16.6861 12.4747 17.0146 12.1465C17.3431 11.8182 17.6058 11.4242 17.7372 10.899C17.8686 10.4394 17.9343 9.9798 17.9343 9.38889C18 8.86364 18 8.40404 18 8.0101C18 7.61616 18 7.15656 18 6.49999C18 5.84343 18 5.31817 18 4.98989ZM12.4818 7.02525L7.29198 10.2424C7.22628 10.3081 7.0949 10.3737 6.96351 10.3737C6.83212 10.3737 6.76643 10.3737 6.63504 10.3081C6.43796 10.1768 6.30657 9.9798 6.30657 9.71717V3.21717C6.30657 2.95454 6.43796 2.75758 6.63504 2.62626C6.83212 2.49495 7.0949 2.49495 7.29198 2.62626L12.4818 5.84343C12.6788 5.97474 12.8102 6.17171 12.8102 6.36868C12.8102 6.56565 12.6788 6.89394 12.4818 7.02525Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                          {/* TikTok */}
                          <a
                            href="#"
                            className={`w-6 h-6 shrink-0 grid place-content-center bg-brand-dark rounded-full`}
                          >
                            <svg
                              width="16"
                              height="18"
                              viewBox="0 0 16 18"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 h-3 fill-white"
                            >
                              <path d="M12.6939 2.82C11.9964 2.03962 11.612 1.03743 11.6122 0H8.45918V12.4C8.43486 13.071 8.14579 13.7066 7.65282 14.1729C7.15986 14.6393 6.50148 14.8999 5.81633 14.9C4.36735 14.9 3.16327 13.74 3.16327 12.3C3.16327 10.58 4.85714 9.29 6.60204 9.82V6.66C3.08163 6.2 0 8.88 0 12.3C0 15.63 2.81633 18 5.80612 18C9.0102 18 11.6122 15.45 11.6122 12.3V6.01C12.8908 6.90985 14.4259 7.39265 16 7.39V4.3C16 4.3 14.0816 4.39 12.6939 2.82Z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xs:border border-brand-gray/50 rounded-10 lg:rounded-20 px-7 xs:px-4 pb-6">
                  <div className="h-90 flex items-end border-b border-brand-gray/50 pb-3">
                    <h5 className="text-lg font-bold uppercase">
                      Consultation with mechanic
                      <button
                        className="underline uppercase ml-1"
                        onClick={handleToggleTysonOpen}
                      >
                        Tyson
                      </button>
                    </h5>
                  </div>
                  <div className="space-y-8 pt-4">
                    <div className="space-y-2.5">
                      <div className="space-y-0.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_489_8428)">
                                <path
                                  d="M12.8207 15.9999C12.1236 15.9999 11.1443 15.7478 9.67791 14.9285C7.89471 13.9285 6.51544 13.0053 4.74188 11.2364C3.0319 9.52746 2.19976 8.42104 1.03513 6.30177C-0.280575 3.90893 -0.0562913 2.65466 0.194421 2.11859C0.49299 1.47788 0.933701 1.09467 1.50334 0.714315C1.82689 0.502329 2.16929 0.32061 2.52619 0.171462C2.5619 0.156105 2.59512 0.141462 2.62476 0.128248C2.80154 0.0486059 3.0694 -0.0717503 3.40868 0.0568201C3.63511 0.141819 3.83725 0.315747 4.15367 0.628244C4.8026 1.26824 5.68937 2.69358 6.01652 3.39358C6.23616 3.86536 6.38151 4.17679 6.38187 4.52607C6.38187 4.93499 6.17616 5.25035 5.92652 5.5907C5.87973 5.65463 5.8333 5.7157 5.7883 5.77499C5.51652 6.13213 5.45688 6.23534 5.49616 6.41962C5.5758 6.78998 6.16973 7.89247 7.14579 8.86639C8.12185 9.84031 9.19256 10.3967 9.56434 10.476C9.75648 10.5171 9.86184 10.4549 10.2304 10.1735C10.2833 10.1332 10.3376 10.0914 10.3943 10.0496C10.775 9.76638 11.0758 9.56603 11.475 9.56603H11.4772C11.8247 9.56603 12.1222 9.71674 12.615 9.96531C13.2579 10.2896 14.7261 11.1649 15.37 11.8146C15.6832 12.1303 15.8579 12.3317 15.9432 12.5578C16.0718 12.8981 15.9507 13.1649 15.8718 13.3435C15.8586 13.3731 15.8439 13.4056 15.8286 13.4417C15.6782 13.798 15.4955 14.1397 15.2825 14.4624C14.9029 15.0303 14.5182 15.4699 13.8761 15.7688C13.5464 15.9248 13.1855 16.0038 12.8207 15.9999Z"
                                  fill="#033E6A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_489_8428">
                                  <rect
                                    width="15.9999"
                                    height="16"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>

                            <p className="text-17 font-semibold">Zoom call</p>
                          </div>
                          <p className="text-15 font-semibold">$30/30 min</p>
                        </div>

                        <p className="text-sm">
                          You can get a 1 hour zoom call consultation from our
                          best mechanics
                        </p>
                      </div>
                      <Button
                        redOutline
                        className="w-full h-10 text-15 rounded-md"
                        onClick={handleToggleCallWithOpen}
                      >
                        order
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="xs:border border-brand-gray/50 rounded-10 lg:rounded-20 px-7 xs:px-4 pb-6">
                  <div className="h-90 flex items-center border-b border-brand-gray/50">
                    <h5 className="text-lg font-bold uppercase">
                      Books & Videos
                    </h5>
                  </div>
                  <div className="space-y-8 pt-4">
                    <div className="space-y-2.5">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1">
                          <p className="text-17 font-semibold">Cooming soon</p>
                        </div>

                        <p className="text-sm">
                          In this book you will find all the instuctions how to
                          maintain your car
                        </p>
                      </div>
                      <Button
                        redOutline
                        className="w-full h-10 text-15 rounded-md"
                      >
                        order
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="xs:border border-brand-red-1 rounded-10 lg:rounded-20 px-7 xs:px-4 pb-6">
                  <div className="h-90 flex items-center border-b border-brand-gray/50">
                    <h5 className="text-lg font-bold uppercase">
                      <button
                        className="underline uppercase"
                        onClick={handleToggleDaveOpen}
                      >
                        Dave
                      </button>
                    </h5>
                  </div>
                  <div className="space-y-8 pt-4">
                    <div className="space-y-2.5">
                      <div className="space-y-0.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_489_8428)">
                                <path
                                  d="M12.8207 15.9999C12.1236 15.9999 11.1443 15.7478 9.67791 14.9285C7.89471 13.9285 6.51544 13.0053 4.74188 11.2364C3.0319 9.52746 2.19976 8.42104 1.03513 6.30177C-0.280575 3.90893 -0.0562913 2.65466 0.194421 2.11859C0.49299 1.47788 0.933701 1.09467 1.50334 0.714315C1.82689 0.502329 2.16929 0.32061 2.52619 0.171462C2.5619 0.156105 2.59512 0.141462 2.62476 0.128248C2.80154 0.0486059 3.0694 -0.0717503 3.40868 0.0568201C3.63511 0.141819 3.83725 0.315747 4.15367 0.628244C4.8026 1.26824 5.68937 2.69358 6.01652 3.39358C6.23616 3.86536 6.38151 4.17679 6.38187 4.52607C6.38187 4.93499 6.17616 5.25035 5.92652 5.5907C5.87973 5.65463 5.8333 5.7157 5.7883 5.77499C5.51652 6.13213 5.45688 6.23534 5.49616 6.41962C5.5758 6.78998 6.16973 7.89247 7.14579 8.86639C8.12185 9.84031 9.19256 10.3967 9.56434 10.476C9.75648 10.5171 9.86184 10.4549 10.2304 10.1735C10.2833 10.1332 10.3376 10.0914 10.3943 10.0496C10.775 9.76638 11.0758 9.56603 11.475 9.56603H11.4772C11.8247 9.56603 12.1222 9.71674 12.615 9.96531C13.2579 10.2896 14.7261 11.1649 15.37 11.8146C15.6832 12.1303 15.8579 12.3317 15.9432 12.5578C16.0718 12.8981 15.9507 13.1649 15.8718 13.3435C15.8586 13.3731 15.8439 13.4056 15.8286 13.4417C15.6782 13.798 15.4955 14.1397 15.2825 14.4624C14.9029 15.0303 14.5182 15.4699 13.8761 15.7688C13.5464 15.9248 13.1855 16.0038 12.8207 15.9999Z"
                                  fill="#033E6A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_489_8428">
                                  <rect
                                    width="15.9999"
                                    height="16"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>

                            <p className="text-17 font-semibold">Zoom call</p>
                          </div>
                          <p className="text-15 font-semibold">$100/25 min</p>
                        </div>

                        <p className="text-sm">
                          You can ask Dave any questions - either regarding your
                          car, or your business.
                        </p>
                      </div>
                      <Button
                        redOutline
                        className="w-full h-10 text-15 rounded-md"
                        onClick={handleToggleCallWithOpen}
                      >
                        order
                      </Button>
                    </div>
                    <div className="space-y-2.5">
                      <div className="space-y-0.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.8477 6.76996L12.9357 4.03396C12.8034 3.63561 12.5489 3.28909 12.2084 3.04363C11.8679 2.79817 11.4587 2.66625 11.039 2.66663H4.96034C4.5406 2.66625 4.13142 2.79817 3.79093 3.04363C3.45044 3.28909 3.19597 3.63561 3.06367 4.03396L2.15167 6.76996C1.90916 6.87144 1.70205 7.04234 1.55639 7.26119C1.41072 7.48004 1.33301 7.73707 1.33301 7.99996V11.3333C1.33301 11.8253 1.60234 12.2506 1.99967 12.482V14C1.99967 14.1768 2.06991 14.3463 2.19494 14.4714C2.31996 14.5964 2.48953 14.6666 2.66634 14.6666H3.33301C3.50982 14.6666 3.67939 14.5964 3.80441 14.4714C3.92944 14.3463 3.99967 14.1768 3.99967 14V12.6666H11.9997V14C11.9997 14.1768 12.0699 14.3463 12.1949 14.4714C12.32 14.5964 12.4895 14.6666 12.6663 14.6666H13.333C13.5098 14.6666 13.6794 14.5964 13.8044 14.4714C13.9294 14.3463 13.9997 14.1768 13.9997 14V12.482C14.2019 12.366 14.3701 12.1987 14.4871 11.9971C14.6041 11.7954 14.666 11.5665 14.6663 11.3333V7.99996C14.6663 7.73707 14.5886 7.48004 14.443 7.26119C14.2973 7.04234 14.0902 6.87144 13.8477 6.76996ZM4.96034 3.99996H11.0383C11.3257 3.99996 11.5803 4.18263 11.671 4.45596L12.4083 6.66663H3.59101L4.32767 4.45596C4.37191 4.32316 4.45682 4.20764 4.57037 4.1258C4.68393 4.04395 4.82036 3.99993 4.96034 3.99996ZM3.66634 10.6666C3.53498 10.6666 3.4049 10.6407 3.28356 10.5904C3.16221 10.54 3.05195 10.4663 2.9591 10.3734C2.86624 10.2805 2.79259 10.1702 2.74236 10.0488C2.69213 9.92741 2.6663 9.79733 2.66634 9.66596C2.66638 9.53459 2.6923 9.40452 2.74261 9.28317C2.79293 9.16182 2.86665 9.05157 2.95957 8.95871C3.05249 8.86586 3.16279 8.79221 3.28417 8.74198C3.40555 8.69175 3.53564 8.66592 3.66701 8.66596C3.93231 8.66605 4.18672 8.77152 4.37425 8.95919C4.56179 9.14685 4.6671 9.40132 4.66701 9.66663C4.66692 9.93193 4.56144 10.1863 4.37378 10.3739C4.18612 10.5614 3.93165 10.6667 3.66634 10.6666ZM12.333 10.6666C12.2016 10.6666 12.0716 10.6407 11.9502 10.5904C11.8289 10.54 11.7186 10.4663 11.6258 10.3734C11.5329 10.2805 11.4593 10.1702 11.409 10.0488C11.3588 9.92741 11.333 9.79733 11.333 9.66596C11.3331 9.53459 11.359 9.40452 11.4093 9.28317C11.4596 9.16182 11.5333 9.05157 11.6262 8.95871C11.7192 8.86586 11.8295 8.79221 11.9508 8.74198C12.0722 8.69175 12.2023 8.66592 12.3337 8.66596C12.599 8.66605 12.8534 8.77152 13.0409 8.95919C13.2285 9.14685 13.3338 9.40132 13.3337 9.66663C13.3336 9.93193 13.2281 10.1863 13.0404 10.3739C12.8528 10.5614 12.5983 10.6667 12.333 10.6666Z"
                                fill="#023E6A"
                              />
                            </svg>

                            <p className="xl:text-sm font-semibold tracking-[-6%]">
                              Visiting your shop
                            </p>
                          </div>
                          <p className="xl:text-sm font-semibold tracking-[-6%]">
                            individual
                          </p>
                        </div>

                        <p className="text-sm">
                          Dave is offering training for employees or your
                          business.
                        </p>
                      </div>
                      <Button
                        redOutline
                        className="w-full h-10 text-15 rounded-md"
                      >
                        order
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
