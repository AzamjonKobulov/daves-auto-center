import Button from '@/app/components/shared/Button';
import Image from 'next/image';

const ZoomCall = () => {
  return (
    <div className="border-b border-brand-gray/50 py-8 sm:py-4">
      <div className="flex flex-col sm:flex-row xl:grid grid-cols-2 gap-8 xl:gap-20 justify-between sm:items-center">
        <div className="flex items-center gap-2.5">
          <div className="w-full flex gap-10 justify-between">
            <div className="text-sm xl:text-17">
              <p className=" font-semibold">Zoom call with Tyson</p>
              <p>03.21.2024</p>
            </div>
            <p className="text-sm xl:text-17 pb-3 sm:pb-0">$350/30 min</p>
          </div>
        </div>
        <div className="flex gap-5 justify-center sm:justify-between items-end sm:items-center lg:justify-end lg:gap-8">
          <div className="w-full flex flex-col sm:flex-row items-center gap-3">
            <Button
              red
              className="h-11 w-full sm:w-auto text-sm xl:text-17 !px-3"
            >
              join the zoom
            </Button>

            <p className="max-w-60 mx-auto text-center sm:text-start sm:mx-0s sm:max-w-32 xl:max-w-44 text-xs xl:text-sm text-brand-gray">
              you can
              <a href="#" className="underline">
                edit
              </a>
              your appointment 24 hours before the call
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomCall;
