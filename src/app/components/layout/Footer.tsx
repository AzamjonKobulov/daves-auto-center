import Link from 'next/link';
import Image from 'next/image';
import Socials from '../shared/Socials';

const Footer = () => {
  return (
    <footer className="bg-brand-blue-1 text-white">
      {/* Top */}
      <div className="max-w-base mx-auto flex justify-between flex-col xl:flex-row gap-8 lg:gap-10  py-8 lg:py-sixty px-5">
        <div className="space-y-5 text-center lg:text-start border-b border-white lg:border-none pb-5">
          <p className="text-lg smg:text-xl lg:text-3xl font-bold">Contact</p>
          <div className="space-y-6">
            <a href="#" className="flex justify-center lg:justify-start gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mt-1 -mr-3 lg:mr-0 lg:mt-0"
              >
                <path
                  d="M12 11.925C11.2422 11.925 10.5155 11.6221 9.9797 11.0829C9.44388 10.5438 9.14286 9.8125 9.14286 9.05C9.14286 8.2875 9.44388 7.55623 9.9797 7.01707C10.5155 6.4779 11.2422 6.175 12 6.175C12.7578 6.175 13.4845 6.4779 14.0203 7.01707C14.5561 7.55623 14.8571 8.2875 14.8571 9.05C14.8571 9.42755 14.7832 9.8014 14.6397 10.1502C14.4961 10.499 14.2856 10.816 14.0203 11.0829C13.755 11.3499 13.44 11.5617 13.0934 11.7062C12.7467 11.8506 12.3752 11.925 12 11.925ZM12 1C9.87827 1 7.84344 1.84812 6.34315 3.35779C4.84285 4.86746 4 6.91501 4 9.05C4 15.0875 12 24 12 24C12 24 20 15.0875 20 9.05C20 6.91501 19.1571 4.86746 17.6569 3.35779C16.1566 1.84812 14.1217 1 12 1Z"
                  fill="white"
                />
              </svg>
              <p>
                335 S. Frontage Rd. <br /> Centerville, UT 84014
              </p>
            </a>
            <a href="#" className="flex justify-center lg:justify-start gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mt-1 -mr-8 lg:mr-0 lg:mt-0"
              >
                <path
                  d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM9.07 5.581C8.88488 5.581 8.70734 5.65454 8.57644 5.78544C8.44554 5.91634 8.372 6.09388 8.372 6.279V11.86C8.372 12.246 8.684 12.558 9.07 12.558H14.651C14.7448 12.5616 14.8384 12.5461 14.9261 12.5127C15.0138 12.4792 15.0939 12.4284 15.1615 12.3633C15.2292 12.2982 15.283 12.2201 15.3197 12.1337C15.3565 12.0473 15.3754 11.9544 15.3754 11.8605C15.3754 11.7666 15.3565 11.6737 15.3197 11.5873C15.283 11.5009 15.2292 11.4228 15.1615 11.3577C15.0939 11.2926 15.0138 11.2418 14.9261 11.2083C14.8384 11.1749 14.7448 11.1594 14.651 11.163H9.767V6.279C9.767 6.09405 9.6936 5.91666 9.56291 5.78579C9.43223 5.65492 9.25495 5.58126 9.07 5.581Z"
                  fill="white"
                />
              </svg>
              <p>
                Mon - Fri: 8AM - 5:30PM <br /> Sat & Sun: Call for appointment{' '}
                <br /> Call 24/7 for towing.
              </p>
            </a>
          </div>
        </div>
        <div className="flex-1 flex md:flex-wrap justify-between xs:justify-start md:justify-between sm:gap-5 md:gap-10">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-lg smg:text-xl lg:text-3xl font-bold">
                Engine Services
              </p>
              <ul className="space-y-3.5 text-sm lg:text-base text-white/50">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Generator Engine <br className="xs:hidden" /> Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Warranty
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Engine Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Engine Rebuilds
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Engine Soda Blasting
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Check Engine Light
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Machine Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Catepillar Engine Repair
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:hidden space-y-5">
              <p className="text-lg smg:text-xl lg:text-3xl font-bold">
                Services
              </p>
              <ul className="space-y-3.5 text-sm lg:text-base text-white/50">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Sprinter Van Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Ram ProMaster Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Ford Transit Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Medium Duty Truck <br className="xs:hidden" /> Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Generator Engine <br className="xs:hidden" /> Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Box Truck Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Fleet Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Transmissions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Fuel Injection Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Timing Belts
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Towing Davies County
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Auto Air Conditioning <br className="xs:hidden" />
                    Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Van Repair & Service in <br className="xs:hidden" /> Utah
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Car Overheating <br className="xs:hidden" /> Diagnosis &
                    Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Service Areas
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden sm:block space-y-5">
              <p className="text-lg smg:text-xl lg:text-3xl font-bold">
                Contact
              </p>
              <ul className="space-y-3.5 text-sm lg:text-base text-white/50">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="space-y-5">
              <p className="text-lg smg:text-xl lg:text-3xl font-bold">
                Diesel Services
              </p>
              <ul className="space-y-3.5 text-sm lg:text-base text-white/50">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Diesel Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Diesel Engines
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Diesel Performance
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Dodge Cummins
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Power Stroke
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Chevy Duramax
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Catepillar Engine Repair
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-5 mt-[5.375rem] xs:mt-16 lg:mt-[4.375rem]">
              <p className="text-lg sm:text-xl lg:text-3xl font-bold">About</p>
              <ul className="space-y-3.5 text-sm lg:text-base text-white/50">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Blog (recent jobs)
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Videos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Financing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:hidden space-y-5 mt-16">
              <p className="text-lg smg:text-xl lg:text-3xl font-bold">
                Contact
              </p>
              <ul className="space-y-3.5 text-sm lg:text-base text-white/50">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden sm:block space-y-5">
            <p className="text-lg smg:text-xl lg:text-3xl font-bold">
              Services
            </p>
            <ul className="space-y-3.5 text-sm lg:text-base text-white/50">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Sprinter Van Repair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Ram ProMaster Repair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Ford Transit Repair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Medium Duty Truck Repair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Generator Engine Repair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Box Truck Repair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Fleet Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Transmissions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Fuel Injection Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Timing Belts
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Towing Davies County
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Auto Air Conditioning Repair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Van Repair & Service in Utah
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Car Overheating Diagnosis & Repair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Service Areas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="xs:border-t border-white">
        <div className="max-w-base mx-auto flex flex-col lg:flex-row gap-5 items-center justify-between text-sm xs:text-15 py-5 sm:py-8 lg:py-50 lg:px-5">
          <div className="w-full lg:hidden flex justify-center bg-brand-blue-4 sm:bg-transparent py-3 sm:py-0">
            <Socials gap={'gap-50 sm:gap-30'} />
          </div>
          <Link href="/">
            <Image
              src="/assets/images/logo.svg"
              alt="Logo"
              className="w-56 h-16 sm:w-60 sm:h-20 lg:w-80 lg:h-16 xl:h-50 shrink-0"
              width={388}
              height={63}
            />
          </Link>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:pr-8">
            <p>© 2023 · Dave&apos;s Auto Center · Sitemap</p>
            <Link href="#" className="whitespace-nowrap">
              Privacy Policy
            </Link>
          </div>
          <div className="hidden lg:block">
            <Socials gap={'gap-8'} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
