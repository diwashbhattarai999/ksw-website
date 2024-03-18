import React from 'react';
import { Link } from 'react-router-dom';
import contactSvg from '../../assets/contact.svg';
import Container from '../Container';

const ContactMain: React.FC = () => {
  return (
    <>
      <div className="sm:h-[80%] m-auto pt-8">
          <div className="grid lg:grid-cols-2 gap-2 md:m-10 md:px-10 m-6">
            <div className='z-0 flex flex-col justify-center'>
            <div className="w-full lg:max-w-xl">
              <h2 className="py-2 text-[1.2rem] sm:text-[2rem] font-bold">
                Let's <span className='text-[#004AAD]'>Connect</span> 
              </h2>
              <p className="text-[0.8rem] sm:text-[1rem] text-justify py-2 text-black">
                Whether you have a project in mind or just want to explore how
                KSW TechZone can elevate your digital presence, we're here to
                help. Reach out to us, and let's start a conversation.
              </p>

              <div className="h-auto my-3 contact-information">
                <div className="text-[0.8rem] sm:text-[1rem] text-black">
                  <h2><span className="font-semibold">Address:</span>{' '}Imadol,Lalitpur<br></br></h2>
                  <h2><span className="font-semibold">Phone:</span>{' '}+977-9863198323<br></br></h2>
                  <h2><span className="font-semibold">Email: </span><Link to="mailto:">kswtechzone@gmail.com<br /></Link>
                  <span className="ml-[52px]"> contact@kswtechzone.com</span>
                  </h2>
                </div>
              </div>
            </div>
            </div>
          <div className="z-0 flex items-center justify-center p-1 sm:p-2">
            <div className="map h-[100%] m-auto pb-2 sm:pt-3  w-[100%]  ">
              {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.8741294666534!2d85.34508437632786!3d27.65936577621009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb173bf68b2d87%3A0x22a42fe8a2872c8a!2sKSW%20TECHZONE!5e0!3m2!1sen!2snp!4v1710143276574!5m2!1sen!2snp"
              loading="lazy"
              className="h-[80%] w-[100%] sm:pr-4"
            ></iframe> */}
              <img
                src={contactSvg}
                alt=""
                className="w-full max-w-[500px] m-auto"
                />
            </div>
          </div>
          </div>

        

        
        <div className="md:m-10 md:px-10 m-6">
          <h2 className="text-[1.2rem] sm:text-[2rem] font-medium">Visit Us</h2>
          <p className="text-[0.8rem] sm:text-[1rem] text-justify">
            If you prefer face-to-face discussions, we'd love to welcome you to
            our office. Schedule a visit, and let's discuss how KSW TechZone can
            be your strategic partner in the digital realm.
          </p>
          <br></br>
          <div className="map h-[100%] m-auto pb-2 sm:pt-3 lg:h-[700px] w-[100%] ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.8741294666534!2d85.34508437632786!3d27.65936577621009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb173bf68b2d87%3A0x22a42fe8a2872c8a!2sKSW%20TECHZONE!5e0!3m2!1sen!2snp!4v1710143276574!5m2!1sen!2snp"
              loading="lazy"
              className="h-[80%] w-[100%] sm:pr-4"
              ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMain;
