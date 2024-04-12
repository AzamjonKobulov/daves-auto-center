import Feature from './Feature';
import Button from '../../shared/Button';

export interface featureItem {
  img: string;
  label: string;
  text: string;
}

const features: featureItem[] = [
  {
    img: '/assets/images/icon-choose-us-1.svg',
    label: 'Expertise',
    text: 'Our ASE certified technicians ensure your vehicle is in capable hands, from routine maintenance to complex repairs.',
  },
  {
    img: '/assets/images/icon-choose-us-2.svg',
    label: 'Comprehensive Care',
    text: "From oil changes to repairs, we offer a full spectrum of services tailored to your car's needs.",
  },
  {
    img: '/assets/images/icon-choose-us-3.svg',
    label: 'Quality Assurance',
    text: "With us, you're guaranteed quality repairs that address the root cause and ensure your car's longevity.",
  },
  {
    img: '/assets/images/icon-choose-us-4.svg',
    label: 'Accurate Diagnosis',
    text: "Our skilled mechanics will pinpoint your car's issues swiftly and accurately, ensuring effective solutions.",
  },
  {
    img: '/assets/images/icon-choose-us-5.svg',
    label: 'Transparent Service ',
    text: 'Count on us for transparent pricing, clear communication, and a commitment to getting you back on the road swiftly.',
  },
  {
    img: '/assets/images/icon-choose-us-6.svg',
    label: 'modern Equipment ',
    text: 'Our modern facility is equipped with the latest technology to ensure efficient and precise repairs.',
  },
];

const WhyToChooseUsSection = () => {
  return (
    <section>
      <div className="max-w-base mx-auto flex flex-col lg:flex-row gap-5 px-5">
        <div className="flex-1 bg-white p-5 sm:pt-10 lg:p-sixty rounded-10">
          <h2>Why to choose us</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-1">
            {features.map((item) => (
              <Feature key={item.label} item={item} />
            ))}
          </div>
        </div>
        <div className="lg:w-72 grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-1 gap-8 bg-white text-center sm:text-start p-5 py-8 sm:px-6 sm:py-14 rounded-10">
          <div className="order-2 flex flex-col sm:justify-between lg:justify-start gap-5">
            <div className="space-y-1.5">
              <p className="uppercase font-bold">We need more workers</p>
              <p className="max-w-64 sm:max-w-none mx-auto text-brand-gray text-15">
                Apply now to become <br className="sm:hidden" /> a part of our
                tam
              </p>
            </div>
            <Button
              blueOutline
              className="mx-auto sm:mx-0 lg:w-full h-12 lg:h-14"
            >
              Apply now
            </Button>
          </div>
          <div className="flex flex-col sm:justify-between lg:justify-start gap-5">
            <div className="space-y-1.5">
              <p className="uppercase font-bold">SUREPAY FINANCING</p>
              <p className="max-w-64 sm:max-w-none mx-auto text-brand-gray text-15">
                Regular maintenance <br className="sm:hidden" /> is the key to
                preserving the lifespan of your pickup truck.
              </p>
            </div>
            <Button
              blueOutline
              className="mx-auto sm:mx-0 lg:w-full h-12 lg:h-14"
            >
              Apply now
            </Button>
          </div>
          <div className="flex flex-col sm:justify-between lg:justify-start gap-5">
            <div className="space-y-1.5">
              <p className="uppercase font-bold">
                Engine<span className="font-light">builder</span>
              </p>
              <p className="max-w-64 sm:max-w-none mx-auto text-brand-gray text-15">
                Article about DAVE’S AUTO CENTER on the enginebuildermag.com
              </p>
            </div>
            <Button
              blueOutline
              className="mx-auto sm:mx-0 lg:w-full h-12 lg:h-14"
            >
              Apply now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyToChooseUsSection;
