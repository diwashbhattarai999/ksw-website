import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface CardProps {
  image: string;
  name: string;
  role: string;
}

const TeamCard: React.FC<CardProps> = ({ image, name, role }) => {
  return (
    <>
      <div className=" flex flex-col items-center h-80 z-50">
        <div className="">
          <img
            src={image}
            alt=""
            className="w-[10rem] h-[10rem] rounded-full object-cover shadow-lg shadow-gray-600 "
          />
        </div>
        <div className=" text-center w-full m-auto">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="font-medium">{role}</p>
        </div>
        <div className="flex gap-2 ">
          <Link to="">
            <FaFacebook
              className="changeBg"
              style={{ fontSize: '30px', color: '#004AAD' }}
            />
          </Link>
          <Link to="">
            <FaLinkedin style={{ fontSize: '30px', color: '#004AAD' }} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
