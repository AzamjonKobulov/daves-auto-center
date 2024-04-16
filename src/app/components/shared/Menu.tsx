import Link from 'next/link';

import { motion } from 'framer-motion';

const Menu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-x-0 bottom-0 top-[6.5625rem] z-[90] min-h-screen w-screen hidden lg:block bg-brand-blue"
    >
      <div className="max-w-base mx-auto flex flex-wrap justify-between gap-10 text-white p-10 xl:px-[4.6875rem] xl:pt-16">
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
                  Generator Engine Repair
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
          <div className="space-y-5">
            <p className="text-lg smg:text-xl lg:text-3xl font-bold">Contact</p>
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
        </div>
        <div className="space-y-5 xl:-mr-20">
          <p className="text-lg smg:text-xl lg:text-3xl font-bold">Services</p>
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
                Medium Duty Truck <br className="xl:hidden" /> Repair
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-all duration-200"
              >
                Generator Engine <br className="xl:hidden" /> Repair
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
                Auto Air Conditioning <br className="xl:hidden" />
                Repair
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-all duration-200"
              >
                Van Repair & Service in <br className="xl:hidden" /> Utah
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-all duration-200"
              >
                Car Overheating <br className="xl:hidden" /> Diagnosis & Repair
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
        <div className="block space-y-5">
          <p className="text-lg smg:text-xl lg:text-3xl font-bold">Blog</p>
          <ul className="space-y-3.5 text-sm lg:text-base text-white/50">
            <li>
              <Link
                href="#"
                className="hover:text-white transition-all duration-200"
              >
                Lorem
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-all duration-200"
              >
                Ipsum
              </Link>
            </li>{' '}
            <li>
              <Link
                href="#"
                className="hover:text-white transition-all duration-200"
              >
                Dolor sit amet
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
