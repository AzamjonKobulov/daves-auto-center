import React from 'react';
import RepairBox from './RepairBox';
import Button from '../../shared/Button';

const PromasterExperts = () => {
  return (
    <section>
      <div className="max-w-base mx-auto px-5">
        <div className=" bg-white shadow-base rounded-10 lg:rounded-20 overflow-hidden p-6 sm:p-8 lg:p-50">
          <div className="max-w-3xl space-y-5 lg:space-y-7">
            <div className="space-y-2">
              <p className="text-3xl lg:text-5xl font-bold uppercase text-black">
                RAM PROMASTER EXPERTS
              </p>
              <h2>UTAH’S TOP RAM PROMASTER REPAIR & SERVICE SHOP</h2>
            </div>
            <p>
              From oil changes to major services and repair, our trained
              Mercedes Ram ProMaster van repair technicians have the skill,
              knowledge, and dedication needed for your ProMaster’s maintenance.
              We’ve been providing auto repair and maintenance in our
              Centerville service shop for years.
            </p>
            <ul className="list-disc pl-7">
              <li>Family Owned and Operated Since 1990.</li>
              <li>Ram ProMaster Repair and Full Service.</li>
              <li>Best Equipped Auto Shop In Utah.</li>
              <li>ASE Certified Professional Mechanics.</li>
              <li>Diesel Performance & Repair Experts.</li>
              <li>Foreign Car Specialists.</li>
              <li>Dealership Service Alternative.</li>
              <li>Full Service Machine Shop. Engine CNC Machining Center.</li>
            </ul>
            <Button redOutline className="w-full xs:w-auto h-sixty">
              Make an appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromasterExperts;
