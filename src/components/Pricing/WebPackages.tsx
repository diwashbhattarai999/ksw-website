import React, { ReactNode } from 'react';
import { BiCheck, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './pricing.css';
import Container from '../Container';

interface PricingPlan {
  name: string;
  icon1: ReactNode;
  icon2: ReactNode;
  icon3: ReactNode;
}

const plans: PricingPlan[] = [
  {
    name: '24/7 Support',
    icon1: <BiCheck />,
    icon2: <BiCheck />,
    icon3: <BiCheck />,
  },
  {
    name: 'CMS website design',
    icon1: <BiCheck />,
    icon2: <BiCheck />,
    icon3: <BiCheck />,
  },
  {
    name: 'Responsive & Interactive Design',
    icon1: <BiCheck />,
    icon2: <BiCheck />,
    icon3: <BiCheck />,
  },
  {
    name: 'Number of pages / menus / categories as per initial requirement',
    icon1: <BiCheck />,
    icon2: <BiCheck />,
    icon3: <BiCheck />,
  },
  {
    name: 'Search Engine friendly',
    icon1: <BiCheck />,
    icon2: <BiCheck />,
    icon3: <BiCheck />,
  },
  {
    name: 'Social Media Integration',
    icon1: <BiCheck />,
    icon2: <BiCheck />,
    icon3: <BiCheck />,
  },
  {
    name: 'Advanced Real Time Search',
    icon1: <BiCheck />,
    icon2: <BiCheck />,
    icon3: <BiCheck />,
  },
  {
    name: 'CSV Import Of Product',
    icon1: <BiX />,
    icon2: <BiX />,
    icon3: <BiCheck />,
  },
  {
    name: 'Advance Product Offer',
    icon1: <BiX />,
    icon2: <BiX />,
    icon3: <BiCheck />,
  },
  {
    name: 'Blog Design',
    icon1: <BiX />,
    icon2: <BiCheck />,
    icon3: <BiCheck />,
  },
  {
    name: 'Checkout Easy',
    icon1: <BiX />,
    icon2: <BiCheck />,
    icon3: <BiCheck />,
  },
  {
    name: 'Static/Dynamic',
    icon1: <BiX />,
    icon2: <BiCheck />,
    icon3: <BiCheck />,
  },
  {
    name: 'Single Vendor/Multi Vendor',
    icon1: <BiX />,
    icon2: <BiX />,
    icon3: <BiCheck />,
  },
  {
    name: 'Shopping Cart',
    icon1: <BiX />,
    icon2: <BiX />,
    icon3: <BiCheck />,
  },
  {
    name: 'Logo Design',
    icon1: <BiCheck />,
    icon2: <BiCheck />,
    icon3: <BiCheck />,
  },
  {
    name: 'Logo Design',
    icon1: <BiX />,
    icon2: <BiCheck />,
    icon3: <BiCheck />,
  },
  {
    name: 'Custom Website',
    icon1: <BiX />,
    icon2: <BiCheck />,
    icon3: <BiCheck />,
  },
  {
    name: 'Newsletter Subscription',
    icon1: <BiCheck />,
    icon2: <BiCheck />,
    icon3: <BiCheck />,
  },
];

const WebPackages: React.FC = () => {
  return (
    <Container>
      <div className="relative z-50 w-full py-10 m-auto mb-20 overflow-hidden bg-white">
        <div className="z-50 flex py-5 mb-10 bg-white border-b border-b-gray-200">
          <div className="w-[28%] z-50 sm:w-[40%] text-base sm:text-xl text-center items-center text-black-600 font-bold p-1 sm:p-4">
            Features
          </div>
          <div className="w-[24%] sm:w-[20%] text-xs sm:text-xl text-center items-center text-blue-700 font-bold p-1 sm:p-4">
            Basic
          </div>
          <div className="w-[24%] sm:w-[20%] text-xs sm:text-xl text-center items-center text-blue-700 font-bold p-1 sm:p-4">
            Advance
          </div>
          <div className="w-[24%] sm:w-[20%] text-xs sm:text-xl text-center items-center text-blue-700 font-bold p-1 sm:p-4">
            Premium
          </div>
        </div>
        <div>
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex items-center justify-center mb-4 text-left "
            >
              <div className="w-[28%] text-left z-50 sm:w-[40%] items-center text-sm sm:text-md font-bold p-2 sm:p-8">
                {plan.name}
              </div>
              <div className="w-[24%] sm:w-[20%] flex justify-center items-center text-xl sm:text-3xl p-2 sm:p-4">
                {plan.icon1}
              </div>
              <div className="w-[24%] sm:w-[20%] flex justify-center items-center text-xl sm:text-3xl p-2 sm:p-4">
                {plan.icon2}
              </div>
              <div className="w-[24%] sm:w-[20%] flex justify-center items-center text-xl sm:text-3xl p-2 sm:p-4">
                {plan.icon3}
              </div>
            </div>
          ))}
        </div>

        <Link to="/#" className="flex items-center justify-center w-full">
          <button
            type="button"
            className=" rounded-md w-52 bg-[#004AAD] hover:bg-[#004AAD]/70 p-4 sm:px-6 sm:py-4 text-sm font-bold text-white"
          >
            Quick Enquiry
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default WebPackages;
