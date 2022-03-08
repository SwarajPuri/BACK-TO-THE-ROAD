import React from 'react';
import imgCard1 from "./shimla_shopping.jpeg";
import imgCard2 from "./besttimetovisit_shimla.jpeg";
import imgCard4 from "./Shimla_food.jpeg"
import imgCard6 from "./shimla_dance.jpeg"
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
          text="cuisine is dominated by red meat and wheat bread. Thick and rich gravy, with aromatic spices, is used in abundance as the base of many dishes. Dham is the traditional food served in marriages or other functions. Siddu, Patrode, Cheele and Babru are the authentic snack dishes of the state"
        />
        <Card1
          heading="ART AND MUSIC"
          text="Shimla or Simla as it is known is located in the lofty and mysterious ranges of Himalayas. It is the capital of the Himachal Pradesh. The best thing about this city is the fact even if it is one of the tourist destinations in India; it has still relatively untouched by the globalization and the commercialization which is prevalent among the other tourist destinations. It has still retained the old world charm and is very different from the other Indian states."
         src={imgCard6}
          
        />
        <Card1
          heading="SHOPPING"
          text="Shimla is especially famous for the intricately carved wooden items.So it is no wonder that an entire market that dedicated to selling of such goods here. Located on the tiny road adjoining The Ridge in Shimla, Lakkar Bazaar is one of the popular street shopping place famous for the wooden decorative paraphernalia."
          src={imgCard1}
        />
        <Card1
          heading="BEST TIME TO VISIT"
          text="March to June: This is a popular tourist season in Shimla as the weather is quite pleasant and perfect for outdoor activities. "
          src={imgCard2}
        />
       
      </div>
      
     </div>
    );
  }