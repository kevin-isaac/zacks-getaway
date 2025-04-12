import hostImage1 from '../../../assets/beach1.jpg';
 
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Zack's Getaway</h1>
        <h2>A Journey Northeast</h2>
        <p>
        In their youth, the hosts of Zack's Getaway had spent many of their vacations travelling the roads on the northeast coast of Trinidad, seeking out wonderful
        beach house locations with which to spend memorable fun times on holiday with their large extended family.
        Now they're able to extend that gift to others, and have created their own little slice of paradise, offering it to the many beach house seekers of the world.
        </p>

        <p>
        Built from the ground up by the ambitious Trinidadian couple, Zack's Getaway was always meant to be a home-away-from-home for families and groups of friends
        who need a leisurely coastline break from the toil of their daily work.

    

        Tenants have full access to the ground floor of the property, complete with cozy beds, AC and Wifi, as well as the surrounding outdoor area with multiple recreational spaces.
       </p>

       <p>
       Zack's Getaway is the realization of a dream. We want your stay to be a perfect rendezvous point for an adventure throughout the many beaches on the northeast coast of Trinidad,
        and a rejuvenating retreat for island relaxation with loved ones. 
        </p>
      </div>
      <div className="our-story-hosts">
        
    
        <img src={hostImage1} alt="Beach Nearby" />
      </div>
    </section>
  );
};

export default OurStory;
