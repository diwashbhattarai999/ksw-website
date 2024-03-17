import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import contactSvg from '../../assets/contact.svg';
import { FaXTwitter } from 'react-icons/fa6';
import Container from '../Container';

const ContactMain: React.FC = () => {
  return (
    <Container>
      <div className="sm:h-[80%] m-auto mt-5">
        <div className="toppart ">
          <h1 className="text-[1.3rem] sm:text-[2.2rem] z-10 font-bold border-b-2 border-black w-fit pr-2">
            Contact Us
          </h1>
          <div className="flex items-start justify-between gap-10 max-lg:flex-col">
            <div className="w-full lg:max-w-xl">
              <h2 className="py-2 text-[1.2rem] sm:text-[1.7rem] font-medium">
                Let's Connect
              </h2>
              <p className="text-[0.8rem] sm:text-[1rem] text-justify py-2 text-gray-700">
                Whether you have a project in mind or just want to explore how
                KSW TechZone can elevate your digital presence, we're here to
                help. Reach out to us, and let's start a conversation.
              </p>

              <div className="h-auto my-3 contact-information">
                {/* <h2 className="text-[1.6rem]">Contact Information</h2> */}
                <div className="text-[0.8rem] sm:text-[1rem] text-gray-700">
                  <h2>
                    <span className="font-semibold">Address:</span>{' '}
                    Imadol,Lalitpur<br></br>
                  </h2>
                  <h2>
                    <span className="font-semibold">Phone:</span>{' '}
                    +977-9863198323<br></br>
                  </h2>
                  <h2>
                    <span className="font-semibold">Email: </span>
                    <Link to="mailto:">
                      kswtechzone@gmail.com
                      <br />
                    </Link>
                    <span className="ml-[52px]"> contact@kswtechzone.com</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-xl">
              <h2 className="py-2 text-[1.2rem] sm:text-[1.7rem] font-medium">
                Connect With Us
              </h2>
              <p className="text-[0.8rem] sm:text-[1rem] text-justify text-gray-700">
                Stay updated on the latest tech trends, industry insights, and
                KSW TechZone news by connecting with us on social media.
              </p>
              <div className="flex items-start gap-4 mt-5 sm:justify-start">
                <Link to={'/'}>
                  <FaFacebook className="font-bold text-blue-500 w-9 h-9" />
                </Link>
                <Link to={'/'}>
                  <FaLinkedin className="font-bold text-blue-700 w-9 h-9" />
                </Link>
                <Link to={'/'}>
                  <FaInstagram className="font-bold text-red-300 w-9 h-9" />
                </Link>
                <Link to={'/'}>
                  <FaXTwitter className="font-bold text-black w-9 h-9" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-justify">
          <h2 className="text-[1.5rem] sm:text-[1.7rem] font-medium pb-2 ">
            We're Here for You
          </h2>
          <p className="text-[0.8rem] sm:text-[1rem] text-gray-700">
            At KSW TechZone, your inquiries matter. Whether you're ready to
            start a project or have questions about our services, we're here to
            assist you every step of the way. Let's build something incredible
            together!
          </p>
        </div>

        <div className="mt-10 lg:flex">
          <div className="map h-[100%] m-auto pb-2 sm:pt-3  w-[100%]  ">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.8741294666534!2d85.34508437632786!3d27.65936577621009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb173bf68b2d87%3A0x22a42fe8a2872c8a!2sKSW%20TECHZONE!5e0!3m2!1sen!2snp!4v1710143276574!5m2!1sen!2snp"
              loading="lazy"
              className="h-[80%] w-[100%] sm:pr-4"
            ></iframe> */}
            <img src={contactSvg} alt="" className="h-full w-[90%] m-auto" />
          </div>
          <div className="h-[500px]">
            <div className="w-[90%] lg:min-w-[610px] m-auto sm:m-0 md:m-0 lg:m-0">
              <h2 className="text-[1.8rem] sm:text-[2rem] font-medium">
                Get In Touch
              </h2>
              <p className="text-[1rem] sm:text-[1.2rem]">
                Have a specific inquiry or just want to say hello? Fill out the
                form below, and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] m-auto lg:m-0 md:m-0 md:w-[100%] lg:w-full mt-5 text-[0.9rem] ">
              <form action="">
                <div className="lg:min-w-[610px] flex flex-col pb-2">
                  <input
                    type="text"
                    className="border border-gray-400 p-2 w-[100%]"
                    placeholder="Full Name*"
                  />
                </div>
                <div className="lg:min-w-[610px] flex flex-col pb-2">
                  <input
                    type="email"
                    className="border border-gray-400 p-2 w-[100%]"
                    placeholder="Email*"
                  />
                </div>
                <div className="lg:min-w-[610px] flex flex-col pb-2">
                  <input
                    type="number"
                    className="p-2 border border-gray-400"
                    placeholder="Phone *"
                  />
                </div>
                <div className="lg:min-w-[610px] flex flex-col pb-2">
                  <input
                    type="text"
                    className="p-2 border border-gray-400"
                    placeholder="Subject"
                  />
                </div>
                <div className="lg:min-w-[610px] ">
                  <textarea
                    className="border border-gray-400 p-2 w-[100%]"
                    placeholder="Mesaage"
                  />
                </div>
                <div className="lg:min-w-[610px] ">
                  <input
                    type="submit"
                    value={'Submit'}
                    className="bg-[#004AAD] text-white p-2 my-2 w-[100%] font-semibold rounded-md hover:cursor-pointer hover:bg-[#004AAD]/70"
                    placeholder="Subject"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="my-3">
          <h2 className="text-[1.2rem] sm:text-[2rem] font-medium">Visit Us</h2>
          <p className="text-[0.8rem] sm:text-[1rem] text-justify">
            If you prefer face-to-face discussions, we'd love to welcome you to
            our office. Schedule a visit, and let's discuss how KSW TechZone can
            be your strategic partner in the digital realm.
          </p>
          <br></br>
          <div className="map h-[100%] m-auto pb-2 sm:pt-3 lg:h-[700px] w-[100%]  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.8741294666534!2d85.34508437632786!3d27.65936577621009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb173bf68b2d87%3A0x22a42fe8a2872c8a!2sKSW%20TECHZONE!5e0!3m2!1sen!2snp!4v1710143276574!5m2!1sen!2snp"
              loading="lazy"
              className="h-[80%] w-[100%] sm:pr-4"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactMain;
