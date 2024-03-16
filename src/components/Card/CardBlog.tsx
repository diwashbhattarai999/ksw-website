import React from 'react';
import { Button } from '..';
import { Link } from 'react-router-dom';

interface CardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  variant: 'row' | 'col';
}

const CardBlog: React.FC<CardProps> = ({
  image,
  date,
  title,
  description,
  variant = 'row',
}) => {
  if (variant === 'row') {
    return (
      <div className="flex flex-col pt-10 md:flex-row md:justify-between">
        <div className="w-[100%] md:w-[50%] flex justify-start p-1 sm:px-6">
          <img
            className="md:h-[16rem] lg:h-[25rem] m-auto"
            src={image}
            alt="People Working in Office"
          />
        </div>
        <div className="w-full sm:w-[60%] md:items-start sm:my-auto">
          <div className="text-[1rem] md:text-[1.2rem] font-bold text-center md:text-left sm:ml-44">
            {date}
          </div>
          <div className="mb-1 text-4xl font-bold text-center md:text-left sm:ml-44">
            <p>{title}</p>
          </div>
          <div className="mb-1 text-base font-medium text-center md:text-lg md:text-justify md:mb-2 sm:ml-44">
            <p className="md:text-[1.1rem]">{description}</p>
          </div>
          <div className="flex justify-center sm:justify-start sm:ml-44">
            <Link to="/#">
              <Button
                width="w-56"
                textColor="text-gray-50"
                buttonName="COME JOIN US"
                props="font-bold w-[195px] rounded-sm"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (variant === 'col') {
    return (
      <div className="grid sm:grid-cols-2 ">
        <div className="flex flex-col pt-10 md:flex-col md:justify-between">
          <div className="w-[100%] sm:w-[80%] flex justify-start sm:mx-6">
            <img
              className="md:h-[16rem] lg:h-[25rem] mb-4"
              src={image}
              alt="People Working in Office"
            />
          </div>
          <div className="w-full sm:w-[80%] md:items-start sm:mx-6">
            <div className="text-[1rem] md:text-[1.2rem] font-bold text-center md:text-left">
              {date}
            </div>
            <div className="mb-1 text-4xl font-bold text-center md:text-left">
              <p>{title}</p>
            </div>
            <div className="mb-1 text-base font-medium text-center md:text-lg md:text-justify md:mb-2">
              <p className="md:text-[1.1rem]">{description}</p>
            </div>
            <div className="flex justify-center sm:justify-start">
              <Link to="/#">
                <Button
                  width="w-56"
                  textColor="text-black"
                  hoverEffect="hover:bg-yellow-300"
                  buttonName="COME JOIN US"
                  props="font-semibold w-[195px] rounded-md"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-10 md:flex-col md:justify-between">
          <div className="w-[100%] sm:w-[80%] flex justify-start sm:ml-24">
            <img
              className="md:h-[16rem] lg:h-[25rem] mb-4"
              src={image}
              alt="People Working in Office"
            />
          </div>
          ;
          <div className="w-full sm:w-[80%] md:items-start sm:ml-24">
            <div className="text-[1rem] md:text-[1.2rem] font-bold text-center md:text-left">
              {date}
            </div>
            <div className="mb-1 text-4xl font-bold text-center md:text-left">
              <p>{title}</p>
            </div>
            <div className="mb-1 text-base font-medium text-center md:text-lg md:text-justify md:mb-2">
              <p className="md:text-[1.1rem]">{description}</p>
            </div>
            <div className="flex justify-center sm:justify-start">
              <Link to="/#">
                <Button
                  width="w-56"
                  textColor="text-black"
                  hoverEffect="hover:bg-yellow-300"
                  buttonName="COME JOIN US"
                  props="font-semibold w-[195px] rounded-md"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col pt-10 md:flex-row md:justify-between">
      <div className="w-[100%] md:w-[50%] flex justify-start p-1 sm:px-6">
        <img
          className="md:h-[16rem] lg:h-[25rem] m-auto"
          src={image}
          alt="People Working in Office"
        />
      </div>
      <div className="w-full sm:w-[60%] md:items-start sm:my-auto">
        <div className="text-[1rem] md:text-[1.2rem] font-bold text-center md:text-left sm:ml-44">
          {date}
        </div>
        <div className="mb-1 text-4xl font-bold text-center md:text-left sm:ml-44">
          <p>{title}</p>
        </div>
        <div className="mb-1 text-base font-medium text-center md:text-lg md:text-justify md:mb-2 sm:ml-44">
          <p className="md:text-[1.1rem]">{description}</p>
        </div>
        <div className="flex justify-center sm:justify-start sm:ml-44">
          <Link to="/#">
            <Button
              width="w-56"
              textColor="text-black"
              hoverEffect="hover:bg-yellow-300"
              buttonName="COME JOIN US"
              props="font-semibold w-[195px] rounded-md"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
