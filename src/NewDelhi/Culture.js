import React from 'react';
import imgCard1 from "./newdelhi_shopping.jpeg";
import imgCard2 from "./besttimetovisit_delhi.jpeg";
import imgCard4 from "./delhi_food.jpeg"
import imgCard6 from "./delhi_dance.jpeg"
import ShowMoreText from 'react-show-more-text';
 
function Card1(props) {
    return (
    
      <div>
        <br/>
      <ul>
        <div className="card" >
        <h3 className="card-header--title">{props.heading}</h3>
        <img className="card-image" style={{ height: '15rem' }}src={props.src} alt="" />
                  
          <div className="card-container--content">
  
            
            <p class="card-text">
              <p align="left">
            <ShowMoreText
                  
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
          heading="FOOD"
          
          src={imgCard4}
          text="Delhi has no specific food culture. Food culture in Delhi is a mixture of North Indian food, Mughlai Cuisines, Punjabi food and mouth watering street food. It also includes a variety of cuisines from different parts of India. Delhi is a hot spot for Continental, Thai, Mexican and Chinese food as well."
        />
        <Card1
          heading="ART AND MUSIC"
          text="Art and culture have gone side by side and they have a strong influence over the citizens of Delhi. The Mughals ruled Delhi for a long period and the art during that period was worth seeing. Akbar has been known for his work on arts and crafts."
         src={imgCard6}
          
        />
        <Card1
          heading="SHOPPING"
          text="Undoubtedly the most famous and oldest shopping market in Delhi since the Mughal era, Chandni Chowk is separated into various sections (Moti Bazaar, Chor Bazaar, Paranthe Wali Gali, Moti Bazaar etc), each of which has become renowned marketplaces."
          src={imgCard1}
        />
        <Card1
          heading="BEST TIME TO VISIT"
          text="The best time to visit Delhi is from October to March when the weather is at its best. During this period flowers are at their blooming best, the weather is pleasent and enjoyable to experience Incredible Delhi."
          src={imgCard2}
        />
       
      </div>
      
     </div>
    );
  }