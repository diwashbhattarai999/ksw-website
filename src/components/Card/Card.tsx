import React from 'react';
import Button from '../Button';

interface CardProps {
  title: string;
  titleSec: string;
  description: string;
  showImageFirst?: boolean;
  img?: string;
  showButton?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  titleSec,
  description,
  showImageFirst = false,
  img,
  showButton = true,
}) => {
  return (
    <div className="flex flex-col pt-10 md:flex-row md:justify-between ml-5 m-auto">
      {showImageFirst ? (
        <>
          <div className="w-full sm:w-full md:w-[60%] lg:w-[60%] md:items-start">
            <div className="w-[100%] lg:w-[80%]">
              <div className="mb-4 md:mb-8">
                <div className="md:text-[2rem] text-[1.2rem] sm:text-[2rem] font-bold text-center md:text-left">
                  <p>
                    {title} <span className="text-blue-700">{titleSec}</span>
                  </p>
                </div>
                <div className="mb-4 text-base font-normal text-center md:text-lg md:text-left md:mb-8">
                  <p className="md:text-[1rem] text-[0.8rem] sm:text-[1rem]  md:w-[90%] text-justify">
                    {description}
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <a href="#">
                    {showButton && (
                      <Button
                        width="w-1/2 md:justify-start md:ml-0 ml-8 justify-center"
                        buttonName="FIND OUT MORE"
                        textColor="text-gray-50"
                        props="md:text-xl md:font-bold text-sm mr-[-0.65rem]"
                      />
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[40%] lg:w-[40%] flex justify-end ">
            <img
              className="rounded-br-[4rem] p-5 md:h-[16rem] lg:h-[25rem] object-cover m-auto"
              src={img}
              alt="People Working in Office"
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-[100%] md:w-[40%] lg:w-[40%] flex justify-start">
            <img
              className="rounded-br-[4rem] p-5 md:h-[16rem] object-cover lg:h-[25rem]"
              src={img}
              alt="People Working in Office"
            />
          </div>
          <div className="w-full sm:w-full md:w-[60%] lg:w-[50%] md:items-start">
            <div className="w-[100%] m-auto text-justify">
              <div className="mb-4 md:mb-8">
                <div className="md:text-[2rem] text-[1.2rem] sm:text-[2rem] font-bold text-center md:text-left">
                  <p>
                    {title} <span className="text-blue-700">{titleSec}</span>
                  </p>
                </div>
                <div className="mb-4 text-base font-normal text-center md:text-lg md:text-left md:mb-8">
                  <p className="md:text-[1rem] text-[0.8rem] sm:text-[2rem] md:w-[90%] text-justify">
                    {description}
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <a href="#">
                    {showButton && (
                      <Button
                        width="w-1/2 md:ml-0 ml-8 justify-center"
                        buttonName="FIND OUT MORE"
                        textColor="text-gray-50"
                        props="md:text-xl md:font-bold text-sm mr-[-0.65rem] text-center"
                      />
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
