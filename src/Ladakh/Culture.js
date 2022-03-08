import React from 'react';
import imgCard1 from "./ladakh_shopping.jpeg";
import imgCard2 from "./besttimetovisit_ladakh.jpeg";
import imgCard4 from "./ladakh_food.jpeg"
import imgCard6 from "./ladakh_dance.jpeg"
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
          text="Leh is a multicuisine city serving Indian, Tibetan, Chinese and even Korean. The cuisine here exhibits tints of these foreign influences. Visitors must try out the local dishes which almost define the cuisine here such as Thukpa (noodle soup) Tsampa, known in Ladakhi as Ngamphe (roasted barley flour), and Skyu which is a heavy pasta dish with plenty of veggies as well as the very popular and delicious Momos which are steamed dumplings stuffed with vegetables or meat."

        />
        <Card1
          heading="ART AND MUSIC"
          text="The chham is mostly performed by monks in monasteries, which is often accompanied by traditional Tibetan instruments. The other famous dances in Ladakh are lharna, jabro, spao, shondol, chartses & mentok stanmo. The folk music of Ladakh, which is heavily influenced by Tibetan music, involves religious chanting."
         src={imgCard6}
          
        />
        <Card1
          heading="SHOPPING"
          text="The Main Bazaar Road is nothing less than a shopper's paradise. Located in the Old Town of Ladakh, the bazaar has a plethora of small shops offering popular shopping items like Pashmina shawls, jewellery, handicrafts and small souvenirs for you to take back home"
          src={imgCard1}
        />
        <Card1
          heading="BEST TIME TO VISIT"
          text="The best time for bike trips to Ladakh is from mid-May to October. Roads from Srinagar are thrown open from mid-May, whereas the Manali route is opened after May."
          src={imgCard2}
        />
       
      </div>
      
     </div>
    );
  }