import CEO from '../../assets/sanjay.jpg';

export default function OurTeam() {
  interface TeamMember {
    img: string;
    name: string;
    role: string;
  }
  const leader: TeamMember[] = [
    {
      img:'rahull.jpg',
      name: 'Rahul Maharjan',
      role:'CEO',
    },
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
      img: CEO,
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
      img: '/picture/mibek.jpg',
      name: 'Mibek Shrestha',
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
    {
      img: '/picture/sanjay.jpg',
      name: 'Sanjay Kumar Singh',
      role: ' Frontend Developer',
    },
    {
      img: '/picture/sushovit.png',
      name: 'Sushovit Shah',
      role: ' Frontend Developer',
    },
  ];
  return (
    <>
      <div className="z-50 mt-16 ">
        <h1 className="font-semibold text-[0.8rem] sm:text-[1rem] text-center px-3 sm:w-1/2 sm:m-auto">
          KSW TechZone: A diverse team with varied expertise collaborating to
          explore innovative solutions through unique approaches.
        </h1>

        <div className="flex flex-col items-center w-full gap-8 px-4 mt-16 md:flex-row md:justify-between md:items-center lg:justify-center">
          <div className=" w-full sm:w-[40%]">
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
              className="w-[20rem] h-[19rem] rounded-md border-red-300"
            />
          </div>
        </div>

        <div>
          <p className="p-4 mt-24 text-xl font-medium text-center">
            Cheers to our amazing team for pushing boundaries and contributing
            to Nepal's tech landscape!
          </p>
        </div>

        <div className="grid w-full gap-4 mt-10 place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
          {leader.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="w-[18rem] h-[20rem] flex flex-col items-center relative mt-6"
                >
                  <div className="w-[17rem] h-[18rem] ">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[17rem] h-[18rem] rounded-md "
                    />
                    <img src="" alt="" />
                  </div>
                  <div className="w-[14rem] h-[5rem] bg-gray-200 absolute bottom-1 p-1 text-center rounded-xl">
                    <h1 className="text-xl font-medium text-center">
                      {item.name}
                    </h1>
                    <p>{item.role}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <h1 className="text-center mt-16 font-bold text-[1.2rem] sm:text-[2rem]">
          Our team
        </h1>

        <div className="grid w-full gap-4 mt-10 place-items-center sm:grid-cols-2 lg:grid-cols-3 ">
          {team.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="w-[18rem] h-[20rem]  flex flex-col items-center  relative mt-6 z-40"
                >
                  <div className="w-[17rem] h-[18rem] ">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[17rem] h-[18rem] rounded-md "
                    />
                    <img src="" alt="" />
                  </div>
                  <div className="w-[14rem] h-[5rem] bg-gray-200 absolute bottom-1 text-center p-1 rounded-xl">
                    <h1 className="text-xl font-medium text-center">
                      {item.name}
                    </h1>
                    <p>{item.role}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
