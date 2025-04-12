import React from 'react';
import './VideoPlayer.css';
import vid from "../../assets/balandraGetaway.mp4"


const VideoPlayer = ({videoSrc}) => {
  return (
    <div className="  video-container">
      <video
 
        autoPlay
        muted
        loop
        playsInline
        className="video-element"
      >

<source src= { vid } type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
</video>
    </div>
  );
};

export default VideoPlayer;
