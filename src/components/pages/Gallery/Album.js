import React, { useState, useEffect } from 'react';
import './index.css'; // we'll define styles here
import FadeInSection from '../../features/FadeInSection';

const Album = (props) => {


const [selectedImage, setSelectedImage] = useState(null);


// Close on ESC key
useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setSelectedImage(null);
    }
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, []);

return (
  <>
  <div className='album'>
  <h3>{props.album.title}</h3>
 
    <div className="album-container">
      

      
      {props.album.getImageSrcs.map((fn, index) => (
        <div key={index} className="album-item" onClick={() => setSelectedImage(fn())}>
          <FadeInSection> <img src={fn() } loading="lazy" title={props.album.alts[index]}  alt={`${props.album.alts[index-1]}`} /></FadeInSection>
        </div>
      ))}
    </div>
  </div>

    {/* Modal */}
    {selectedImage && (
      <div className="modal" onClick={() => setSelectedImage(null)}>
        <img src={selectedImage} alt="Full view" className="modal-image" />
      </div>
    )}
  </>
);
};

export default Album;
