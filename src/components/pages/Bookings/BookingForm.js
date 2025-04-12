import { useState } from 'react';
import FormField from './FormField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { DayPicker } from "react-day-picker";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const availableTimes=["2:00pm","3:00pm","4:00pm","5:00pm","6:00pm","7:00pm","8:00pm","9:00pm"]


const BookingForm = ({
  bookedDates,
  dispatchOnDateChange,
  submitData
}) => {


  const location = useLocation();
 
  const defaultTime = '';
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 14;

  const invalidDateErrorMessage = 'Please choose a valid date';
  const invalidTimeErrorMessage = 'Please choose a valid time';
  const invalidNumberOfGuestsErrorMessage = 
    'Please enter a number from 1 to 14';

     ;
  const [cost, setCost] = useState(0);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(defaultTime);

  const [dateTouched, setDateTouched] = useState(false);
  const [timeTouched, setTimeTouched] = useState(false);

  const [
    numberOfGuests, 
    setNumberGuests
  ] = useState(minimumNumberOfGuests);



  useEffect(() => {
  if (location.state) {
    setCost(location.state.cost);
    setDate(location.state.date);
    setTime(location.state.time);
    setNumberGuests(location.state.numberOfGuests);
  }
}, [location.state]);
  
  const isDateValid = () => {return (date&& date.from!=null && date.to!=null) };
  const isTimeValid = () => {return (time&&time !== '')};
  const isNumberOfGuestsValid = () => numberOfGuests !== ''&&numberOfGuests<=14&&numberOfGuests>0;
  const nightlyRate=1400;


 


  const areAllFieldsValid = () => 
    isDateValid() 
    && isTimeValid() 
    && isNumberOfGuestsValid() 

  
  const handleDateChange = e => {
   
    setDate(e);
    if(!e.from||!e.to) setCost (0);
    else setCost (Math.abs( (new Date(e.from) - new Date(e.to))  / (1000 * 60 * 60 * 24)) * nightlyRate );
    //dispatchOnDateChange(e); 
    //if(new Date(e).getTime()>new Date(endDate).getTime()) setEndDate(new Date(new Date(e).setDate(new Date(e).getDate() + 1))) ; 
  };

  const [processing, setProcessing] = useState(false);

  const handleTimeChange = e => setTime(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(function(){
      submitData({ date, time, numberOfGuests, cost });

  }, 1000);

   
  };

  return (
    <form onSubmit={handleFormSubmit}>


 <div>
      <p>
        Fill out your details below to submit a Booking Request. We will receive your request and give you a phone call to confirm your reservation.
        
      </p>
      <br/>
    </div>

    <span className="tentative-cost">${cost} TT</span>
      <FormField 
        
        label="How Long Will You Be Staying?" 
        htmlFor="booking-date" 
        hasError={!isDateValid()&&dateTouched} 
        errorMessage={invalidDateErrorMessage}
      >



    <DayPicker
      animate
      className="calendar"
      mode="range"
      min={1} max={6}
      disabled={ [...bookedDates,{before:new Date()}] }
      excludeDisabled
      selected={date}
      onBlur={() => setDateTouched(true)}
      onSelect={date => handleDateChange(date)}
      footer={
        (date&&date.to&&date.from)? `(Your stay will last ${Math.abs( (new Date(date.from) - new Date(date.to))  / (1000 * 60 * 60 * 24))} nights)` : ""
      }
    />

      </FormField>





      
      <FormField 
        label="What Time Will You Arrive?" 
        htmlFor="booking-time" 
        hasError={!isTimeValid()&&timeTouched} 
        errorMessage={invalidTimeErrorMessage}
      >
        <select 
          id="booking-time" 
          name="booking-time" 
          value={time} 
          required={true} 
          onChange={handleTimeChange}
          onBlur={() => setTimeTouched(true)}
        >

          <option value="" disabled>Select Time</option>
          {availableTimes.map(dates => 
            <option data-testid="booking-time-option" key={dates}>
              {dates}
            </option>
          )}
        </select>
      </FormField>

      
      <FormField 
        label="How Many Of You Will Be Staying?" 
        htmlFor="booking-number-guests" 
        hasError={!isNumberOfGuestsValid()} 
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input 
          type="number" 
          id="booking-number-guests" 
          name="booking-number-guests" 
          value={numberOfGuests} 
          min={minimumNumberOfGuests} 
          max={maximumNumberOfGuests} 
          required={true} 
          onChange={e => setNumberGuests(e.target.value)}
        />
      </FormField>
 
      {!processing&&<button 
        className="button-primary" 
        type="submit" 
        disabled={!areAllFieldsValid()}
      >
        Next {'>'}
      </button>}

       {processing&& <FontAwesomeIcon size="2x" className="fa-spin" icon={faSpinner} />  }


    </form>
  );
};

export default BookingForm;
