import React from 'react';
import imgCard1 from "./AgraImage1.jpg";
import imgCard2 from "./AgraImage2.jpg";
import imgCard4 from "./AgraImage6.jpg"
import imgCard6 from "./AgraImage7.jpg"
import ShowMoreText from 'react-show-more-text';
// new for webcam , not part of original project;
import Webcam from "react-webcam";
 
function Card1(props) {
  return (
  
    <div>
     <br/>
    <ul>
      <div className="card" >
      <h3 className="card-header--title">{props.heading}</h3>
      <img className="card-image" src={props.src} style={{ height: '14rem' }} alt="" />
				
        <div className="card-container--content">

          
          <p class="card-text">
            <p align="left">
          <ShowMoreText
                /* Default options */
                lines={3}
                more='Show more'
                less='Show less'
                className='content-css'
                anchorClass='my-anchor-css-class'
                
                expanded={false}
                width={280}
            >
        
      {props.text.split("\\n").map(line => (<p>{line}</p>))}
      </ShowMoreText>
      </p>
      
       </p>
       
         </div>
       
      </div>
    </ul>
    </div>

  );
}

export default function CardList1(props) {
  return (
    <div>
    <div className="card-masonry">
      <Card1
        heading="TAJ MAHAL"
        
        src={imgCard4}
        text="The most famous of the monuments of Agra, India is the TajMahal TajMahal is a symbol of the devotion and dedication of love.\n TajMahal of Agra is a monument built by emperor Shah Jahan in the memory of her wife Mumtaz Mahal. TajMahal expresses the magnificence of Mughal architecture.\n The Taj has done wonders to Agra Tourism. Taj is a must in each one of the Agra packages offered by us. Agra to Jaipur is an interesting package option."
      />
      <Card1
        heading="FATEHPUR SIKRI"
        text="Famously known as the city of Ghosts, it was built by the Great Mughal Emperor.\n Fatehpur Sikri is a place worth visiting to discover how once the city could have been which has now turned into ruins. \nMany a Agra packages include a trip to Fatehpur Sikri also"
        src={imgCard1}
        
      />
       <Card1
        heading="SIKANDRA"
        text="The tomb of the great Mughal emperor Akbar is worth visiting. \nAkbar's tomb is a mixture of many architectural styles and completely different from earlier Mughal Buildings.\nVisit to this monuments of Agra is esential to make your Agra tour complete."
       src={imgCard6}
        
      />
      <Card1
        heading="AGRA FORT"
        text="Besides the TajMahal amongst the other famous monuments of Agra, India is the Agra Fort. \nAgra fort was built by Emperor Akbar. He was undoubtedly the Greatest Mughal emperor of India. The construction of Agra fort commenced in the 1565 and completed in 1571. \nBuilt with red sandstone Agra Fort is a mixture of the Islamic and Hindu styles of architecture. Agra Tourism would be incomplete without this monument.\n Most of the Agra packages offered by us take you to the Agra Fort. Agra to Jaipur is the usual choice in pacakges."
        src={imgCard2}
      />
     
    </div>
    <Webcam />
   </div>
  );
}