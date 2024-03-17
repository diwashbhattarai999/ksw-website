import {
  FirstTestTube,
  NavBar,
  VectorAnimatedImage,
  WeProvides,
  Testimonial,
  Our,
} from '../components';
import OurPartner from '../components/HomeComponent/OurPartner';

function HomePage() {
  return (
    <>
      <div
        className="h-[100vh] relative overflow-hidden bg-[#dff0f2]"
        style={{ minHeight: '-webkit-fill-available' }}
      >
        <VectorAnimatedImage />
        {/* <Logo className="absolute lg:h-36 lg:w-36 h-[5rem] w-[8rem] cursor-pointer lg:top-[6rem] lg:left-[4.8rem] md:top-[5.4rem] md:left-[5rem] top-[5.5rem] left-[3rem]" /> */}
        <NavBar />

        <FirstTestTube />
      </div>
      <WeProvides />
      <Testimonial />
      <OurPartner />
      <Our />
    </>
  );
}

export default HomePage;
