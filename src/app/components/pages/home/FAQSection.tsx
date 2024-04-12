import Link from 'next/link';
import FAQAccordions from './FAQAccordions';
import Button from '../../shared/Button';

const FAQSection = () => {
  return (
    <section>
      <div className="bg-faq bg-no-repeat bg-cover py-8 lg:py-20">
        <div className="max-w-base mx-auto relative flex flex-col md:flex-row gap-8 lg:gap-16 overflow-hidden px-5">
          <div className="flex-1 space-y-5 lg:space-y-8 relative z-10">
            <h2 className="text-white">Frequently asked questions</h2>
            <FAQAccordions />
          </div>
          <div className="sm:max-w-xl md:w-[21.5rem] space-y-8 lg:space-y-9 relative z-10 text-white md:pt-14 sm:px-10 md:px-0 lg:pr-2">
            <div>
              <div className="space-y-2">
                <h2 className="text-white">Have more questions?</h2>
                <p className="lg:leading-5 pr-5 lg:pr-0">
                  If you’re still seeking answers, don’t hesitate to reach out
                  to us. Our team is here to assist you with any inquiries you
                  might have.
                </p>
              </div>
              <Link href="https://t.me/abuddabi">
                <Button
                  red
                  className="h-sixty w-full sm:w-60 lg:w-[16.875rem] mt-3 lg:mt-4"
                >
                  contact
                </Button>
              </Link>
            </div>
            <div>
              <div className="space-y-2">
                <h2 className="text-white">About</h2>
                <p className="lg:leading-5 pr-5 lg:pr-0">
                  Dave’s Auto Center is the best equipped and most highly
                  trained <br className="hidden lg:block" />
                  auto shop in Utah.
                </p>
              </div>
              <Link href="/">
                <Button
                  blue
                  className="h-sixty w-full sm:w-60 lg:w-[16.875rem] mt-3 lg:mt-4"
                >
                  learn more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
