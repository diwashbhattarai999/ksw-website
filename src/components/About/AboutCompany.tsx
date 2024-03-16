import React from 'react';
import { Button, Footer, NavBar, WhyChooseUs } from '..';
import company from '../../assets/company.svg';
import { BsBoxes } from 'react-icons/bs';
import { BiCommand, BiGroup, BiSolidGroup, BiTerminal } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './about.css';
import AboutVector from './AboutVector';
import Container from '../Container';

const WHAT_SET_US_APART = [
  {
    icon: BiCommand,
    title: 'Expertise Across Industries',
    description: `Whether you're a startup navigating the digital landscape or an established enterprise seeking to elevate your online presence, we have the expertise to cater to your unique requirements. From e-commerce solutions to robust enterprise applications, our portfolio spans diverse industries.`,
  },
  {
    icon: BiSolidGroup,
    title: 'Client-Centric Approach',
    description: `Your success is at the core of what we do. We approach every project with a client-centric mindset, tailoring our solutions to align with your business objectives. Your challenges are our challenges, and your victories are our victories.`,
  },
  {
    icon: BiTerminal,
    title: 'Innovation at Every Step',
    description: `Innovation is not just a buzzword for us; it's a way of life. We stay ahead of the curve, incorporating the latest technologies and trends into our solutions. This commitment to innovation ensures that your digital presence is always at the forefront.`,
  },
  {
    icon: BiGroup,
    title: 'Meet the Team',
    description: `Our team is the driving force behind KSW TechZone's success. Comprising talented individuals with diverse expertise, our team is united by a shared passion for technology and a commitment to delivering excellence. Meet the faces behind our success on our Team.`,
  },
];

const AboutCompany: React.FC = () => {
  return (
    <div
      className="relative overflow-hidden"
      style={{ minHeight: '-webkit-fill-available' }}
    >
      <AboutVector />
      <NavBar />

      <div className="bg-[#e5f8fb] sm:rounded-t-full my-10 p-2">
        <Container>
          <div className="grid lg:grid-cols-2">
            <div className="z-0 flex items-center justify-center p-1 sm:p-2">
              <img src={company} className="w-full max-w-[500px]" alt="svg" />
            </div>
            <div className="z-0 flex flex-col justify-center p-2 sm:p-10">
              {/* About Title */}
              <div className="flex items-center justify-start pb-2 ">
                <p className="text-black text-[0.8rem] sm:text-[1rem] font-semibold">
                  ABOUT US
                </p>
                <div className="h-0.5 bg-blue-700 w-8 sm:w-10 ml-1 sm:ml-2"></div>
              </div>

              {/* About Description */}
              <div className="pb-2">
                <p className="text-[1.2rem] sm:text-[2rem] font-bold my-4">
                  Welcome to <span className="text-blue-700">KSW TechZone</span>
                </p>
                <p className="text-sm text-justify">
                  At KSW TechZone, we don't just build software; we craft
                  digital experiences that empower businesses to thrive in the
                  ever-evolving digital landscape. Founded in the heart of
                  Nepal, we are a dynamic team of passionate individuals
                  dedicated to delivering innovative solutions and unparalleled
                  service.
                </p>
              </div>

              {/* Our Vision */}
              <div className="pb-2">
                <p className="text-[1.2rem] sm:text-[1.7rem] font-semibold border-b border-gray-500 w-fit my-4">
                  Our Vision
                </p>
                <p className="text-sm text-justify">
                  To be a trailblazer in the global tech landscape, setting new
                  standards for group of platforms, excellence and innovation.
                </p>
              </div>

              {/* Our Values */}
              <div>
                <p className="text-[1.2rem] sm:text-[1.7rem]  font-semibold border-b border-gray-500 w-fit my-4">
                  Our Values
                </p>
                <p className="my-4 text-sm text-justify">
                  <span className=" text-[0.8rem] sm:text-[1rem] font-bold pr-2">
                    Innovation:
                  </span>
                  We thrive on innovation, pushing boundaries to create
                  solutions that stand out in a crowded digital space.
                </p>
                <p className="my-4 text-sm text-justify">
                  <span className="font-bold text-[0.8rem] sm:text-[1rem] pr-2">
                    Quality:
                  </span>
                  Excellence is non-negotiable. Our commitment to quality is
                  evident in every line of code we write and every strategy we
                  implement.
                </p>
                <p className="my-4 text-sm text-justify">
                  <span className="font-bold text-[0.8rem] sm:text-[1rem] pr-2">
                    Collaboration:
                  </span>
                  Your success is our success. We foster a collaborative
                  environment, working closely with our clients to understand
                  their unique needs and goals.
                </p>
                <p className="my-4 text-sm text-justify">
                  <span className="font-bold text-[0.8rem] sm:text-[1rem] pr-2">
                    Integrity:
                  </span>
                  Transparency and integrity form the foundation of our
                  relationships. We believe in open communication and ethical
                  business practices.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 sm:p-2">
            {/* Our Story */}
            <div className="flex flex-col items-start max-w-2xl gap-4 sm:p-3">
              <div className="flex items-center justify-center gap-4">
                <BsBoxes className="size-10" style={{ color: 'blue' }} />
                <p className="text-[1.2rem] sm:text-[2rem] font-semibold pb-2">
                  Our Story
                </p>
              </div>

              <p className="text-sm text-justify">
                The journey of KSW TechZone began with a simple yet ambitious
                vision to redefine the possibilities of technology for
                businesses of all sizes. Established in 2022, our founder set
                out on a mission to bridge the gap between cutting edge
                technology and practical, results-driven solutions, bringing
                different platforms for ease of mankind. Over the years, our
                commitment to this vision has propelled us to become a trusted
                name in the world of IT Services and Software Development.
              </p>
            </div>

            {/* Our Mission */}
            <div className="flex flex-col items-start max-w-2xl gap-4 sm:p-3">
              <div className="flex items-center justify-center gap-4">
                <BsBoxes className="size-10" style={{ color: 'blue' }} />
                <p className="text-[1.2rem] sm:text-[2rem] font-semibold pb-2">
                  Our Mission
                </p>
              </div>

              <p className="text-sm text-justify">
                At KSW TechZone, our mission is clear to empower businesses
                through technology. We believe that technology should not be a
                barrier but a catalyst for growth. Through bespoke solutions and
                a client-centric approach, we aim to be the driving force behind
                your digital success.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* What sees us apart */}
        <div className="mb-10 ">
          <h2 className="text-[1.2rem] sm:text-[2rem] font-bold text-center">
            What Sets Us <span className="text-blue-700">Apart</span>
          </h2>

          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {WHAT_SET_US_APART.map((w) => {
              return (
                <li className="rounded-md bg-gray-50">
                  <div className="flex flex-col gap-4 p-5">
                    <div className="flex items-center gap-4">
                      <w.icon className="text-blue-700 size-10" />
                      <p className="text-xl font-semibold">{w.title}</p>
                    </div>
                    <p className="text-sm text-justify text-gray-500">
                      {w.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <WhyChooseUs />

      {/* See our teams */}
      <div className="flex items-center justify-center w-full my-20">
        <Link
          to="/ourteam"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
        >
          <Button
            width="w-56"
            bgColor="bg-[#EFF569]"
            textColor="text-gray-900"
            hoverEffect=""
            buttonName="See our Teams"
            props="font-bold w-[195px] rounded-lg md:text-lg "
            svg
          />
        </Link>
      </div>

      {/* Join us today */}
      <div className="py-20 my-20 bg-gray-50">
        <div className="mb-4">
          <p className="text-[1.2rem] sm:text-[2rem] font-bold text-center">
            Join Us on the
            <span className="text-blue-700"> Digital Journey</span>
          </p>
        </div>
        <div className="w-full sm:w-[50%] m-auto">
          <p className="px-2 mb-5 text-justify text-md sm:text-center sm:px-0">
            Whether you're looking for web development, digital marketing, IT
            consulting, or a combination of these services, KSW TechZone is your
            dedicated partner. Join us on the digital journey, and let's
            transform your aspirations into digital reality.
          </p>
          <div className="h-[40px] flex justify-center mb-5">
            <Link to="/contact">
              <Button
                width="w-56"
                bgColor="bg-[#EFF569]"
                textColor="text-gray-900"
                hoverEffect=""
                buttonName="Get in Touch"
                props="font-bold w-[195px] rounded-lg md:text-lg "
              />
            </Link>
          </div>
          <p className="mb-5 text-center text-md">
            Thank you for considering KSW TechZone as your digital partner. We
            look forward to the opportunity to collaborate and bring your
            digital vision to life.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutCompany;
