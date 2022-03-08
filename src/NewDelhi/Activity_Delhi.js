import React from 'react';
import imgCard1 from "./NewDelhiImage1.jpg";
import imgCard2 from "./NewDelhiImage2.jpg";
import imgCard4 from "./NewDelhiImage6.jpg"
import imgCard6 from "./NewDelhiImage5.jpg"
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
        heading="The Red Fort "
        
        src={imgCard4}
        text="India Gate is an important site to visit when on your tour to Delhi. India Gate has its original name as All India War Memorial that was built in order to commemorate the 82000 soldiers of the Indian Army who lost their lives during the First World War happened from 1914 to 1921 as well as in the Third Anglo-Afghan War. "
      />
      <Card1
        heading="Humayuns Tomb" 
        text="Humayun's TombMaqbera e Humayun or the Humayun’s Tomb in Delhi is a major historical site in India and also one of the best places to visit in north Delhi. It is the tomb of the famous Mughal emperor of India Humayun. It was commissioned by the first wife of Humayun who was the chief consort as well, Empress Bega Begum in 1569-70."
        src={imgCard1}
        
      />
       <Card1
        heading="Qutab Minar "
        text="A valuable, protected structure of India is Qutub Minar, Delhi which has been considered to be a highly important historical attraction existing currently in India. It is a part of the Qutub Complex which was declared as a UNESCO World Heritage Site and it is also one of the famous places to visit in north Delhi."
       src={imgCard6}
        
      />
      <Card1
        heading="Bahai (Lotus) Temple"
        text="Famously known as the city of Ghosts, it was built by the Great Mughal Emperor. Fatehpur Sikri is a place worth visiting to discover how once the city could have been which has now turned into ruins. many a Agra packages include a trip to Fatehpur Sikri "
        src={imgCard2}
      />
     
    </div>
    
   </div>
  );
}