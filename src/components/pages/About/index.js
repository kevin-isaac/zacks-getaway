import './index.css';
import React, { useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import minimap from "../../../assets/minimap.jpg";
import { useEffect } from 'react';
import FadeInSection from '../../features/FadeInSection';


const sections = [
  
  {
    id: "#section1",
    title: "What's Inside",
    content: 
    <>
    <p>Renters of the vacation home have full access to the <b>entire ground floor</b> of the property and surrounding outdoor area. The space includes:</p><br/>
      <ul>
        <li>
        3 bedrooms (Sleeping accommodations fit 12~14 persons)
        </li>
        <li>
        3 and a half bathrooms (2 en-suite)
        </li>
        <li>
        Kitchen and dining area with utensils and appliances
        </li>
        <li>
        Front and back patio areas
        </li>
        <li>
        Front and back yard spaces
        </li>
        <li>
         Free on-premises parking space for 3 vehicles
        </li>
      </ul>
    </>
    ,
    getImageSrc: () => require("../../../assets/tealroom.jpg"),
  },
  {
    id: "#section2",
    title: "Our Amenities",
    content: <>
    <p>Renters will have access to various amenities and facilities such as:</p><br/>
      <ul>
        <li>
        Air conditioned bedrooms
        </li>
        <li>
       Hot water
        </li>
        <li>
        Cooking utensils and appliances
        </li>
        <li>
        Outdoor cooking area
        </li>
        <li>
        Smart TV 
        </li>
        <li>
        Free Wifi
        </li>
        <li>
        Above ground pool
        </li>
        <li>
        Lounge/Disco entertainment room
        </li>
      </ul>
    </>
    ,

    getImageSrc: () => require("../../../assets/dining.jpg"),
  },
  {
    id: "#section3",
    title: "Where We Are",
    content: 
      <> <img alt="Mini Map Location" className ="about-image-small" src={minimap}/>
        <p>
        Zack's Getaway is located on the scenic Northeast coast of Trinidad, at the gated <b>Balandra Beach Resort, Rampanalgas,
          Balandra, Sangre Grande. </b> The two storey red vacation home is tucked away along the Anthurium Drive road within the resort. 
          The specific location of the property will be relayed to incoming tenants after booking.</p> <br/><p>You can refer to the general location of
          the resort via the map on the <Link to="/contact">Contact page.</Link> </p>
        
   
      </>
      
   
      
    ,
    getImageSrc: () => require("../../../assets/property.jpg"),
  },
  {
    id: "#section4",
    title: "Explore",
    content: <>

    <p>Beautiful secluded beaches are a short 5 minute drive away, with many roadside stores and shops to sample from.</p>
    <p>You can take a 40 minute trip up to Toco for your quintessential beach lime or river fishing. Then travel another 5 minutes to visit the Galera lighthouse viewing point to Tobago.</p>
    <br/>
    <p>Or structure your adventure by signing up with the local <Link target="_blank" to="https://natureseekers.org">Nature Seekers</Link>  group for a day of hikes or even turtle watching.</p>
    <br/>
    <p>A singular on-site maxi shuttle service may be available to guests if interest is expressed in advance of your stay.</p>
    </>
    ,

    getImageSrc: () => {return "https://natureseekers.org/wp-content/uploads/2023/08/rio-seco_35792452120_9b954aac18-1600x1034-1-1024x662.jpg"},
  },


  {
    id: "#section5",
    title: "House Rules",
    content: <>
 
      <ul>
        <li>
        Guests check-in between 3:00 pm – 7:00 pm
        </li>
        <li>
        Guests check out before 12:00 midday
        </li>
        <li>
        14 guests maximum
        </li>
        <li>
        No pets welcome
        </li>
        <li>
        All garbage must be taken out on check-out day
        </li>
        <li>
        No destruction or theft of property
        </li>
        <li>
        Pool users must shower before entering the pool
        </li>
        <li>
        Children <b>must</b> be supervised while using the pool 
        </li>
        <li>
        No indoor smoking
        </li>
      </ul>
    </>,
    getImageSrc: () => require("../../../assets/pool-fun.jpg"),
  },
  {
    id: "#section6",
    title: "Payments",
    content: <>  
    <p>
    Costs start at <b>TT$1400.00</b> per night. Potential guests will only have reservations booked <b>once a payment is made.</b> Guests have the following payment options: 
    </p><br/>
    <ol>
      <li>
      Pay the full amount for your intended stay, at least <b>one week</b> before the starting date of your stay. Payments can be received via cash, or via bank transfer.
      </li><br/>
      <li>
      Pay half the full amount at least <b>one week</b> before the starting date of your stay, and pay the remaining half <b>on</b> the starting date of your stay. Both payments can be received via cash, but only the first payment is eligible to be received via bank transfer.
      </li>
    </ol>
    <br/>
    <p>
    In order to receive a refund when cancelling your upcoming stay, the owners must be notified at least TWO weeks before the starting date of the stay.
    </p>
    
    
   
  </>,
    getImageSrc: () => require("../../../assets/owner1.jpg"),
  },
  {
    id: "#section7",
    title: "Booking",
    content: <>  
    <p>
    To book your stay, head to the <Link to="/bookings">Reservations</Link>  page and complete the form to indicate your willingness to book a specified period.
    We will receive your reservation request and will get in contact with you via phone call or Whatsapp to confirm your reservation and payment options.
    </p><br/>
    <p>
    Alternatively, you can call us directly through the contact numbers listed <Link to="/contact">here</Link> and we can confirm your reservation right away. 
    
    </p>
  </>,
    getImageSrc: () => require("../../../assets/disco2.jpg"),
  }
  
];
const About = () => {


  const location = useLocation();
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  useEffect(() => {
    const hash = location.hash;
    
    if (hash) {
      setTimeout(function(){
 
        for(var i=0;i<sectionRefs.length;i++){
          if(hash.includes(i+1) ){
            scrollToSection(sectionRefs[i]);
          }
        }

    }, 500);

      
    }// eslint-disable-next-line
  }, [location]); 

  


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <div className="about">
      
        {/* Sidebar */}
        <div
          className="sidebar"
        >
          <ul style={{ listStyleType: 'none', padding: 0 }}>

            {sections && sections.map((section, index) => (
              <li key={section.id} style={{padding: "0.2em" ,marginBottom:"1rem" }}>
                <a
                  key={index}
                  href={section.id}
                  style={{ color: '#fff', textDecoration: 'none' }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionRefs[index]);
                  }}
                >
                  {(index + 1) + `. ` + section.title}
                </a>
              </li>
            ))}

          </ul>
        </div>



        {sections && sections.map((section, index) => (
      


            <div className={ (index%2===0)? `container grid` : `container grid`}  key={index} ref={sectionRefs[index]} id={section.id}>
              
              <div className="content-right">
              {(index%2===0)&&
                <>
                <h2> {section.title}</h2>
           
                {section.content}
         
                </>
              }
                {(index%2!==0)&&<FadeInSection>
                 <img className=" about-image"  w={"100%"} src={ (section.getImageSrc())} alt={section.title} />
                 </FadeInSection>
              }

              </div>
              <div className="content-left" >
              {(index%2!==0)&&
                <>
                <h2> {section.title}</h2>
               
                {section.content}
                 
                </>
              }
                {(index%2===0)&&
                <FadeInSection>
                 <img alt={section.title} className=" about-image" w={"100%"} src={ (section.getImageSrc())} />
                 </FadeInSection>
              }
              </div>
            </div>

            ))}


        


      </div>



    </>
  );
};

export default About;
