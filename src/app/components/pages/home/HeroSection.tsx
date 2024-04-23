import LogosCarousel from './LogosCarousel';
import Blocks from './Blocks';

const HeroSection = () => {
  return (
    <section className="pt-7 md:pt-10">
      {/* Texts */}
      <div className="max-w-base mx-auto space-y-2.5 lg:space-y-6 px-5">
        <h1 className="text-[1.9375rem] sm:text-5xl md:text-6xl lg:text-70 font-bold leading-[117%] sm:leading-none lg:leading-[117%]">
          Welcome to Dave’s Auto Center. “Utahs” best mechanics
        </h1>
        <p className="max-w-2xl text-15 sm:text-17">
          “Utahs” trusted diesel and automotive mechanics who put our customers
          first, every time. We are a family run and operated shop built on
          integrity.
        </p>
      </div>
      <Blocks />
      <LogosCarousel />
    </section>
  );
};

export default HeroSection;
