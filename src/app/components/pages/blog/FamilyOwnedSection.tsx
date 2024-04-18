import Image from 'next/image';
import Button from '../../shared/Button';

const FamilyOwnedSection = () => {
  return (
    <section>
      <div className="max-w-base mx-auto lg:h-[29rem] shadow-base overflow-hidden px-5">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-11 bg-white rounded-xl overflow-hidden">
          <div className="lg:w-2/5 p-5 lg:py-sixty lg:pl-sixty">
            <div className="lg:max-w-md w-full space-y-10 lg:space-y-24">
              <div className="space-y-1.5">
                <h2>Family owned & operated</h2>
                <div className="space-y-3">
                  <p>
                    Dave Bell started the business in 1990. Two of Dave’s five
                    sons, Miles and Joey, joined the business in 2011 continuing
                    their fathers legacy as the best equipped shop in the state
                    of Utah. Miles is running the service side of the business,
                    and Joey is the Head Engine Machinist and builder.
                  </p>
                </div>
              </div>
              <Button redOutline className="w-full lg:w-56 h-sixty ">
                About us
              </Button>
            </div>
          </div>
          <div className="h-full lg:flex-1">
            <Image
              src="/assets/images/img-family.png"
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

export default FamilyOwnedSection;
