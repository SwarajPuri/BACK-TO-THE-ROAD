import React from 'react';
import imgCard1 from "./kochi_shopping.jpeg";
import imgCard2 from "./besttimetovisit_kochi.jpeg";
import imgCard4 from "./kochi_food.jpeg"
import imgCard6 from "./kochi_dance.jpeg"
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
          text="Essentials such as Appam and Stew and delicacies such as Fish Molly, Fish Peera and more are found here. Some of the dishes that one must try in Kochi are Thoran, Banana Chips, Kaalan, Paachadi and Pootu, which is made from bananas and rice flour."
        />
        <Card1
          heading="ART AND MUSIC"
          text="The Kochi-Muziris Biennale is an international exhibition of contemporary art held in the city of Kochi in Kerala, India. It is the largest art exhibition in the country and the biggest contemporary art festival in Asia.The Kochi-Muziris Biennale is an initiative of the Kochi Biennale Foundation with support from the Government of Kerala."
         src={imgCard6}
          
        />
        <Card1
          heading="SHOPPING"
          text="Kochi is famous for things like silver and gold jewelry, silk sarees, handloom and handcrafted items. You can buy most of these things at reasonable prices in the famous street markets of Kochi, including the popular Spice Market and Marine Drive."
          src={imgCard1}
        />
        <Card1
          heading="BEST TIME TO VISIT"
          text="October to February: Winters are by far the best time to visit Cochin as the weather is very pleasant."
          src={imgCard2}
        />
       
      </div>
      
     </div>
    );
  }