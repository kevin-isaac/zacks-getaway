import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Your reservation request has been sent!</h2>

      <p>We will get in touch with you via phone call in the coming days to plan and confirm your reservation.</p>
      If you have any concerns, questions, or wish to expedite your booking, you may call your hosts at:

      <span>   (868) 274-4566</span>
      <span>   (868) 373-9700</span>
      <br />
      <span>
        <button
          className="button-primary"

          onClick={() => navigate("/")}
        >
          OK
        </button>
      </span>
    </div>
  );
};

export default ConfirmedBooking;
