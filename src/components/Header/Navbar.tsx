import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'; // Importing CSS file for NavBar styling
import { BiDownArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import DropDown from '../DropDown';
import Container from '../Container';
import Logotext from '../../assets/KSW.png'
// import { FaCaretDown } from "react-icons/fa";

const pricing = [
  { title: 'Seo Package', link: 'seopackages' },
  { title: 'Web Package', link: 'webpackages' },
  { title: 'Social Media Package', link: 'socialmediapackages' },
];

const about = [
  { title: 'About Us', link: 'about' },
  { title: 'Why Choose Us', link: 'whychooseus' },
  { title: 'Teams', link: 'ourteam' },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <Link
        to="/"
        className="z-10 justify-center ml-24 text-xl font-bold text-center text-gray-800 md:hidden lg:hidden mb-7"
      >
        <img className="w-[20rem]" src={Logotext} alt="Logo" />
      </Link>
      {/* Hamburger menu button */}
      <div className="absolute right-0 z-50 mb-20 mr-4 -mt-1 md:hidden top-2">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Full-screen menu overlay */}
      <div
        className={`md:hidden overlay transition-opacity duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/about"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${
                location.pathname === '/about' ? 'active' : ''
              }`}
            >
              About us
            </Link>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowAbout((e) => !e);
                setShowPricing(false);
              }}
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${
                location.pathname === '/pricing' ? 'active' : ''
              }`}
            >
              <div className="flex items-center justify-center">
                About{!showAbout ? <BiRightArrowAlt /> : <BiDownArrowAlt />}
              </div>

              <DropDown
                data={about}
                show={showAbout}
                setShow={setShowPricing}
              />
            </button>

            <Link
              to="/services"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${
                location.pathname === '/services' ? 'active' : ''
              }`}
            >
              Services
            </Link>
            <Link
              to="/career"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${
                location.pathname === '/career' ? 'active' : ''
              }`}
            >
              Careers
            </Link>
            <Link
              to="/blogs"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${
                location.pathname === '/blogs' ? 'active' : ''
              }`}
            >
              Blogs
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPricing((e) => !e);
                setShowAbout(false);
              }}
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${
                location.pathname === '/pricing' ? 'active' : ''
              }`}
            >
              <div className="flex items-center justify-center">
                Pricing{!showPricing ? <BiRightArrowAlt /> : <BiDownArrowAlt />}
              </div>

              <DropDown
                data={pricing}
                show={showPricing}
                setShow={setShowPricing}
              />
            </button>
            <Link
              to="/contact"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${
                location.pathname === '/contact' ? 'active' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Menu items for large screens */}
      <Container>
        <div className="items-center justify-between hidden h-16 my-8 md:flex md:flex-row">
          <div>
            <Link to="/" className={`text-xl font-bold text-gray-800`}>
            <img className="w-[14rem]" src={Logotext} alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center font-medium text-sm md:flex-nowrap md:justify-between">
            <Link
              to="/about"
              className={`mx-2 my-1 md:my-0 hover-underline-animation ${
                location.pathname === '/about' ? 'active' : ''
              }`}
            >
              About
            </Link>

            <button
              onClick={() => {
                setShowPricing((e) => !e);
                setShowAbout(false);
              }}
              className={`mx-2 my-1 md:ml-4 md:my-0 hover-underline-animation relative ${
                location.pathname === '/pricing' ? 'active' : ''
              }`}
            >
              <div className="flex items-center justify-center">
                Pricing{!showPricing ? <BiRightArrowAlt /> : <BiDownArrowAlt />}
              </div>

              <DropDown
                data={pricing}
                show={showPricing}
                setShow={setShowPricing}
              />
            </button>

            {/* <Link
              to="/pricing"
              className={`mx-2 my-1 md:my-0 hover-underline-animation ${
                location.pathname === '/pricing' ? 'active' : ''
              }`}
            >
              Pricing
            </Link> */}

            <Link
              to="/services"
              className={`mx-2 my-1 md:my-0 font-medium hover-underline-animation ${
                location.pathname === '/services' ? 'active' : ''
              }`}
            >
              Services
            </Link>
            <Link
              to="/career"
              className={`mx-2 my-1 md:my-0 font-medium hover-underline-animation ${
                location.pathname === '/career' ? 'active' : ''
              }`}
            >
              Career
            </Link>
            <Link
              to="/blogs"
              className={`mx-2 my-1 md:my-0 font-medium hover-underline-animation ${
                location.pathname === '/blogs' ? 'active' : ''
              }`}
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className={`mx-2 my-1 md:ml-4 font-medium md:my-0 hover-underline-animation ${
                location.pathname === '/contact' ? 'active' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
