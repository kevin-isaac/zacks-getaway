import React from 'react';
import Album from './Album';
import VideoPlayer from '../../features/VidPlayer';
function Gallery() {

  const albums = [
    {
      title: "",
      alts:[
        "Blue Bedroom, West Wing", "Teal Bedroom", "Orange Bedroom, East Wing","Dining Area", 
        "Living Area", "Bar Corner", "TV Room", "West Wing Bathroom", 
        "General Half Bath", "East Wing Bathroom", "West Wing Patio",  "East Wing Patio", 
        "Back Liming Area", "Disco Aesthetics", "Backyard Cookout", "Pool Area", 
        "Front Porch View", "Walkway", "Upper Floor Exterior", "External House View",
        "Road To Resort", "Road in Resort", "Nearby Beach", "Sunset in Balandra"

      ],
      getImageSrcs: [ () => require("../../../assets/blueroom.jpg"),() => require("../../../assets/tealroom.jpg"), () => require("../../../assets/orangeroom.jpg"),() => require("../../../assets/dining.jpg"), 
        () => require("../../../assets/seating.jpg"),  () => require("../../../assets/bar.jpg") ,  () => require("../../../assets/living.jpg"),() => require("../../../assets/bath2.jpg"), 
         () => require("../../../assets/bath3.jpg"), () => require("../../../assets/bath1.jpg"), () => require("../../../assets/patio.jpg"), () => require("../../../assets/patio2.jpg"),
         () => require("../../../assets/disco-lime.jpg"), () => require("../../../assets/disco2.jpg"), () => require("../../../assets/cookout.jpg"),  () => require("../../../assets/pool.jpg"), 
         
         
         () => require("../../../assets/front-view.jpg"),  () => require("../../../assets/lawn.jpg"),() => require("../../../assets/house-upper.jpg"),  () => require("../../../assets/property.jpg") , 
         () => require("../../../assets/road2.jpg"),() => require("../../../assets/road.jpg"),  () => require("../../../assets/beach1.jpg" ),() => require("../../../assets/beach-sunset.jpg") 
      
      ]
    },

 



    
  ]


  return (
    <div className="gallery">
      <h2 style={{ textAlign: 'center' }}>Media Gallery</h2>


      {albums && albums.map((album, index) => (
          <Album album={album} key={index}/>
      ))}
      
      <div className='gallery-vid'>
        <h2>House Tour</h2>
      <VideoPlayer videoSrc={"../../balandraGetaway1.mp4"}/>
      </div>
       
      

    
    </div>
  );
}

export default Gallery;
