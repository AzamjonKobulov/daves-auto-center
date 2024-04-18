import HeroBlog from '../components/pages/blog/HeroBlog';
import FamilyOwnedSection from '../components/pages/blog/FamilyOwnedSection';
import RepairSection from '../components/pages/blog/RepairSection';
import SliderSection from '../components/pages/blog/SliderSection';
import PromasterExperts from '../components/pages/blog/PromasaterExperts';
import RamPromasterVanRepair from '../components/pages/blog/RamPromasterVanRepair';
import ReviewsSection from '../components/shared/ReviewsSection';
import BookSection from '../components/shared/BookSection';
import BottomLogoCarousel from '../components/shared/BottomLogoCarousel';

const page = () => {
  return (
    <div>
      <HeroBlog />
      <FamilyOwnedSection />
      <RepairSection />
      <SliderSection />
      <PromasterExperts />
      <RamPromasterVanRepair />
      <ReviewsSection />
      <BookSection />
      <BottomLogoCarousel />
    </div>
  );
};

export default page;
