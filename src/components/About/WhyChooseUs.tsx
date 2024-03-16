import { Footer, NavBar, Button } from "../index";
import { Link } from "react-router-dom";
import WhyChooseUsVetcor from "./WhyChooseUsVetcor";
import Expert from "../../assets/WhyChooseUsImage/Expert.png"
import Agility from "../../assets/WhyChooseUsImage/Agility.png"
import Collaboration from "../../assets/WhyChooseUsImage/Collaboration.png"
import Innovation from "../../assets/WhyChooseUsImage/Innovation.png"
import Versility from "../../assets/WhyChooseUsImage/Versility.png"
import Customer from "../../assets/WhyChooseUsImage/Customer.png"
import Strategic from "../../assets/WhyChooseUsImage/Strategic.png"
import Attention from "../../assets/WhyChooseUsImage/Attention.png"
import Global from "../../assets/WhyChooseUsImage/Global.png"
import Improvement from "../../assets/WhyChooseUsImage/Improvement.png"
import Driven from "../../assets/WhyChooseUsImage/Driven.png"
import Solution from "../../assets/WhyChooseUsImage/solution.png"



export default function WhyChooseUs() {
  return (
    <>
      <div
        className="relative overflow-x-hidden "
        style={{ minHeight: "-webkit-fill-available" }}
      >
        <WhyChooseUsVetcor />
        <NavBar />
        {/* why to chose us components  */}
        <div className="text-center p-8 md:mt-2 mt-4 ">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
            Why to <span className="text-blue-700">Choose US?</span>
          </h2>
          {/* 1st row */}
          <div className="flex flex-wrap items-center mt-20  text-center ">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4 z-10 ">
              <img
                src={Expert}
                alt="gem"
                className="inline-block rounded "
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8  md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Expertise in{" "}
                <span className="text-blue-700"> Technical Field</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6">
                Proven professionals delivering exceptional results.
              </p>
            </div>
          </div>
          {/* 2nd row */}
          <div className="flex flex-wrap items-center mt-20 text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={Collaboration}
                alt="project members"
                className="inline-block "
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12 ">
              <h3 className="font-bold mt-8  md:mt-0  text-[1.2rem] sm:text-[2rem]">
                Collabo<span className="text-blue-700">ration </span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6">
                Your vision shapes our customized strategies.
              </p>
            </div>
          </div>
          {/* 3rd row */}
          <div className="flex flex-wrap items-center mt-20   text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={Innovation}
                alt="editor"
                className="inline-block  "
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12 ">
              <h3 className="font-bold mt-8 md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Inno<span className="text-blue-700">vation</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6">
                Stay ahead with cutting-edge technology solutions.
              </p>
            </div>
          </div>
          {/* 4th row */}
          <div className="flex flex-wrap items-center mt-20  text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4 ">
              <img
                src={Customer}
                alt="bulk editing"
                className="inline-block"
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 className="font-bold mt-8 text-[1.2rem] sm:text-[2rem] md:mt-0 ">
                Customer-<span className="text-blue-700">Centric Focus</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6">
                Open communication, transparency, and responsiveness.
              </p>
            </div>
          </div>
          {/* 5th row */}
          <div className="flex flex-wrap items-center mt-20   text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={Versility}
                alt="editor"
                className="inline-block "
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8 md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Versa<span className="text-blue-700">tility</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6">
                Comprehensive services tailored to diverse business needs
              </p>
            </div>
          </div>
          {/* 6th row */}
          <div className="flex flex-wrap items-center mt-20  text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4 ">
              <img
                src={Agility}
                alt="bulk editing"
                className="inline-block"
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 className="font-bold mt-8 md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Agi<span className="text-blue-700">lity</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6">
                Swift adaptability to changes for continued success
              </p>
            </div>
          </div>
          {/* 7th row */}
          <div className="flex flex-wrap items-center mt-20   text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={Strategic}
                alt="editor"
                className="inline-block "
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8 md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Strategic <span className="text-blue-700">Insight</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6">
                Beyond technical expertise, we offer valuable strategic
                recommendations.
              </p>
            </div>
          </div>
          {/* 8th row */}
          <div className="flex flex-wrap items-center mt-20  text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4 ">
              <img
                src={Attention}
                alt="bulk editing"
                className="inline-block "
              />
            </div>

            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 className="font-bold mt-8  md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Attention t<span className="text-blue-700">o Detail</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6">
                Meticulous work ensuring precision and quality.
              </p>
            </div>
          </div>
          {/* 9th row */}
          <div className="flex flex-wrap items-center mt-20   text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={Global}
                alt="editor"
                className="inline-block"
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8 md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Global <span className="text-blue-700">Perspective,</span> Local
                <span className="text-blue-700"> Understanding</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6">
                Diverse experiences with a local touch.
              </p>
            </div>
          </div>
          {/* 10th row */}
          <div className="flex flex-wrap items-center mt-20  text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4 ">
              <img
                src={Improvement}
                alt="bulk editing"
                className="inline-block "
              />
            </div>

            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 className="font-bold mt-8 md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Continuous <span className="text-blue-700">Improvement</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6">
                A commitment to evolving with industry standards.
              </p>
            </div>
          </div>
          {/* 11th row */}
          <div className="flex flex-wrap items-center mt-20   text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={Driven}
                alt="editor"
                className="inline-block "
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8  md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Results<span className="text-blue-700">-Driven </span>Appr
                <span className="text-blue-700">oach</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6">
                Focused on delivering tangible outcomes that align with your
                goals.
              </p>
            </div>
          </div>
          {/* 12th row */}
          <div className="flex flex-wrap items-center mt-20  text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4 ">
              <img
                src={Solution}
                alt="bulk editing"
                className="inline-block "
              />
            </div>

            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 className="font-bold mt-8 md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Cost<span className="text-blue-700">-Effect</span>ive Solu
                <span className="text-blue-700">tions</span>
              </h3>

              <p className="text-[0.8rem] sm:text-[1rem] mt-6">
                Optimal value with efficient use of resources for budget-conscious
                strategies.
              </p>
            </div>
          </div>
          <Link to="/contact" className="flex justify-center mt-12">
            <Button
              width="w-56"
              bgColor="bg-[#EFF569]"
              textColor="text-gray-900"
              hoverEffect=""
              buttonName="Contact Us"
              props="font-bold w-[195px] rounded-lg md:text-lg "
            />
          </Link>
        </div>


        {/* component end */}
        <Footer />
      </div>



    </>
  );
}
