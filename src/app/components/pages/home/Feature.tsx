import Image from 'next/image';

import { featureItem } from './WhyToChooseUsSection';

interface FeatureProps {
  item: featureItem;
}

const Feature: React.FC<FeatureProps> = ({ item }) => {
  return (
    <div className="flex md:flex-col gap-2.5">
      <Image
        src={item.img}
        width={90}
        height={90}
        alt={item.label}
        className="w-16 h-16 lg:w-[5.625rem] lg:h-[5.625rem] mx-auto"
      />
      <div className="space-y-1 sm:space-y-2.5">
        <h3 className="capitalize">{item.label}</h3>
        <p className="text-15 sm:text-base leading-[1.1019rem] sm:leading-[1.175rem]">
          {item.text}
        </p>
      </div>
    </div>
  );
};

export default Feature;
