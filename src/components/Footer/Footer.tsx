import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logotext from "../../assets/KSW.png";
import "./Footer.css";
const Footer: React.FC = () => {
  return (
    <>
    <footer>
        <div
          className="h-auto w-[85%] m-auto flex flex-col sm:m-auto"
          style={{ background: "#FFFFF9" }}
        >
          <div className="flex flex-col md:flex-row justify-left mb-4">
            <div className="flex flex-col items-center mb-5 lg:mr-20 md:mr-14 lg:items-start md:items-start">
              <div className="mb-2">
                <Link to="/">
                  <img className="w-[20rem]" src={Logotext} alt="Logo" />
                </Link>
              </div>
              <div className="mb-2">
                <p className="text-justify">At <b>KSW Techzone</b>, we focus on moving fast and coming up with new ideas. We use the best methods to create products and make businesses better. We work in areas like Healthcare, Design, and Data Science, using AI to do new things.</p>
              </div>
            </div>

{/* <div
              className=" flex flex-col items-start ml-5 border-gradient pl-5 h-[194px]"
              style={{ color: "#515360" }}
            >
              <Link
                to="/"
                className={` hover-underline-animation ${
                  location.pathname === "/" ? "active" : ""
                }mx-2 mb-2`}
              >
                <span>Home</span>
              </Link>
              <Link
                to="/about"
                className={` hover-underline-animation ${
                  location.pathname === "/about" ? "active" : ""
                } mx-2 mb-2`}
              >
                <span>About Us</span>
              </Link>
              <Link
                to="/services"
                className={` hover-underline-animation ${
                  location.pathname === "/services" ? "active" : ""
                } mx-2 mb-2`}
              >
                <span>Services</span>
              </Link>
              <Link
                to="/career"
                className={` hover-underline-animation ${
                  location.pathname === "/career" ? "active" : ""
                } mx-2 mb-2`}
              >
                <span>Careers</span>
              </Link>
              <Link
                to="/blogs"
                className={` hover-underline-animation ${
                  location.pathname === "/blogs" ? "active" : ""
                } mx-2 mb-2`}
              >
                <span>Blogs</span>
              </Link>
              <Link
                to="/contact"
                className={` hover-underline-animation ${
                  location.pathname === "/contact" ? "active" : ""
                } mx-2 mb-2`}
              >
                <span>Contact Us</span>
              </Link>
            </div> */}

            <div className="md:w-full sm:w-full">
            {/* <h2 className="text-[1.8rem] sm:text-[2rem] font-bold pb-4">
                Get In Touch
              </h2> */}
              <form action="">
                <div className="flex flex-col pb-2">
                  <input
                    type="text"
                    className="border border-gray-400 p-2 w-[100%]"
                    placeholder="Full Name*"
                  />
                </div>
                <div className="flex flex-col pb-2">
                  <input
                    type="email"
                    className="border border-gray-400 p-2 w-[100%]"
                    placeholder="Email*"
                  />
                </div>
                <div className="flex flex-col pb-2">
                  <input
                    type="number"
                    className="border border-gray-400 p-2"
                    placeholder="Phone *"
                  />
                </div>
                <div className="flex flex-col pb-2">
                  <input
                    type="text"
                    className="border border-gray-400 p-2"
                    placeholder="Subject"
                  />
                </div>
                <div className="">
                  <textarea
                    className="border border-gray-400 p-2 w-[100%]"
                    placeholder="Mesaage"
                  />
                </div>
                <div className="">
                  <input
                    type="submit"
                    value={"Submit"}
                    className="bg-[#004AAD] p-2 my-2 w-[100%] font-semibold text-white rounded-md hover:cursor-pointer hover:bg-[rgb(0,50,120)]"
                    placeholder="Subject"
                  />
                </div>
              </form>
            </div>
          </div>
          <hr className="bg-black h-[1.25px] opacity-50" />
          <div className="flex flex-row justify-center md:mx-10 lg:mx-44 space-x-2 sm:space-x-4 text-sm mt-4 mb-4">
            <Link to="/" className="underline ">
              Privacy Policy
            </Link>
            <p> Copyright 2024, <strong>KSW Techzone</strong> Inc.</p>
          </div>
          <div className="flex flex-row justify-center mt-2 pb-[50px] space-x-2 sm:space-x-4">
                <Link to="https://www.facebook.com/profile.php?id=100093997620977">
                  <FaFacebook
                    className="changeBg"
                    style={{ fontSize: "30px", color: "#004AAD" }}
                  />
                </Link>
                <Link to="/twitter">
                  <FaTwitter style={{ fontSize: "30px", color: "#004AAD" }} />
                </Link>
                <Link to="/instagram">
                  <FaInstagram style={{ fontSize: "30px", color: "#004AAD" }} />
                </Link>
                <Link to="/linkedin">
                  <FaLinkedin style={{ fontSize: "30px", color: "#004AAD" }} />
                </Link>
              </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
