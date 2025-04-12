import { useState } from 'react';
import FormField from './FormField';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import FadeInSection from '../../features/FadeInSection';
import pages from '../../../utils/pages';

import React from "react";
import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const invalidPhoneErrorMessage = 'Please enter a valid contact number';
const invalidPaymentErrorMessage = 'Please select a payment method';



const CustomerInfo = () => {

  const handleFormSubmit = e => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(function () {

      navigate(pages.get('confirmedBooking').path);

    }, 2500);

    //submitData({ ...location.state });
  };
  const navigate = useNavigate();

  const [paymentTouched, setPaymentTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [processing, setProcessing] = useState(false);

  const isPaymentValid = () => { return (payment && payment !== '') };
  const isPhoneValid = () => { return (phone && phone !== '') };


  const areAllFieldsValid = () => { return (isPaymentValid() && isPhoneValid()) };

  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [payment, setPayment] = useState(0);

  const location = useLocation();

  return (

    <div className="bookings">




      <h2>Your Information</h2>



      <div className='form-container container grid'>

        <FadeInSection>
          <span className="back-button" onClick={() => { navigate('/bookings', { state: { ...location.state } }) }}><FontAwesomeIcon icon={faArrowCircleLeft} size="2x" className="back-icon" /> </span>
          <form onSubmit={handleFormSubmit}>




            <FormField
              label="Preferred Payment Method"
              htmlFor="payment"
              hasError={!isPaymentValid() && paymentTouched}
              errorMessage={invalidPaymentErrorMessage}
              required={true}
            >
              <select
                id="payment"
                name="payment"
                value={payment}
                required={true}
                onChange={e => setPayment(e.target.value)}
                onBlur={() => setPaymentTouched(true)}
              >

                <option value="0" disabled>Select Payment Method</option>

                <option data-testid="payment-option1" >
                  Cash
                </option>
                <option data-testid="payment-option2" >
                  Wire Transfer
                </option>

              </select>
            </FormField>


            <FormField
              required={true}
              label="Contact Number"
              htmlFor="phone"
              hasError={!isPhoneValid() && phoneTouched}
              errorMessage={invalidPhoneErrorMessage}
            >

              <input
                type="string"
                id="phone"
                name="phone"
                value={phone}
                required={true}
                onBlur={() => setPhoneTouched(true)}
                onChange={e => setPhone(e.target.value)}
              />
            </FormField>



            <FormField
              label="First Name"
              htmlFor="first-name"
              hasError={false}
            >
              <input
                type="string"
                id="fname"
                name="fname"
                value={fname}

                onChange={e => setFirstName(e.target.value)}
              />
            </FormField>

            <FormField
              label="Last Name"
              htmlFor="last-name"
              hasError={false}
            >
              <input
                type="string"
                id="lname"
                name="lname"
                value={lname}

                onChange={e => setLastName(e.target.value)}
              />
            </FormField>


            <FormField
              label="E-mail"
              htmlFor="email"
              hasError={false}
            >
              <input
                type="email"
                id="email"
                name="email"
                value={email}

                onChange={e => setEmail(e.target.value)}
              />
            </FormField>

            {!processing && <button
              className="button-primary"
              type="submit"
              disabled={!areAllFieldsValid()}
            >
              Submit Reservation Request
            </button>}

            {processing && <FontAwesomeIcon size="2x" className="fa-spin" icon={faSpinner} />}




          </form>
        </FadeInSection>

        {location.state && <div className='summary-card'>
          <h2>Summary</h2>
          <table>
            <thead>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faCoins} />  Cost
                </td>
                <td className="summ-info">  <span  >  TT ${location.state.cost} </span>
                </td>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td >
                  <FontAwesomeIcon icon={faCalendar} /> Check-In
                </td>
                <td className="summ-info">
                  <span>{location.state.date.from.toLocaleDateString()}</span>
                </td>
              </tr>

              <tr>
                <td>
                  <FontAwesomeIcon icon={faCalendar} />  Check-Out
                </td>
                <td className="summ-info">
                  <span>{location.state.date.to.toLocaleDateString()}</span>
                </td>
              </tr>

              <tr>
                <td>
                  <FontAwesomeIcon icon={faClock} />   Time
                </td>
                <td className="summ-info">
                  <span >{location.state.time}</span>
                </td>
              </tr>

              <tr>
                <td>
                  <FontAwesomeIcon icon={faPerson} />  Guests
                </td>
                <td className="summ-info">
                  <span>{location.state.numberOfGuests}</span>
                </td>
              </tr>
            </tbody>
          </table>




        </div>}
      </div>



    </div>
  );
};

export default CustomerInfo;
