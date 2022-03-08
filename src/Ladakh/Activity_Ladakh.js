import React from 'react';
import imgCard1 from "./LadakhImage1.jpg";
import imgCard2 from "./LadakhImage2.jpg";
import imgCard4 from "./LadakhImage6.jpg"
import imgCard6 from "./LadakhImage7.jpg"
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
        heading="Zanskar Valley"
        
        src={imgCard4}
        text="The tributaries of the Zanskar River is one of the most famous places for river rafting in India. The Zanskar, Ladakh places of interest are surely among those must visit places in Leh Ladakh that you just cannot afford to miss while you’re in Ladakh!

"
      />
      <Card1
        heading="Pangong Tso Lake – An Awesome Camping Site"
        text="Remember the breathtakingly beautiful lake from 3 Idiots where Kareena Kapoor confessed her love? It’s Pangong Tso, a lake amongst the popular tourist attractions in Leh Ladakh is situated on the Changtang plateau in eastern Ladakh region. "
        src={imgCard1}
        
      />
       <Card1
        heading="Kargil – Haven For Adventure Seekers"
        text="A trip to Leh Ladakh is incomplete without a visit to Kargil that is one of the prime tourist places in Ladakh. This is the second largest town in Ladakh, situated on the banks of Indus River. It is a transit hub with roads leading to Leh, Padum (Zanskar) and Srinagar.Also, it is a haven for adventure enthusiasts as they can enjoy sports such as trekking and mountaineering. Make sure you pack sufficiently to enjoy these activities at one of the most famous places in Leh Ladakh!"
       src={imgCard6}
        
      />
      <Card1
        heading="Khardung-la Pass – Gateway To Valleys"
        text="Khardungla Pass is a gateway which leads to Nubra and Shyok valleys and one of the best tourist places in Ladakh. While this might not be a typical tourist attraction Leh Ladakh, it is definitely amongst the must-visit places to visit in and around Leh Ladakh for adventure junkies."
        src={imgCard2}
      />
     
    </div>
    
   </div>
  );
}