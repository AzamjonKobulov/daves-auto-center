import React from 'react';
import RepairBox from './RepairBox';

const repairData = [
  {
    img: '/assets/images/img-engine-repair.png',
    title: 'RAM PROMASTER ENGINE REPAIR',
    services: [
      'Engine Repair & Service',
      'Check Engine Light Diagnosis',
      'Custom PCM Tuning & Upgrades',
      'Electrical Diagnostics, Service, Repair & Upgrades',
      'Engine Diagnostics, Service, Repair, & Upgrades',
      'Engine Performance & Upgrades',
      'Scheduled Engine Maintenance',
    ],
  },
  {
    img: '/assets/images/img-maintenance.png',
    title: 'RAM PROMASTER MAINTENANCE',
    services: [
      'Scheduled Maintenance',
      'Brake Work',
      'Overheating Diagnosis',
      'Brake Flush',
      'Fuel Pump',
      'Fuel Filter',
      'High-Pressure Fuel Pump',
      'Diesel Injector Cleaning',
      'Fuel Injector Cleaning',
      'Diagnosis',
      'Engine Cleaning',
    ],
  },
  {
    img: '/assets/images/img-sprinter-services.png',
    title: 'RAM PROMASTER REPAIR & SERVICE',
    services: [
      'Service & Repair',
      'Fleet & Medium Service',
      'Engine Service & Repairs',
      'Electrical Service',
      'Transmission Repair',
      'Hydraulics',
      'A/C Service',
      'Charging & Starting Systems',
      'Complete Fuel Injection Service',
      'Clutches',
      'And more…',
    ],
  },
];

const RepairSection = () => {
  return (
    <section>
      <div className="max-w-base mx-auto px-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 bg-white shadow-base rounded-10 lg:rounded-20 overflow-hidden p-6 sm:p-8 lg:p-50">
          {repairData.map((item) => (
            <RepairBox key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepairSection;
