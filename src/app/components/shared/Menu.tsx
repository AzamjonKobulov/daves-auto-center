import Link from 'next/link';

import { motion } from 'framer-motion';

const Menu: React.FC<{
  onToggleMenu: () => void;
}> = ({ onToggleMenu }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="custom-scroll fixed inset-x-0 bottom-0 top-100 z-[90] hidden overflow-auto lg:block items-stretch bg-black/50 white pt-px px-5 pb-5"
      onClick={onToggleMenu}
    >
      <div
        className="max-w-min xl:max-w-base mx-auto bg-brand-blue rounded-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex xl:justify-start gap-20 xl:gap-24 items-stretch text-white whitespace-nowrap p-10">
          <div className="flex flex-col space-y-12">
            <div className="space-y-3.5">
              <p className="text-lg sm:text-xl font-bold">Engine Services</p>
              <ul className="space-y-2.5 text-sm xl:text-base text-white/50">
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
            <div className="space-y-3.5">
              <p className="text-lg sm:text-xl font-bold">Contact</p>
              <ul className="space-y-2.5 text-sm xl:text-base text-white/50">
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
          <div className="flex flex-col space-y-20 xl:justify-between">
            <div className="flex flex-col justify-between space-y-3.5">
              <p className="text-lg sm:text-xl font-bold">Diesel Services</p>
              <ul className="space-y-2.5 text-sm xl:text-base text-white/50">
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
            <div className="space-y-3.5">
              <p className="text-lg s:text-xl font-bold">About</p>
              <ul className="space-y-2.5 text-sm xl:text-base text-white/50">
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
          <div className="flex flex-col space-y-20 xl:justify-between">
            <div className="flex flex-col justify-between space-y-3.5">
              <p className="text-lg sm:text-xl font-bold">Service areas</p>
              <ul className="space-y-2.5 text-sm xl:text-base text-white/50">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Bountiful Auto Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Auto Repair Centerville
                  </Link>
                </li>{' '}
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    North Salt Lake Auto Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Kaysville Auto Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Auto Repair Farmington
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Fruit Heights Auto Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Woods Cross Auto Repair
                  </Link>
                </li>
              </ul>
            </div>
            <div className="block space-y-3.5">
              <p className="text-lg sm:text-xl font-bold">Foreign Car repair</p>
              <ul className="space-y-2.5 text-sm xl:text-base text-white/50">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    BMW service & repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Toyota Repair
                  </Link>
                </li>{' '}
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Volvo Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Land Rover Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    European Auto Repair
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="shrink-0 space-y-3.5">
            <p className="text-lg sm:text-xl font-bold">Services</p>
            <ul className="space-y-2.5 text-sm xl:text-base text-white/50">
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
                  Car Overheating <br className="xl:hidden" /> Diagnosis &
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
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
