import './index.css';
import roadImage from "../../../assets/road.jpg";
import hostImage from "../../../assets/owners.jpg";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MapComponent from '../../features/map';
import FadeInSection from '../../features/FadeInSection';

const Contact = () => {
  return (
    <>
      <div className="contact">

        <h2>Get In Touch</h2>






        <div className="container grid"  >
          <div className="content-right">
            <FadeInSection>
              <img className="contact-image"  w={"100%"} src={roadImage} alt="contactPhoto" />
              <img className="profile-image"  w={"100%"} src={hostImage} alt="contactPhoto" />
            </FadeInSection>
          </div>
          <div className="content-left" >
            <p>
              For enquiries or bookings, you can call or Whatsapp your hosts: Miss Joan or Mister Isaac at the following numbers:
            </p>
            <br />
            <ul>
              <li> <FontAwesomeIcon icon={faPhone} /> (868) 274-4566</li>
              <li> <FontAwesomeIcon icon={faPhone} /> (868) 373-9700</li>

            </ul>
            <br />
            <p>
              For enquiries or reviews you can also e-mail Miss Joan at:
            </p>
            <p>
              <a href="mailto: ersaftpink@gmail.com ">ersaftpink@gmail.com</a>
            </p>
            <br />
            <FadeInSection>
            <div style={{ padding: '20px' }}>
              <h2>Where you'll be</h2>,
              <MapComponent lat={10.71483993850312} lng={-60.999193035276094} zoom={10} /> {/* Example: San Francisco */}
            </div>
            </FadeInSection>
          </div>
        </div>







      </div>



    </>
  );
};

export default Contact;
