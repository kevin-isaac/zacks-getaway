import { Link } from 'react-router-dom';
import heroImage from '../../../assets/house-hero.jpg';

import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
  return (
    <section className="hero">
      <div className="feature">
 
        </div>
      <div className="container grid">
      



        <div className="hero-information">
          <h1>Zack's Getaway</h1>
          <h2>Balandra</h2>
          <p>
          A beautiful family vacation rental nestled in the gated Balandra Beach Resort on the scenic northeast coast of Trinidad.
          
          </p>
          <Link className="button-primary" to={pages.get('bookings').path}>
            Book your stay!
          </Link>
        </div>
        <img 
          className="hero-image" 
          src={heroImage} 
          alt="House Front" 
        />
      </div>
    </section>
  );
};

export default Hero;
