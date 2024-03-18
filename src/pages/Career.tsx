import { NavBar, Button } from '../components';
import { Link } from 'react-router-dom';

import career from '../assets/career.png';
import Container from '../components/Container';

import { GoChevronDown } from 'react-icons/go';

const JOB_OPENINGS = [
  {
    position: 'Software Engineer',
    department: 'Engineering',
    location: 'Kathmandu, Nepal',
  },
  {
    position: 'Marketing Manager',
    department: 'Marketing',
    location: 'Patan, Nepal',
  },
  {
    position: 'Data Scientist',
    department: 'Data Science',
    location: 'Bhaktapur, Nepal',
  },
  {
    position: 'Product Manager',
    department: 'Product Management',
    location: 'Lalitpur, Nepal',
  },
  {
    position: 'Graphic Designer',
    department: 'Design',
    location: 'Banepa, Nepal',
  },
  {
    position: 'Financial Analyst',
    department: 'Finance',
    location: 'Dhulikhel, Nepal',
  },
  {
    position: 'HR Coordinator',
    department: 'Human Resources',
    location: 'Nagarkot, Nepal',
  },
  {
    position: 'Sales Representative',
    department: 'Sales',
    location: 'Bhaisepati, Nepal',
  },
  {
    position: 'Customer Support Specialist',
    department: 'Customer Support',
    location: 'Godawari, Nepal',
  },
  {
    position: 'Operations Manager',
    department: 'Operations',
    location: 'Chobhar, Nepal',
  },
];

const DEPARTMENTS = [
  'Engineering',
  'Marketing',
  'Data Science',
  'Product Management',
  'Design',
  'Finance',
  'Human Resources',
  'Sales',
  'Customer Support',
  'Operations',
];

const LOCATIONS = [
  'Kathmandu, Nepal',
  'Patan, Nepal',
  'Bhaktapur, Nepal',
  'Lalitpur, Nepal',
  'Banepa, Nepal',
  'Dhulikhel, Nepal',
  'Nagarkot, Nepal',
  'Bhaisepati, Nepal',
  'Godawari, Nepal',
  'Chobhar, Nepal',
];

export default function Career() {
  return (
    <div
      className="relative overflow-hidden overflow-x-hidden"
      style={{ minHeight: '-webkit-fill-available' }}
    >
      {/* <CareerVector /> */}
      <NavBar />

      <Container>
        <div className="flex items-center justify-between py-10 max-lg:flex-col">
          <div className="z-20 max-md:mb-20">
            <h1 className="mb-4 lg:-mt-32 text-[2.8rem] md:text-[3.4rem] font-bold max-w-[900px] leading-tight">
              Get involved now and be part of something{' '}
              <span className="text-[#004AAD]">bigger!</span>{' '}
            </h1>
            <p className="text-[#040404] text-2xl font-semibold">
              Take action today!
            </p>
          </div>

          <div className="z-10 md:-ml-20">
            <img
              src={career}
              alt="Career"
              className="max-w-[478px] md:h-[500px] md:mt-14 "
            />
          </div>
        </div>
      </Container>

      <div className="flex flex-col items-center p-8 text-center">
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

        <Link to="/#">
          <Button buttonName="VIEW OPENINGS" />
        </Link>
      </div>

      <div className="p-8 mt-10 text-center ">
        <h2 className="mb-4 text-5xl font-extrabold">
          <span className="text-blue-700">Values</span>{' '}
          <span className="text-black">that shape us</span>
        </h2>
        <p className="text-[0.8rem] sm:text-[1rem] mb-6 max-w-[60%] mx-auto">
          Our values are not just words on paper – they're the beating heart of
          who we are. They define our vibrant culture and guide us in everything
          we do.
        </p>
      </div>

      <div className="py-8 mt-10 text-center ">
        <h2 className="mb-4 text-5xl font-extrabold">
          <span className="text-black">Find your seat</span>{' '}
          <span className="text-blue-700">at our table</span>
        </h2>

        <div className="flex justify-center mt-24">
          <div className="flex items-center justify-center gap-4 p-4 duration-300 cursor-pointer w-fit hover:bg-gray-50">
            <h3 className="text-xl font-medium">Job Openings</h3>
            <GoChevronDown className="w-6 h-6 mt-[2px]" />
          </div>
        </div>

        {/* JOB OPENINGS */}
        <div className="my-10 ">
          {/* TITLES */}
          <div className="text-left border-y bg-gray-50">
            <Container className="flex py-12 lg:justify-between max-lg:flex-col max-lg:gap-6">
              <h2 className="text-lg lg:basis-[32rem]">
                {JOB_OPENINGS.length} Results
              </h2>

              <div className="flex items-center justify-between basis-1/2">
                <div className="basis-2/3">
                  <select className="p-2 cursor-pointer">
                    <option value="">All Departments</option>
                    {DEPARTMENTS.map((department, index) => (
                      <option key={index} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="basis-1/3">
                  <select className="p-2 cursor-pointer">
                    <option value="">All Locations</option>
                    {LOCATIONS.map((location, index) => (
                      <option key={index} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </Container>
          </div>
          <Container>
            {/* JOBS */}
            <ul className="text-left">
              {JOB_OPENINGS.map((job, index) => {
                return (
                  <li
                    key={index}
                    className="flex max-md:flex-col px-4 md:px-8 py-6 md:py-12 transition-transform duration-300 bg-white border-b cursor-pointer hover:bg-gray-100 hover:scale-[1.01]"
                  >
                    <h2 className="text-lg font-semibold basis-1/2">
                      {job.position}
                    </h2>
                    <div className="flex md:justify-between md:items-center basis-1/2">
                      <h2 className="max-md:text-sm md:font-medium md:basis-2/3">
                        {job.department}
                      </h2>
                      <div className="mx-1 font-medium md:hidden">/</div>
                      <h2 className="max-md:text-sm md:font-medium md:basis-1/3">
                        {job.location}
                      </h2>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Container>
        </div>
      </div>
    </div>
  );
}
