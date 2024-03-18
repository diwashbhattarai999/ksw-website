import React from 'react';
import { Button } from '..';
import { Link } from 'react-router-dom';

interface CardProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

const CardBlog: React.FC<CardProps> = ({ image, date, title, description }) => {
  return (
    <div className="w-full flex flex-col pt-10 md:flex-row md:justify-between">
      <div className="w-full md:w-1/2 flex sm:px-6">
        <img
          className=" object-contain"
          src={image}
          alt="People Working in Office"
        />
      </div>
      <div className="w-full md:w-1/2 md:items-start sm:my-auto">
        <div className="text-sm md:text-base font-bold text-center md:text-left">
          {date}
        </div>
        <div className="mb-1 text-base md:text-xl lg:text-4xl font-bold text-center md:text-left">
          <p>{title}</p>
        </div>
        <div className="mb-1 text-xs font-medium text-center md:text-base lg:text-lg md:text-justify md:mb-2">
          <p className="md:text-[1.1rem]">{description}</p>
        </div>
        <div className="flex justify-center sm:justify-start">
          <Link to="/#">
            <Button
              width="w-56"
              textColor="text-white"
              hoverEffect="hover:text-[#003278]"
              buttonName="COME JOIN US"
              props="font-semibold w-[195px] rounded-md text-xs"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
