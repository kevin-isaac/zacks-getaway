import { Link } from 'react-router-dom';
import image1 from '../../../assets/seating.jpg';
import image2 from '../../../assets/pool.jpg';
import image3 from '../../../assets/disco2.jpg';
import './Previews.css';
import pages from '../../../utils/pages';
import PreviewCard from './PreviewCard';

const preview = [
  {
    name: 'Cozy Accommodations',
    image: image1,
    description: `A comfortable family-sized interior, complete with air-conditioned 
      bedrooms, kitchen with appliances, and central living area. 
      `,
      link:'/about#section1'
  },
  {
    name: 'Coastal Relaxation',
    image: image2,
    description: `Head out to enjoy waterfall hikes, turtle watching, fishing, and more.
      Or stay home and relax in our beautiful outdoor patios, above-ground pool and colorful gardens.`, link:'/about#section3'
  },
  {
    name: 'Entertainment Facilities',
    image: image3,
    description: `Your stay comes equipped with all your entertainment needs, including free WiFi, television, board games, sound system and party space.`, link:'/gallery'
  },

];

const Previews = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>  What You'll Enjoy</h2>
        <Link className="button-primary" to={pages.get('gallery').path}>
          Photo Gallery
        </Link>
      </div>
      {preview.map((preview, index) => 
        <PreviewCard key={index} preview={preview} />
      )}
    </section>
  );
};

export default Previews;
