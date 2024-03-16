import { Link, useLocation } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../../assets/Ellipse 1.png';
import './Footer.css';
import Container from '../Container';

const FOOTER_LINKS = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About Us',
    link: '/about',
  },
  {
    title: 'Services',
    link: '/services',
  },
  {
    title: 'Careers',
    link: '/career',
  },
  {
    title: 'Blogs',
    link: '/blogs',
  },
  {
    title: 'Contact Us',
    link: '/contact',
  },
];

const Footer: React.FC = () => {
  const location = useLocation();
  return (
    <div className="mt-10 bg-[#FFFFF9]">
      <Container className="h-auto w-full sm:w-[90%] flex flex-col sm:m-auto">
        <div className="flex flex-col justify-between mb-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 mb-5">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>

            <p style={{ color: '#515360' }}>We are KSW TechZone</p>

            <div className="flex flex-row space-x-2 sm:space-x-4">
              <Link to="/facebook">
                <FaFacebook
                  className="changeBg"
                  style={{ fontSize: '30px', color: '#16549f' }}
                />
              </Link>
              <Link to="/twitter">
                <FaTwitter style={{ fontSize: '30px', color: '#77beda' }} />
              </Link>
              <Link to="/instagram">
                <FaInstagram style={{ fontSize: '30px', color: '#f1a2ad' }} />
              </Link>
              <Link to="/linkedin">
                <FaLinkedin style={{ fontSize: '30px', color: '#39447a' }} />
              </Link>
            </div>
          </div>
          <ul
            className="flex flex-wrap items-center justify-center gap-2 py-2 border-0 md:items-start md:justify-start md:pl-5 md:flex-col h-fit border-gradient md:border-l"
            style={{ color: '#515360' }}
          >
            {FOOTER_LINKS.map((link) => (
              <li className="text-left">
                <Link
                  to={link.link}
                  className={` hover-underline-animation text-lg ${
                    location.pathname === link.link ? 'active' : ''
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row justify-between py-10 sm:space-x-4">
          <Link to="/">Privacy Policy</Link>
          <p> Copyright 2024, KSW Techzone Inc.</p>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
