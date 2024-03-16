import React from "react";
import { Footer, NavBar } from "..";
import "./pricing.css";
import { Link } from "react-router-dom";
import SocialMediaPackagesVector from "./SocialMediaPackagesVector";

interface PricingPlan {
  name: string;
  currency: string;
  number: number;
  sep: string;
  month: string;
  description: string;
  details: string[];
}

const SocialMediaPackages: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Starter",
      currency: "Rs",
      number: 10000,
      sep: "/",
      month: "mon",
      description: "For marketing newbies and small house teams",
      details: [
        "Social Media Management*1500",
        "6 Graphical Banners*500=3000",
        "1 GIF/Video (10 Secs Or Less)*800",
        "Platforms: Facebook, Instagram*1000",
        "1 Free Festive Post*500=500",
        "Direct Advertisement*500",
      ],
    },
    {
      name: "Basic",
      currency: "Rs",
      number: 20000,
      sep: "/",
      month: "mon",
      description: "For new but established companies seeking to grow",
      details: [
        "Social Media Management",
        "Planning And Strategy",
        "Profile / Cover Image Creation [Included]",
        "10 Graphical Banners",
        "2 GIFs (10 Secs) Or 1 Video (20 Secs Or Less)",
        "Platforms: Facebook, Instagram",
        "1 Free Festive Post",
        "Content Calendar",
        "Organic Promotion",
        "Monthly Reporting",
        "Keyword Based Content",
        "Direct Advertisement + Ads Manager",
      ],
    },
    {
      name: "Standard",
      currency: "Rs",
      number: 28000,
      sep: "/",
      month: "mon",
      description: "For those looking to grow their business/brand",
      details: [
        "Social Media Management",
        "Planning And Strategy",
        "Profile / Cover Image Creation [Included]",
        "15 Graphical Banners",
        "3 GIFs (10 Secs) / 2 Video (15 Secs Or Less)",
        "Platforms: Facebook, Instagram, Tiktok",
        "Competitor Analysis",
        "2 Free Festive Post",
        "Content Calendar",
        "Organic Promotion",
        "Lead Generation",
        "Customer Review",
        "Weekly Meeting",
        "Advertisement Management",
        "Monthly Reporting",
        "Keyword Based Content",
        "Direct Advertisement + Ads Manager",
      ],
    },
    {
      name: "Premium",
      currency: "Rs",
      number: 40000,
      sep: "/",
      month: "mon",
      description: "For those looking to sell products or build a brand",
      details: [
        "Social Media Management",
        "Planning And Strategy",
        "Profile / Cover Image Creation [Included]",
        "20 Graphical Banners",
        "4 GIFs (10 Secs) / 3 Video (15 Secs Or Less)",
        "Platforms: Facebook, Instagram, Tiktok And LinkedIn",
        "Competitor Analysis",
        "3 Free Festive Post",
        "Content Calendar",
        "Organic Promotion",
        "Lead Generation",
        "Customer Review",
        "Weekly Meeting",
        "Advertisement Management",
        "A/B Testing",
        "Pixels For Remarketing",
        "Conversation Management",
        "Monthly Reporting",
        "Keyword Based Content",
        "Direct Advertisement + Ads Manager",
      ],
    },
  ];

  return (
    <>
      <div
        className="relative overflow-x-hidden"
      >
        <SocialMediaPackagesVector />
        <NavBar />
        <div className="mb:10 md:mb-20">
          <div className="text-center m-10">
            <div className="text-center mb-2 sm:mb-4  z-50">
              <div className="flex items-center justify-center">
                <div className="h-0.5 bg-blue-700 w-10 sm:w-16 mr-1 sm:mr-2 z-10 "></div>
                <p className="text-black text-[0.8rem] sm:text-[1rem] font-semibold z-10">
                  SUBSCRIPTION PLAN
                </p>
                <div className="h-0.5 bg-blue-700 w-10 sm:w-16 ml-1 sm:ml-2 z-10"></div>
              </div>
            </div>
            <p className="text-[1.2rem] sm:text-[2rem] font-bold">
              Social Media <span className="text-blue-700">Packages</span>
            </p>
            <p className="text-sm sm:text-md m-5 z-10">
              We offer different website design and development prices to you.
              <br />
              Custom packages are also available as per your need. Just send us
              your
              <br />
              requirements, and we will send you a quote right after.
            </p>
          </div>
          <div className="h-auto w-full lg:w-[80%] m-auto  z-10">
            <div className="flex flex-col sm:flex-row p-4 sm:p-0  z-10">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="z-10 flex flex-col h-auto bg-[#e5f8fb] rounded-3xl w-full sm:w-[25%] mb-4 sm:m-1 lg:m-4 p-2"
                >
                  <div>
                    <p className="text-xl font-bold text-center">{plan.name}</p>
                    <p className="text-xl font-bold text-center text-blue-700">
                      <span className="text-sm font-extrabold align-top ">
                        {plan.currency}{" "}
                      </span>
                      {plan.number}
                      {plan.sep} {plan.month}
                    </p>
                    <p className="text-[12x] sm:text-[12px] lg:text-sm text-center">
                      {plan.description}
                    </p>
                    <div className="border-t-4 border-dashed border-[#828282] mt-4 mb-6"></div>
                    <ul className="list-disc pl-4">
                      {plan.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto h-[70px] py-6">
                    <div className="flex justify-center">
                      <Link to="/#">
                        <button
                          type="button"
                          className=" rounded-xl bg-[#EFF569] hover:bg-yellow-300 px-4 sm:px-6 sm:py-2 text-sm font-bold text-black"
                        >
                          Select Plan
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SocialMediaPackages;
