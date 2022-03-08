
import React from 'react';
import imgCard1 from "./CalanguteBeach.jpg"
import imgCard2 from "./ChurchofOurLadyoftheImmaculateConception.png";
import imgCard3 from "./DudhsagarFalls.png"
import imgCard4 from "./MahadevTempleGoa.png"
import imgCard6 from "./BasilicadeBomJesus.png";
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
        heading="Dudhsagar Falls"
        
        src={imgCard4}
        text="The state is also home to Dudhsagar Falls, a spectacular four-tiered waterfall that towers some 310 meters above the earth. It's one of India's tallest waterfalls and a perpetually popular attraction for day trips around Goa and Karnataka."
      />
      <Card1
        heading="Tanshikar's Working Spice Farm"
        text="Tourists can see what the local spice scene is all about by touring Tanshikar's Working Spice Farm & Ecological Rest House. This agritourism attraction grows seven different spices: pepper, vanilla, nutmeg, turmeric, cardamom, and chili, using totally organic farming methods."
        src={imgCard1}
        
      />
       <Card1
        heading="Basilica de Bom Jesus"
        text="-  This Old Goa attraction dates back to the late 16th century and contains the remains of the St. Francis Xavier. The Apostle of the Indies co-founded the Society of Jesus religious order with friend St. Ignatius Loyola and spearheaded an extensive mission in India. The basilica has been a UNESCO World Heritage Site since 1999"
       src={imgCard6}
        
      />
      <Card1
        heading="Church of Our Lady of the Immaculate Conception"
        text="The pristine white church, which dates back to the early 17th century, stands atop a zig-zagging staircase that resembles the tiers of a wedding cake. Its perfectly symmetrical Portuguese Baroque architecture is a sight to behold. At night, twinkle lights make the church look like something out of a fairy tale."


        src={imgCard2}
      />
     
    </div>
    
   </div>
  );
}