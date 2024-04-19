import DigitalHealthInspectionSection from './components/pages/home/DigitalHealthInspectionSection';
import FAQSection from './components/pages/home/FAQSection';
import HeroSection from './components/pages/home/HeroSection';
import ProcessSection from './components/pages/home/ProcessSection';
import WhoWeAreSection from './components/pages/home/WhoWeAreSection';
import WhyToChooseUsSection from './components/pages/home/WhyToChooseUsSection';
import BookSection from './components/shared/BookSection';
import ReviewsSection from './components/shared/ReviewsSection';
import PostsSection from './components/pages/home/PostsSection';
import Chat from './components/shared/Chat';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <WhyToChooseUsSection />
      <ProcessSection />
      <DigitalHealthInspectionSection />
      <FAQSection />
      <BookSection />
      <ReviewsSection />
      <PostsSection />
    </>
  );
}
