import { Footer, NavBar, Button } from '../components';
import { Link } from 'react-router-dom';
import { Reward24Regular } from '@fluentui/react-icons';
import { BiBlock, BiHappy } from 'react-icons/bi';

import img from '../assets/service.jpeg';
import CareerVector from './CareerVector';
export default function Career() {
  return (
    <div
      className="relative overflow-hidden overflow-x-hidden"
      style={{ minHeight: '-webkit-fill-available' }}
    >
      <CareerVector />
      <NavBar />
      <div className="w-[90%] m-auto">
        <div className="flex flex-col pt-10 md:flex-row md:justify-between ">
          <div className="w-full sm:w-full md:w-[60%] lg:w-[60%] md:items-start">
            <div className="w-[100%] lg:w-[60%]">
              <div className="text-[1rem] md:text-[1.2rem] font-bold text-center md:text-left">
                Careers
              </div>
              <div className="mb-4 md:mb-8">
                <div className="text-[2rem] font-bold text-center md:text-left">
                  <p>Growth mindset. Curious. Innovative. Sounds like you?</p>
                </div>
                <div className="text-xl font-bold text-center md:text-2xl md:text-left"></div>
              </div>
              <div className="mb-4 text-base font-medium text-center md:text-lg md:text-left md:mb-8">
                <p className="text-[0.8rem] sm:text-[1rem] md:w-[90%] ">
                  We welcome people with a relentless passion, an agile mindset,
                  and a fast-learning culture
                </p>
              </div>
              <div className="mb-4 text-base font-normal text-center md:text-lg md:text-left md:mb-8">
                <p className="text-[0.8rem] sm:text-[1rem] md:w-[90%]">
                  Embark on a journey that goes beyond just a job. you will get
                  an environment that fosters growth, learning, and
                  collaboration. A place which values diverse perspectives,
                  accountable freedom, pushes you to reach your new height, and
                  celebrates both small and big wins.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[100%] md:w-[40%] lg:w-[40%] flex justify-end ">
            <img
              className="rounded-br-[4rem] p-5 md:h-[16rem] lg:h-[25rem] m-auto "
              src={img}
              alt="People Working in Office"
            />
          </div>
        </div>

        <Link to="/#">
          <button
            type="button"
            className="rounded-md bg-[#004AAD] hover:bg-[#004AAD]/70 px-8 py-2 text-sm font-semibold  text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            We'r Hiring
          </button>
        </Link>
      </div>

      <div className="p-8 text-center">
        <h2 className="mb-4 text-5xl font-extrabold">
          <span className="text-black">Let</span>'s get{' '}
          <span className="text-blue-700">you started !</span>
        </h2>
        <p className="text-[0.8rem] sm:text-[1rem] mb-6">
          We are looking for people who are ambitious, enjoy collaborating,
          respect our transparent culture <br />
          and are ready to give it all. Come, be a part of the team and help us
          build the future of work.
        </p>
        <div className="flex flex-wrap items-center justify-center">
          <Link to="/#">
            <Button
              width="w-56"
              textColor="text-black"
              hoverEffect="hover:bg-yellow-300"
              buttonName="COME JOIN US"
              props="font-semibold w-[195px] rounded-md"
            />
          </Link>
          <Link to="/#">
            <Button
              width="w-64"
              transparent
              textColor="text-black"
              buttonName="VIEW INTERNSHIP"
              props="font-semibold w-[195px] rounded-sm md:text-[17px] text-sm md:ml-0 ml-4 "
            />
          </Link>
        </div>
      </div>

      <div className="p-8 text-center">
        <h2 className="mb-4 text-5xl font-extrabold">
          <span className="text-blue-700">Values</span>{' '}
          <span className="text-black">that shape us</span>
        </h2>
        <p className="text-[0.8rem] sm:text-[1rem] mb-6">
          Our values are not just words on paper – <br />
          they're the beating heart of who we are. <br />
          They define our vibrant culture and guide <br />
          us in everything we do.
        </p>
      </div>

      {/* icon */}
      <div className="flex flex-wrap items-center justify-center mt-8 md:ml-20">
        <div className="flex flex-col items-center mb-4 sm:items-start sm:mx-0 sm:mr-8 md:mr-20">
          <div className="flex items-center justify-center mb-2 rounded-full">
            <BiHappy className="w-12 h-12 font-bold text-black" />
          </div>
          <div className="mb-1 ml-1 font-bold">Customer Focus</div>
          <div className="ml-1 text-sm text-gray-600">
            <span className="text-justify">
              {' '}
              Go the extra mile to make our customers <br /> smile
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center mb-4 sm:items-start sm:mx-0 sm:mr-8 md:mr-20">
          {/* Second Icon */}
          <div className="flex items-center justify-center mb-4 rounded-full">
            <BiBlock className="w-12 h-12 font-bold text-black" />
          </div>
          <div className="mb-1 font-bold">Accountable Freedom</div>
          <div className="text-sm text-gray-600">
            <span className="text-justify">
              Go the extra mile to make our customers <br /> smile{' '}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center mb-4 sm:items-start sm:mx-0 sm:mr-8 ">
          {/* Third Icon */}
          <div className="flex items-center justify-center mb-4 rounded-full">
            <Reward24Regular className="w-12 h-12 font-bold text-black" />
          </div>
          <div className="mb-1 font-bold">Be Remarkable</div>
          <div className="text-sm text-gray-600">
            <span className="text-justify">
              Go the extra mile to make our customers <br /> smile{' '}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-start justify-center mt-8 md:ml-20">
        <div className="flex flex-col items-center mb-20 sm:items-start sm:mr-20 sm:mx-0 ">
          {/* Fourth Icon */}
          <div className="flex items-center justify-center mb-4 rounded-full">
            <BiBlock className="w-12 h-12 font-bold text-black" />
          </div>
          <div className="mb-1 font-bold">Customer Focus</div>
          <div className="text-sm text-gray-600">
            <span className="text-justify">
              Go the extra mile to make our customers <br /> smile{' '}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center mb-20 sm:items-start sm:mr-20 sm:mx-0">
          {/* Fifth Icon */}
          <div className="flex items-center justify-center mb-4 rounded-full">
            <BiHappy className="w-12 h-12 font-bold text-black" />
          </div>
          <div className="mb-1 font-bold">Customer Focus</div>
          <div className="text-sm text-gray-600">
            <span className="text-justify">
              Go the extra mile to make our customers <br /> smile{' '}
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
