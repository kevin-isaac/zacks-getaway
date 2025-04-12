import {
  Route, 
  Routes
} from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Bookings from './components/pages/Bookings';
import Gallery from './components/pages/Gallery';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import CustomerInfo from './components/pages/Bookings/CustomerInfo';
import NotFound from './components/pages/NotFound';


const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          <Route 
            path={pages.get('about').path} 
            element={<About />} 
          />
          <Route 
            path={pages.get('gallery').path} 
            element={<Gallery />} 
          />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route 
            path={pages.get('confirmedBooking').path} 
            element={<ConfirmedBooking />} 
          />
          <Route 
            path={pages.get('customerInfo').path} 
            element={<CustomerInfo />} 
          />
          <Route 
            path={pages.get('contact').path} 
            element={<Contact />} 
          />
 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
