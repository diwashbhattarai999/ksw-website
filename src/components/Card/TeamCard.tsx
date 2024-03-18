import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function TeamCard({ item }) {
  return (
    <>
      <div className=" flex flex-col items-center h-80 z-50">
        <div className="">
          <img
            src={item.img}
            alt=""
            className="w-[10rem] h-[10rem] rounded-full object-cover "
          />
        </div>
        <div className=" text-center w-4/5 m-auto">
          <h1 className="text-2xl font-bold">{item.name}</h1>
          <p className="font-medium">{item.role}</p>
        </div>
        <div className="flex gap-2 ">
          <Link to="">
            {' '}
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
}
