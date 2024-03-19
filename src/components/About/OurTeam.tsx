import CEO from '../../assets/sanjay.jpg';
import TeamCard from '../Card/TeamCard';

export default function OurTeam() {
  interface TeamMember {
    img: string;
    name: string;
    role: string;
  }
  const leader: TeamMember[] = [
    {
      img: '/picture/Buddharam.jpg',
      name: 'Buddharam Mahato',
      role: 'Legal and Local Advisor',
    },
    {
      img: '/picture/Aneep.jpg',
      name: 'Anip Shah',
      role: ' IOT & Robotics Head',
    },
    {
      img: '/picture/Pranish.jpg',
      name: 'Pranish Shukla',
      role: 'Cyber Security Expert',
    },
    {
      img: '/picture/mina.jpg',
      name: 'Mina Singh',
      role: 'Digital Marketing',
    },
    {
      img: '/picture/suman.jpg',
      name: 'Suman Sharma',
      role: ' Backend Developer, Project Manager',
    },
  ];
  const team: TeamMember[] = [
    {
      img: '/picture/prashant.jpeg',
      name: 'Prashant Mahato',
      role: 'Frontend Developer',
    },
    {
      img: '/picture/aju.jpg',
      name: 'Aju Maharjan',
      role: 'Frontend Developer',
    },
    {
      img: '/picture/manisha.jpg',
      name: 'Manisha Kumari Tharu',
      role: 'Frontend Developer',
    },
    {
      img: '/picture/ram.jpg',
      name: 'Ram Shrestha',
      role: 'Frontend Developer',
    },
    {
      img: '/picture/gopal.jpg',
      name: 'Gopal Pokhrel',
      role: ' Frontend Developer',
    },

    {
      img: '/picture/prabin.jpg',
      name: 'Prabin Ghimire',
      role: 'Backend Developer',
    },
    {
      img: '/picture/sagar.jpg',
      name: 'Sagar Maharjan',
      role: ' UI/UX ',
    },
  ];
  return (
    <>
      <div className="z-50 mt-16 md:mt-20 lg:mt-28 xl:mt-36">
        <h1 className="font-semibold text-[0.8rem] sm:text-[1rem] text-center px-3 sm:w-1/2 sm:m-auto">
          KSW TechZone: A diverse team with varied expertise collaborating to
          explore innovative solutions through unique approaches.
        </h1>

        <div className="flex flex-col items-center w-4/5 m-auto gap-8 px-4 mt-16 md:flex-row md:justify-between md:items-center lg:justify-center">
          <div className=" w-full lg:w-3/5 m-auto">
            <h1 className="font-bold text-[1.2rem] sm:text-[2rem]s sm:text-center md:text-left">
              Sanjay Kumar Singh
            </h1>
            <p className="text-sm font-light sm:text-center md:text-left">
              CEO, IT & Business Consultant
            </p>

            <div className="w-full my-4 border-2 border-black border-dashed"></div>

            <p className="mt-6">
              Since 2022, we've been on a mission to enhance human access to
              services through innovative platforms. Delivering diverse services
              with top- notch IT solutions, our journey is dedicated to making a
              positive impact.
            </p>
          </div>
          <div className=" w-full h-fit sm:w-[40%] border-red-900 grid place-items-center">
            <img
              src={CEO}
              alt=""
              className="w-[20rem] h-[19rem] rounded-md border-red-300 object-contain"
            />
          </div>
        </div>

        <div>
          <p className="p-4 md:w-4/5 md:m-auto lg:mt-24 text-xl font-medium text-center">
            Cheers to our amazing team for pushing boundaries and contributing
            to Nepal's tech landscape!
          </p>
        </div>

        <div className="grid w-4/5 m-auto gap-y-10  mt-10 place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {leader.map((item, index) => (
            <TeamCard
              image={item.img}
              name={item.name}
              role={item.role}
              key={index}
            />
          ))}
        </div>

        <h1 className="text-center mt-16 font-bold text-[1.2rem] sm:text-[2rem]">
          Our team
        </h1>

        <div className="grid w-4/5 m-auto gap-y-10 mt-10 place-items-center sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {team.map((item, index) => (
            <TeamCard
              image={item.img}
              name={item.name}
              role={item.role}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
