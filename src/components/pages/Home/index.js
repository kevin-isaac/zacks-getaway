import Hero from './Hero';
import Previews from './Previews';
import Testimonials from './Testimonials';
import OurStory from './OurStory';
import FeatureVideo from './FeatureVideo';
import FadeInSection from '../../features/FadeInSection';

const Home = () => {
  return (
    <>
    <FadeInSection> 
      <FeatureVideo />
    </FadeInSection>
    <FadeInSection> 
      <Hero/>
    </FadeInSection>
    <FadeInSection> 
      <Previews/>  
    </FadeInSection>
    <FadeInSection> 
      <Testimonials />
    </FadeInSection>
    <FadeInSection> 
      <OurStory />  
    </FadeInSection>
   
      
      
     
      
      
      
    </>
  );
};

export default Home;
