// Import necessary components and assets
import { NavBar } from '../components';
import career from '../assets/career.png';
import Container from '../components/Container';
import { useState } from 'react';

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
  {
    position: 'Marketing Manager',
    department: 'Marketing',
    location: 'Bhaktapur, Nepal',
  },
  {
    position: 'Operations Manager',
    department: 'Operations',
    location: 'Bhaktapur, Nepal',
  },
];
// Existing code for departments and locations
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

// Define the Career component
export default function Career() {
  // State for selected department and location
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Function to handle department selection change
  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  // Function to handle location selection change
  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  // Filtered job openings based on selected department and location
  const filteredJobOpenings = JOB_OPENINGS.filter((job) => {
    return (
      (!selectedDepartment || job.department === selectedDepartment) &&
      (!selectedLocation || job.location === selectedLocation)
    );
  });

  // Return JSX for the Career component
  return (
    <div
      className="relative overflow-hidden overflow-x-hidden"
      style={{ minHeight: '-webkit-fill-available' }}
    >
      {/* <CareerVector /> */}
      <NavBar />

      <Container className="md:mb-10">
        <div className="flex items-center justify-between min-h-screen relative">
          <div className="z-20 w-full">
            <h1 className="mb-4 md:w-2/3 lg:-mt-32 text-[2.8rem] md:text-[3.4rem] font-bold max-w-[900px] leading-tight">
              Get involved now and be part of something{' '}
              <span className="text-[#004AAD]">bigger!</span>{' '}
            </h1>
            <p className="text-[#040404] text-2xl font-semibold">
              Take action today!
            </p>
          </div>

          <img
            src={career}
            alt="Career"
            className="max-w-[50vw] md:h-[50vh] lg:h-[500px] hidden sm:block md:absolute top-32 right-0 "
          />
        </div>
      </Container>

      <div className="flex flex-col items-center text-center lg:mt-20">
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
      </div>

      <div className="py-8 text-center ">
        <h2 className="mb-4 text-3xl font-extrabold">
          <span className="text-black">Find your seat</span>{' '}
          <span className="text-blue-700">at our table</span>
        </h2>

        <div className="flex justify-center mt-10">
          <div className="flex items-center justify-center gap-4 p-4 duration-300 cursor-pointer w-fit hover:bg-gray-50">
            <h3 className="text-xl font-medium">Job Openings</h3>
          </div>
        </div>

        {/* JOB OPENINGS */}
        <div className="my-10 ">
          {/* TITLES */}
          <div className="text-left border-y bg-gray-50">
            <Container className="flex py-3 md:py-5 lg:py-12 lg:justify-between max-lg:flex-col max-lg:gap-6">
              <h2 className="text-lg lg:basis-[32rem] text-center lg:text-left ">
                {filteredJobOpenings.length} Results
              </h2>
              <div className="text-center  md:flex items-center justify-between basis-1/2">
                <div className="basis-2/3 md:basis-1/2">
                  <select
                    className="p-2 mb-2 cursor-pointer"
                    value={selectedDepartment}
                    onChange={handleDepartmentChange}
                  >
                    <option value="">All Departments</option>
                    {DEPARTMENTS.map((department, index) => (
                      <option key={index} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="basis-1/3 md:basis-1/2">
                  <select
                    className="p-2 mt-2 md:mt-0 md:mb-2  cursor-pointer"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                  >
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

          {/* Display filtered job openings */}
          <Container>
            <ul className="text-left">
              {filteredJobOpenings.map((job, index) => (
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
              ))}
            </ul>
          </Container>
        </div>
      </div>
    </div>
  );
}
