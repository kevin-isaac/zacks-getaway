import {
  faFacebook,

  faAirbnb,

} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.css";
import logoWhiteImage from "./assets/logo-white.png";
import pages from "../../utils/pages";

const contacts = [
  { icon: faLocationDot, info: "Rampanalgas, Sangre Grande, Trinidad & Tobago" },
  { icon: faPhone, info: "(868) 348-2327, (868) 274-4566" },
  { icon: faEnvelope, info: "ersaftpink@gmail.com" },
];

const socials = [
  { icon: faFacebook, name: "facebook", link:"https://www.facebook.com/people/Zacks-Getaway/61562068652255/" },
  { icon: faAirbnb, name: "airbnb" , link:"https://www.airbnb.com.sg/rooms/1195604893452058725?guests=1&adults=1&s=67&unique_share_id=34b2f601-725a-4efc-a2ca-024e9fcfbd98"}
];

const navLinks = Array.from(pages.values()).filter((page) => page.anchorable);

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img
          className="site-footer-logo"
          src={logoWhiteImage}
          alt="zack's getaway"
        />
       
        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
          <ul>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
            {contacts.map((contact, index) => (
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
              </p>
            ))}
          </address>
          <br/>
          <small>Sample Site by Kevin Isaac</small>
        </div>
        <div className="site-footer-social">
          <h4>Connect</h4>
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
