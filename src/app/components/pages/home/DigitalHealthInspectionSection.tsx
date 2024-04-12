import Image from 'next/image';
import Button from '../../shared/Button';

const DigitalHealthInspection = () => {
  return (
    <section>
      <div className="max-w-base mx-auto px-5">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-11 bg-white rounded-xl overflow-hidden">
          <div className="lg:w-2/5 p-5 lg:py-sixty lg:pl-sixty">
            <div className="lg:max-w-md w-full space-y-5">
              <h2>Digital Health Inspection</h2>
              <div className="space-y-3">
                <p>
                  Our innovative program empowers you with real-time insights
                  into the condition of your vehicle, providing a comprehensive
                  and transparent experience throughout the entire repair
                  process.
                </p>
                <p>
                  Our dedicated mechanics document the repair journey through
                  high-quality photos and videos, allowing you to see exactly
                  what&apos;s happening under the hood. This visual evidence not
                  only keeps you informed but also instills confidence in the
                  quality of our work.
                </p>
              </div>
              <Button redOutline className="w-full lg:w-[16.875rem] h-sixty">
                Schedule a Check-up
              </Button>
            </div>
          </div>
          <div className="h-full lg:flex-1">
            <Image
              src="/assets/images/img-phone.png"
              alt="Phone"
              width={701}
              height={452}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalHealthInspection;
