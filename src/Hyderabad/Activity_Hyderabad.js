import React from 'react';
import imgCard1 from "./HyderabadImage1.jpg";
import imgCard2 from "./HyderabadImage2.jpg";
import imgCard4 from "./HyderabadImage6.jpg"
import imgCard6 from "./HyderabadImage7.jpg"
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
        heading="Golconda Fort"
        
        src={imgCard4}
        text="The Golconda Fort passed through three centuries of dynasties before falling in the hands of the Qutb Shahis in the 16th century who established it as their citadel atop a 120-m –high granite hill surrounded by massive ramparts and ringed by fortifications which are 11km in the perimeter. The Qutb Shahis moved to Hyderabad in 1591 but the fort remained in use as their citadel till 1687 when it was claimed by the Mughal emperor Aurangzeb."
      />
      <Card1
        heading=" The Charminar"
        text="One of the major attractions in Hyderabad, Charminar or literally the four towers is the monument defines the city. That was the idea too when it was built in 1591 by Mohammed Quli Qutb Shah as the beacon in the city after the end of an epidemic caused by the shortage of water in Golconda. Charminar was built as a mosque and the 56m –the high structure has four arches with four minarets atop each which gives it its name. Today the Charminar stands in the middle of Hyderabad’s main bazaar where traffic and crowds keep moving around the structure making it a very busy place"
        src={imgCard1}
        
      />
       <Card1
        heading="Hussain Sagar Lake"
        text="The twin cities of Hyderabad and Secunderabad have had this necklace adorning them since 1562. The necklace called Hussain Sagar Lake, one of the largest manmade lakes in India, is one of the best places to visit places to visit in Hyderabad for couples and even with family.  Sit on the shore line of the lake, savour delicacies from the food court on its periphery or enjoy a boat ride in the lake. The charm of the lake is highlighted by the Buddha statue that sits in the middle of the lake. This is one of the most accessible and relaxing places to visit in Hyderabad."
       src={imgCard6}
        
      />
      <Card1
        heading=" Ramoji Film City"
        text="-  A visit to the Hollywood might be on the cards for you but till that time you can visit the world’s largest integrated film city spread over 2000 acres. Indians love their cinema and anybody who loves cinema definitely comes here to see the magic that goes into making cinema. Apart from getting the tour of a film studio there are categories of entertainment defined for different ages, Kids Park, multi-cuisine restaurants and even a bird park"
        src={imgCard2}
      />
     
    </div>
    
   </div>
  );
}