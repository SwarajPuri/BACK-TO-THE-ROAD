import React from 'react';
import imgCard1 from "./KochiImage1.jpg";
import imgCard2 from "./KochiImage2.jpg";
import imgCard4 from "./KochiImage6.jpg";
import imgCard6 from "./KochiImage7.jpg";
import ShowMoreText from 'react-show-more-text';
 
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
        heading="Santa Cruz Basilica"
        
        src={imgCard4}
        text="One of the oldest and major attractions among Kochi tourist places, the Santa Cruz Basilica, was constructed by the Portuguese in 1505 and is one of the eight Basilicas in India. This now stands as the Cathedral of the Diocese of Cochin"
      />
      <Card1
        heading="Cherai Beach"
        text="One of the most visited beaches in the Kochi, Cherai Beach is an immaculate and serene location stretching up to a length of 10 km. The water body is isolated from the backwaters by a narrow strip of land and is an ideal spot to relax and see the Chinese fishing nets or the Cheena Vala. "
        src={imgCard1}
        
      />
       <Card1
        heading="Marine Drive"
        text="Marine Drive is one of the most popular hangout places in Kochi. It’s also one of the best places to visit in Kochi at night. Couples often drop in here for the famous boat rides, which take them to various other tourist destinations, such as Mattancherry Jewish Synagogue, etc."
        
      />
      <Card1
        heading="Mattancherry Palace"
        text="Marine Drive is one of the most popular hangout places in Kochi. It’s also one of the best places to visit in Kochi at night. Couples often drop in here for the famous boat rides, which take them to various other tourist destinations, such as Mattancherry Jewish Synagogue, etc."
        src={imgCard2}
      />
     
    </div>
    
   </div>
  );
}