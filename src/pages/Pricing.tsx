import { useState } from 'react';
import { Footer, NavBar } from '../components';
import SeoPackagesVector from '../components/Pricing/SeoPackagesVector';
import SocialMediaPackages from '../components/Pricing/SocialMediaPackages';
import SeoPackages from '../components/Pricing/SeoPackages';
import Container from '../components/Container';
import WebPackages from '../components/Pricing/WebPackages';

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState('SEO');

  return (
    <>
      <div>
        <div className="relative overflow-hidden overflow-x-hidden">
          <SeoPackagesVector />
          <NavBar />

          <Container>
            <div className="relative flex flex-col items-center w-full gap-4 mt-12">
              <div className="flex items-center justify-center w-full gap-2 p-2">
                <div className="w-[3rem] border-b-2 border-blue-500"></div>
                <h2 className="text-black text-[0.8rem] sm:text-[1rem] font-semibold z-10">
                  SUBSCRIPTION PLANS
                </h2>
                <div className="w-[3rem] border-b-2 border-blue-500"></div>
              </div>

              <div className="relative flex flex-col items-center w-full gap-4 mt-12">
                <button className="py-3 px-6 bg-[#004AAD] hover:bg-[#004AAD]/70 rounded-md text-gray-50 font-semibold lg:absolute -top-24 right-0">
                  Download Brouchure
                </button>
              </div>

              <div>
                <p className="text-[1.2rem] sm:text-[2rem] font-bold z-10 ">
                  {selectedCategory === 'SEO' && (
                    <>
                      Seo <span className="z-10 text-blue-700">Packages</span>
                    </>
                  )}
                  {selectedCategory === 'SocialMedia' && (
                    <>
                      Social Media{' '}
                      <span className="z-10 text-blue-700">Packages</span>
                    </>
                  )}
                  {selectedCategory === 'Web' && (
                    <>
                      Email Marketing{' '}
                      <span className="z-10 text-blue-700">Packages</span>
                    </>
                  )}
                </p>{' '}
              </div>

              <div className="text-[#5a5a5a] pl-4">
                <p className="z-10 m-5 text-sm sm:text-md">
                  Choose plans from our simple, transparent pricing
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  className={`py-3 px-6 bg-[#004AAD]  hover:bg-[#004AAD]/70  rounded-md h text-gray-50 font-semibold  ${
                    selectedCategory === 'SEO' && 'bg-[#004AAD]/70'
                  }`}
                  onClick={() => setSelectedCategory('SEO')}
                >
                  SEO Package
                </button>
                <button
                  className={`py-3 px-6 bg-[#004AAD]  hover:bg-[#004AAD]/70 rounded-md h text-gray-50 font-semibold  ${
                    selectedCategory === 'SocialMedia' && 'bg-[#004AAD]/70'
                  }`}
                  onClick={() => setSelectedCategory('SocialMedia')}
                >
                  Social Media Package
                </button>
                <button
                  className={`py-3 px-6 bg-[#004AAD]  hover:bg-[#004AAD]/70 rounded-md h text-gray-50 font-semibold  ${
                    selectedCategory === 'Web' && 'bg-[#004AAD]/70'
                  }`}
                  onClick={() => setSelectedCategory('Web')}
                >
                  Web Package
                </button>
              </div>
            </div>
          </Container>

          <div className="mt-20 mb-40 bg-gray-50">
            <Container>
              {selectedCategory === 'SEO' && <SeoPackages />}
              {selectedCategory === 'SocialMedia' && <SocialMediaPackages />}
              {selectedCategory === 'Web' && <WebPackages />}
            </Container>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Pricing;
