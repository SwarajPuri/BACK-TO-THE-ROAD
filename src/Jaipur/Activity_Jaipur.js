import React from 'react';
import imgCard1 from "./JaipurImage1.jpg";
import imgCard2 from "./JaipurImage2.jpg";
import imgCard4 from "./JaipurImage6.jpg"
import imgCard6 from "./JaipurImage7.jpg"
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
        heading="City Palace"
        
        src={imgCard4}
        text="City Palace has stood at the heart of the Old City of Jaipur for nearly three centuries, shortly after Maharaja Sawai Jai Singh II decided to relocate his court from the city of Amber. Protected by huge guard walls, the fairy-tale-like structure is still the home of Jaipur's modern-day royal family, and is more extravagant and enchanting than you might imagine."
      />
      <Card1
        heading="Jantar Mantar"
        text="At first glance, Jantar Mantar may look to be nothing more than a bunch of larger-than-life abstract sculptures. But this is not an art gallery—it's a special collection of astronomical tools started by Rajput ruler Jai Singh II to measure the heavens nearly 300 years ago.
The observatory's massive sun dial, known as Samrat Yantra, is particularly striking. At 27 meters tall, it casts a huge shadow that accurately measures time down to two seconds
"
        src={imgCard1}
        
      />
       <Card1
        heading="Hawa Mahal"
        text="If you had any preconceived notions about how the buildings in Jaipur look, they probably came from Hawa Mahal (Palace of Breeze). It has all of the distinctive architectural features that appear in postcards of the city, from the salmon-pink, honeycombed facade, built to resemble the crown of Hindu god Krishna, to the geometric accents and rows of tiny windows."
       src={imgCard6}
        
      />
      <Card1
        heading="Amber Fort"
        text="Getting to Amber Fort typically involves a short uphill hike that's well worth the effort. It's decked out with intricate patterns of inlaid marble in nearly every color of the rainbow. The fort is laid out into four separate sections, each of which has a spectacular garden courtyard outside. While you'd never know it from above, you can actually explore the fort's underground tunnels, some of which have been restored."
        src={imgCard2}
      />
     
    </div>
    
   </div>
  );
}