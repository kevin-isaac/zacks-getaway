import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { fetchAPI, submitAPI } from '../../../utils/fakeAPI';
import pages from '../../../utils/pages';
import BookingForm from './BookingForm';
import "react-day-picker/style.css";


const updateDates = (bookedDates, date) => {
  //const response = fetchAPI(new Date(date));
  //return (response.length !== 0) ? response : bookedDates; 
  let newBooked=bookedDates;
  //newBooked.push(date);
  return newBooked;
};

const initializeDates = initialBookedDates => 
  [...initialBookedDates, ...fetchAPI(new Date())];

const Bookings = () => {
  const [
    bookedDates, 
    dispatchOnDateChange
  ] = useReducer(updateDates, [], initializeDates);
  const navigate = useNavigate();

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate(pages.get('customerInfo').path, {state:{ ...formData}});
  }; 

  return (
    <div className="bookings">
      <h2>Book Your Stay</h2>
      <BookingForm 
        bookedDates={bookedDates} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    </div>
  );
};

export default Bookings;
