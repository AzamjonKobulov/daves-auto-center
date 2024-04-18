import Image from 'next/image';
import React from 'react';

interface RepairData {
  img: string;
  title: string;
  services: string[];
}

interface RepairBoxProps {
  item: RepairData;
}

const RepairBox: React.FC<RepairBoxProps> = ({ item }) => {
  return (
    <div className="space-y-5">
      <div className="h-[10.625rem] rounded-10 overflow-hidden">
        <Image
          src={item.img}
          alt={item.title}
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-3 text-brand-dark">
        <h4 className="text-lg lg:text-xl font-semibold uppercase">
          {item.title}
        </h4>
        <ul className="list-disc lg:text-17 pl-7">
          {item.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RepairBox;
