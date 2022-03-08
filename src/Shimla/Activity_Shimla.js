import React from 'react';
import imgCard1 from "./ShimlaImage1.jpg";
import imgCard2 from "./ShimlaImage2.jpg";
import imgCard4 from "./ShimlaImage6.jpg"
import imgCard6 from "./ShimlaImage7.jpg"
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
        heading="The Ridge"
        
        src={imgCard4}
        text="The Ridge may well be defined as the heart of Shimla in terms of location and tourist attractions. This Shimla tourist spot is actually a wide-open street that runs along the Mall Road from east to west and connects it to the famous Scandal Point"
      />
      <Card1
        heading="Jakhoo Hill and Temple"
        text="Covered in a blanket of alpine trees, Jakhoo Hill is the highest point of Shimla and offers scenic views of the snow-covered Shivalik Ranges as well as the sister town of Sanjauli. Situated at a height of 8000 ft. above the sea level, Jakhoo Hill is the location of an ancient Hanuman temple that boasts of having the world’s tallest statue (108 ft.) of this Hindu deity. "
        src={imgCard1}
        
      />
       <Card1
        heading="Mall Road"
        text="When it comes to places to visit in Shimla for couples, you can’t give a miss to the Mall Road. Otherwise, also, the place is a hip and happening location in this hill station and attracts visitors of all ages. With a plethora of cafes, restaurants, showrooms, departmental stores, and shops selling trinkets and exclusive handicraft works, this is one place where you can soak in the spirit of Shimla in all its touristy delights."
       src={imgCard6}
        
      />
      <Card1
        heading="Kurfi"
        text="A ride of about 40 minutes from the city center will bring you to Kufri, another must-visit place in the region. Located at an elevation of 8607 ft., this small hill station promises you panoramic views of the surrounding snow-capped mountains. But Kufri is not just about Shimla sightseeing. It is also an adventure hub that offers training and facilities for exciting winter sports like ice skating and skiing."
        src={imgCard2}
      />
     
    </div>
    
   </div>
  );
}