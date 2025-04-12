import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './PreviewCard.css';
 

const PreviewCard = ({ preview }) => {
  return (
    <article className="preview-card">
      <div className="preview-card-image">
        <img src={preview.image} alt={preview.name} />
      </div>
      <div className="preview-card-header">
        <h3>{preview.name}</h3>
        {/*<span>{preview.price}</span>*/}
      </div>
      <div className="preview-card-body-footer">
        <p>{preview.description}</p>
        <Link to={preview.link}>
          View More <FontAwesomeIcon icon={faEye} />
        </Link>
      </div>
    </article>
  );
};

export default PreviewCard;
