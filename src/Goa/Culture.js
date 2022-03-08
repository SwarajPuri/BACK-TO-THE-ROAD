
import React from 'react';
import imgCard1 from "./goa_food.jpg"
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
          
          src={imgCard1}
          text="Seafood, coconut milk, rice, and local spices are main ingredients of Goan cuisine. Being a state with a tropical climate, the spices and flavours are intense. Use of kokum is another distinct feature. Goan food is considered incomplete without fish, Rice and fish-curry is the staple of most Goans."
        />
        <Card1
          heading="ART AND MUSIC"
          text="Goa's rich cultural heritage comprises of dances, folk songs, visual arts, music and folk tales rich in content and variety. Goan are born music lovers, most Goans can pluck at a guitar or pick out a tune on the piano. Music is in the blood of Goans since time immemorial, in almost every family you would find a pianist or a guitarist."
         src={imgCard4}
          
        />
        <Card1
          heading="Shopping"
          text="You can have an amazing shopping experience across Goa as its flea market and other local shops offer you everything at reasonable price. So, if you are planning to travel Goa and wondering which place you should go for shopping, then read the below article."
          src={imgCard6}
        />
        <Card1
          heading="BEST TIME TO VISIT"
          text="Mid-November to Mid-February: These are the best months to visit the party capital since the weather is pleasantly cool and comfortable. It's the perfect time to relax on the beaches amidst other tourists who make the most of these three months in Goa."
          src={imgCard2}
        />
       
      </div>
      
     </div>
    );
  }