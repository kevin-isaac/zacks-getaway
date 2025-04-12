
const pages = new Map();
pages.set('home', { name: 'Home', path: '/', anchorable: true });
pages.set('about', { name: 'Accommodations', path: '/about', anchorable: true });
pages.set('gallery', { name: 'Gallery', path: '/gallery', anchorable: true });
pages.set('bookings', { 
  name: 'Reservations', 
  path: '/bookings', 
  anchorable: true 
});
pages.set('confirmedBooking', { 
  name: 'Confirmed Booking', 
  path: '/confirmed-booking', 
  anchorable: false 
});
pages.set('customerInfo', { 
  name: 'Customer Info', 
  path: '/customer-info', 
  anchorable: false 
});
pages.set('contact', { 
  name: 'Contact', 
  path: '/contact', 
  anchorable: true 
});
 
export default pages;
